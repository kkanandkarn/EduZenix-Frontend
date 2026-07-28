export type { TableFilters, TableState, SearchColumn } from "../../../../types";
export interface TenantsFilters {
  type: string | null;
  status: string | null;
  expireDate: string | null;
}
export type TenantType =
  | "SCHOOL"
  | "COLLEGE"
  | "UNIVERSITY"
  | "OTHER_INSTITUTION";

export type BillingCycle = "MONTHLY" | "QUARTERLY" | "YEARLY";

export interface AddTenantInput {
  tenantImage: string;
  tenantName: string;
  tenantType: TenantType;
  pocName: string;
  pocEmail: string;
  billingCycle: BillingCycle;
}
export interface AddTenantInputError {
  tenantImage: string;
  tenantName: string;
  tenantType: string;
  pocName: string;
  pocEmail: string;
  billingCycle: string;
}
