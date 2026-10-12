import type { ApiStatus, AuthState } from "../../../../types";

export interface LoginFormData {
  email: string;
  password: string;
}
export interface SendOtpFormData {
  email: string;
}
export interface VerifyOtpFormData {
  email: string;
  otp: string;
}

export type LoginType = "password" | "otp";
export type OtpStep = "idle" | "sent";
export interface LoginTypeButtonProps {
  loginType: LoginType;
  setLoginType: (loginType: LoginType) => void;
}
export interface TabsProps {
  value: string;
  tabs: TabsPropsTabs[];
  onChange: (event: React.SyntheticEvent, value: string) => void;
}
export interface TabsPropsTabs {
  value: string;
  label: string;
}

export interface LoginApiResponse {
  status: ApiStatus;
  data: AuthState;
  message: string;
}
export interface ProfileApiRespose {
  status: ApiStatus;
  data: AuthState;
}
export interface SendOtpRequest {
  otpReason: string;
  otpType: string;
  otpIdentifier: string;
}
export interface OtpResponse {
  status: ApiStatus;
  data: {
    message: string;
  };
  message: string;
}
export interface VerifyOtpRequest {
  otpReason: string;
  otpType: string;
  otpIdentifier: string;
  otp: string;
}
export type VerifyOtpResponse = OtpResponse | LoginApiResponse;
