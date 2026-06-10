export interface TableState {
  search: string;
  searchColumn: string;
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
  | "SingleSelect";
export type TableFilters = {
  key: string;
  dataType: TableFiltersDataType;
  label: string;
  options?: FilterOption[];
};
