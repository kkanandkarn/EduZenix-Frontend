import type { SxProps, Theme } from "@mui/material";
import {
  TABLE_BORDER,
  TABLE_GUTTER,
  TABLE_HEADER_BG,
  TABLE_HEADER_TEXT,
  TABLE_RADIUS,
  TABLE_ROW_BORDER,
  TABLE_ROW_HOVER_BG,
  TABLE_SURFACE,
  TABLE_TAB_HEIGHT,
  TABLE_TEXT,
  TABLE_TEXT_MUTED,
  TAB_ACTIVE_TEXT,
  TAB_INACTIVE_TEXT,
  TOOLBAR_CONTROL_HEIGHT,
} from "./constants";

/** The single card that wraps tabs, toolbar, grid and footer. */
export const tableCardSx: SxProps<Theme> = {
  backgroundColor: TABLE_SURFACE,
  border: `1px solid ${TABLE_BORDER}`,
  borderRadius: TABLE_RADIUS,
  overflow: "hidden",
};

export const tabsRowSx: SxProps<Theme> = {
  px: TABLE_GUTTER,
  borderBottom: `1px solid ${TABLE_BORDER}`,
};

export const tabsSx: SxProps<Theme> = {
  minHeight: TABLE_TAB_HEIGHT,
  "& .MuiTabs-indicator": {
    height: 2,
    borderRadius: 0,
    backgroundColor: TAB_ACTIVE_TEXT,
  },
};

export const tabSx: SxProps<Theme> = {
  minHeight: TABLE_TAB_HEIGHT,
  minWidth: 0,
  px: 0,
  mr: 3.5,
  textTransform: "none",
  fontSize: "0.8125rem",
  fontWeight: 500,
  color: TAB_INACTIVE_TEXT,
  "&.Mui-selected": {
    color: TAB_ACTIVE_TEXT,
    fontWeight: 600,
  },
};

export const toolbarRowSx: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 2,
  px: TABLE_GUTTER,
  py: 1.5,
  borderBottom: `1px solid ${TABLE_BORDER}`,
};

/**
 * Text buttons on the right of the toolbar: Filter, Sort, Columns, Export.
 * `active` tints the button while its selection is applied (e.g. a live sort).
 */
export const toolbarButtonSx = (active = false): SxProps<Theme> => ({
  height: TOOLBAR_CONTROL_HEIGHT,
  px: 1.25,
  borderRadius: "8px",
  textTransform: "none",
  fontSize: "0.8125rem",
  fontWeight: 500,
  color: active ? "var(--blue-600)" : "var(--slate-700)",
  backgroundColor: active ? "var(--blue-50)" : "transparent",
  "& .MuiButton-startIcon": { mr: 0.75 },
  "& .MuiSvgIcon-root": { fontSize: "1.125rem" },
  "&:hover": {
    backgroundColor: active ? "var(--blue-50)" : TABLE_HEADER_BG,
  },
  border: "1px solid var(--gray-200)",
});

/** Row of chips summarising the applied filters and sort. */
export const chipsRowSx: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
  gap: 1,
  px: TABLE_GUTTER,
  py: 1.25,
  borderBottom: `1px solid ${TABLE_BORDER}`,
  backgroundColor: TABLE_HEADER_BG,
};

export const chipsLabelSx: SxProps<Theme> = {
  fontSize: "0.6875rem",
  fontWeight: 600,
  letterSpacing: "0.06em",
  textTransform: "uppercase",
  color: TABLE_HEADER_TEXT,
  mr: 0.5,
};

export const activeChipSx: SxProps<Theme> = {
  height: 26,
  borderRadius: "6px",
  backgroundColor: TABLE_SURFACE,
  border: `1px solid ${TABLE_BORDER}`,
  fontSize: "0.75rem",
  color: TABLE_TEXT,
  "& .MuiChip-label": { px: 1 },
  "& .MuiChip-deleteIcon": {
    fontSize: "0.9375rem",
    color: TABLE_TEXT_MUTED,
    "&:hover": { color: "var(--red-600)" },
  },
};

export const clearAllButtonSx: SxProps<Theme> = {
  ml: "auto",
  minWidth: 0,
  px: 1,
  height: 26,
  borderRadius: "6px",
  textTransform: "none",
  fontSize: "0.75rem",
  fontWeight: 600,
  color: "var(--blue-600)",
  "&:hover": { backgroundColor: "var(--blue-50)" },
};

export const searchWrapperSx: SxProps<Theme> = {
  width: { xs: "100%", sm: 340 },
  flexShrink: 0,
};

/** Popover surface shared by the Sort and Columns menus. */
export const menuPaperSx: SxProps<Theme> = {
  mt: 0.5,
  minWidth: 220,
  borderRadius: "10px",
  border: `1px solid ${TABLE_BORDER}`,
  boxShadow: "0 8px 24px rgba(15, 23, 42, 0.08)",
};

export const menuSectionLabelSx: SxProps<Theme> = {
  px: 1.5,
  pt: 1.25,
  pb: 0.5,
  fontSize: "0.6875rem",
  fontWeight: 600,
  letterSpacing: "0.06em",
  textTransform: "uppercase",
  color: TABLE_HEADER_TEXT,
};

export const footerRowSx: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 2,
  px: TABLE_GUTTER,
  py: 1.5,
  borderTop: `1px solid ${TABLE_BORDER}`,
};

export const pageSizeSelectSx: SxProps<Theme> = {
  height: 34,
  borderRadius: "8px",
  fontSize: "0.8125rem",
  color: TABLE_TEXT,
  "& .MuiOutlinedInput-notchedOutline": { borderColor: TABLE_BORDER },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "var(--gray-300)",
  },
  "& .MuiSelect-select": { py: 0.5 },
};

export const pagerButtonSx: SxProps<Theme> = {
  width: 34,
  height: 34,
  borderRadius: "8px",
  border: `1px solid ${TABLE_BORDER}`,
  color: TABLE_TEXT_MUTED,
  "&:hover": { backgroundColor: TABLE_HEADER_BG },
  "&.Mui-disabled": { color: "var(--gray-300)" },
};

/**
 * Grid chrome: grey uppercase header, borderless card edges, hoverable rows.
 * Sorting is driven by the toolbar's Sort button, so no header sort icons.
 */
export const dataGridSx = {
  border: "none",

  // The grid paints itself from its own theme variables, which resolve against
  // the app's colour scheme — in dark mode that turns the surface near-black.
  // The card is a light surface, so pin them to the table tokens. The grid
  // declares these on the root element too, so the overrides are qualified with
  // the root class to outrank it whichever stylesheet the browser reads last.
  "&.MuiDataGrid-root": {
    "--DataGrid-t-color-background-base": TABLE_SURFACE,
    "--DataGrid-t-color-background-overlay": TABLE_SURFACE,
    "--DataGrid-t-cell-background-pinned": TABLE_SURFACE,
    "--DataGrid-t-header-background-base": TABLE_HEADER_BG,
    "--DataGrid-t-color-foreground-base": TABLE_TEXT,
    "--DataGrid-t-color-foreground-muted": TABLE_TEXT_MUTED,
    "--DataGrid-t-color-border-base": TABLE_BORDER,
    "--DataGrid-rowBorderColor": TABLE_ROW_BORDER,
  },

  "& .MuiDataGrid-columnHeader": {
    backgroundColor: TABLE_HEADER_BG,
  },
  "& .MuiDataGrid-columnHeaderTitle": {
    textTransform: "uppercase",
    fontSize: "0.6875rem",
    fontWeight: 600,
    letterSpacing: "0.06em",
    color: TABLE_HEADER_TEXT,
  },
  "& .MuiDataGrid-columnSeparator": { display: "none" },

  "& .MuiDataGrid-cell": {
    display: "flex",
    alignItems: "center",
    minHeight: 52,
    py: 1.25,
    fontSize: "0.8125rem",
    color: TABLE_TEXT,
  },

  // Line the outer columns up with the toolbar and footer gutters.
  "& .MuiDataGrid-columnHeader:first-of-type, & .MuiDataGrid-cell:first-of-type":
    { pl: TABLE_GUTTER },
  "& .MuiDataGrid-columnHeader:last-of-type, & .MuiDataGrid-cell:last-of-type":
    {
      pr: TABLE_GUTTER,
    },

  "& .MuiDataGrid-row:hover": { backgroundColor: TABLE_ROW_HOVER_BG },
  "& .MuiDataGrid-row--lastVisible .MuiDataGrid-cell": {
    borderBottom: "none",
  },

  "& .MuiDataGrid-columnHeader:focus, & .MuiDataGrid-columnHeader:focus-within, & .MuiDataGrid-cell:focus, & .MuiDataGrid-cell:focus-within":
    { outline: "none" },
} satisfies SxProps<Theme>;

// Widths cycle per column so the placeholder rows read as text, not a block.
const SKELETON_CELL_WIDTHS = ["72%", "54%", "84%", "62%"];

/** Placeholder bar filling one cell of a loading row. */
export const skeletonCellSx = (columnIndex: number): SxProps<Theme> => ({
  width: SKELETON_CELL_WIDTHS[columnIndex % SKELETON_CELL_WIDTHS.length],
  maxWidth: 200,
  height: 12,
  borderRadius: "4px",
  backgroundColor: TABLE_BORDER,
});

/** Placeholder rows are not interactive, so they don't light up on hover. */
export const skeletonGridSx = {
  "& .MuiDataGrid-row:hover": { backgroundColor: "transparent" },
  "& .MuiDataGrid-cell": { cursor: "default" },
} satisfies SxProps<Theme>;

/** Header of the column the toolbar is currently sorting by. */
export const sortedHeaderSx: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  gap: 0.5,
  textTransform: "uppercase",
  fontSize: "0.6875rem",
  fontWeight: 600,
  letterSpacing: "0.06em",
  color: TABLE_TEXT,
  "& .MuiSvgIcon-root": { fontSize: "0.875rem" },
};
