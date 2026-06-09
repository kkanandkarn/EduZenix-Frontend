export type { TableFilters, TableState } from "../../../../../types/Table";
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
