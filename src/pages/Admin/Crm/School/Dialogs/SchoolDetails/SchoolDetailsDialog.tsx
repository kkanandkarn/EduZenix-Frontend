import { useState } from "react";
import type { SchoolDetails } from "../../types";
import { AppDialog } from "../../../../../../components";
import SchoolDetailsDialogTitle from "./SchoolDetailsDialogTitle";
import SchoolDetailsDialogContent from "./SchoolDetailsDialogContent";
import SchoolDetailsDialogAction from "./SchoolDetailsDialogAction";

interface Props {
  id: string;
  open: boolean;
  handleClose: () => void;
}
const SchoolDetailsDialog = ({ open, handleClose }: Props) => {
  const [state] = useState<SchoolDetails>({
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
    author: {
      createdBy: "Anand Kumar Karn",
      updatedAt: "10 May 2025, 10:39 PM",
      remarks: "Accreditation documents verified",
    },
  });
  return (
    <AppDialog
      open={open}
      handleClose={handleClose}
      title={<SchoolDetailsDialogTitle state={state} />}
      actions={<SchoolDetailsDialogAction handleClose={handleClose} />}
      content={<SchoolDetailsDialogContent data={state} />}
      sx={{ minHeight: 600, minWidth: 900 }}
      titleBgColor="var(--gray-100)"
      actionsBgColor="var(--gray-100)"
    />
  );
};

export default SchoolDetailsDialog;
