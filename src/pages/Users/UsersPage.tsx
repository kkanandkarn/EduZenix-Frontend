import { useState } from "react";
import type { TableState } from "../../types";
import { Box } from "@mui/material";
import { AppButton, TopBar } from "../../components";
import type { SortColumn } from "../../components";
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
  const sortColumns: SortColumn[] = [
    { key: "name", label: "Name" },
    { key: "email", label: "Email" },
    { key: "role", label: "Role" },
    { key: "status", label: "Status" },
    { key: "createdAt", label: "Created On" },
  ];
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  return (
    <>
      <TopBar
        title="Users"
        description="Create and manage users."
        actions={
          <AppButton
            label="Invite User"
            startIcon={<PersonAddAlt1Icon />}
            onClick={() => setModalOpen(true)}
          />
        }
      />
      <Box sx={{ paddingY: 2, paddingX: 4 }}>
        <UsersTable
          tableState={state}
          handleChange={handleChange}
          toolbar={{
            showSearch: true,
            searchPlaceholder: "Search by name, email etc",
            sortColumns,
          }}
        />
        <InviteUserDialog
          mode="add"
          open={modalOpen}
          onClose={() => setModalOpen(false)}
        />
      </Box>
    </>
  );
};

export default UsersPage;
