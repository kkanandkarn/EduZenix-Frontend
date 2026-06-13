import { Box, Typography } from "@mui/material";
import React from "react";

import OnboardingLinkTable from "./OnboardingLinkTable";
import GenerateOnboardingLinkContainer from "./GenerateOnboardingLinkContainer";

const OnboardingLinkDialogContent = () => {
  return (
    <Box sx={{ px: 2 }}>
      <GenerateOnboardingLinkContainer />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          mt: 2,
        }}
      >
        <Typography variant="body2">Onboarding Link History</Typography>
        <Box
          component="span"
          sx={{
            px: 1,
            py: 0.25,
            minWidth: 24,
            textAlign: "center",
            bgcolor: "var(--blue-100)",
            color: "var(--blue-600)",
            borderRadius: "999px",
            fontSize: "0.75rem",
            fontWeight: 600,
            lineHeight: 1.5,
          }}
        >
          5
        </Box>
      </Box>

      <OnboardingLinkTable />
    </Box>
  );
};

export default OnboardingLinkDialogContent;
