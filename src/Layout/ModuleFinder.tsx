import { Box } from "@mui/material";
import React, { useRef, useState } from "react";
import Input from "../components/ui/Input";
import ModuleAutoComplete from "./ModuleAutoComplete";

interface Module {
  name: string;
  description: string;
  route: string;
}

const MODULES: Module[] = [
  {
    name: "Dashboard",
    description:
      "Overview of key metrics, recent activity, and system-wide summaries",
    route: "/dashboard",
  },
  {
    name: "Tenants",
    description:
      "Manage multi-tenant accounts, subscriptions, and tenant-level configurations",
    route: "/tenants",
  },
  {
    name: "Leads",
    description:
      "Track and manage prospective institution inquiries and sales pipeline",
    route: "/leads",
  },
  {
    name: "Institutions",
    description:
      "Central hub for managing all registered educational institutions",
    route: "/institution",
  },
  {
    name: "University",
    description:
      "Onboard and manage university-level institutions and their departments",
    route: "/institution/university",
  },
  {
    name: "College",
    description:
      "Manage college institutions including faculties, branches, and affiliations",
    route: "/institution/college",
  },
  {
    name: "Other Institutions",
    description:
      "Manage coaching centres, training institutes, and non-standard institutions",
    route: "/institution/otherInstitutions",
  },
  {
    name: "School",
    description:
      "Manage K-12 schools, boards, and primary or secondary education setups",
    route: "/institution/school",
  },
  {
    name: "Role & Permissions",
    description:
      "Define roles, assign granular permissions, and control feature-level access",
    route: "/roles",
  },
  {
    name: "User Directory",
    description:
      "View, invite, and manage all platform users and their assigned roles",
    route: "/users",
  },
];

const ModuleFinder = () => {
  const [search, setSearch] = useState<string>("");
  const containerRef = useRef<HTMLDivElement>(null);

  const matched: Module[] =
    search.trim() !== ""
      ? MODULES.filter(
          (m) =>
            m.name.toLowerCase().includes(search.toLowerCase()) ||
            m.description.toLowerCase().includes(search.toLowerCase()) ||
            m.route.toLowerCase().includes(search.toLowerCase()),
        )
      : [];

  const handleSelect = (mod: Module) => {
    setSearch(mod.name);
  };

  return (
    <Box ref={containerRef} sx={{ width: 500, mr: 2, position: "relative" }}>
      <Input
        type="search"
        label="Search..."
        name="search"
        value={search}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearch(e.target.value)
        }
        placeholder="search modules e.g. Institutions"
        fullWidth={true}
      />
      {search.trim() !== "" && matched.length > 0 && (
        <ModuleAutoComplete matches={matched} onSelect={handleSelect} />
      )}
    </Box>
  );
};

export default ModuleFinder;
