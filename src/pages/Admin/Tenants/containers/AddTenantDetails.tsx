import { Box, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import type { AddTenantInput, AddTenantInputError } from "../types";
import { AppButton, Input, TabSelector } from "../../../../components";

interface Props {
  state: AddTenantInput;
  errors: AddTenantInputError;
  handleChange: (name: keyof AddTenantInput, value: string) => void;
}
const AddTenantDetails = ({ state, handleChange, errors }: Props) => {
  const [imageMsg, setImageMsg] = useState("Upload Logo");
  const [imageError, setImageError] = useState(false);
  const TENANT_TYPES = [
    { value: "SCHOOL", label: "School" },
    { value: "COLLEGE", label: "College" },
    { value: "UNIVERSITY", label: "University" },
    { value: "OTHER_INSTITUTION", label: "Other" },
  ] as const;
  const BILLING_CYCLES = [
    { value: "MONTHLY", label: "Monthly" },
    { value: "QUARTERLY", label: "Quarterly" },
    { value: "YEARLY", label: "Yearly" },
  ] as const;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const fileType = file.type.startsWith("image/");
      const fileSize = file.size / 1024 / 1024;

      if (!fileType) {
        setImageError(true);
        handleChange("tenantImage", "");
        setImageMsg("Invalid file type");
        return;
      }

      if (fileSize > 5) {
        setImageError(true);
        handleChange("tenantImage", "");
        setImageMsg("File size exceeds 5 MB");
        return;
      }
      setImageError(false);
      setImageMsg("");

      handleChange("tenantImage", URL.createObjectURL(file));
    }
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    handleChange(name as keyof AddTenantInput, value);
  };
  return (
    <Box
      sx={{
        width: "50%",
        py: 2,
        px: 4,
        bgcolor: "white",
        borderRadius: "14px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: 4,
          justifyContent: "center",
          alignItems: "center",
          mt: 1,
        }}
      >
        <Box
          sx={{
            borderWidth: "2px",
            height: 120,
            width: 120,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderColor: imageError ? "var(--red-500)" : "#d1d5db",
            border: "dashed",
            borderRadius: "14px",
          }}
        >
          {state.tenantImage ? (
            <Box
              component="img"
              src={state.tenantImage}
              alt="Preview"
              sx={{
                height: "100%",
                width: "100%",
                objectFit: "contain",
                borderRadius: "14px",
              }}
            />
          ) : (
            <Typography
              variant="body2"
              sx={{
                p: 1,
                textAlign: "center",
                color: imageError ? "error.main" : "text.secondary",
              }}
            >
              {imageMsg}
            </Typography>
          )}
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <AppButton
          label={state.tenantImage ? "Change File" : "Choose File"}
          onClick={() => {
            // ✅ no event param needed
            document.getElementById("fileInput")?.click(); // ✅ optional chaining for safety
          }}
          sx={{ mt: 2 }}
        />
        <input
          id="fileInput"
          type="file"
          onChange={handleFileChange}
          accept="image/*"
          style={{ display: "none" }}
        />
      </Box>
      <Stack spacing={1} sx={{ mt: 4 }}>
        <Input
          type={"text"}
          label="Tenant Name"
          name="tenantName"
          value={state.tenantName}
          onChange={onChange}
          error={errors.tenantName}
          placeholder="e.g. ABC Insitution"
          required={true}
        />

        <Input
          type={"text"}
          label="POC Name"
          name="pocName"
          value={state.pocName}
          onChange={onChange}
          error={errors.pocName}
          placeholder="e.g. John Doe"
          required={true}
        />
        <Input
          type={"text"}
          label="POC Email"
          name="pocEmail"
          value={state.pocEmail}
          onChange={onChange}
          error={errors.pocEmail}
          placeholder="e.g. john.doe@insitution.edu.in"
          required={true}
        />
        <TabSelector
          name="tenantType"
          value={state.tenantType}
          handleChange={handleChange}
          options={TENANT_TYPES}
          label="Tenant Type"
        />
        <TabSelector
          name="billingCycle"
          value={state.billingCycle}
          handleChange={handleChange}
          options={BILLING_CYCLES}
          label="Billing Cycle"
        />
      </Stack>
    </Box>
  );
};

export default AddTenantDetails;
