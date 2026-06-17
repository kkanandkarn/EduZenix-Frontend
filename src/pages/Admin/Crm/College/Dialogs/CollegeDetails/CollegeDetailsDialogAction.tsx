import { Box } from "@mui/material";
import { AppButton } from "../../../../../../components";

interface Props {
  handleClose: () => void;
}
const CollegeDetailsDialogAction = ({ handleClose }: Props) => {
  return (
    <Box
      sx={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}
    >
      <AppButton label="Close" variant="outlined" onClick={handleClose} />
    </Box>
  );
};

export default CollegeDetailsDialogAction;
