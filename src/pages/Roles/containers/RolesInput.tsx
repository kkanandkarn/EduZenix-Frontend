import React from "react";
import { Input } from "../../../components";
import { Box, Stack, Typography } from "@mui/material";
import type { RolesFormState } from "../types";
import SingleSelect from "../../../components/ui/Input/SingleSelect";

interface Props {
  state: RolesFormState;
  errors: {
    roleName: string;
  };
  onChange: (name: keyof RolesFormState, value: string | number) => void;
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
        width: "30%",
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
      </Box>
    </Stack>
  );
};

export default RolesInput;
