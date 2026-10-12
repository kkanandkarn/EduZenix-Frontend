import {
  createApi,
  type FetchBaseQueryMeta,
} from "@reduxjs/toolkit/query/react";
import { baseQueryWithAuth } from "./baseQuery";
import type {
  LoginApiResponse,
  LoginFormData,
  ProfileApiRespose,
} from "../../pages/Auth/Login/type";
import { clearAuthData, setAuthData } from "../features/auth/authSlice";
import { OK } from "../../utils/status-codes";
import type { AppDispatch } from "..";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: baseQueryWithAuth,

  tagTypes: ["ProfileDetails"],

  keepUnusedDataFor: 300,

  endpoints: (builder) => ({
    profileDetails: builder.query<ProfileApiRespose, void>({
      query: () => {
        const endPoint = "/auth/profile-details";
        return endPoint;
      },
      providesTags: ["ProfileDetails"],
      async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
        try {
          const { data, meta } = await queryFulfilled;
          const response = (meta as FetchBaseQueryMeta | undefined)?.response;

          if (response?.status === OK && data?.data) {
            dispatch(setAuthData(data.data));
          }
        } catch {
          // Request failed — leave authData untouched.
        }
      },
    }),
    login: builder.mutation<LoginApiResponse, LoginFormData>({
      query: (body) => ({
        url: "/auth/login",
        method: "POST",
        body,
      }),

      invalidatesTags: ["ProfileDetails"],
      async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
        try {
          const { data, meta } = await queryFulfilled;
          const response = (meta as FetchBaseQueryMeta | undefined)?.response;

          if (response?.status === OK && data?.data) {
            dispatch(setAuthData(data.data));
          }
        } catch {
          // Request failed — leave authData untouched.
        }
      },
    }),
    logout: builder.mutation<void, void>({
      query: (body) => ({
        url: "/auth/logout",
        method: "POST",
        body,
      }),
    }),
    refresh: builder.mutation<void, void>({
      query: (body) => ({
        url: "/auth/refresh",
        method: "POST",
        body,
      }),
    }),
    googleLogin: builder.query<void, void>({
      query: () => {
        const endPoint = "/auth/google/login";
        return endPoint;
      },
    }),
  }),
});

/*
Wipes the logged-out user's state: authData plus every cached RTK Query entry
(so a stale profile isn't served to the next login). clearAuthData also sets
isLoggedOut, which keeps DashboardLayoutWrapper from refetching the profile.
*/
export const clearSession = () => (dispatch: AppDispatch) => {
  dispatch(clearAuthData());
  dispatch(authApi.util.resetApiState());
};

export const {
  useLoginMutation,
  useProfileDetailsQuery,
  useLogoutMutation,
  useRefreshMutation,
  useLazyGoogleLoginQuery,
} = authApi;
