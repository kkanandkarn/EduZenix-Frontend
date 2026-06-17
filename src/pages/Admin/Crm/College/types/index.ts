export type { TableFilters, TableState } from "../../../../../types";
export interface CollegeFilters {
  state: string[] | null;
  district: string[] | null;
  establishedYear: FilterRange | null;
  location: Location | null;
  collegeType: CollegeType | null;
  management: Management | null;
  universityType: UniversityType | null;
}
export interface FilterRange {
  gte?: string;
  lte?: string;
}

export type Location = "Urban" | "Rural";
export type CollegeType =
  | "Affiliated College"
  | "Constituent / University College"
  | "PG Center / Off-Campus Center"
  | "Autonomous College"
  | "Recognized Center";

export type Management =
  | "State Government"
  | "Central Government"
  | "Private Un-Aided"
  | "Private Aided (Government Aided)"
  | "University"
  | "Local Body";

export type UniversityType =
  | "Central University"
  | "State Public University"
  | "Deemed University-Private"
  | "Institute under State Legislature Act"
  | "Institute of National Importance"
  | "Deemed University-Government Aided"
  | "Deemed University-Government"
  | "State Private University";
export type ModalTypes = "VIEW" | "ONBOARDING_LINK" | "ONBOARDING_EMAIL";

export type CollegeLocation = "Urban" | "Rural";
export type CollegeStatus =
  | "Pending"
  | "Requested To Admin"
  | "Approved"
  | "Rejected";
export interface CollegeDetails {
  id: string;
  aisheCode: string;
  name: string;
  state: string;
  district: string;
  website: string | null;
  yearOfEstablishment: number | null;
  location: CollegeLocation;
  collegeType: CollegeType;
  management: Management;
  universityName: string;
  universityType: UniversityType;
  email: string | null;
  contact: string | null;
  status: CollegeStatus;
  address: string;
  author?: CollegeAuthorDetails;
}
export interface CollegeAuthorDetails {
  createdBy: string;
  updatedAt: string;
  remarks: string;
}
