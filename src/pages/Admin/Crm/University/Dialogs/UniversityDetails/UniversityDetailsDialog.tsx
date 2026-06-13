import { useState } from "react";
import type { UniversityDetails } from "../../types";
import { AppDialog } from "../../../../../../components";
import UniversityDetailsDialogTitle from "./UniversityDetailsDialogTitle";
import UniversityDetailsDialogAction from "./UniversityDetailsDialogAction";
import UniversityDetailsDialogContent from "./UniversityDetailsDialogContent";

interface Props {
  id: string;
  open: boolean;
  handleClose: () => void;
}

const UniversityDetailsDialog = ({ id, open, handleClose }: Props) => {
  const [state] = useState<UniversityDetails>({
    id: id,
    aisheCode: "U-1041",
    name: "Sandip University",
    state: "Bihar",
    district: "Madhubani",
    website: "https://www.sandipuniversity.edu.in/sijoul",
    yearOfEstablishment: 2017,
    email: "admin@sandipuniversity.edu.in",
    contact: "91 8796587485",
    location: "Rural",
    status: "Pending",
    address: "Sijoul, near Mailam in the district of Madhubani, Bihar, 847235",
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
      title={<UniversityDetailsDialogTitle state={state} />}
      actions={<UniversityDetailsDialogAction handleClose={handleClose} />}
      content={<UniversityDetailsDialogContent data={state} />}
      sx={{ minHeight: 600, minWidth: 900 }}
      titleBgColor="var(--gray-100)"
      actionsBgColor="var(--gray-100)"
    />
  );
};

export default UniversityDetailsDialog;
