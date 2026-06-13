import React from "react";
import type { TableState } from "../types";
import { useNavigate } from "react-router-dom";
import type { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { Box, Chip, Typography } from "@mui/material";
import {
  AppTable,
  RatingStars,
  SerialNumberCell,
} from "../../../../../components";
import { formatDate, formatTime } from "../../../../../utils/helper";

interface Props {
  tableState: TableState;
  handleChange: (name: keyof TableState, value: string | number) => void;
}
const statusConfig: Record<
  string,
  { label: string; bgColor: string; textColor: string }
> = {
  Converted: {
    label: "Converted",
    bgColor: "var(--green-100)",
    textColor: "var(--green-700)",
  },
  "Under Negotiation": {
    label: "Under Negotiation",
    bgColor: "var(--yellow-100)",
    textColor: "var(--yellow-700)",
  },
  Revisit: {
    label: "Revisit",
    bgColor: "var(--blue-100)",
    textColor: "var(--blue-700)",
  },
};
const LeadsActivityTable = ({ tableState, handleChange }: Props) => {
  const rows = [
    {
      id: 1,
      tenantName: "Sandip University",
      tenantType: "University",

      status: "Converted",
      ratings: 4.5,
      date: "2026-05-17T13:51:35.733Z",
    },
    {
      id: 2,
      tenantName: "Patna Science College",
      tenantType: "College",

      status: "Under Negotiation",
      ratings: 4.2,
      date: "2026-05-16T10:21:15.733Z",
    },
    {
      id: 3,
      tenantName: "Delhi Public School",
      tenantType: "School",

      status: "Converted",
      ratings: 4.7,
      date: "2026-05-15T09:11:25.733Z",
    },
    {
      id: 4,
      tenantName: "Future Skills Institute",
      tenantType: "Other Institutions",

      status: "Revisit",
      ratings: 4.1,
      date: "2026-05-14T08:41:45.733Z",
    },
    {
      id: 5,
      tenantName: "Nalanda University",
      tenantType: "University",

      ratings: 4.8,
      status: "Under Negotiation",
      date: "2026-05-13T11:31:55.733Z",
    },
    {
      id: 6,
      tenantName: "St. Xavier's College",
      tenantType: "College",

      ratings: 4.3,
      status: "Converted",
      date: "2026-05-12T14:15:05.733Z",
    },
    {
      id: 7,
      tenantName: "Holy Cross School",
      tenantType: "School",

      ratings: 4.0,
      status: "Converted",
      date: "2026-05-11T16:45:25.733Z",
    },
    {
      id: 8,
      tenantName: "TechVision Academy",
      tenantType: "Other Institutions",

      ratings: 4.6,
      status: "Revisit",
      date: "2026-05-10T12:20:35.733Z",
    },
    {
      id: 9,
      tenantName: "Amity University",
      tenantType: "University",

      ratings: 4.4,
      status: "Under Negotiation",
      date: "2026-05-09T17:05:45.733Z",
    },
    {
      id: 10,
      tenantName: "Modern Public School",
      tenantType: "School",

      ratings: 4.2,
      status: "Converted",
      date: "2026-05-08T07:55:15.733Z",
    },
  ];
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
      field: "tenantName",
      headerName: "Institution Name",
      disableColumnMenu: true,
      headerAlign: "left",
      align: "left",
      flex: 1,
    },
    {
      field: "tenantType",
      headerName: "Institution Type",
      disableColumnMenu: true,
      sortable: false,
      headerAlign: "left",
      align: "left",
      flex: 1,
    },

    {
      field: "ratings",
      headerName: "Ratings",
      disableColumnMenu: true,
      sortable: true,
      headerAlign: "left",
      align: "left",
      flex: 1,
      renderCell: (params: GridRenderCellParams) => (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "left",
            height: "100%",
          }}
        >
          <RatingStars value={params.value as number} displayValue={true} />
        </Box>
      ),
    },

    {
      field: "status",
      headerName: "Status",
      disableColumnMenu: true,
      sortable: false,
      headerAlign: "center",
      align: "center",
      flex: 1,
      renderCell: (params: GridRenderCellParams) => {
        const config = statusConfig[params.value as string] ?? {
          label: params.value as string,
          color: "default",
        };
        return (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
            }}
          >
            <Chip
              label={config.label}
              size="small"
              sx={{
                fontWeight: 500,
                fontSize: 12,
                bgcolor: config.bgColor,
                color: config.textColor,
                // MUI Chip uses an internal class for background — override it:
                "& .MuiChip-label": {
                  color: config.textColor,
                },
              }}
            />
          </Box>
        );
      },
    },
    {
      field: "date",
      headerName: "Date",
      disableColumnMenu: true,
      sortable: true,
      headerAlign: "left",
      align: "left",
      flex: 1,
      renderCell: (params: GridRenderCellParams) => (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            justifyContent: "center",
            height: "100%",
            lineHeight: 1.3,
          }}
        >
          <Typography
            sx={{
              fontSize: 13,
              fontWeight: 500,
              color: "var(--slate-700)",
            }}
          >
            {formatDate(params.value as string)}
          </Typography>
          <Typography sx={{ fontSize: 11, color: "var(--slate-400)" }}>
            {formatTime(params.value as string)}
          </Typography>
        </Box>
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

export default LeadsActivityTable;
