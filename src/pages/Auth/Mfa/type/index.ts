import type { ApiStatus } from "../../../../types";

export type MfaStep = "mfaApps" | "mfaSetup" | "mfaVerification";
export interface MfaData {
  secret: string;
  qrCode: string;
}
export interface InitiateMfaApiResonse {
  status: ApiStatus;
  data: MfaData;
  message: string;
}
export interface MfaFormData {
  code: string;
}
export interface VerifyMfaApiResponse {
  status: ApiStatus;
  data: {
    message: string;
  };
  message: string;
}
