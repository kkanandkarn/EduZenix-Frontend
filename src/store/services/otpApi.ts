import {
  createApi,
  type FetchBaseQueryMeta,
} from "@reduxjs/toolkit/query/react";
import { baseQueryWithAuth } from "./baseQuery";
import type {
  LoginApiResponse,
  OtpResponse,
  SendOtpRequest,
  VerifyOtpRequest,
  VerifyOtpResponse,
} from "../../pages/Auth/Login/type";
import { setAuthData } from "../features/auth/authSlice";
import { OK } from "../../utils/status-codes";
import { authApi } from "./authApi";

export const otpApi = createApi({
  reducerPath: "otpApi",
  baseQuery: baseQueryWithAuth,

  endpoints: (builder) => ({
    sendOtp: builder.mutation<OtpResponse, SendOtpRequest>({
      query: (body) => ({
        url: "/otp/send-otp",
        method: "POST",
        body,
      }),
    }),
    verifyOtp: builder.mutation<VerifyOtpResponse, VerifyOtpRequest>({
      query: (body) => ({
        url: "/otp/verify-otp",
        method: "POST",
        body,
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        if (arg.otpReason !== "LOGIN") return;
        try {
          const { data, meta } = await queryFulfilled;
          const response = (meta as FetchBaseQueryMeta | undefined)?.response;

          if (response?.status === OK && data?.data) {
            dispatch(setAuthData((data as LoginApiResponse).data));
            dispatch(authApi.util.invalidateTags(["ProfileDetails"]));
          }
        } catch {
          // Request failed — leave authData untouched.
        }
      },
    }),
  }),
});

export const { useSendOtpMutation, useVerifyOtpMutation } = otpApi;
