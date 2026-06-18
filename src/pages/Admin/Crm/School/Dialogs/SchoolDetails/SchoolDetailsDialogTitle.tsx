import { Box, Chip, Typography } from "@mui/material";
import type { SchoolDetails, SchoolStatus } from "../../types";

interface Props {
  state: SchoolDetails;
}
const SchoolDetailsDialogTitle = ({ state }: Props) => {
  const getChipColors = (status: SchoolStatus) => {
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
          {state.schoolName}
        </Typography>
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
          label={state.udiseschCode}
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

export default SchoolDetailsDialogTitle;
