import * as React from "react";
import { styled } from "@mui/material/styles";
import Switch, { type SwitchProps } from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";

// Android 12 style switch (from MUI docs)
const IOSSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: "#65C466",
        opacity: 1,
        border: 0,
        ...theme.applyStyles("dark", {
          backgroundColor: "#2ECA45",
        }),
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color: theme.palette.grey[100],
      ...theme.applyStyles("dark", {
        color: theme.palette.grey[600],
      }),
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: 0.7,
      ...theme.applyStyles("dark", {
        opacity: 0.3,
      }),
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: "#E9E9EA",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
    ...theme.applyStyles("dark", {
      backgroundColor: "#39393D",
    }),
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
    <IOSSwitch checked={checked} onChange={handleChange} {...switchProps} />
  );

  if (!label) {
    return switchElement;
  }

  return (
    <FormControlLabel
      control={switchElement}
      label={label}
      labelPlacement={labelPlacement}
      sx={{ gap: 1, color: "var(--gray-600)" }}
    />
  );
};

export default AppSwitch;
