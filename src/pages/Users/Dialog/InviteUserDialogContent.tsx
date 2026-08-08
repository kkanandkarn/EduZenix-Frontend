import React from "react";
import type { InviteUserState, InviteUserStateErrors } from "../types";
import { Box, Chip } from "@mui/material";
import { AppSwitch, Input } from "../../../components";
import SingleSelect from "../../../components/ui/Input/SingleSelect";

interface Props {
  state: InviteUserState;
  errors: InviteUserStateErrors;
  handleChange: <K extends keyof InviteUserState>(
    name: K,
    value: InviteUserState[K],
  ) => void;
}
const InviteUserDialogContent = ({ state, errors, handleChange }: Props) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChange(e.target.name as keyof InviteUserState, e.target.value);
  };
  const roles = [
    {
      id: "cmc8k2x9a0001l704f7v1h2a3",
      roleName: "Admin",
      roleType: "admin",
      totalUsers: 1,
      status: "ACTIVE",
      createdAt: "2026-06-20T12:36:58.761Z",
    },
    {
      id: "cmc8k2x9a0002l704g8w2i3b4",
      roleName: "Accountant",
      roleType: "general",
      totalUsers: 8,
      status: "ACTIVE",
      createdAt: "2026-06-20T12:36:58.761Z",
    },
    {
      id: "cmc8k2x9a0003l704h9x3j4c5",
      roleName: "HR Manager",
      roleType: "general",
      totalUsers: 5,
      status: "ACTIVE",
      createdAt: "2026-06-21T09:15:22.134Z",
    },
    {
      id: "cmc8k2x9a0004l704i0y4k5d6",
      roleName: "Finance Manager",
      roleType: "general",
      totalUsers: 4,
      status: "ACTIVE",
      createdAt: "2026-06-21T11:45:10.891Z",
    },
    {
      id: "cmc8k2x9a0005l704j1z5l6e7",
      roleName: "Admissions Manager",
      roleType: "general",
      totalUsers: 7,
      status: "HOLD",
      createdAt: "2026-06-22T08:30:44.123Z",
    },
    {
      id: "cmc8k2x9a0006l704k2a6m7f8",
      roleName: "Faculty Coordinator",
      roleType: "general",
      totalUsers: 12,
      status: "HOLD",
      createdAt: "2026-06-22T14:20:18.456Z",
    },
    {
      id: "cmc8k2x9a0007l704l3b7n8g9",
      roleName: "Library Manager",
      roleType: "general",
      totalUsers: 3,
      status: "ACTIVE",
      createdAt: "2026-06-23T10:05:55.678Z",
    },
    {
      id: "cmc8k2x9a0008l704m4c8o9h0",
      roleName: "Transport Manager",
      roleType: "general",
      totalUsers: 2,
      status: "ACTIVE",
      createdAt: "2026-06-23T16:12:39.012Z",
    },
    {
      id: "cmc8k2x9a0009l704n5d9p0i1",
      roleName: "Student Counselor",
      roleType: "general",
      totalUsers: 9,
      status: "ACTIVE",
      createdAt: "2026-06-24T09:50:27.345Z",
    },
    {
      id: "cmc8k2x9a0010l704o6e0q1j2",
      roleName: "Receptionist",
      roleType: "general",
      totalUsers: 6,
      status: "ACTIVE",
      createdAt: "2026-06-24T15:40:12.789Z",
    },
  ];
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          px: 2,
          py: 1,
          width: "100%",
        }}
      >
        <Input
          type={"text"}
          label="Name"
          name="name"
          value={state.name}
          onChange={onChange}
          error={errors.name}
          placeholder="e.g. John Doe"
          required={true}
        />
        <Input
          type={"text"}
          label="Email"
          name="email"
          value={state.email}
          onChange={onChange}
          error={errors.email}
          placeholder="e.g. john.doe@example.com"
          required={true}
        />
        <SingleSelect
          type="SingleSelect"
          options={roles.map((role) => ({
            value: role.id,
            label: role.roleName,
          }))}
          value={state.role}
          label={"Role"}
          placeholder={"Select Role"}
          onChange={(value) => handleChange("role", value)}
          required={true}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "start",
          justifyContent: "start",
          mt: 2,
          px: 4,
          width: "100%",
        }}
      >
        <AppSwitch
          checked={state.mfaRequired}
          onChecked={(value) => handleChange("mfaRequired", value)}
          label={"Require MFA"}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "start",
          justifyContent: "start",
          px: 2,
          width: "100%",
        }}
      >
        {state.mfaRequired === true && (
          <Chip
            label={
              "Multi-factor authentication (MFA) will be required for this user to log in securely."
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
    </Box>
  );
};

export default InviteUserDialogContent;
