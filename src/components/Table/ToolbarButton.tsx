import { Button } from "@mui/material";
import type { ReactNode } from "react";
import { toolbarButtonSx } from "./tableStyles";

interface Props {
  label: string;
  startIcon: ReactNode;
  /** Highlights the button while its selection is applied. */
  active?: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

/**
 * Toolbar action button. Unlike AppButton it forwards the click event, which the
 * Sort and Columns menus need as their popover anchor.
 */
const ToolbarButton = ({ label, startIcon, active, onClick }: Props) => {
  return (
    <Button
      variant="text"
      startIcon={startIcon}
      onClick={onClick}
      sx={toolbarButtonSx(active)}
    >
      {label}
    </Button>
  );
};

export default ToolbarButton;
