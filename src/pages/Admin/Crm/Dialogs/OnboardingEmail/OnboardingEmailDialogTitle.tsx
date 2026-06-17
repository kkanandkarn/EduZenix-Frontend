import { Box, Typography } from "@mui/material";

const OnboardingEmailDialogTitle = () => {
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
          Send Onboarding Invite
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "var(--slate-600)", fontSize: 14 }}
        >
          Send a secure onboarding email invitation via email to the
          institution's administrator
        </Typography>
      </Box>
    </Box>
  );
};

export default OnboardingEmailDialogTitle;
