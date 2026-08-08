import { Box } from "@mui/material";
import { AppButton } from "../../../components";
import SendIcon from "@mui/icons-material/Send";

interface Props {
  handleClose: () => void;
  handleSave: () => void;
}
const InviteUserDialogAction = ({ handleSave, handleClose }: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        gap: 3,
        px: 4,
      }}
    >
      <AppButton label="Cancel" variant="outlined" onClick={handleClose} />
      <AppButton
        label="Send Invitation"
        variant="contained"
        onClick={handleSave}
        startIcon={<SendIcon />}
      />
    </Box>
  );
};

export default InviteUserDialogAction;
