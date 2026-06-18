import { Link, Typography } from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router-dom";
import type {
  BreadcrumbConfig,
  BreadcrumbItem,
} from "../features/Breadcrumbs/type";

export const BREADCRUMB_MAP: Record<string, BreadcrumbConfig> = {
  "/dashboard": [{ label: "Dashboard" }],
  "/tenants": [{ label: "Tenants" }],
  "/leads": [{ label: "Leads" }],
  "/leads/:id": () => [
    { label: "Leads", route: "/leads" },
    { label: "Lead Activity" },
  ],
  "/institution/university": [{ label: "University" }],
  "/institution/college": [{ label: "College" }],
  "/institution/other-institutions": [{ label: "Other Institutions" }],
  "/institution/school": [{ label: "School" }],
};

const matchRoute = (pattern: string, pathname: string): boolean => {
  const regex = new RegExp("^" + pattern.replace(/:[^/]+/g, "[^/]+") + "$");
  return regex.test(pathname);
};

export const useBreadcrumbs = () => {
  const location = useLocation();

  const matchedKey = Object.keys(BREADCRUMB_MAP).find((pattern) =>
    matchRoute(pattern, location.pathname),
  );

  if (!matchedKey) return [];

  const config = BREADCRUMB_MAP[matchedKey];

  const items: BreadcrumbItem[] = [
    { label: "Home" },
    ...(typeof config === "function" ? config({}) : config),
  ];

  return items.map((item, index) => {
    const isFirst = index === 0;
    const isLast = index === items.length - 1;

    if (isFirst || isLast) {
      return (
        <Typography key={index} sx={{ color: "text.primary" }}>
          {item.label}
        </Typography>
      );
    }

    return (
      <Link
        key={index}
        underline="hover"
        color="text.primary"
        component={RouterLink}
        to={item.route ?? "#"}
      >
        {item.label}
      </Link>
    );
  });
};
