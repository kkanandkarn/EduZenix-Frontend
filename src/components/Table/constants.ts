// Design tokens for the combined table card: tabs, toolbar, grid and footer all
// live inside one bordered surface, so they share these values.
export const TABLE_SURFACE = "#ffffff";
export const TABLE_BORDER = "var(--gray-200)";
// Row separators are lighter than the card outline.
export const TABLE_ROW_BORDER = "var(--gray-100)";
export const TABLE_HEADER_BG = "var(--gray-50)";
export const TABLE_ROW_HOVER_BG = "var(--gray-50)";
export const TABLE_HEADER_TEXT = "var(--gray-500)";
export const TABLE_TEXT = "var(--slate-800)";
export const TABLE_TEXT_MUTED = "var(--slate-500)";
export const TABLE_RADIUS = "12px";
// Horizontal padding shared by the tabs row, the toolbar and the footer.
export const TABLE_GUTTER = 3;

export const TABLE_HEADER_HEIGHT = 44;
export const TABLE_TAB_HEIGHT = 48;
// Height of the search field and of every toolbar button.
export const TOOLBAR_CONTROL_HEIGHT = 38;

export const TAB_ACTIVE_TEXT = "var(--slate-900)";
export const TAB_INACTIVE_TEXT = "var(--slate-500)";

export const DEFAULT_PAGE_SIZE_OPTIONS = [10, 25, 50, 100];

// Palette for the count pill rendered next to a tab label.
export const TAB_COUNT_COLORS = {
  default: { bg: "var(--gray-100)", color: "var(--gray-600)" },
  success: { bg: "var(--green-50)", color: "var(--green-700)" },
  warning: { bg: "var(--yellow-50)", color: "var(--yellow-700)" },
  error: { bg: "var(--red-50)", color: "var(--red-600)" },
  info: { bg: "var(--blue-50)", color: "var(--blue-700)" },
} as const;
