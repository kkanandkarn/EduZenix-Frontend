import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import { AppButton, BreadCrumbs } from "../../components";
import { useNavigate, useParams } from "react-router-dom";
import SaveIcon from "@mui/icons-material/Save";
import EditIcon from "@mui/icons-material/Edit";
import type { RolesFormState } from "./types";
import { RolesInput, RolesPermissions } from "./containers";

const RolesFormPage = () => {
  const { mode, id } = useParams<{
    mode: "add" | "edit" | "view";
    id: string;
  }>();
  const navigate = useNavigate();
  const [state, setState] = useState<RolesFormState>({
    roleName: "",
    status: "ACTIVE",
    mfaRequired: false,
  });
  const [error, setErrors] = useState<{ roleName: string }>({
    roleName: "",
  });

  const handleChange = (
    name: keyof RolesFormState,
    value: string | number | boolean,
  ) => {
    setState((p: RolesFormState) => ({ ...p, [name]: value }));
  };

  const getHeaderText = () => {
    if (mode === "add") {
      return {
        title: "Add New Role",
        desc: "Set up a new role with permissions",
      };
    }
    if (mode === "edit") {
      return {
        title: "Edit Role Details",
        desc: "Configure role details and customize it's permissions",
      };
    }
    if (mode === "view") {
      return {
        title: "Role Details",
        desc: "Review the role information and assigned permissions.",
      };
    }
    return { title: "Role", desc: "" };
  };
  return (
    <Box sx={{ paddingY: 2, paddingX: 4 }}>
      {" "}
      <BreadCrumbs />
      <Box
        sx={{
          marginY: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography
            variant="h6"
            sx={{ fontWeight: "semibold", color: "var(--slate-800)" }}
          >
            {getHeaderText().title}
          </Typography>
          <Typography className="text-slate-600">
            {getHeaderText().desc}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <AppButton
            label={mode === "view" ? "Edit" : "Save"}
            startIcon={mode === "view" ? <EditIcon /> : <SaveIcon />}
            onClick={() => navigate("/roles")}
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: 2,
        }}
      >
        <RolesInput state={state} onChange={handleChange} errors={error} />
        <RolesPermissions />
      </Box>
    </Box>
  );
};

export default RolesFormPage;
