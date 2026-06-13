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
