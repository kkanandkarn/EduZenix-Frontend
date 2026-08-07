import {
  Box,
  Checkbox,
  Divider,
  FormControlLabel,
  Paper,
  Typography,
} from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import { useState } from "react";
import { permissions } from "./data";

const MODULE_ACTIONS = [
  { key: "add", label: "Add" },
  { key: "view", label: "View" },
  { key: "edit", label: "Edit" },
  { key: "delete", label: "Delete" },
  { key: "export", label: "Export" },
] as const;

type ActionKey = (typeof MODULE_ACTIONS)[number]["key"];

const RolePermissions = () => {
  // moduleId -> list of selected action keys
  const [selected, setSelected] = useState<Record<string, ActionKey[]>>({});

  const getSelected = (moduleId: string) => selected[moduleId] ?? [];

  const toggleAction = (moduleId: string, action: ActionKey) => {
    setSelected((prev) => {
      const current = prev[moduleId] ?? [];
      return {
        ...prev,
        [moduleId]: current.includes(action)
          ? current.filter((item) => item !== action)
          : [...current, action],
      };
    });
  };

  const toggleModule = (moduleId: string, checked: boolean) => {
    setSelected((prev) => ({
      ...prev,
      [moduleId]: checked ? MODULE_ACTIONS.map((action) => action.key) : [],
    }));
  };

  return (
    <Box
      sx={{
        width: "60%",
        borderRadius: "14px",
      }}
    >
      {permissions.map((permission) => {
        // Strip trailing "Icon" since @mui/icons-material exports names without it
        const iconName = permission.icon.replace(/Icon$/, "");
        const IconComponent = MuiIcons[iconName as keyof typeof MuiIcons];

        const selectedActions = getSelected(permission.id);
        const allChecked = selectedActions.length === MODULE_ACTIONS.length;
        const someChecked = selectedActions.length > 0 && !allChecked;

        return (
          <Paper
            elevation={0}
            key={permission.id}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
              mb: 2,
              width: "100%",
              bgcolor: "white",
              p: 2,
              borderRadius: "8px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "start",
                justifyContent: "space-between",
                gap: 2,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "start",
                  gap: 2,
                }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "var(--blue-50)",
                  }}
                >
                  {" "}
                  {IconComponent ? (
                    <IconComponent
                      sx={{
                        fontSize: 28,
                        color: "primary.main",
                      }}
                    />
                  ) : (
                    <MuiIcons.Help
                      sx={{
                        fontSize: 28,
                        color: "text.disabled",
                      }}
                    />
                  )}
                </Paper>
                <Box>
                  {" "}
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: "semibold", color: "var(--slate-800)" }}
                  >
                    {permission.moduleViewName}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: "0.5",
                      fontWeight: "semibold",
                      color: "var(--slate-600)",
                    }}
                  >
                    {permission.description}
                  </Typography>
                </Box>
              </Box>
              <Checkbox
                size="small"
                checked={allChecked}
                indeterminate={someChecked}
                onChange={(event) =>
                  toggleModule(permission.id, event.target.checked)
                }
                slotProps={{
                  input: {
                    "aria-label": `Select all ${permission.moduleViewName} permissions`,
                  },
                }}
                sx={{ p: 0.5 }}
              />
            </Box>

            <Divider sx={{ my: 1 }} />

            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                columnGap: 2,
              }}
            >
              {MODULE_ACTIONS.map((action) => (
                <FormControlLabel
                  key={action.key}
                  control={
                    <Checkbox
                      size="small"
                      checked={selectedActions.includes(action.key)}
                      onChange={() => toggleAction(permission.id, action.key)}
                    />
                  }
                  label={
                    <Typography
                      variant="body2"
                      sx={{ color: "var(--slate-600)" }}
                    >
                      {action.label}
                    </Typography>
                  }
                />
              ))}
            </Box>
          </Paper>
        );
      })}
    </Box>
  );
};

export default RolePermissions;
