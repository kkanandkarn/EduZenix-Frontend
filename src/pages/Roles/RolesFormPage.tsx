import { Box } from "@mui/material";
import { useState } from "react";
import { AppButton, TopBar } from "../../components";
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
    <>
      <TopBar
        title={getHeaderText().title}
        description={getHeaderText().desc}
        actions={
          <AppButton
            label={mode === "view" ? "Edit" : "Save"}
            startIcon={mode === "view" ? <EditIcon /> : <SaveIcon />}
            onClick={() => navigate("/roles")}
          />
        }
        back={{ name: "Roles & Permissions", route: "/roles" }}
      />
      <Box sx={{ paddingY: 2, paddingX: 4 }}>
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
    </>
  );
};

export default RolesFormPage;
