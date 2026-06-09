import React from "react";
import { Box, Typography, Chip, Avatar, Paper } from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

const LeadsProfile = () => {
  const imageUrl =
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDklUm5Oj-UpaVKwAWjAQqCM5hPnaTxwJBjbbyHb9DwSvELLKRwJs9DggfU_kfrFc1iyJMUHZX92lwoH4uDUoJdCyJViX4rX0TNMLQRUUPoKoH6An4OOAylLKBOISRfOljwC1QrGZlI1z0c7yQIUJrB9wh1gKFygfdQ2baaxfVFTWQ6Z4xhqXBcHYhvhJUUdh2z9izSTcH47zqyJFMziQ7PRXH7Y5kUNdXcHbfqDQji_PYeBAicsMXlHScfBgIOYZosGmohTxRan2I";

  return (
    <Paper
      elevation={0}
      sx={{
        bgcolor: "white",
        borderRadius: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        py: 2,
        px: 2,
        my: 2,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        {/* Avatar / Profile Image */}
        <Box
          component="a"
          href={imageUrl}
          target="_blank"
          sx={{
            display: "block",
            width: 56,
            height: 56,
            border: "1px solid",
            borderColor: "grey.100",
            borderRadius: 2,
            overflow: "hidden",
            flexShrink: 0,
          }}
        >
          <Avatar
            src={imageUrl}
            alt="sara"
            variant="square"
            sx={{ width: "100%", height: "100%", borderRadius: 0 }}
          />
        </Box>

        {/* Info Section */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          {/* Name + Badge */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography
              variant="subtitle1"
              color="text.primary"
              sx={{ color: "#1e293b", fontWeight: 600 }}
            >
              Sarah Jenkins
            </Typography>
            <Chip
              label="Senior Counselor"
              size="small"
              sx={{
                bgcolor: "var(--green-500)",
                color: "white",
                fontSize: "0.65rem",
                height: 22,
                borderRadius: "999px",
                fontWeight: 500,
              }}
            />
          </Box>

          {/* Contact Details */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
            {/* Email */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <EmailOutlinedIcon
                sx={{ fontSize: 16, color: "text.secondary" }}
              />
              <Typography variant="caption" color="text.secondary">
                sarah.j@eduzenix.com
              </Typography>
            </Box>

            {/* Phone */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <PhoneOutlinedIcon
                sx={{ fontSize: 16, color: "text.secondary" }}
              />
              <Typography variant="caption" color="text.secondary">
                8965878965
              </Typography>
            </Box>

            {/* Location */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <LocationOnOutlinedIcon
                sx={{ fontSize: 16, color: "text.secondary" }}
              />
              <Typography variant="caption" color="text.secondary">
                A115, Sector 15, Noida, UP
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

export default LeadsProfile;
