import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithAuth } from "./baseQuery";
import { resetAuthData } from "../features/auth/authSlice";
import { authApi } from "./authApi";
import type {
  InitiateMfaApiResonse,
  MfaFormData,
  VerifyMfaApiResponse,
} from "../../pages/Auth/Mfa/type";

export const mfaApi = createApi({
  reducerPath: "mfaApi",
  baseQuery: baseQueryWithAuth,

  tagTypes: ["mfaSetup"],

  keepUnusedDataFor: 300,

  endpoints: (builder) => ({
    initiateMfaSetup: builder.query<InitiateMfaApiResonse, void>({
      query: () => {
        const endPoint = "/mfa/initiate-setup";
        return endPoint;
      },
      providesTags: ["mfaSetup"],
    }),
    verifyMfaSetup: builder.mutation<VerifyMfaApiResponse, MfaFormData>({
      query: (body) => ({
        url: "/mfa/verify-setup",
        method: "POST",
        body,
      }),
      async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;

          if (data?.status === "success") {
            // Drop the cached profile and authData so the dashboard refetches
            // profile details with the updated MFA state.
            dispatch(authApi.util.invalidateTags(["ProfileDetails"]));
            dispatch(resetAuthData());
          }
        } catch {
          // Request failed — leave authData untouched.
        }
      },
    }),
  }),
});

export const { useInitiateMfaSetupQuery, useVerifyMfaSetupMutation } = mfaApi;
