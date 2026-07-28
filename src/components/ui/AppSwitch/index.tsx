import * as React from "react";
import { styled } from "@mui/material/styles";
import Switch, { type SwitchProps } from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";

// Android 12 style switch (from MUI docs)
const Android12Switch = styled(Switch)(({ theme }) => ({
  padding: 8,
  "& .MuiSwitch-track": {
    borderRadius: 22 / 2,
    "&:before, &:after": {
      content: '""',
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      width: 16,
      height: 16,
    },
    "&:before": {
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 -960 960 960"><path fill="${encodeURIComponent(
        theme.palette.getContrastText(theme.palette.primary.main),
      )}" d="M421-421H150v-60h271v-271h60v271h271v60H481v271h-60v-271Z"/></svg>')`,
      left: 12,
    },
    "&:after": {
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 -960 960 960"><path fill="${encodeURIComponent(
        theme.palette.getContrastText(theme.palette.primary.main),
      )}" d="M256-200 200-256l224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>')`,
      right: 12,
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "none",
    width: 16,
    height: 16,
    margin: 2,
  },
}));

export interface AppSwitchProps
  extends Omit<SwitchProps, "checked" | "onChange" | "defaultChecked"> {
  /** Current checked state (controlled) */
  checked: boolean;
  /** Called with the new checked value whenever the switch is toggled */
  onChecked: (value: boolean) => void;
  /** Label text shown next to the switch */
  label?: React.ReactNode;
  /** Position of the label relative to the switch */
  labelPlacement?: "end" | "start" | "top" | "bottom";
}

/**
 * A generic, reusable Switch component built on MUI's "Android 12" styled
 * Switch, wrapped in a FormControlLabel.
 *
 * Usage:
 * <AppSwitch
 *   checked={isEnabled}
 *   onChecked={(value) => setIsEnabled(value)}
 *   label="Enable notifications"
 * />
 */
const AppSwitch: React.FC<AppSwitchProps> = ({
  checked,
  onChecked,
  label,
  labelPlacement = "end",
  ...switchProps
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChecked(event.target.checked);
  };

  const switchElement = (
    <Android12Switch
      checked={checked}
      onChange={handleChange}
      {...switchProps}
    />
  );

  if (!label) {
    return switchElement;
  }

  return (
    <FormControlLabel
      control={switchElement}
      label={label}
      labelPlacement={labelPlacement}
    />
  );
};

export default AppSwitch;
