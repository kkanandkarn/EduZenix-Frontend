import { useState } from "react";
import type { InviteUserState, InviteUserStateErrors } from "../types";
import { AppDialog, notifier } from "../../../components";
import InviteUserDialogTitle from "./InviteUserDialogTitle";
import InviteUserDialogAction from "./InviteUserDialogAction";
import InviteUserDialogContent from "./InviteUserDialogContent";

interface Props {
  open: boolean;
  onClose: () => void;
  mode: "add" | "view" | "edit";
  data?: InviteUserState;
}
const InviteUserDialog = ({ open, onClose, data }: Props) => {
  const [state, setState] = useState<InviteUserState>(
    data ?? {
      id: "",
      name: "",
      email: "",
      role: "",
      mfaRequired: false,
      status: "ACTIVE",
    },
  );
  const [errors, setErrors] = useState<InviteUserStateErrors>({
    name: "",
    email: "",
    role: "",
    mfaRequired: "",
    status: "",
  });
  const handleClose = () => {
    onClose();
  };
  const handleSubmit = () => {
    notifier.success("Invitation sent");
    onClose();
  };
  const handleChange = <K extends keyof InviteUserState>(
    name: K,
    value: InviteUserState[K],
  ) => {
    setState((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };
  return (
    <AppDialog
      open={open}
      handleClose={handleClose}
      title={<InviteUserDialogTitle />}
      actions={
        <InviteUserDialogAction
          handleSave={handleSubmit}
          handleClose={handleClose}
        />
      }
      content={
        <InviteUserDialogContent
          state={state}
          errors={errors}
          handleChange={handleChange}
        />
      }
      sx={{ minHeight: 400, minWidth: 600 }}
      titleBgColor="var(--gray-100)"
      actionsBgColor="var(--gray-100)"
    />
  );
};

export default InviteUserDialog;
