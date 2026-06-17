import { useState } from "react";
import type { InstitutionDetails } from "../../types";
import { AppDialog } from "../../../../../../components";
import InstitutionDetailsDialogTitle from "./InstitutionDetailsDialogTitle";
import InstitutionDetailsDialogContent from "./InstitutionDetailsDialogContent";
import InstitutionDetailsDialogAction from "./InstitutionDetailsDialogAction";

interface Props {
  id: string;
  open: boolean;
  handleClose: () => void;
}
const InstitutionDetailsDialog = ({ id, open, handleClose }: Props) => {
  const [state] = useState<InstitutionDetails>({
    id: id,
    aisheCode: "S-16020",
    name: "GOVERNMENT POLYTECHANIC MADHUBANI",
    state: "Bihar",
    district: "Madhubani",
    website: null,
    yearOfEstablishment: 2014,
    email: null,
    contact: null,
    location: "Rural",
    standAloneType: "Technical/Polytechnic",
    management: "Private Aided (Government Aided)",
    status: "Pending",
    address: null,
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
      title={<InstitutionDetailsDialogTitle state={state} />}
      actions={<InstitutionDetailsDialogAction handleClose={handleClose} />}
      content={<InstitutionDetailsDialogContent data={state} />}
      sx={{ minHeight: 600, minWidth: 900 }}
      titleBgColor="var(--gray-100)"
      actionsBgColor="var(--gray-100)"
    />
  );
};

export default InstitutionDetailsDialog;
