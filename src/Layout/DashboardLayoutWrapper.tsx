// DashboardLayoutBasic.tsx
import * as React from "react";
import { createTheme } from "@mui/material/styles";
import DashboardIcon from "@mui/icons-material/Dashboard";
import {
  AppProvider,
  type Navigation,
  type Session,
} from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import HandshakeIcon from "@mui/icons-material/Handshake";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import SchoolIcon from "@mui/icons-material/School";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import BusinessIcon from "@mui/icons-material/Business";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import GroupIcon from "@mui/icons-material/Group";
import ToolbarActions from "./ToolbarActions";
import AppTitle from "./AppTitle";

const NAVIGATION: Navigation = [
  { kind: "header", title: "Main items" },
  { segment: "dashboard", title: "Dashboard", icon: <DashboardIcon /> },
  { segment: "tenants", title: "Tenants", icon: <HandshakeIcon /> },
  { kind: "divider" },
  { kind: "header", title: "CRM" },
  { segment: "leads", title: "Leads", icon: <LeaderboardIcon /> },
  {
    segment: "institution",
    title: "Institutions",
    icon: <BusinessIcon />,
    children: [
      {
        segment: "university",
        title: "University",
        icon: <AccountBalanceIcon />,
      },
      { segment: "college", title: "College", icon: <SchoolIcon /> },
      {
        segment: "otherInstitutions",
        title: "Other Institutions",
        icon: <BusinessIcon />,
      },
      { segment: "school", title: "School", icon: <MenuBookIcon /> },
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

  /* Dark mode scrollbar */
  [data-toolpad-color-scheme="dark"] ::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.18);
  }

  [data-toolpad-color-scheme="dark"] ::-webkit-scrollbar-thumb:hover {
    background-color: rgba(255, 255, 255, 0.35);
  }

  /* Firefox */
  * {
    scrollbar-width: thin;
    scrollbar-color: rgba(0, 0, 0, 0.18) transparent;
  }

  [data-toolpad-color-scheme="dark"] * {
    scrollbar-color: rgba(255, 255, 255, 0.18) transparent;
  }
`;

const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: "data-toolpad-color-scheme",
  },
  colorSchemes: { light: true, dark: true },
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

  const router = React.useMemo(
    () => ({
      pathname: location.pathname,
      searchParams: new URLSearchParams(location.search),
      navigate: (path: string | URL) => navigate(String(path)),
    }),
    [location, navigate],
  );

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
          toolbarActions: () => <ToolbarActions />,
          appTitle: () => <AppTitle />,
        }}
        sidebarExpandedWidth={250}
        sx={{ bgcolor: "#f8f9fa" }}
      >
        <Outlet />
      </DashboardLayout>
    </AppProvider>
  );
}
