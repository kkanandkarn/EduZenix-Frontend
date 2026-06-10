import React from "react";
import type { UniversityDetails, UniversityStatus } from "../types";
import { Box, Chip, Link, Typography } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

interface Props {
  state: UniversityDetails;
}
const UniversityDetailsDialogTitle = ({ state }: Props) => {
  const getChipColors = (status: UniversityStatus) => {
    if (status === "Pending")
      return { bgcolor: "var(--yellow-100)", color: "var(--yellow-800)" };
    if (status === "Requested To Admin")
      return { bgcolor: "var(--blue-100)", color: "var(--blue-700)" };
    if (status === "Rejected")
      return { bgcolor: "var(--red-100)", color: "var(--red-700)" };
    return { bgcolor: "var(--green-100)", color: "var(--green-700)" }; // Approved
  };
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <Typography variant="h6" sx={{ color: "var(--slate-600)" }}>
          {state.name}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <LanguageIcon sx={{ fontSize: "14px" }} />
            {state.website ? (
              <Link
                href={state.website}
                target="_blank"
                rel="noopener noreferrer"
                underline="hover"
                sx={{ fontSize: "12px" }}
              >
                {state.website}
              </Link>
            ) : (
              <Typography variant="body2">{"-"}</Typography>
            )}
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <CalendarTodayIcon sx={{ fontSize: "14px" }} />

            <Typography variant="caption">
              Established: {state.yearOfEstablishment}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          mr: 4,
          gap: 2,
        }}
      >
        <Chip
          label={state.aisheCode}
          size="medium"
          sx={{
            bgcolor: "var(--blue-200)",
            color: "var(--blue-600)",
            fontSize: "14px",
            height: 30,
            borderRadius: "999px",
            fontWeight: 500,
          }}
        />
        <Chip
          label={state.status}
          size="medium"
          sx={{
            ...getChipColors(state.status),
            fontSize: "14px",
            height: 30,
            borderRadius: "999px",
            fontWeight: 500,
          }}
        />
      </Box>
    </Box>
  );
};

export default UniversityDetailsDialogTitle;
