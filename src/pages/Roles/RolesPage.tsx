import { Box, Typography } from "@mui/material";
import { AppButton, BreadCrumbs, TableTopBar } from "../../components";
import { useState } from "react";
import type { TableState } from "../../types";
import { RolesTable } from "./containers";
import { useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";

const RolesPage = () => {
  const [state, setState] = useState<TableState>({
    search: "",
    searchColumn: "roleName",
    sortColumn: "createdAt",
    sortOrder: "desc",
    pageNo: 1,
    pageSize: 10,
  });
  const handleChange = (name: keyof TableState, value: string | number) => {
    setState((p: TableState) => ({ ...p, [name]: value }));
  };
  const navigate = useNavigate();
  return (
    <Box sx={{ paddingY: 2, paddingX: 4 }}>
      {" "}
      <BreadCrumbs />
      <Box
        sx={{
          marginY: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography
            variant="h6"
            sx={{ fontWeight: "semibold", color: "var(--slate-800)" }}
          >
            Roles & Permissions
          </Typography>
          <Typography className="text-slate-600">
            Create, manage, and assign roles with customizable permissions.
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <AppButton
            label="Add Role"
            startIcon={<AddIcon />}
            onClick={() => navigate("/roles/add")}
          />
        </Box>
      </Box>
      <TableTopBar
        search={state.search}
        setSearch={(value) => handleChange("search", value)}
        setSearchColumn={(value) => handleChange("search", value)}
        searchColumn={state.searchColumn}
      />
      <Box sx={{ mt: 2 }}>
        {" "}
        <RolesTable tableState={state} handleChange={handleChange} />
      </Box>
    </Box>
  );
};

export default RolesPage;
