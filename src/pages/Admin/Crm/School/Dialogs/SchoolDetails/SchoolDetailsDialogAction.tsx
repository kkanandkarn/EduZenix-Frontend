import { Box } from "@mui/material";
import { AppButton } from "../../../../../../components";

interface Props {
  handleClose: () => void;
}
const SchoolDetailsDialogAction = ({ handleClose }: Props) => {
  return (
    <Box
      sx={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}
    >
      <AppButton label="Close" variant="outlined" onClick={handleClose} />
    </Box>
  );
};

export default SchoolDetailsDialogAction;
