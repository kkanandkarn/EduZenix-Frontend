import React, { useState } from "react";
import type { TableState } from "../../types";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { AppButton, BreadCrumbs, TableTopBar } from "../../components";
import { UsersTable } from "./containers";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import { InviteUserDialog } from "./Dialog";

const UsersPage = () => {
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
  const [modalOpen, setModalOpen] = useState<boolean>(false);
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
            Users
          </Typography>
          <Typography className="text-slate-600">
            Create and manage users.
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <AppButton
            label="Invite User"
            startIcon={<PersonAddAlt1Icon />}
            onClick={() => setModalOpen(true)}
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
        <UsersTable tableState={state} handleChange={handleChange} />
      </Box>
      <InviteUserDialog
        mode="add"
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </Box>
  );
};

export default UsersPage;
