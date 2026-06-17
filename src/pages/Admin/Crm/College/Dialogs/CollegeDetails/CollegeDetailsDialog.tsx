import { useState } from "react";
import type { CollegeDetails } from "../../types";
import { AppDialog } from "../../../../../../components";
import CollegeDetailsDialogTitle from "./CollegeDetailsDialogTitle";
import CollegeDetailsDialogAction from "./CollegeDetailsDialogAction";
import CollegeDetailsDialogContent from "./CollegeDetailsDialogContent";

interface Props {
  id: string;
  open: boolean;
  handleClose: () => void;
}
const CollegeDetailsDialog = ({ id, open, handleClose }: Props) => {
  const [state] = useState<CollegeDetails>({
    id: id,
    aisheCode: "C-64469",
    name: "MADHUBANI MEDICAL COLLEGE",
    state: "Bihar",
    district: "Madhubani",
    website: "https://mmcworld.org/",
    yearOfEstablishment: 2017,
    email: "admin@mmc.edu.in",
    contact: "91 8796587485",
    location: "Rural",
    collegeType: "Affiliated College",
    management: "Private Aided (Government Aided)",
    universityName: "Bihar University of Health Sciences",
    universityType: "State Public University",
    status: "Pending",
    address: "Madhubani-Sakri-Pandaul Road, Keshopur, Bihar - 847212",
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
      title={<CollegeDetailsDialogTitle state={state} />}
      actions={<CollegeDetailsDialogAction handleClose={handleClose} />}
      content={<CollegeDetailsDialogContent data={state} />}
      sx={{ minHeight: 600, minWidth: 900 }}
      titleBgColor="var(--gray-100)"
      actionsBgColor="var(--gray-100)"
    />
  );
};

export default CollegeDetailsDialog;
