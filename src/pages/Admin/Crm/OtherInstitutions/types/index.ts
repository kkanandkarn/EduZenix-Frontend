export type { TableFilters, TableState } from "../../types";
export type { SearchColumn } from "../../../../../types";
export type { ModalTypes } from "../../types";
export type Management =
  | "Central Government"
  | "Private Un-Aided"
  | "State Government"
  | "Private Aided (Government Aided)"
  | "University"
  | "Local Body";

export type StandAloneType =
  | "Technical/Polytechnic"
  | "Teacher Training"
  | "Paramedical"
  | "Nursing"
  | "Institutes under Ministries"
  | "PGDM Institutes"
  | "Institutions under Rehabilitation Council of India"
  | "Hotel Management and Catering"
  | "Pharmacy Institutions";

export type InstitutionLocation = "Urban" | "Rural";
export interface OtherInstitutionsFilters {
  state: string[] | null;
  district: string[] | null;
  establishedYear: FilterRange | null;
  location: InstitutionLocation | null;
  management: Management | null;
  standAloneType: StandAloneType | null;
}
export interface FilterRange {
  gte?: string;
  lte?: string;
}

export type InstitutionStatus =
  | "Pending"
  | "Requested To Admin"
  | "Approved"
  | "Rejected";

export interface InstitutionDetails {
  id: string;
  aisheCode: string;
  name: string;
  state: string;
  district: string;
  website: string | null;
  yearOfEstablishment: number | null;
  location: InstitutionLocation;
  standAloneType: StandAloneType;
  management: Management;
  email: string | null;
  contact: string | null;
  status: InstitutionStatus;
  address: string | null;
  author?: InstitutionAuthorDetails;
}
export interface InstitutionAuthorDetails {
  createdBy: string;
  updatedAt: string;
  remarks: string;
}
