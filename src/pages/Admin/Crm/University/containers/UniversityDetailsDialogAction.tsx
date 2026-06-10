import { Box } from "@mui/material";
import React from "react";
import { AppButton } from "../../../../../components";

interface Props {
  handleClose: () => void;
}
const UniversityDetailsDialogAction = ({ handleClose }: Props) => {
  return (
    <Box
      sx={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}
    >
      <AppButton label="Close" variant="outlined" onClick={handleClose} />
    </Box>
  );
};

export default UniversityDetailsDialogAction;
