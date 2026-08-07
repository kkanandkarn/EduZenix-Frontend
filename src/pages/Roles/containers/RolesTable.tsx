import type { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { Typography, IconButton, Chip, Box } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { AppTable, AppMenu, SerialNumberCell } from "../../../components";
import type { TableState } from "../types";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { formatDateTime } from "../../../utils/helper";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

interface Props {
  tableState: TableState;
  handleChange: (name: keyof TableState, value: string | number) => void;
}

const RolesTable = ({ tableState, handleChange }: Props) => {
  const rows = [
    {
      id: "cmc8k2x9a0001l704f7v1h2a3",
      roleName: "Admin",
      roleType: "admin",
      totalUsers: 1,
      status: "ACTIVE",
      createdAt: "2026-06-20T12:36:58.761Z",
    },
    {
      id: "cmc8k2x9a0002l704g8w2i3b4",
      roleName: "Accountant",
      roleType: "general",
      totalUsers: 8,
      status: "ACTIVE",
      createdAt: "2026-06-20T12:36:58.761Z",
    },
    {
      id: "cmc8k2x9a0003l704h9x3j4c5",
      roleName: "HR Manager",
      roleType: "general",
      totalUsers: 5,
      status: "ACTIVE",
      createdAt: "2026-06-21T09:15:22.134Z",
    },
    {
      id: "cmc8k2x9a0004l704i0y4k5d6",
      roleName: "Finance Manager",
      roleType: "general",
      totalUsers: 4,
      status: "ACTIVE",
      createdAt: "2026-06-21T11:45:10.891Z",
    },
    {
      id: "cmc8k2x9a0005l704j1z5l6e7",
      roleName: "Admissions Manager",
      roleType: "general",
      totalUsers: 7,
      status: "HOLD",
      createdAt: "2026-06-22T08:30:44.123Z",
    },
    {
      id: "cmc8k2x9a0006l704k2a6m7f8",
      roleName: "Faculty Coordinator",
      roleType: "general",
      totalUsers: 12,
      status: "HOLD",
      createdAt: "2026-06-22T14:20:18.456Z",
    },
    {
      id: "cmc8k2x9a0007l704l3b7n8g9",
      roleName: "Library Manager",
      roleType: "general",
      totalUsers: 3,
      status: "ACTIVE",
      createdAt: "2026-06-23T10:05:55.678Z",
    },
    {
      id: "cmc8k2x9a0008l704m4c8o9h0",
      roleName: "Transport Manager",
      roleType: "general",
      totalUsers: 2,
      status: "ACTIVE",
      createdAt: "2026-06-23T16:12:39.012Z",
    },
    {
      id: "cmc8k2x9a0009l704n5d9p0i1",
      roleName: "Student Counselor",
      roleType: "general",
      totalUsers: 9,
      status: "ACTIVE",
      createdAt: "2026-06-24T09:50:27.345Z",
    },
    {
      id: "cmc8k2x9a0010l704o6e0q1j2",
      roleName: "Receptionist",
      roleType: "general",
      totalUsers: 6,
      status: "ACTIVE",
      createdAt: "2026-06-24T15:40:12.789Z",
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
      field: "roleName",
      headerName: "Name",
      disableColumnMenu: true,
      ...columnAlign,
      flex: 1.5,
    },
    {
      field: "totalUsers",
      headerName: "Assigned Users",
      disableColumnMenu: true,
      ...columnAlign,
      flex: 1.5,
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
        const isActive = status === "ACTIVE";
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
                color: isActive ? "var(--green-700)" : "var(--yellow-700)",
                backgroundColor: isActive
                  ? "var(--green-50)"
                  : "var(--yellow-50)",
                border: "1px solid",
                borderColor: isActive
                  ? "var(--green-200)"
                  : "var(--yellow-200)",
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
      width: 160, // ← was 60
      renderCell: (params: GridRenderCellParams) => (
        <Typography sx={{ fontSize: "12px", color: "var(--slate-600)" }}>
          {formatDateTime(params.row.createdAt)}
        </Typography>
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
              component: "link",
              url: `/roles/view/${params.row.id}`,
            },
            {
              label: "Edit",
              icon: (
                <EditIcon
                  sx={{ fontSize: "16px", color: "var(--slate-600)" }}
                />
              ),
              component: "link",
              url: `/roles/edit/${params.row.id}`,
            },
            {
              label: "Delete",
              color: "var(--red-600)",
              icon: (
                <DeleteIcon
                  sx={{ fontSize: "16px", color: "var(--red-600)" }}
                />
              ),
              onClick: () => console.log("CLICK"),
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

export default RolesTable;
