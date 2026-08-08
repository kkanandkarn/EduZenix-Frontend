import { Box } from "@mui/material";
import { AppButton, TopBar } from "../../components";
import type { SortColumn } from "../../components";
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
  const sortColumns: SortColumn[] = [
    { key: "roleName", label: "Name" },
    { key: "totalUsers", label: "Assigned Users" },
    { key: "status", label: "Status" },
    { key: "createdAt", label: "Created On" },
  ];
  const navigate = useNavigate();
  return (
    <>
      <TopBar
        title="Roles & Permissions"
        description="Create, manage, and assign roles with customizable permissions."
        actions={
          <AppButton
            label="Add Role"
            startIcon={<AddIcon />}
            onClick={() => navigate("/roles/add")}
          />
        }
      />
      <Box sx={{ paddingY: 2, paddingX: 4 }}>
        <RolesTable
          tableState={state}
          handleChange={handleChange}
          toolbar={{
            showSearch: true,
            searchPlaceholder: "Search by role name etc",
            sortColumns,
          }}
        />
      </Box>
    </>
  );
};

export default RolesPage;
