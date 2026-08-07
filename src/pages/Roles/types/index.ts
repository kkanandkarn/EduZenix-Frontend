export type { TableFilters, TableState, SearchColumn } from "../../../types";
export type RoleStatus = "ACTIVE" | "HOLD";
export interface RolesFormState {
  roleName: string;
  status: RoleStatus;
}
