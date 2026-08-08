// DashboardLayoutBasic.tsx
import * as React from "react";
import { createTheme } from "@mui/material/styles";
import DashboardIcon from "@mui/icons-material/GridViewOutlined";
import { Box, Tooltip } from "@mui/material";
import {
  AppProvider,
  type Navigation,
  type NavigationPageItem,
  type Session,
} from "@toolpad/core/AppProvider";
import {
  DashboardLayout,
  DashboardSidebarPageItem,
} from "@toolpad/core/DashboardLayout";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import HandshakeIcon from "@mui/icons-material/HandshakeOutlined";
import LeaderboardIcon from "@mui/icons-material/LeaderboardOutlined";
import BusinessIcon from "@mui/icons-material/BusinessOutlined";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import GroupIcon from "@mui/icons-material/GroupOutlined";
import SidebarBrand from "./SidebarBrand";
import SidebarFooter from "./SidebarFooter";
import { SIDEBAR_WIDTH } from "./constants";
import { dashboardLayoutSx } from "./sidebarStyles";

const NAVIGATION: Navigation = [
  { kind: "header", title: "Overview" },
  { segment: "dashboard", title: "Dashboard", icon: <DashboardIcon /> },
  { segment: "tenants", title: "Tenants", icon: <HandshakeIcon /> },
  { kind: "divider" },
  { kind: "header", title: "CRM" },
  { segment: "leads", title: "Leads", icon: <LeaderboardIcon /> },
  {
    segment: "institution",
    title: "Institutions",
    icon: <BusinessIcon />,
    // Nested pages are marked with an elbow connector instead of an icon
    children: [
      { segment: "university", title: "University" },
      { segment: "college", title: "College" },
      { segment: "other-institutions", title: "Other Institutions" },
      { segment: "school", title: "School" },
    ],
  },
  { kind: "divider" },
  { kind: "header", title: "Access Control" },
  {
    segment: "roles",
    title: "Role & Permissions",
    icon: <AdminPanelSettingsIcon />,
  },
  { segment: "users", title: "User Directory", icon: <GroupIcon /> },
];

/**
 * The collapsed sidebar shows icons only, so the page title moves into a tooltip.
 * Items with children are left alone: hovering those already opens a flyout
 * listing the nested pages.
 */
const renderPageItem = (
  item: NavigationPageItem,
  { mini }: { mini: boolean },
) => {
  if (!mini || !item.icon || !item.segment || item.children) {
    return <DashboardSidebarPageItem item={item} />;
  }

  return (
    <DashboardSidebarPageItem
      // Wrapping the icon means cloning the item, which breaks Toolpad's
      // identity based path lookup, so pass the href explicitly. Only top level
      // items reach this function, so the path is just the segment.
      href={`/${item.segment}`}
      item={{
        ...item,
        icon: (
          <Tooltip title={item.title ?? item.segment} placement="right" arrow>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 48,
                height: 48,
              }}
            >
              {item.icon}
            </Box>
          </Tooltip>
        ),
      }}
    />
  );
};

// ✅ Scrollbar styles injected globally
const scrollbarStyles = `
  /* Webkit browsers (Chrome, Safari, Edge) */
  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.18);
    border-radius: 100px;
    transition: background-color 0.2s ease;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: rgba(0, 0, 0, 0.35);
  }

  ::-webkit-scrollbar-corner {
    background: transparent;
  }

  /* Firefox */
  * {
    scrollbar-width: thin;
    scrollbar-color: rgba(0, 0, 0, 0.18) transparent;
  }
`;

/**
 * Toolpad's `AppProvider` renders the theme through MUI's CSS-vars provider in
 * `system` mode, so declaring a dark colour scheme here is what made the app
 * follow the browser preference and break the (light-only) design. Shipping a
 * single `light` scheme means no dark CSS variables are ever generated, the
 * theme switcher disappears from the layout, and `prefers-color-scheme: dark`
 * has nothing to switch to.
 */
const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: "data-toolpad-color-scheme",
  },
  colorSchemes: { light: true },
  defaultColorScheme: "light",
  breakpoints: {
    values: { xs: 0, sm: 600, md: 600, lg: 1200, xl: 1536 },
  },
});

export default function DashboardLayoutBasic() {
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ Inject scrollbar styles once on mount
  React.useEffect(() => {
    const styleTag = document.createElement("style");
    styleTag.setAttribute("data-scrollbar-styles", "true");
    styleTag.textContent = scrollbarStyles;

    // Avoid duplicate injection
    if (!document.querySelector("[data-scrollbar-styles]")) {
      document.head.appendChild(styleTag);
    }

    return () => {
      styleTag.remove();
    };
  }, []);

  const router = React.useMemo(() => {
    // Find the longest matching nav segment for the current path
    const knownSegments = NAVIGATION.flatMap((item) => {
      if (!("segment" in item) || !item.segment) return [];
      const parent = item.segment;
      const children =
        item.children?.flatMap((child) =>
          "segment" in child && child.segment
            ? [`${parent}/${child.segment}`]
            : [],
        ) ?? [];
      return [parent, ...children];
    });

    const matchedSegment = knownSegments
      .filter((seg) => location.pathname.startsWith("/" + seg))
      .sort((a, b) => b.length - a.length)[0]; // longest match wins

    const effectivePath = matchedSegment
      ? "/" + matchedSegment
      : location.pathname;

    return {
      pathname: effectivePath, // ← Toolpad sees a known path
      searchParams: new URLSearchParams(location.search),
      navigate: (path: string | URL) => navigate(String(path)),
    };
  }, [location, navigate]);

  const [session, setSession] = React.useState<Session | null>({
    user: {
      name: "Anand kumar Karn",
      email: "anandkumarkarn2002@gmail.com",
      image:
        "https://api.dicebear.com/9.x/initials/svg?seed=Anandkarn&backgroundColor=1976d2",
    },
  });

  const authentication = React.useMemo(
    () => ({
      signIn: () => {
        setSession({
          user: {
            name: "Anand kumar Karn",
            email: "anandkumarkarn2002@gmail.com",
            image: "https://api.dicebear.com/9.x/initials/svg?seed=Anandkarn",
          },
        });
      },
      signOut: () => {
        navigate("/");
        setSession(null);
      },
    }),
    [navigate],
  );

  return (
    <AppProvider
      session={session}
      authentication={authentication}
      navigation={NAVIGATION}
      router={router}
      theme={theme}
    >
      <DashboardLayout
        slots={{
          // The top app bar is replaced by a brand block pinned to the sidebar
          header: SidebarBrand,
          sidebarFooter: SidebarFooter,
        }}
        sidebarExpandedWidth={SIDEBAR_WIDTH}
        renderPageItem={renderPageItem}
        sx={dashboardLayoutSx}
      >
        <Outlet />
      </DashboardLayout>
    </AppProvider>
  );
}
