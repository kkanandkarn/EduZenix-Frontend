import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query";
import { Mutex } from "async-mutex";
import { UNAUTHORIZED } from "../../utils/status-codes";

/* 
Mutex ensures only one token refresh happens at a time.
If 3 requests all get 401, only the first one refreshes —
the other two wait and then retry with the new cookie. 
*/

const mutex = new Mutex();
/*
Always same-origin. A frontend dev working without a local backend does NOT point
this at stage directly -- a cross-origin call would need CORS on stage and would
not carry the SameSite auth cookies anyway. They set `API_PROXY_TARGET` instead,
which makes Next.js rewrite `/api/*` to stage server-side (see next.config.ts).
*/
const rawBaseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_URL,
  credentials: "include",
});

// 401 types a token refresh can't fix — go straight to login.
const LOGIN_REDIRECT_ERROR_TYPES = new Set([
  "uninstallShopError",
  "requireLoginError",
]);

const redirectToLogin = () => {
  window.location.href = "/";
};

export const baseQueryWithAuth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  /*
  If a token refresh is already in progress (triggered by another request),
  wait here until it finishes before firing this request.
  This way the request goes out with the fresh cookie, avoiding a 401 entirely.
  */

  await mutex.waitForUnlock();
  let result = await rawBaseQuery(args, api, extraOptions);

  // If the request succeeded or failed for a non-auth reason, return as-is.
  if (result.error?.status !== UNAUTHORIZED) return result;

  /*
  Distinguish between two 401 scenarios:
  1. tokenExpiredError → access token expired, attempt a silent refresh
  2. anything else (no session, banned, etc.) → send to login immediately
  */
  const errorType = (result.error?.data as { type?: string })?.type;

  /*
  The app was uninstalled from the shop, or the session has to be re-established through
  OAuth (requireLoginError) — the server already cleared the auth cookies. There is nothing
  to refresh, so leave the dashboard now rather than letting every query fail one by one.
  */
  console.log("ERROR TYPE: ", errorType);
  if (errorType && LOGIN_REDIRECT_ERROR_TYPES.has(errorType)) {
    redirectToLogin();
    return result;
  }

  const isTokenExpired = errorType === "tokenExpiredError";

  if (!isTokenExpired && result.error?.status === UNAUTHORIZED) return result;

  /*
  Another request already acquired the lock and is mid-refresh.
  Wait for it to finish, then retry with the new cookie it set — no need to refresh again.
  */
  if (mutex.isLocked()) {
    await mutex.waitForUnlock();
    return rawBaseQuery(args, api, extraOptions);
  }

  // This request is first — acquire the lock to block all other concurrent requests from also triggering a refresh.
  const release = await mutex.acquire();

  try {
    const refreshResult = await rawBaseQuery(
      { url: "/auth/refresh", method: "POST" },
      api,
      extraOptions,
    );

    if (refreshResult.data) {
      // Refresh succeeded — the server has set a new auth cookie. Retry the original request
      result = await rawBaseQuery(args, api, extraOptions);
    } else {
      // Refresh failed (e.g. refresh token also expired) — session is unrecoverable.
      redirectToLogin();
    }
  } finally {
    /*
    Always release the lock, even if refresh or retry threw an error.
    This unblocks any requests waiting in the mutex.isLocked() check above.
  */
    release();
  }

  return result;
};
