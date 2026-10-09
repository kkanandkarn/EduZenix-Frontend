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

export const authApi = createApi({
  reducerPath: "autoTaggingApi",
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
      async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(clearAuthData());
        } catch {
          // Logout failed — the session is still live, so leave authData alone.
          console.log(
            "Logout failed, leaving authData in store. User may still be logged in.",
          );
        }
      },
    }),
    refresh: builder.mutation<void, void>({
      query: (body) => ({
        url: "/auth/refresh",
        method: "POST",
        body,
      }),
    }),
    googleLogin: builder.mutation<void, void>({
      query: (body) => ({
        url: "/auth/google/login",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useProfileDetailsQuery,
  useLogoutMutation,
  useRefreshMutation,
  useGoogleLoginMutation,
} = authApi;
