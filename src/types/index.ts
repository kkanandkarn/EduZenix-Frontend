import type { RoleType, Status, TenantType, UserType } from "./enum";

export interface TableState {
  search: string;
  searchColumn?: string;
  sortColumn: string;
  sortOrder: "asc" | "desc";
  pageNo: number;
  pageSize: number;
}
export interface FilterOption {
  value: string | number;
  label: string;
}
export type TableFiltersDataType =
  | "MultiSelect"
  | "NumericRange"
  | "SingleSelect"
  | "DateRange";
export type TableFilters = {
  key: string;
  dataType: TableFiltersDataType;
  label: string;
  options?: FilterOption[];
};
export interface FilterRange {
  gte?: string;
  lte?: string;
}
export interface TableFilterOptions {
  value: string | number;
  label: string;
}
export type SearchColumn = {
  key: string;
  label: string;
  default?: boolean;
};

export interface AuthState {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  roleId: string;
  requireMfa: boolean;
  mfaCompleted: boolean;
  tenantId: string;
  userType: UserType;
  status: Status;
  createdBy: string | null;
  updatedBy: string | null;
  lastLoginAt: string | null;
  createdAt: string;
  updatedAt: string;
  role: {
    id: string;
    roleName: string;
    roleDescription: string;
    totalUsers: number;
    roleType: RoleType;
    requireMfa: boolean;
    tenantId: string;
    status: Status;
    createdBy: string | null;
    updatedBy: string | null;
    createdAt: string;
    updatedAt: string;
  };
  tenant: {
    id: string;
    tenantName: string;
    tenantType: TenantType;
    pocName: string;
    pocEmail: string | null;
    pocContact: string | null;
    packageStatus: string | null;
    packageId: string | null;
    packageStartAt: string | null;
    packageExpiredAt: string | null;
    status: Status;
    createdBy: string | null;
    updatedBy: string | null;
    createdAt: string;
    updatedAt: string;
  };
  permissions: Array<{
    roleId: string;
    permissionId: string;
    permissionName: string;
    parent: string;
  }>;
}
export interface ApiError {
  status: number;
  data: {
    success: boolean;
    message: string;
  };
}
export type ApiStatus = "success" | "failed";
