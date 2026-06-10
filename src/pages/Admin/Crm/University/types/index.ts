export type { TableFilters, TableState } from "../../../../../types";
export type { SearchColumn } from "../../../../../components/ui/type";
export interface UniversityFilters {
  state: string[] | null;
  district: string[] | null;
  establishedYear: FilterRange | null;
  location: string | null;
}
export interface FilterRange {
  gte?: string;
  lte?: string;
}
export type UniversityLocation = "Urban" | "Rural";
export type UniversityStatus =
  | "Pending"
  | "Requested To Admin"
  | "Approved"
  | "Rejected";
export interface UniversityDetails {
  id: string;
  aisheCode: string;
  name: string;
  state: string;
  district: string;
  website: string | null;
  yearOfEstablishment: number | null;
  location: UniversityLocation;
  email: string | null;
  contact: string | null;
  status: UniversityStatus;
}
export type ModalTypes = "VIEW" | "ONBOARDING_LINK" | "ONBOARDING_EMAIL";
