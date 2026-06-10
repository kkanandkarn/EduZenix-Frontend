import React from "react";
import type { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { Box, LinearProgress, Typography } from "@mui/material";
import { AppTable, AppButton } from "../../../../../components";
import { useNavigate } from "react-router-dom";
import type { TableState } from "../types";

interface Props {
  tableState: TableState;
  handleChange: (name: keyof TableState, value: string | number) => void;
}

const LeadsTable = ({ tableState, handleChange }: Props) => {
  const navigate = useNavigate();
  const getBgColor = (percentage: number) => {
    if (percentage <= 25) return "var(--red-500)";
    if (percentage <= 50) return "var(--yellow-400)";
    return "var(--green-500)";
  };
  const getPendingTextColor = (pendingPercentage: number) => {
    if (pendingPercentage <= 25) return "var(--green-500)"; // low pending → good
    if (pendingPercentage <= 50) return "var(--yellow-500)"; // moderate
    return "var(--red-500)"; // high pending → bad
  };
  const columnAlign = {
    headerAlign: "left" as const,
    align: "left" as const,
  };
  const rows = [
    {
      id: 1,
      consultantName: "Sarah Jenkins",
      consultantRole: "Senior Counselor",
      consultantEmail: "sarah.j@eduzenix.com",
      consultantMobile: "9638574123",
      assignedLeads: 142,
      completedLeads: 89,
      pendingLeads: 53,
    },
    {
      id: 2,

      consultantName: "Marcus Thompson",
      consultantRole: "Junior Counselor",
      consultantEmail: "m.thompson@eduzenix.com",
      consultantMobile: "7485965478",
      assignedLeads: 94,
      completedLeads: 41,
      pendingLeads: 53,
    },
    {
      id: 3,

      consultantName: "Elena Rodriguez",
      consultantRole: "Regional Manager",
      consultantEmail: "elena.r@eduzenix.com",
      consultantMobile: "8578965789",
      assignedLeads: 215,
      completedLeads: 182,
      pendingLeads: 33,
    },
    {
      id: 4,

      consultantName: "Jordan Smith",
      consultantRole: "Sales Associate",
      consultantEmail: "jordan.s@eduzenix.com",
      consultantMobile: "6897895874",
      assignedLeads: 67,
      completedLeads: 12,
      pendingLeads: 55,
    },
    {
      id: 5,
      consultantName: "Lisa Chen",
      consultantRole: "Student Advisor",
      consultantEmail: "lisa.chen@eduzenix.com",
      consultantMobile: "7485963214",
      assignedLeads: 118,
      completedLeads: 104,
      pendingLeads: 14,
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
      field: "consultant",
      headerName: "Consultant",
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
              color: "var(--color-slate-800)",
            }}
          >
            {params.row.consultantName}
          </Typography>

          <Typography
            sx={{
              fontSize: "12px",
              color: "var(--slate-600)",
            }}
          >
            {params.row.consultantRole}
          </Typography>
        </Box>
      ),
    },
    {
      field: "contact",
      headerName: "Contact",
      flex: 2.5,
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
              color: "var(--slate-800)",
            }}
          >
            {params.row.consultantEmail}
          </Typography>

          <Typography
            sx={{
              fontSize: "12px",
              color: "var(--slate-600)",
            }}
          >
            {params.row.consultantMobile}
          </Typography>
        </Box>
      ),
    },
    {
      field: "assignedLeads",
      headerName: "Assigned",
      type: "number",
      flex: 1.5,
      disableColumnMenu: true,
      ...columnAlign,
      renderCell: (params: GridRenderCellParams) => (
        <Box
          sx={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            px: 2,
            py: 1,
            borderRadius: "18px",
            backgroundColor: "var(--color-blue-100)",
            color: "var(--color-blue-500)",
            fontWeight: 600,
            minWidth: "36px",
            lineHeight: 1,
          }}
        >
          {params.value} Leads
        </Box>
      ),
    },
    {
      field: "completedLeads",
      headerName: "Completed",
      flex: 1.5,
      disableColumnMenu: true,
      ...columnAlign,
      renderCell: (params: GridRenderCellParams) => (
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Typography
            sx={{
              minWidth: 35,
              fontSize: "14px",
              fontWeight: 600,
              alignItems: "center",
            }}
          >
            {params.value}
          </Typography>

          <LinearProgress
            variant="determinate"
            value={
              (Number(params.row.completedLeads) / params.row.assignedLeads) *
              100
            }
            sx={{
              flex: 1,
              height: 6,
              borderRadius: 5,
              backgroundColor: "var(--slate-200)",

              "& .MuiLinearProgress-bar": {
                backgroundColor: `${getBgColor(
                  (Number(params.row.completedLeads) /
                    params.row.assignedLeads) *
                    100,
                )}`,
                borderRadius: 5,
              },
            }}
          />
        </Box>
      ),
    },
    {
      field: "pendingLeads",
      headerName: "Pending",
      type: "number",
      flex: 1.5,
      disableColumnMenu: true,
      ...columnAlign,
      renderCell: (params: GridRenderCellParams) => (
        <Box
          sx={{
            color: `${getPendingTextColor((Number(params.row.pendingLeads) / Number(params.row.assignedLeads)) * 100)}`,
          }}
        >
          {params.value}
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
        <AppButton
          variant="text"
          label="View"
          onClick={() => navigate(`/leads/${params.row.id}`)}
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

export default LeadsTable;
