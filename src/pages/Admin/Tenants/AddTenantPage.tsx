import { Box } from "@mui/material";
import { AppButton, TopBar } from "../../../components";
import { useState } from "react";
import type { AddTenantInput, AddTenantInputError } from "./types";
import { AddTenantDetails, AddTenantModules } from "./containers";
import SaveIcon from "@mui/icons-material/Save";
import { useNavigate } from "react-router-dom";

const AddTenantPage = () => {
  const navigate = useNavigate();
  const [state, setState] = useState<AddTenantInput>({
    tenantImage: "",
    tenantName: "",
    tenantType: "SCHOOL",
    pocName: "",
    pocEmail: "",
    billingCycle: "MONTHLY",
  });
  const [errors] = useState<AddTenantInputError>({
    tenantImage: "",
    tenantName: "",
    tenantType: "",
    pocName: "",
    pocEmail: "",
    billingCycle: "",
  });

  const handleChange = (name: keyof AddTenantInput, value: string) => {
    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <TopBar
        title="Add New Tenant"
        description="Set up a new tenant with their details and subscription plan"
        actions={
          <AppButton
            label="Save"
            startIcon={<SaveIcon />}
            onClick={() => navigate("/tenants")}
          />
        }
        back={{ name: "Tenant partners", route: "/tenants" }}
      />
      <Box sx={{ paddingY: 2, paddingX: 4 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "start",
            justifyContent: "center",
            gap: 2,
          }}
        >
          <AddTenantDetails
            state={state}
            handleChange={handleChange}
            errors={errors}
          />
          <AddTenantModules />
        </Box>
      </Box>
    </>
  );
};

export default AddTenantPage;
