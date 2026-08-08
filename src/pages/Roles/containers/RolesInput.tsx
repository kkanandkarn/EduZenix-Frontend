import React from "react";
import { AppSwitch, Input } from "../../../components";
import { Box, Chip, Stack, Typography } from "@mui/material";
import type { RolesFormState } from "../types";
import SingleSelect from "../../../components/ui/Input/SingleSelect";

interface Props {
  state: RolesFormState;
  errors: {
    roleName: string;
  };
  onChange: (
    name: keyof RolesFormState,
    value: string | number | boolean,
  ) => void;
}
const RolesInput = ({ state, onChange, errors }: Props) => {
  const statusOptions = [
    { value: "ACTIVE", label: "Active" },
    { value: "HOLD", label: "Hold" },
  ];

  return (
    <Stack
      spacing={1}
      sx={{
        px: 4,
        py: 2,
        width: "40%",
        bgcolor: "white",
        borderRadius: "16px",
      }}
    >
      <Typography variant="h6">Role Details</Typography>
      <Box sx={{ py: 2 }}>
        <Input
          type={"text"}
          label="Role Name"
          name="roleName"
          value={state.roleName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onChange("roleName", e.target.value)
          }
          error={errors.roleName}
          placeholder="e.g. Admin"
          required={true}
        />

        <SingleSelect
          type="SingleSelect"
          options={statusOptions}
          value={state.status}
          label={"Status"}
          placeholder={"Select status"}
          onChange={(value) => onChange("status", value)}
        />
        {state.status === "HOLD" && (
          <Chip
            label={"New users will not be assigned to this role"}
            size="small"
            sx={{
              fontWeight: 600,
              mt: 2,
              fontSize: "11px",
              color: "var(--yellow-700)",
              backgroundColor: "var(--yellow-50)",
              border: "1px solid",
              borderColor: "var(--yellow-200)",
              maxWidth: "100%", // Add this
              height: "auto", // Add this to allow height to adjust
              "& .MuiChip-label": {
                whiteSpace: "normal", // Add this to allow text wrapping
                display: "block",
                padding: "8px 12px", // Adjust padding for better appearance
              },
            }}
          />
        )}
        <Box sx={{ px: 1, mt: 2 }}>
          <AppSwitch
            checked={state.mfaRequired}
            onChecked={(value) => onChange("mfaRequired", value)}
            label={"Require MFA"}
          />
        </Box>
        {state.mfaRequired === true && (
          <Chip
            label={
              "Multi-factor authentication (MFA) will be required for users assigned to this role to log in securely."
            }
            size="small"
            sx={{
              fontWeight: 600,
              mt: 2,
              fontSize: "11px",
              color: "var(--yellow-700)",
              backgroundColor: "var(--yellow-50)",
              border: "1px solid",
              borderColor: "var(--yellow-200)",
              maxWidth: "100%", // Add this
              height: "auto", // Add this to allow height to adjust
              "& .MuiChip-label": {
                whiteSpace: "normal", // Add this to allow text wrapping
                display: "block",
                padding: "8px 12px", // Adjust padding for better appearance
              },
            }}
          />
        )}
      </Box>
    </Stack>
  );
};

export default RolesInput;
