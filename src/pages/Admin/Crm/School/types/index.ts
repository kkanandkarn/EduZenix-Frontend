export type { TableFilters, TableState } from "../../types";
export type { SearchColumn } from "../../../../../types";
export type { ModalTypes } from "../../types";
export type SchoolStatus =
  | "Pending"
  | "Requested To Admin"
  | "Approved"
  | "Rejected";

export interface SchoolsFilter {
  stateName: string | null;
  districtName: string | null;
  blockName: string | null;
  villageName: string | null;
  schMgmtDesc: string | null;
  schCatDesc: string | null;
  schLocDesc: string | null;
  schTypeDesc: string | null;
  schMgmtDescSt: string | null;
  lgdvillName: string | null;
  lgdvillpanchayatName: string | null;
  lgdblockName: string | null;
}
export interface SchoolDetails {
  id: string;
  udiseschCode: string;
  schoolName: string;
  stateName: string;
  districtName: string;
  blockName: string;
  clusterName: string;
  villageName: string;
  schMgmtDesc: string;
  schCatDesc: string;
  schLocDesc: string;
  schTypeDesc: string;
  schMgmtDescSt: string;
  address: string;
  email: string;
  lgdvillName: string;
  lgdvillpanchayatName: string;
  lgdblockName: string;
  phone: string | null;
  status: SchoolStatus;
  author?: SchoolAuthorDetails;
}
export interface SchoolAuthorDetails {
  createdBy: string;
  updatedAt: string;
  remarks: string;
}
