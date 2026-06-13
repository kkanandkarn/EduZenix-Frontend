import { Box, Typography } from "@mui/material";
import { useState } from "react";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import { AppButton } from "../../../../../../components";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";

const GenerateOnboardingLinkContainer = () => {
  const [link, setLink] = useState<string>("");
  const [expiredTime, setExpiredTime] = useState<string>("");
  const generateLink = () => {
    setLink("http://localhost:3000/onboarding/pst459mq");

    const expiryDate = new Date();
    expiryDate.setHours(expiryDate.getHours() + 24);

    const formattedDate = expiryDate.toLocaleString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

    // Convert "13 May 2026, 02:30 pm" → "13 May 2026, 02:30 PM"
    setExpiredTime(formattedDate.replace("am", "AM").replace("pm", "PM"));
  };
  return (
    <Box
      sx={{
        bgcolor: "var(--gray-100)",
        borderRadius: "14px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        py: 3,
      }}
    >
      <AppButton
        label="Generate New Onboarding Link"
        startIcon={<InsertLinkIcon />}
        onClick={generateLink}
      />
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        {link ? (
          <Box sx={{ mt: 1, display: "flex", alignItems: "center", gap: 1 }}>
            <AppButton
              variant="text"
              startIcon={
                <ContentCopyRoundedIcon
                  sx={{ fontSize: "14px", color: "var(--blue-600)" }}
                />
              }
              label="Copy Link"
            />
            <Typography
              variant="body2"
              sx={{
                fontSize: "14px",
                display: "flex",
                alignItems: "center",
                color: "var(--slate-600)",
              }}
            >
              Expired At: {expiredTime}
            </Typography>
          </Box>
        ) : (
          <Box sx={{ mt: 2, display: "flex", alignItems: "center", gap: 1 }}>
            <InfoOutlinedIcon
              sx={{ fontSize: "14px", color: "var(--slate-600)" }}
            />
            <Typography
              variant="body2"
              sx={{
                fontSize: "14px",
                display: "flex",
                alignItems: "center",
                color: "var(--slate-600)",
              }}
            >
              Note: New links are valid for 24 hours
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default GenerateOnboardingLinkContainer;
