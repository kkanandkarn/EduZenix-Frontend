import type { FC } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import { APP_NAME, LOGO_IMAGE } from "../../utils/constant";

interface PageLoaderProps {
  message?: string;
}

// Renders outside the app shell (before the theme provider mounts), so it
// carries its own colours instead of leaning on the theme.
const COLORS = {
  bg: "#F5F6F9",
  glow: "radial-gradient(ellipse at center, rgba(99, 102, 241, 0.18) 0%, rgba(99, 102, 241, 0.06) 40%, transparent 70%)",
  card: "#FFFFFF",
  title: "#1A1A2E",
  muted: "#9CA3AF",
  spinner: "#1976D2",
};

/** Full screen splash shown while the app bootstraps (e.g. fetching the profile). */
const PageLoader: FC<PageLoaderProps> = ({
  message = "Setting things up for you...",
}) => {
  return (
    <Box
      role="status"
      aria-live="polite"
      sx={{
        position: "fixed",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: COLORS.bg,
        px: 2,
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          background: COLORS.glow,
          pointerEvents: "none",
        },
      }}
    >
      <Box
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 4,
          width: "100%",
          maxWidth: 370,
          py: 7.5,
          px: 4,
          bgcolor: COLORS.card,
          borderRadius: 4,
          boxShadow: "0 10px 40px rgba(15, 23, 42, 0.06)",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.25 }}>
          <Box
            component="img"
            src={LOGO_IMAGE}
            alt={APP_NAME}
            sx={{ height: 40, width: "auto" }}
          />
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: "1.75rem",
              color: COLORS.title,
              lineHeight: 1,
            }}
          >
            {APP_NAME}
          </Typography>
        </Box>

        <CircularProgress
          size={36}
          thickness={3}
          sx={{ color: COLORS.spinner }}
        />

        <Typography sx={{ color: COLORS.muted, fontSize: "1rem" }}>
          {message}
        </Typography>
      </Box>
    </Box>
  );
};

export default PageLoader;
