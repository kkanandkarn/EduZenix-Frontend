import React from "react";
import type { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { Box, Typography } from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { AppTable, AppMenu } from "../../../../../components";
import type { TableState } from "../types";
import VisibilityIcon from "@mui/icons-material/Visibility";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import { IconButton } from "@mui/material";

interface Props {
  tableState: TableState;
  handleChange: (name: keyof TableState, value: string | number) => void;
}

const UniversityTable = ({ tableState, handleChange }: Props) => {
  const rows = [
    {
      id: 1,
      aisheCode: "U-0123",
      name: "St. Xaviers Global University",
      state: "Maharashtra",
      district: "Mumbai",
      email: "admin@stxaviers.edu",
      phone: "+91 8574896587",
    },
    {
      id: 2,
      aisheCode: "U-0456",
      name: "Green Valley University",
      state: "Karnataka",
      district: "Bengaluru",
      email: "info@greenvalley.edu",
      phone: "+91 9123456780",
    },
    {
      id: 3,
      aisheCode: "U-0789",
      name: "National Institute University",
      state: "Delhi",
      district: "New Delhi",
      email: "contact@niu.edu",
      phone: "+91 9876543210",
    },
    {
      id: 4,
      aisheCode: "U-1024",
      name: "Eastern Valley University",
      state: "West Bengal",
      district: "Kolkata",
      email: "admin@evu.edu",
      phone: "+91 9988776655",
    },
    {
      id: 5,
      aisheCode: "U-1567",
      name: "Himalayan Research University",
      state: "Uttarakhand",
      district: "Dehradun",
      email: "registrar@hru.edu",
      phone: "+91 9090909090",
    },
    {
      id: 6,
      aisheCode: "U-2045",
      name: "Royal Technical University",
      state: "Rajasthan",
      district: "Jaipur",
      email: "office@rtu.edu",
      phone: "+91 9345678901",
    },
    {
      id: 7,
      aisheCode: "U-3098",
      name: "Central Science University",
      state: "Gujarat",
      district: "Ahmedabad",
      email: "admin@csu.edu",
      phone: "+91 9785612345",
    },
    {
      id: 8,
      aisheCode: "U-4123",
      name: "Oxford International University",
      state: "Bihar",
      district: "Patna",
      email: "info@oiu.edu",
      phone: "+91 9012345678",
    },
    {
      id: 9,
      aisheCode: "U-5234",
      name: "Global Innovation University",
      state: "Tamil Nadu",
      district: "Chennai",
      email: "support@giu.edu",
      phone: "+91 9654321870",
    },
    {
      id: 10,
      aisheCode: "U-6345",
      name: "Northern Excellence University",
      state: "Punjab",
      district: "Ludhiana",
      email: "admissions@neu.edu",
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
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography sx={{ fontWeight: 500, color: "var(--color-slate-600)" }}>
            {params.id}
          </Typography>
        </Box>
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
      field: "location",
      headerName: "Location",
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
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: 600,
              color: "var(--color-slate-700)",
            }}
          >
            {params.row.state}
          </Typography>

          <Typography
            sx={{
              fontSize: "12px",
              color: "var(--slate-600)",
            }}
          >
            {params.row.district}
          </Typography>
        </Box>
      ),
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
              sx={{ fontSize: "14px", color: "var(--color-slate-700)" }}
            />
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 600,
                color: "var(--color-slate-700)",
              }}
            >
              {params.row.phone}
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <EmailIcon
              sx={{ fontSize: "14px", color: "var(--color-slate-600)" }}
            />
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
                  sx={{ fontSize: "16px", color: "var(--color-slate-600)" }}
                />
              ),
              onClick: () => console.log("View", params.row),
            },
            {
              label: "Onboarding Link",
              icon: (
                <InsertLinkIcon
                  sx={{ fontSize: "16px", color: "var(--color-slate-600)" }}
                />
              ),
              onClick: () => console.log("Edit", params.row),
            },
            {
              label: "Onboarding Email",
              icon: (
                <EmailIcon
                  sx={{ fontSize: "16px", color: "var(--color-slate-600)" }}
                />
              ),
              onClick: () => console.log("Delete", params.row),
            },
          ]}
        />
      ),
    },
  ];

  return (
    <AppTable
      rows={rows}
      columns={columns}
      total={rows.length}
      tableState={tableState}
      handleChange={handleChange}
    />
  );
};

export default UniversityTable;
