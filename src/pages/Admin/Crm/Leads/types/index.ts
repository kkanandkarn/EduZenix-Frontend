export type { TableFilters, TableState } from "../../../../../types";
export interface LeadsState {
  search: string;
  sortBy: string;
  sortOrder: string;
}
export interface FilterRange {
  gte?: string;
  lte?: string;
}
export interface LeadsFilters {
  consultantRole: string[];
  assignedLeads: FilterRange | null;
  pendingLeads: FilterRange | null;
  completedLeads: FilterRange | null;
}
