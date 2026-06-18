import type { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { Box, Typography, IconButton } from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { AppTable, AppMenu, SerialNumberCell } from "../../../../components";
import type { TableState } from "../types";
import VisibilityIcon from "@mui/icons-material/Visibility";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import PackageStatusChip from "./PackageStatusChip";
import { formatDateTime, toTitleCase } from "../../../../utils/helper";

interface Props {
  tableState: TableState;
  handleChange: (name: keyof TableState, value: string | number) => void;
}

const TenantsTable = ({ tableState, handleChange }: Props) => {
  const rows = [
    {
      id: "cmc8k2x9a0001l704f7v1h2a3",
      name: "Global Heights Academy",
      poc: "Alfred Dvinci",
      type: "school",
      email: "admin@globalheights.edu",
      phone: "+91 8574896587",
      packageStatus: "Active",
      expireDate: "2026-06-20T12:36:58.761Z",
    },
    {
      id: "cmc8k2x9a0002l704g8w2i3b4",
      name: "Sandip University",
      poc: "Dharmesh Thakur",
      type: "university",
      email: "admin@sandipuniversitysijoul.edu.in",
      phone: "+91 8574968542",
      packageStatus: "Active",
      expireDate: "2027-02-01T12:36:58.761Z",
    },
    {
      id: "cmc8k2x9a0003l704h9x3j4c5",
      name: "Hansraj College",
      poc: "Dr. S. J. Hansraj",
      type: "college",
      email: "contact@hansraj.edu",
      phone: "+91 9876543210",
      packageStatus: "freeTrial",
      expireDate: "2026-06-19T12:36:58.761Z",
    },
    {
      id: "cmc8k2x9a0004l704i0y4k5d6",
      name: "Loyola College of Nursing",
      poc: "Sunidhi Iyer",
      type: "otherInstitution",
      email: "admin@loyola.edu",
      phone: "+91 9988776655",
      packageStatus: "Expired",
      expireDate: "2026-06-14T12:36:58.761Z",
    },
    {
      id: "cmc8k2x9a0005l704j1z5l6e7",
      name: "Fergusson Academy",
      poc: "Sara Kently",
      type: "school",
      email: "registrar@fergusson.edu",
      phone: "+91 9090909090",
      packageStatus: "Expired",
      expireDate: "2026-06-12T12:36:58.761Z",
    },
    {
      id: "cmc8k2x9a0006l704k2a6m7f8",
      name: "Delhi Institute of Technology",
      poc: "Rajesh Kumar",
      type: "college",
      email: "info@dit.edu",
      phone: "+91 9123456780",
      packageStatus: "Active",
      expireDate: "2026-12-31T12:36:58.761Z",
    },
    {
      id: "cmc8k2x9a0007l704l3b7n8g9",
      name: "Oxford Public School",
      poc: "Neha Sharma",
      type: "school",
      email: "principal@oxfordpublic.edu",
      phone: "+91 9234567891",
      packageStatus: "freeTrial",
      expireDate: "2026-06-25T12:36:58.761Z",
    },
    {
      id: "cmc8k2x9a0008l704m4c8o9h0",
      name: "National Law University",
      poc: "Prof. Amit Verma",
      type: "university",
      email: "admin@nlu.edu",
      phone: "+91 9345678912",
      packageStatus: "Active",
      expireDate: "2027-05-10T12:36:58.761Z",
    },
    {
      id: "cmc8k2x9a0009l704n5d9p0i1",
      name: "St. Xavier's Higher Secondary School",
      poc: "Joseph D'Souza",
      type: "school",
      email: "contact@stxaviersschool.edu",
      phone: "+91 9456789123",
      packageStatus: "Expired",
      expireDate: "2026-05-30T12:36:58.761Z",
    },
    {
      id: "cmc8k2x9a0010l704o6e0q1j2",
      name: "Institute of Management Studies",
      poc: "Pooja Singh",
      type: "college",
      email: "admissions@ims.edu",
      phone: "+91 9567891234",
      packageStatus: "Active",
      expireDate: "2026-11-15T12:36:58.761Z",
    },
    {
      id: "cmc8k2x9a0011l704p7f1r2k3",
      name: "Bright Future Polytechnic",
      poc: "Vikas Mehta",
      type: "otherInstitution",
      email: "office@brightfuturepolytechnic.edu",
      phone: "+91 9678912345",
      packageStatus: "freeTrial",
      expireDate: "2026-07-05T12:36:58.761Z",
    },
    {
      id: "cmc8k2x9a0012l704q8g2s3l4",
      name: "Green Valley University",
      poc: "Anjali Roy",
      type: "university",
      email: "support@greenvalleyuniversity.edu",
      phone: "+91 9789123456",
      packageStatus: "Active",
      expireDate: "2028-01-20T12:36:58.761Z",
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
      renderCell: (params: GridRenderCellParams<(typeof rows)[number]>) => (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            lineHeight: 1.2,
            alignItems: "flex-start", // ← add this
            height: "100%", // ← add this
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
            {params.row.name}
          </Typography>

          <Typography
            sx={{
              fontSize: "12px",
              color: "var(--slate-600)",
            }}
          >
            {toTitleCase(params.row.type)}
          </Typography>
        </Box>
      ),
    },
    {
      field: "poc",
      headerName: "POC",
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
      field: "packageStatus",
      headerName: "Status",
      disableColumnMenu: true,
      headerAlign: "center",
      align: "center",
      sortable: false,
      width: 120, // ← was 60
      renderCell: (params: GridRenderCellParams) => (
        <PackageStatusChip packageStatus={params.row.packageStatus} />
      ),
    },
    {
      field: "expireDate",
      headerName: "Expired At",
      disableColumnMenu: true,
      headerAlign: "center",
      align: "center",
      sortable: false,
      width: 160, // ← was 60
      renderCell: (params: GridRenderCellParams) => (
        <Typography sx={{ fontSize: "12px", color: "var(--slate-600)" }}>
          {formatDateTime(params.row.expireDate)}
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
              onClick: () => console.log("CLICK"),
            },
            {
              label: "Active Modules",
              icon: (
                <WidgetsOutlinedIcon
                  sx={{ fontSize: "16px", color: "var(--slate-600)" }}
                />
              ),
              onClick: () => console.log("CLICK"),
            },
            {
              label: "Payment History",
              icon: (
                <ReceiptLongOutlinedIcon
                  sx={{ fontSize: "16px", color: "var(--slate-600)" }}
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

export default TenantsTable;
