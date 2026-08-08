import type { ReactNode } from "react";
import type { GridColDef, GridValidRowModel } from "@mui/x-data-grid";
import type { TableFilters, TableState } from "../../types";
import type { SearchColumn } from "../ui/type";

/** Keys of TAB_COUNT_COLORS. */
export type TableTabColor = "default" | "success" | "warning" | "error" | "info";

export interface TableTab {
  value: string;
  label: string;
  /** Rendered as a pill next to the label. */
  count?: number;
  /** Pill colour, defaults to a neutral grey. */
  color?: TableTabColor;
}

/** A column the Sort button can order by. `key` is reported back as `sortColumn`. */
export interface SortColumn {
  key: string;
  label: string;
}

/** Everything the table renders above the grid: tabs plus the toolbar row. */
export interface TableToolbarConfig {
  tabs?: TableTab[];
  activeTab?: string;
  onTabChange?: (value: string) => void;

  /** Defaults to true when `searchColumns` is given. */
  showSearch?: boolean;
  searchPlaceholder?: string;
  searchColumns?: SearchColumn[];

  /** Enables the Sort button. */
  sortColumns?: SortColumn[];

  /**
   * Enables the Filter button and drives the drawer's fields and the chip labels.
   */
  columnFilters?: TableFilters[];
  /** The committed filter state: highlights the Filter button and fills the chips. */
  appliedFilters?: object;
  /**
   * Called with the drawer's values when the user presses Apply. The drawer edits
   * a draft, so nothing reaches the page state until then.
   */
  handleApplyFilter?: (filters: object) => void;
  /** Clears a single filter key; without it the chips have no remove icon. */
  onRemoveFilter?: (key: string) => void;
  /** Resets every filter, from the drawer's "Clear All" or the chips' "Clear all". */
  handleResetFilters?: () => void;

  /** Column visibility button. Shown whenever the toolbar is. */
  showColumns?: boolean;
  onExport?: () => void;
  /** Extra controls appended to the right of the toolbar. */
  actions?: ReactNode;
}

export interface AppTableProps<T extends GridValidRowModel>
  extends TableToolbarConfig {
  rows: T[];
  columns: GridColDef<T>[];
  total: number;
  tableState: TableState;
  handleChange: (name: keyof TableState, value: string | number) => void;
  loading?: boolean;
  /** Noun for the footer count: "users" → "Showing 1–10 of 15 users". */
  rowsLabel?: string;
  pageSizeOptions?: number[];
  /**
   * "client" (default) lets the grid slice `rows` itself. Switch to "server"
   * once `rows` only holds the current page and `total` comes from the API.
   */
  paginationMode?: "client" | "server";
}
