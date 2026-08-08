import type { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { Typography, IconButton, Chip, Box } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { AppTable, AppMenu, SerialNumberCell } from "../../../components";
import type { InviteUserState, TableState } from "../types";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { formatDateTime } from "../../../utils/helper";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";

interface Props {
  tableState: TableState;
  handleChange: (name: keyof TableState, value: string | number) => void;
}

const UsersTable = ({ tableState, handleChange }: Props) => {
  const rows = [
    {
      id: "cmc8k2x9a0001l704f7v1h2a3",
      name: "Anand Kumar Karn",
      email: "anand@sofzenix.com",
      mfaEnabled: true,
      role: "Admin",
      status: "ACTIVE",
      createdAt: "2026-06-20T12:36:58.761Z",
    },
    {
      id: "cmc8k2x9a0002l704g8w2i3b4",
      name: "Shivam Kumar Verma",
      email: "shivam@sofzenix.com",
      mfaEnabled: true,
      role: "Admin",
      status: "ACTIVE",
      createdAt: "2026-06-20T12:36:58.761Z",
    },
    {
      id: "cmc8k2x9a0003l704h9x3j4c5",
      name: "Priya Sharma",
      email: "priya.sharma@sofzenix.com",
      mfaEnabled: false,
      role: "Editor",
      status: "ACTIVE",
      createdAt: "2026-06-21T09:15:23.456Z",
    },
    {
      id: "cmc8k2x9a0004l704i0y4k5d6",
      name: "Rahul Mehta",
      email: "rahul.mehta@sofzenix.com",
      mfaEnabled: true,
      role: "Moderator",
      status: "HOLD",
      createdAt: "2026-06-21T14:22:10.123Z",
    },
    {
      id: "cmc8k2x9a0005l704j1z5l6e7",
      name: "Sneha Patel",
      email: "sneha.patel@sofzenix.com",
      mfaEnabled: false,
      role: "Viewer",
      status: "ACTIVE",
      createdAt: "2026-06-22T08:45:30.789Z",
    },
    {
      id: "cmc8k2x9a0006l704k2a6m7f8",
      name: "Vikram Singh",
      email: "vikram.singh@sofzenix.com",
      mfaEnabled: true,
      role: "Admin",
      status: "SUSPENDED",
      createdAt: "2026-06-22T11:30:15.234Z",
    },
    {
      id: "cmc8k2x9a0007l704l3b7n8g9",
      name: "Ananya Reddy",
      email: "ananya.reddy@sofzenix.com",
      mfaEnabled: false,
      role: "Editor",
      status: "SUSPENDED",
      createdAt: "2026-06-23T16:50:45.678Z",
    },
    {
      id: "cmc8k2x9a0008l704m4c8o9h0",
      name: "Arjun Nair",
      email: "arjun.nair@sofzenix.com",
      mfaEnabled: true,
      role: "Moderator",
      status: "ACTIVE",
      createdAt: "2026-06-24T07:20:55.901Z",
    },
    {
      id: "cmc8k2x9a0009l704n5d9p0i1",
      name: "Kiran Joshi",
      email: "kiran.joshi@sofzenix.com",
      mfaEnabled: false,
      role: "Viewer",
      status: "HOLD",
      createdAt: "2026-06-24T13:40:33.456Z",
    },
    {
      id: "cmc8k2x9a0010l704o6e0q1j2",
      name: "Deepak Gupta",
      email: "deepak.gupta@sofzenix.com",
      mfaEnabled: true,
      role: "Admin",
      status: "ACTIVE",
      createdAt: "2026-06-25T10:15:22.789Z",
    },
    {
      id: "cmc8k2x9a0011l704p7f1r2k3",
      name: "Meera Iyer",
      email: "meera.iyer@sofzenix.com",
      mfaEnabled: false,
      role: "Editor",
      status: "ACTIVE",
      createdAt: "2026-06-25T18:25:47.012Z",
    },
    {
      id: "cmc8k2x9a0012l704q8g2s3l4",
      name: "Ravi Desai",
      email: "ravi.desai@sofzenix.com",
      mfaEnabled: true,
      role: "Moderator",
      status: "SUSPENDED",
      createdAt: "2026-06-26T05:50:12.345Z",
    },
  ];

  const [state, setState] = useState<InviteUserState>({
    id: "",
    name: "",
    email: "",
    role: "",
    mfaRequired: false,
    status: "ACTIVE",
  });

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
      headerAlign: "center",
      align: "center",
      flex: 1.5,
      renderCell: (params: GridRenderCellParams) => (
        <Typography sx={{ fontSize: "12px", color: "var(--slate-900)" }}>
          {params.row.name}
        </Typography>
      ),
    },
    {
      field: "email",
      headerName: "Email",
      disableColumnMenu: true,
      headerAlign: "center",
      align: "center",
      flex: 2,
      renderCell: (params: GridRenderCellParams) => (
        <Typography sx={{ fontSize: "12px", color: "var(--slate-600)" }}>
          {params.row.email}
        </Typography>
      ),
    },
    {
      field: "role",
      headerName: "Role",
      disableColumnMenu: true,
      headerAlign: "center",
      align: "center",
      flex: 1,
      renderCell: (params: GridRenderCellParams) => (
        <Chip
          label={params.row.role}
          size="small"
          sx={{
            fontWeight: 600,
            fontSize: "11px",
            backgroundColor: "var(--blue-50)",

            color: "var(--blue-700)",

            border: "1px solid",
            borderColor: "var(--blue-200)",
          }}
        />
      ),
    },
    {
      field: "mfaEnabled",
      headerName: "MFA",
      disableColumnMenu: true,
      headerAlign: "center",
      align: "center",
      width: 80,
      renderCell: (params: GridRenderCellParams) => (
        <Chip
          label={params.row.mfaEnabled ? "ON" : "OFF"}
          size="small"
          sx={{
            fontWeight: 600,
            fontSize: "10px",
            color: params.row.mfaEnabled
              ? "var(--green-700)"
              : "var(--red-600)",
            backgroundColor: params.row.mfaEnabled
              ? "var(--green-50)"
              : "var(--red-50)",
            border: "1px solid",
            borderColor: params.row.mfaEnabled
              ? "var(--green-200)"
              : "var(--red-200)",
          }}
        />
      ),
    },
    {
      field: "status",
      headerName: "Status",
      disableColumnMenu: true,
      headerAlign: "center",
      align: "center",
      sortable: false,
      width: 160,
      renderCell: (params: GridRenderCellParams) => {
        const status = params.row.status;
        const getStatusColor = (status: string) => {
          switch (status) {
            case "ACTIVE":
              return {
                bg: "var(--green-50)",
                color: "var(--green-700)",
                border: "var(--green-200)",
              };
            case "HOLD":
              return {
                bg: "var(--yellow-50)",
                color: "var(--yellow-700)",
                border: "var(--yellow-200)",
              };

            case "SUSPENDED":
              return {
                bg: "var(--red-50)",
                color: "var(--red-600)",
                border: "var(--red-200)",
              };
            default:
              return {
                bg: "var(--gray-50)",
                color: "var(--gray-700)",
                border: "var(--gray-200)",
              };
          }
        };
        const colors = getStatusColor(status);
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
              label={status}
              size="small"
              sx={{
                fontWeight: 600,
                fontSize: "11px",
                color: colors.color,
                backgroundColor: colors.bg,
                border: "1px solid",
                borderColor: colors.border,
              }}
            />
          </Box>
        );
      },
    },
    {
      field: "createdAt",
      headerName: "Created On",
      disableColumnMenu: true,
      headerAlign: "center",
      align: "center",
      sortable: false,
      width: 180,
      renderCell: (params: GridRenderCellParams) => (
        <Typography sx={{ fontSize: "12px", color: "var(--slate-600)" }}>
          {formatDateTime(params.row.createdAt)}
        </Typography>
      ),
    },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
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
              component: "link",
              url: `/users/view/${params.row.id}`,
            },
            {
              label: "Edit",
              icon: (
                <EditIcon
                  sx={{ fontSize: "16px", color: "var(--slate-600)" }}
                />
              ),
              component: "link",
              url: `/users/edit/${params.row.id}`,
            },
            {
              label: "Delete",
              color: "var(--red-600)",
              icon: (
                <DeleteIcon
                  sx={{ fontSize: "16px", color: "var(--red-600)" }}
                />
              ),
              onClick: () => console.log("Delete user:", params.row.id),
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

export default UsersTable;
