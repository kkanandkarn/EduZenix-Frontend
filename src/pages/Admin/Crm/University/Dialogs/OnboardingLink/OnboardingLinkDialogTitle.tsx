import { Box, Typography } from "@mui/material";

const OnboardingLinkDialogTitle = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <Typography
          variant="h6"
          sx={{ color: "var(--blue-600)", fontSize: 16 }}
        >
          Onboarding Link Management
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "var(--slate-600)", fontSize: 14 }}
        >
          Generate and track secureonboarding link for this institution
        </Typography>
      </Box>
    </Box>
  );
};

export default OnboardingLinkDialogTitle;
