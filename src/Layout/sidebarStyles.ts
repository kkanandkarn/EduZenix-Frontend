import {
  BRAND_HEIGHT,
  MOBILE_BRAND_HEIGHT,
  SIDEBAR_ACTIVE_BG,
  SIDEBAR_ACTIVE_HOVER_BG,
  SIDEBAR_BG,
  SIDEBAR_BORDER,
  SIDEBAR_HOVER_BG,
  SIDEBAR_TEXT,
  SIDEBAR_TEXT_ACTIVE,
  SIDEBAR_TEXT_MUTED,
} from "./constants";

/**
 * Styling for the dark sidebar. Toolpad renders the navigation internally, so the
 * items are reached through their MUI class names on the drawer paper.
 */
export const dashboardLayoutSx = {
  bgcolor: "#f8f9fa",

  "& .MuiDrawer-paper": {
    backgroundColor: SIDEBAR_BG,
    borderRight: `1px solid ${SIDEBAR_BORDER}`,
    color: SIDEBAR_TEXT,
  },

  // Reserve the sidebar space the brand block is rendered over
  "& .MuiDrawer-paper .MuiToolbar-root": {
    minHeight: { xs: MOBILE_BRAND_HEIGHT, md: BRAND_HEIGHT },
  },

  // No app bar anymore, so the page content needs no top spacer on desktop
  "& > .MuiBox-root > .MuiToolbar-root": {
    display: { xs: "flex", md: "none" },
  },

  // Flyout that lists nested pages while the sidebar is collapsed
  "& .MuiDrawer-paper .MuiPaper-root": {
    backgroundColor: SIDEBAR_BG,
    backgroundImage: "none",
    color: SIDEBAR_TEXT,
    border: `1px solid ${SIDEBAR_BORDER}`,
  },

  // Subheaders are sticky by default, so they keep the sidebar background
  "& .MuiDrawer-paper .MuiListSubheader-root": {
    backgroundColor: SIDEBAR_BG,
    color: SIDEBAR_TEXT_MUTED,
    fontSize: 11,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
  },

  "& .MuiDrawer-paper .MuiDivider-root": {
    borderColor: SIDEBAR_BORDER,
    borderBottomWidth: 1,
  },

  "& .MuiDrawer-paper .MuiListItemButton-root": {
    borderRadius: "10px",
    color: SIDEBAR_TEXT,
    "& .MuiTypography-root": {
      fontSize: "0.95rem",
      fontWeight: 500,
      color: SIDEBAR_TEXT,
    },
    "& .MuiSvgIcon-root": { color: SIDEBAR_TEXT },
    "&:hover": {
      backgroundColor: SIDEBAR_HOVER_BG,
      "& .MuiTypography-root, & .MuiSvgIcon-root": {
        color: SIDEBAR_TEXT_ACTIVE,
      },
    },
  },

  // Collapsed sidebar: drop the caption under the icon, the title is a tooltip now
  "& .MuiDrawer-paper .MuiListItemButton-root .MuiTypography-caption": {
    display: "none",
  },

  // ...and centre the icon in the row now that the caption is gone
  "& .MuiDrawer-paper .MuiListItemButton-root > .MuiBox-root": {
    top: "50%",
  },

  // Nested pages keep the full width pill; only their content is indented
  "& .MuiDrawer-paper .MuiCollapse-root .MuiList-root": {
    pl: 0,
  },

  // Nested pages are marked with an elbow connector instead of an icon
  "& .MuiDrawer-paper .MuiCollapse-root .MuiListItemButton-root": {
    pl: 6.5,
    "&::before": {
      content: '""',
      position: "absolute",
      left: 34,
      top: "calc(50% - 10px)",
      width: 10,
      height: 10,
      borderLeft: `1.5px solid ${SIDEBAR_TEXT_MUTED}`,
      borderBottom: `1.5px solid ${SIDEBAR_TEXT_MUTED}`,
      borderBottomLeftRadius: "3px",
    },
  },

  // Kept last so it also wins over the nested item rules above
  "& .MuiDrawer-paper .MuiListItemButton-root.Mui-selected": {
    backgroundColor: SIDEBAR_ACTIVE_BG,
    "&:hover": { backgroundColor: SIDEBAR_ACTIVE_HOVER_BG },
    "& .MuiTypography-root": {
      color: SIDEBAR_TEXT_ACTIVE,
      fontWeight: 600,
    },
    "& .MuiSvgIcon-root": { color: SIDEBAR_TEXT_ACTIVE },
    "&::before": { borderColor: SIDEBAR_TEXT_ACTIVE },
  },

  // Dark scrollbar inside the sidebar only
  "& .MuiDrawer-paper ::-webkit-scrollbar-thumb": {
    backgroundColor: "rgba(255, 255, 255, 0.18)",
  },
};
