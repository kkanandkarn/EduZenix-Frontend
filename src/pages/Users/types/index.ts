export type { TableFilters, TableState, SearchColumn } from "../../../types";
export type UserStatus = "ACTIVE" | "HOLD" | "SUSPENDED";
export interface InviteUserState {
  id?: string;
  name: string;
  email: string;
  role: string;
  mfaRequired: boolean;
  status: UserStatus;
}
export interface InviteUserStateErrors {
  name: string;
  email: string;
  role: string;
  mfaRequired: string;
  status: string;
}
