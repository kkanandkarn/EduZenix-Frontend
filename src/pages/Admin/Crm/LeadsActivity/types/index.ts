export type { TableFilters, TableState } from "../../../../../types";
export interface LeadActivityFilters {
  institutionType: string;
  state: string;
  district: string;
  status: string;
  rating: number;
  date: FilterRange | null;
}
export interface FilterRange {
  gte?: string;
  lte?: string;
}
