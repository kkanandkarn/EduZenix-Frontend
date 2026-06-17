import OnboardingEmailDialogTitle from "./OnboardingEmailDialogTitle";
import OnboardingEmailContent from "./OnboardingEmailContent";
import { AppDialog } from "../../../../../components";

interface Props {
  id: string;
  open: boolean;
  handleClose: () => void;
}
const OnboardingEmailDialog = ({ open, handleClose }: Props) => {
  return (
    <AppDialog
      open={open}
      handleClose={handleClose}
      title={<OnboardingEmailDialogTitle />}
      content={<OnboardingEmailContent />}
      sx={{ minHeight: 600, minWidth: 1000 }}
    />
  );
};

export default OnboardingEmailDialog;
