import { Box } from "@mui/material";
import type { GridColDef } from "@mui/x-data-grid";
import { useState } from "react";
import {
  AppButton,
  AppTable,
  SerialNumberCell,
} from "../../../../../components";
import type { TableState } from "../../types";
import SendIcon from "@mui/icons-material/Send";

const OnboardingEmailTable = () => {
  const [state, setState] = useState<TableState>({
    search: "",
    sortColumn: "",
    sortOrder: "asc",
    pageNo: 1,
    pageSize: 5,
  });
  const handleChange = (name: keyof TableState, value: string | number) => {
    setState((p: TableState) => ({ ...p, [name]: value }));
  };
  const rows = [
    {
      id: "cmc1k7x8a0000abc123def45",
      name: "Sara Jenkins",
      link: "http://localhost:3000/onboarding/cmc1k7x8a0000abc123def45",
      email: "admin@sandipuniversity.edu.in",
      createdAt: "13 Jun 2026, 02:30 PM",
      status: "Active",
    },
    {
      id: "cmc1k7x8b0001abc123def46",
      name: "Marcus Thorne",
      link: "http://localhost:3000/onboarding/cmc1k7x8b0001abc123def46",
      email: "director@sandipuniversity.edu.in",
      createdAt: "12 Jun 2026, 03:15 PM",
      status: "Active",
    },
    {
      id: "cmc1k7x8c0002abc123def47",
      name: "Elena Rodriguez",
      link: "http://localhost:3000/onboarding/cmc1k7x8c0002abc123def47",
      email: "principle@sandipuniversity.edu.in",
      createdAt: "12 Jun 2026, 01:00 PM",
      status: "Expired",
    },
    {
      id: "cmc1k7x8d0003abc123def48",
      name: "Sara Jenkins",
      link: "http://localhost:3000/onboarding/cmc1k7x8d0003abc123def48",
      email: "info@sandipuniversity.edu.in",
      createdAt: "11 Jun 2026, 05:30 PM",
      status: "Active",
    },
    {
      id: "cmc1k7x8e0004abc123def49",
      name: "Elena Rodriguez",
      link: "http://localhost:3000/onboarding/cmc1k7x8e0004abc123def49",
      email: "support@sandipuniversity.edu.in",
      createdAt: "10 Jun 2026, 06:45 PM",
      status: "Active",
    },
  ];
  const columns: GridColDef<(typeof rows)[number]>[] = [
    {
      field: "serialNo",
      headerName: "S.No",
      width: 80,
      sortable: false,
      disableColumnMenu: true,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => (
        <SerialNumberCell
          rowIndex={rows.findIndex((row) => row.id === params.id)}
          pageNo={state.pageNo}
          pageSize={state.pageSize}
        />
      ),
    },
    {
      field: "name",
      headerName: "Send By",
      flex: 1,
      minWidth: 120,
      disableColumnMenu: true,
    },
    {
      field: "email",
      headerName: "Sent To Email",
      flex: 1,
      minWidth: 300,
      disableColumnMenu: true,
    },
    {
      field: "createdAt",
      headerName: "Sent At",
      flex: 1,
      minWidth: 220,
      disableColumnMenu: true,
      sortable: false,
    },
    {
      field: "link",
      headerName: "Link",
      flex: 0.7,
      minWidth: 180,
      disableColumnMenu: true,
      sortable: false,
      headerAlign: "center",
      align: "center",
      renderCell: () => (
        <Box
          sx={{
            height: "100%",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <AppButton
            variant="text"
            startIcon={
              <SendIcon sx={{ fontSize: "14px", color: "var(--blue-600)" }} />
            }
            label="Send Again"
          />
        </Box>
      ),
    },
  ];
  return (
    <Box sx={{ mt: 1 }}>
      <AppTable
        rows={rows}
        columns={columns}
        total={rows.length}
        tableState={state}
        handleChange={handleChange}
      />
    </Box>
  );
};

export default OnboardingEmailTable;
