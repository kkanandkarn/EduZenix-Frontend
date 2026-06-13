import { AppDialog } from "../../../../../../components";
import OnboardingLinkDialogTitle from "./OnboardingLinkDialogTitle";
import OnboardingLinkDialogContent from "./OnboardingLinkDialogContent";

interface Props {
  id: string;
  open: boolean;
  handleClose: () => void;
}
const OnboardingLinkDialog = ({ open, handleClose }: Props) => {
  return (
    <AppDialog
      open={open}
      handleClose={handleClose}
      title={<OnboardingLinkDialogTitle />}
      content={<OnboardingLinkDialogContent />}
      sx={{ minHeight: 600, minWidth: 900 }}
    />
  );
};

export default OnboardingLinkDialog;
