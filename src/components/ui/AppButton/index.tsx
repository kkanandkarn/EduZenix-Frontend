import { Button } from "@mui/material";
import React from "react";
import type { ButtonProps } from "../type";

const AppButton = (props: ButtonProps) => {
  return (
    <Button
      variant={props.variant ?? "contained"}
      startIcon={props.startIcon}
      fullWidth={props.fullWidth ?? false}
      disabled={props.disabled}
      onClick={props.onClick}
      sx={{ textTransform: props.textTransform ?? "capitalize" }}
    >
      {props.label}
    </Button>
  );
};

export default AppButton;
