import { Box, Typography } from "@mui/material";
import { BreadCrumbs } from "../../../components";
import { useState } from "react";
import type { AddTenantInput, AddTenantInputError } from "./types";
import { AddTenantDetails, AddTenantModules } from "./containers";

const AddTenantPage = () => {
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
    <Box sx={{ paddingY: 2, paddingX: 4 }}>
      <BreadCrumbs />
      <Box
        sx={{
          marginY: 2,
        }}
      >
        <Typography
          variant="h6"
          sx={{ fontWeight: "semibold", color: "var(--slate-800)" }}
        >
          Add New Tenant
        </Typography>
        <Typography className="text-slate-600">
          Set up a new tenant with their details and subscription plan
        </Typography>
      </Box>
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
  );
};

export default AddTenantPage;
