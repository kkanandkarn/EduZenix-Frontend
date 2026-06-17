import { useState } from "react";
import type { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { Box, Typography, IconButton } from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { AppTable, AppMenu, SerialNumberCell } from "../../../../../components";
import type { ModalTypes, TableState } from "../types";
import VisibilityIcon from "@mui/icons-material/Visibility";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import {
  OnboardingEmailDialog,
  OnboardingLinkDialog,
  InstitutionDetailsDialog,
} from "../Dialogs";

interface Props {
  tableState: TableState;
  handleChange: (name: keyof TableState, value: string | number) => void;
}

const OtherInstitutionsTable = ({ tableState, handleChange }: Props) => {
  const [rowId, setRowId] = useState<string>("");
  const [modal, setModal] = useState<ModalTypes | null>(null);
  const handleOpenModal = (modalName: ModalTypes, id: string) => {
    setRowId(id);
    setModal(modalName);
  };
  const handleCloseModal = () => {
    setRowId("");
    setModal(null);
  };
  const rows = [
    {
      id: "cmc8k2x9a0001l704f7v1h2a3",
      aisheCode: "C-1001",
      name: "St. Xavier's College",
      state: "Maharashtra",
      district: "Mumbai",
      email: "admin@stxaviers.edu",
      phone: "+91 8574896587",
    },
    {
      id: "cmc8k2x9a0002l704g8w2i3b4",
      aisheCode: "C-1002",
      name: "Presidency College",
      state: "Tamil Nadu",
      district: "Chennai",
      email: "info@presidency.edu",
      phone: "+91 9123456780",
    },
    {
      id: "cmc8k2x9a0003l704h9x3j4c5",
      aisheCode: "C-1003",
      name: "Hansraj College",
      state: "Delhi",
      district: "New Delhi",
      email: "contact@hansraj.edu",
      phone: "+91 9876543210",
    },
    {
      id: "cmc8k2x9a0004l704i0y4k5d6",
      aisheCode: "C-1004",
      name: "Loyola College",
      state: "Tamil Nadu",
      district: "Chennai",
      email: "admin@loyola.edu",
      phone: "+91 9988776655",
    },
    {
      id: "cmc8k2x9a0005l704j1z5l6e7",
      aisheCode: "C-1005",
      name: "Fergusson College",
      state: "Maharashtra",
      district: "Pune",
      email: "registrar@fergusson.edu",
      phone: "+91 9090909090",
    },
    {
      id: "cmc8k2x9a0006l704k2a6m7f8",
      aisheCode: "C-1006",
      name: "Christ College",
      state: "Karnataka",
      district: "Bengaluru",
      email: "office@christ.edu",
      phone: "+91 9345678901",
    },
    {
      id: "cmc8k2x9a0007l704l3b7n8g9",
      aisheCode: "C-1007",
      name: "Ramjas College",
      state: "Delhi",
      district: "New Delhi",
      email: "admin@ramjas.edu",
      phone: "+91 9785612345",
    },
    {
      id: "cmc8k2x9a0008l704m4c8o9h0",
      aisheCode: "C-1008",
      name: "Patna Women's College",
      state: "Bihar",
      district: "Patna",
      email: "info@pwc.edu",
      phone: "+91 9012345678",
    },
    {
      id: "cmc8k2x9a0009l704n5d9p0i1",
      aisheCode: "C-1009",
      name: "St. Stephen's College",
      state: "Delhi",
      district: "New Delhi",
      email: "support@ststephens.edu",
      phone: "+91 9654321870",
    },
    {
      id: "cmc8k2x9a0010l704o6e0q1j2",
      aisheCode: "C-1010",
      name: "Scottish Church College",
      state: "West Bengal",
      district: "Kolkata",
      email: "admissions@scottishchurch.edu",
      phone: "+91 8877665544",
    },
  ];

  const columnAlign = {
    headerAlign: "left" as const,
    align: "left" as const,
  };
  const columns: GridColDef<(typeof rows)[number]>[] = [
    {
      field: "serialNo",
      headerName: "S.No",
      disableColumnMenu: true,
      headerAlign: "center",
      align: "center",
      sortable: false,
      width: 60,
      renderCell: (params: GridRenderCellParams) => (
        <SerialNumberCell
          rowIndex={rows.findIndex((row) => row.id === params.id)}
          pageNo={tableState.pageNo}
          pageSize={tableState.pageSize}
        />
      ),
    },
    {
      field: "name",
      headerName: "Name",
      disableColumnMenu: true,
      ...columnAlign,
      flex: 1.5,
    },
    {
      field: "state",
      headerName: "State",
      disableColumnMenu: true,
      ...columnAlign,
      flex: 1.5,
    },
    {
      field: "district",
      headerName: "City",
      disableColumnMenu: true,
      ...columnAlign,
      flex: 1.5,
    },
    {
      field: "contact",
      headerName: "Contact",
      flex: 1.5,
      disableColumnMenu: true,
      ...columnAlign,
      renderCell: (params: GridRenderCellParams<(typeof rows)[number]>) => (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            lineHeight: 1.2,
            py: 1,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <LocalPhoneIcon
              sx={{ fontSize: "14px", color: "var(--slate-700)" }}
            />
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 600,
                color: "var(--slate-700)",
              }}
            >
              {params.row.phone}
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <EmailIcon sx={{ fontSize: "14px", color: "var(--slate-600)" }} />
            <Typography
              sx={{
                fontSize: "12px",
                color: "var(--slate-600)",
              }}
            >
              {params.row.email}
            </Typography>
          </Box>
        </Box>
      ),
    },
    {
      field: "action",
      headerName: "Action",
      flex: 1.5,
      disableColumnMenu: true,
      headerAlign: "center",
      align: "center",
      sortable: false,
      renderCell: (params: GridRenderCellParams) => (
        <AppMenu
          trigger={(openMenu) => (
            <IconButton size="small" onClick={openMenu}>
              <MoreVertIcon />
            </IconButton>
          )}
          items={[
            {
              label: "View",
              icon: (
                <VisibilityIcon
                  sx={{ fontSize: "16px", color: "var(--slate-600)" }}
                />
              ),
              onClick: () => handleOpenModal("VIEW", String(params.id)),
            },
            {
              label: "Onboarding Link",
              icon: (
                <InsertLinkIcon
                  sx={{ fontSize: "16px", color: "var(--slate-600)" }}
                />
              ),
              onClick: () =>
                handleOpenModal("ONBOARDING_LINK", String(params.id)),
            },
            {
              label: "Onboarding Email",
              icon: (
                <EmailIcon
                  sx={{ fontSize: "16px", color: "var(--slate-600)" }}
                />
              ),
              onClick: () =>
                handleOpenModal("ONBOARDING_EMAIL", String(params.id)),
            },
          ]}
        />
      ),
    },
  ];

  return (
    <>
      <AppTable
        rows={rows}
        columns={columns}
        total={rows.length}
        tableState={tableState}
        handleChange={handleChange}
      />
      <InstitutionDetailsDialog
        open={modal === "VIEW"}
        handleClose={handleCloseModal}
        id={rowId}
      />

      <OnboardingLinkDialog
        open={modal === "ONBOARDING_LINK"}
        handleClose={handleCloseModal}
        id={rowId}
      />
      <OnboardingEmailDialog
        open={modal === "ONBOARDING_EMAIL"}
        handleClose={handleCloseModal}
        id={rowId}
      />
    </>
  );
};

export default OtherInstitutionsTable;
