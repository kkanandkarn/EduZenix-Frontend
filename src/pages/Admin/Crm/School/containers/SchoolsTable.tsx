import { useState } from "react";
import type { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { Box, Typography, IconButton } from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { AppTable, AppMenu, SerialNumberCell } from "../../../../../components";
import type { ModalTypes, SchoolDetails, TableState } from "../types";
import VisibilityIcon from "@mui/icons-material/Visibility";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import {
  OnboardingEmailDialog,
  OnboardingLinkDialog,
  SchoolDetailsDialog,
} from "../Dialogs";

interface Props {
  tableState: TableState;
  handleChange: (name: keyof TableState, value: string | number) => void;
}

const SchoolsTable = ({ tableState, handleChange }: Props) => {
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
  const rows: SchoolDetails[] = [
    {
      id: "cmc8k2x9a0001l704f7v1h2a3",
      udiseschCode: "10051800908",
      schoolName: "4S TREE SCHOOL",
      stateName: "BIHAR",
      districtName: "MADHUBANI",
      blockName: "PANDAUL",
      clusterName: "M.S. NARPATINAGAR PANDAUL",
      villageName: "SAKRI",
      schMgmtDesc: "Private Unaided (Recognized) ",
      schCatDesc: "Primary with Upper Primary",
      schLocDesc: "Rural",
      schTypeDesc: "3-Co-educational",
      schMgmtDescSt: "Pvt. Unaided (Recognized)",
      address: "PANDAUL District MADHUBANI",
      email: "4streeschool123@gmail.com",
      lgdvillName: "Sakuri",
      lgdvillpanchayatName: "Sakri East",
      lgdblockName: "Pandaul",
      phone: "+91 8574896587",
      status: "Pending",
    },
    {
      id: "cmc8k2x9a0002l704g8w2i3b4",
      udiseschCode: "10054101495",
      schoolName: "AADARSH PUBLIC SCHOOL",
      stateName: "BIHAR",
      districtName: "MADHUBANI",
      blockName: "LADANIA",
      clusterName: "M.S. MAHTHA",
      villageName: "MAHTHA",
      schMgmtDesc: "Private Unaided (Recognized) ",
      schCatDesc: "Primary with Upper Primary",
      schLocDesc: "Rural",
      schTypeDesc: "3-Co-educational",
      schMgmtDescSt: "Pvt. Unaided (Recognized)",
      address: "BLOCK ROAD LADANIA LADANIA",
      email: "",
      lgdvillName: "Mahtha",
      lgdvillpanchayatName: "Mahtha",
      lgdblockName: "Ladania",
      phone: "+91 9123456780",
      status: "Pending",
    },
    {
      id: "cmc8k2x9a0003l704h9x3j4c5",
      udiseschCode: "10051203508",
      schoolName: "AAN DEEP SHIKSHAN SANSTHAN, BALANPATTI",
      stateName: "BIHAR",
      districtName: "MADHUBANI",
      blockName: "KHUTAUNA",
      clusterName: "M.S. EKHATHTHA",
      villageName: "JHANJHPATTI ASHA",
      schMgmtDesc: "Private Unaided (Recognized) ",
      schCatDesc: "Primary with Upper Primary",
      schLocDesc: "Rural",
      schTypeDesc: "3-Co-educational",
      schMgmtDescSt: "Pvt. Unaided (Recognized)",
      address: "JHANJHPATTI ASHA, KHUTAUNA ",
      email: "",
      lgdvillName: "Jhanjhpatti Asa",
      lgdvillpanchayatName: "Jhanjhpatti Asha",
      lgdblockName: "Laukaha (Khutauna)",
      phone: "+91 9876543210",
      status: "Pending",
    },
    {
      id: "cmc8k2x9a0004l704i0y4k5d6",
      udiseschCode: "10051805702",
      schoolName: "AAWASIYA ADARSH VIDYAPITH VIJAYI",
      stateName: "BIHAR",
      districtName: "MADHUBANI",
      blockName: "PANDAUL",
      clusterName: "M.S. BIRAUL",
      villageName: "BIJAYEE",
      schMgmtDesc: "Private Unaided (Recognized) ",
      schCatDesc: "Primary with Upper Primary",
      schLocDesc: "Rural",
      schTypeDesc: "3-Co-educational",
      schMgmtDescSt: "Pvt. Unaided (Recognized)",
      address: "BIJAYEE,SALEMPUR,PANDAUL",
      email: "",
      lgdvillName: "Bijai",
      lgdvillpanchayatName: "Salempur",
      lgdblockName: "Pandaul",
      phone: "+91 9988776655",
      status: "Pending",
    },
    {
      id: "cmc8k2x9a0005l704j1z5l6e7",
      udiseschCode: "10052103410",
      schoolName: "AAWASIYA BHARTI VIDYA MANDIR ",
      stateName: "BIHAR",
      districtName: "MADHUBANI",
      blockName: "RAJNAGAR",
      clusterName: "M.S. RAJNAGAR",
      villageName: "CHICHRI BUJURG",
      schMgmtDesc: "Private Unaided (Recognized) ",
      schCatDesc: "Primary with Upper Primary",
      schLocDesc: "Rural",
      schTypeDesc: "3-Co-educational",
      schMgmtDescSt: "Pvt. Unaided (Recognized)",
      address: "CHICHRI BUJURG RAJNAGAR MADHUBANI",
      email: "",
      lgdvillName: "",
      lgdvillpanchayatName: "",
      lgdblockName: "Rajnagar",
      phone: null,
      status: "Pending",
    },
    {
      id: "cmc8k2x9a0006l704k2a6m7f8",
      udiseschCode: "10052104003",
      schoolName: "AAWASIYA PUBLIC SCHOOL RAJNAGAR",
      stateName: "BIHAR",
      districtName: "MADHUBANI",
      blockName: "RAJNAGAR",
      clusterName: "M.S. RAJNAGAR",
      villageName: "NAKTI",
      schMgmtDesc: "Private Unaided (Recognized) ",
      schCatDesc: "Pr. with Up.Pr. Sec. and H.Sec.",
      schLocDesc: "Rural",
      schTypeDesc: "3-Co-educational",
      schMgmtDescSt: "Pvt. Unaided (Recognized)",
      address: "VILL-SATGHARA,BLOCK-RAJNAGAR,DIST.-MADHUBANI",
      email: "apsrajnagar1999@gmail.com",
      lgdvillName: "Nakati",
      lgdvillpanchayatName: "Singion",
      lgdblockName: "Rajnagar",
      phone: null,
      status: "Pending",
    },
    {
      id: "cmc8k2x9a0007l704l3b7n8g9",
      udiseschCode: "10052104004",
      schoolName: "AAWASIYA SHARDA VIDYA MANDIR RAJNAGAR",
      stateName: "BIHAR",
      districtName: "MADHUBANI",
      blockName: "RAJNAGAR",
      clusterName: "M.S. RAJNAGAR",
      villageName: "NAKTI",
      schMgmtDesc: "Private Unaided (Recognized) ",
      schCatDesc: "Primary with Upper Primary",
      schLocDesc: "Rural",
      schTypeDesc: "3-Co-educational",
      schMgmtDescSt: "Pvt. Unaided (Recognized)",
      address: "VILL-CHICHARI BUJURAG,BLOCK-RAJNAGAR,DIST.MADHUBANI",
      email: "",
      lgdvillName: "Nakati",
      lgdvillpanchayatName: "Singion",
      lgdblockName: "Rajnagar",
      phone: "+91 9785612345",
      status: "Pending",
    },
    {
      id: "cmc8k2x9a0008l704m4c8o9h0",
      udiseschCode: "10051903410",
      schoolName: "ABHYN HERITAGE ACADEMY",
      stateName: "BIHAR",
      districtName: "MADHUBANI",
      blockName: "PHULPARAS",
      clusterName: "M.S. PHULPARAS",
      villageName: "PHULPARAS",
      schMgmtDesc: "Private Unaided (Recognized) ",
      schCatDesc: "Primary with Upper Primary",
      schLocDesc: "Urban",
      schTypeDesc: "3-Co-educational",
      schMgmtDescSt: "Pvt. Unaided (Recognized)",
      address: "PHULPARAS MADHUBANI State BIHAR",
      email: "",
      lgdvillName: "",
      lgdvillpanchayatName: "",
      lgdblockName: "",
      phone: "+91 9012345678",
      status: "Pending",
    },
    {
      id: "cmc8k2x9a0009l704n5d9p0i1",
      udiseschCode: "10051500211",
      schoolName: "ADARSH AVASIYA SCHOOL LAUKAHI",
      stateName: "BIHAR",
      districtName: "MADHUBANI",
      blockName: "LAUKAHI",
      clusterName: "M.S. LAUKAHI",
      villageName: "LAUKAHI",
      schMgmtDesc: "Private Unaided (Recognized) ",
      schCatDesc: "Primary with Upper Primary",
      schLocDesc: "Rural",
      schTypeDesc: "3-Co-educational",
      schMgmtDescSt: "Pvt. Unaided (Recognized)",
      address: "At po laukahi madhubani ",
      email: "bedmclaukahi108@gmail.com",
      lgdvillName: "Laukahi",
      lgdvillpanchayatName: "Laukahi",
      lgdblockName: "Laukahi",
      phone: null,
      status: "Pending",
    },
    {
      id: "cmc8k2x9a0010l704o6e0q1j2",
      udiseschCode: "10051200534",
      schoolName: "ADARSH BAL VIDYA MANDIR LAUKAHA",
      stateName: "BIHAR",
      districtName: "MADHUBANI",
      blockName: "KHUTAUNA",
      clusterName: "M.S. LAUKAHA",
      villageName: "KARMEGH",
      schMgmtDesc: "Private Unaided (Recognized) ",
      schCatDesc: "Primary with Upper Primary",
      schLocDesc: "Rural",
      schTypeDesc: "3-Co-educational",
      schMgmtDescSt: "Pvt. Unaided (Recognized)",
      address: "LAUKAHA KARMEGH KHUTAUNA MADHUBANI",
      email: "jkjhalkh2@gmail.com",
      lgdvillName: "Karmegh",
      lgdvillpanchayatName: "Lalmaniya",
      lgdblockName: "Laukaha (Khutauna)",
      phone: null,
      status: "Pending",
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
      field: "schoolName",
      headerName: "Name",
      disableColumnMenu: true,
      ...columnAlign,
      flex: 1.5,
    },
    {
      field: "stateName",
      headerName: "State",
      disableColumnMenu: true,
      ...columnAlign,
      flex: 1.5,
    },
    {
      field: "districtName",
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
      <SchoolDetailsDialog
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

export default SchoolsTable;
