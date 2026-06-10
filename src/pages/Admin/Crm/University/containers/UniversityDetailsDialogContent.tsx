import { Box, Typography } from "@mui/material";
import React from "react";
import type { UniversityDetails } from "../types";
import type { SvgIconComponent } from "@mui/icons-material";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import LocationCityOutlinedIcon from "@mui/icons-material/LocationCityOutlined";
import DomainOutlinedIcon from "@mui/icons-material/DomainOutlined";

interface Props {
  data: UniversityDetails;
}
interface ChipProps {
  label: string;
  value: string;
  icon: SvgIconComponent;
}

const DetailsChip = ({ label, value, icon }: ChipProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 2,
          bgcolor: "var(--gray-100)",
        }}
      >
        {icon}
      </Box>
      <Box>
        <Typography variant="body2" sx={{ color: "var(--slate-600)" }}>
          {label}
        </Typography>
        <Typography variant="body2" sx={{ color: "var(--slate-600)" }}>
          {label}
        </Typography>
      </Box>
    </Box>
  );
};

const UniversityDetailsDialogContent = ({ data }: Props) => {
  const administrativeDetails = [
    {
      label: "State",
      value: data.state,
      icon: <MapOutlinedIcon sx={{ color: "var(--blue-200)" }} />,
    },
    {
      label: "District",
      value: data.district,
      icon: <LocationCityOutlinedIcon sx={{ color: "var(--blue-200)" }} />,
    },
    {
      label: "Location",
      value: data.location,
      icon: <DomainOutlinedIcon sx={{ color: "var(--blue-200)" }} />,
    },
  ];
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        px: 4,
        py: 1,
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "flex-start", width: "50%" }}>
        <Box
          sx={{
            borderLeft: "4px solid var(--blue-600)",
            px: 2,
          }}
        >
          <Typography variant="body1" sx={{ color: "var(--slate-600)" }}>
            Administrative Details
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "flex-start", width: "50%" }}>
        <Box
          sx={{
            borderLeft: "4px solid var(--blue-600)",
            px: 2,
          }}
        >
          <Typography variant="body1" sx={{ color: "var(--slate-600)" }}>
            Contact Information
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default UniversityDetailsDialogContent;
