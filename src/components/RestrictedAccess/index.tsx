import { useState } from "react";
import type { FC, ReactNode } from "react";
import { Box, Button, Link, Stack, Typography } from "@mui/material";
import AndroidIcon from "@mui/icons-material/Android";
import AppleIcon from "@mui/icons-material/Apple";
import DesktopWindowsIcon from "@mui/icons-material/DesktopWindows";
import PublicIcon from "@mui/icons-material/Public";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";
import { LOGO_IMAGE } from "../../utils/constant";
import type { BlockReason } from "../../hooks/useDeviceGuard";

interface RestrictedAccessProps {
  width: number;
  reason: BlockReason;
}

// Dark palette for the block screen — it renders outside the app shell, so it
// carries its own colours instead of leaning on the theme.
const COLORS = {
  bg: "linear-gradient(135deg, #111827 0%, #0F172A 100%)",
  panel: "rgba(31, 41, 55, 0.5)",
  panelBorder: "rgba(55, 65, 81, 0.5)",
  storeCard: "linear-gradient(90deg, #1F2937 0%, #111827 100%)",
  storeCardHover: "linear-gradient(90deg, #374151 0%, #1F2937 100%)",
  storeBorder: "#374151",
  alertBg: "rgba(59, 130, 246, 0.1)",
  alertBorder: "rgba(59, 130, 246, 0.2)",
  accent: "#60A5FA",
  accentSoft: "rgba(59, 130, 246, 0.2)",
  white: "#FFFFFF",
  textPrimary: "#E2E8F0",
  textMuted: "#94A3B8",
  textFaint: "#64748B",
  footerBorder: "#1F2937",
  warn: "#F59E0B",
};

/** What the guard matched on, phrased for the person reading the screen. */
const REASON_MESSAGE: Record<Exclude<BlockReason, null>, string> = {
  "mobile-os":
    "We detected a phone or tablet. Eduzenix ERP requires a desktop for optimal functionality — use our mobile app for on-the-go access.",
  "touch-input":
    "We detected a touch-only device. Eduzenix ERP needs a mouse or trackpad — use our mobile app for on-the-go access.",
  "narrow-viewport":
    "This window is narrower than the 1024px Eduzenix ERP needs. Maximise it on a desktop, or use our mobile app.",
};

/** Short tag for the diagnostic line. */
const REASON_TAG: Record<Exclude<BlockReason, null>, string> = {
  "mobile-os": "mobile_os",
  "touch-input": "touch_input",
  "narrow-viewport": "narrow_viewport",
};

const FEATURES = [
  "Advanced dashboard controls and analytics",
  "Multi-window workflow and data comparison",
  "Full-featured reporting and data visualization",
];

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.eduzenix";
const APP_STORE_URL = "https://apps.apple.com/app/eduzenix-erp";
const SUPPORT_EMAIL = "support@eduzenix.com";

const footerLinkSx = {
  fontSize: "0.75rem",
  color: COLORS.textFaint,
  textDecoration: "none",
  transition: "color 0.2s",
  "&:hover": { color: COLORS.accent },
};

interface StoreCardProps {
  href: string;
  icon: ReactNode;
  iconBg: string;
  caption: string;
  title: string;
  hoverBorder: string;
  badgeColor: string;
  badgeBg: string;
}

/** One app-store row: icon tile, two-line label and a "Free" badge. */
const StoreCard: FC<StoreCardProps> = ({
  href,
  icon,
  iconBg,
  caption,
  title,
  hoverBorder,
  badgeColor,
  badgeBg,
}) => (
  <Box
    component="a"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    sx={{
      display: "block",
      textDecoration: "none",
      background: COLORS.storeCard,
      border: `1px solid ${COLORS.storeBorder}`,
      borderRadius: "12px",
      p: 2,
      transition: "all 0.2s",
      "&:hover": {
        borderColor: hoverBorder,
        background: COLORS.storeCardHover,
      },
    }}
  >
    <Stack direction="row" spacing={1.5} sx={{ alignItems: "center" }}>
      <Box
        sx={{
          width: 40,
          height: 40,
          flexShrink: 0,
          borderRadius: "12px",
          background: iconBg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {icon}
      </Box>
      <Box sx={{ flex: 1 }}>
        <Typography sx={{ fontSize: "0.75rem", color: COLORS.textPrimary }}>
          {caption}
        </Typography>
        <Typography sx={{ fontWeight: 600, color: COLORS.white }}>
          {title}
        </Typography>
      </Box>
      <Typography
        sx={{
          fontSize: "0.75rem",
          fontWeight: 500,
          color: badgeColor,
          backgroundColor: badgeBg,
          px: 1,
          py: 0.5,
          borderRadius: "4px",
        }}
      >
        Free
      </Typography>
    </Stack>
  </Box>
);

const RestrictedAccess: FC<RestrictedAccessProps> = ({ width, reason }) => {
  // The logo is remote, so fall back to a local mark if it fails to load.
  const [logoFailed, setLogoFailed] = useState(false);

  const message = reason
    ? REASON_MESSAGE[reason]
    : "Eduzenix ERP requires a desktop for optimal functionality. Use our mobile app for on-the-go access.";
  const reasonTag = reason ? REASON_TAG[reason] : "unsupported_device";

  return (
    <Box
      sx={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: COLORS.bg,
        overflowY: "auto",
      }}
    >
      <Box
        sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
      >
        {/* Header */}
        <Box sx={{ pt: 3, pb: 2, px: 3, flexShrink: 0 }}>
          <Stack
            direction="row"
            spacing={1.5}
            sx={{ alignItems: "center", justifyContent: "center" }}
          >
            {logoFailed ? (
              <Box
                sx={{
                  width: 32,
                  height: 32,
                  borderRadius: "8px",
                  background:
                    "linear-gradient(90deg, #2563EB 0%, #9333EA 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <PublicIcon sx={{ fontSize: 18, color: COLORS.white }} />
              </Box>
            ) : (
              <Box
                component="img"
                src={LOGO_IMAGE}
                alt="Eduzenix ERP"
                onError={() => setLogoFailed(true)}
                sx={{ width: 32, height: 32, objectFit: "contain" }}
              />
            )}
            <Typography
              variant="h6"
              sx={{ fontWeight: 700, color: COLORS.white }}
            >
              Eduzenix
              <Box component="span" sx={{ color: COLORS.accent }}>
                ERP
              </Box>
            </Typography>
          </Stack>
          <Typography
            sx={{
              mt: 0.5,
              fontSize: "0.75rem",
              textAlign: "center",
              color: COLORS.textMuted,
            }}
          >
            Education Enterprise Management System
          </Typography>
        </Box>

        {/* Main content */}
        <Box sx={{ flex: 1, px: 3, pb: 3 }}>
          <Stack spacing={3} sx={{ maxWidth: 480, mx: "auto", width: "100%" }}>
            {/* Why access is blocked */}
            <Box
              sx={{
                backgroundColor: COLORS.alertBg,
                border: `1px solid ${COLORS.alertBorder}`,
                borderRadius: "12px",
                p: 2,
              }}
            >
              <Stack
                direction="row"
                spacing={1.5}
                sx={{ alignItems: "flex-start" }}
              >
                <WarningAmberRoundedIcon
                  sx={{ fontSize: 20, mt: "2px", color: COLORS.accent }}
                />
                <Box>
                  <Typography
                    sx={{
                      fontSize: "0.875rem",
                      fontWeight: 600,
                      color: "#DBEAFE",
                    }}
                  >
                    Desktop Experience Required
                  </Typography>
                  <Typography
                    sx={{
                      mt: 0.5,
                      fontSize: "0.75rem",
                      color: "rgba(191, 219, 254, 0.8)",
                    }}
                  >
                    {message}
                  </Typography>
                </Box>
              </Stack>
            </Box>

            {/* Device illustration */}
            <Box
              sx={{
                backgroundColor: COLORS.panel,
                border: `1px solid ${COLORS.panelBorder}`,
                borderRadius: "12px",
                p: 3,
                textAlign: "center",
              }}
            >
              <Box
                sx={{ position: "relative", display: "inline-block", mb: 2 }}
              >
                <Box
                  sx={{
                    width: 80,
                    height: 128,
                    borderRadius: "16px",
                    background:
                      "linear-gradient(180deg, #1F2937 0%, #111827 100%)",
                    border: "2px solid rgba(59, 130, 246, 0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <SmartphoneIcon
                    sx={{ fontSize: 34, color: "rgba(96, 165, 250, 0.7)" }}
                  />
                </Box>
                <Box
                  sx={{
                    position: "absolute",
                    top: -8,
                    right: -8,
                    width: 20,
                    height: 20,
                    borderRadius: "50%",
                    backgroundColor: "#EF4444",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <WarningAmberRoundedIcon
                    sx={{ fontSize: 12, color: COLORS.white }}
                  />
                </Box>
              </Box>
              <Typography
                sx={{
                  fontSize: "1.125rem",
                  fontWeight: 600,
                  color: COLORS.white,
                  mb: 1,
                }}
              >
                Desktop Access Required
              </Typography>
              <Typography
                sx={{ fontSize: "0.875rem", color: COLORS.textPrimary }}
              >
                Access all Eduzenix features
              </Typography>
            </Box>

            {/* What desktop unlocks */}
            <Stack spacing={1.5}>
              {FEATURES.map((feature) => (
                <Stack
                  key={feature}
                  direction="row"
                  spacing={1.5}
                  sx={{ alignItems: "center" }}
                >
                  <Box
                    sx={{
                      width: 24,
                      height: 24,
                      flexShrink: 0,
                      borderRadius: "50%",
                      backgroundColor: COLORS.accentSoft,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Box
                      sx={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        backgroundColor: COLORS.accent,
                      }}
                    />
                  </Box>
                  <Typography
                    sx={{ fontSize: "0.875rem", color: COLORS.textPrimary }}
                  >
                    {feature}
                  </Typography>
                </Stack>
              ))}
            </Stack>

            {/* Mobile app */}
            <Stack spacing={2}>
              <Stack
                direction="row"
                spacing={1}
                sx={{ alignItems: "center" }}
              >
                <Box
                  sx={{
                    width: 24,
                    height: 24,
                    borderRadius: "8px",
                    background:
                      "linear-gradient(90deg, #3B82F6 0%, #A855F7 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <SmartphoneIcon sx={{ fontSize: 14, color: COLORS.white }} />
                </Box>
                <Typography
                  sx={{
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    color: COLORS.white,
                  }}
                >
                  Eduzenix Mobile App
                </Typography>
              </Stack>

              <Stack spacing={1.5}>
                <StoreCard
                  href={PLAY_STORE_URL}
                  icon={
                    <AndroidIcon sx={{ fontSize: 20, color: COLORS.white }} />
                  }
                  iconBg="linear-gradient(135deg, #22C55E 0%, #16A34A 100%)"
                  caption="Get Eduzenix on"
                  title="Google Play"
                  hoverBorder="rgba(34, 197, 94, 0.5)"
                  badgeColor="#4ADE80"
                  badgeBg="rgba(20, 83, 45, 0.3)"
                />
                <StoreCard
                  href={APP_STORE_URL}
                  icon={
                    <AppleIcon sx={{ fontSize: 20, color: COLORS.white }} />
                  }
                  iconBg="linear-gradient(135deg, #374151 0%, #1F2937 100%)"
                  caption="Download on"
                  title="App Store"
                  hoverBorder="rgba(59, 130, 246, 0.5)"
                  badgeColor={COLORS.accent}
                  badgeBg="rgba(30, 58, 138, 0.3)"
                />
              </Stack>
            </Stack>

            {/* Retry once the window is desktop-sized */}
            <Stack spacing={1.5} sx={{ alignItems: "center" }}>
              <Typography
                sx={{ fontSize: "0.75rem", color: COLORS.textMuted }}
              >
                Switch to desktop for full Eduzenix ERP access
              </Typography>
              <Button
                onClick={() => window.location.reload()}
                startIcon={<DesktopWindowsIcon sx={{ fontSize: 16 }} />}
                sx={{
                  px: 3,
                  py: 1.5,
                  borderRadius: "8px",
                  textTransform: "none",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  color: COLORS.white,
                  background:
                    "linear-gradient(90deg, #2563EB 0%, #9333EA 100%)",
                  boxShadow: "0 10px 15px -3px rgba(30, 58, 138, 0.2)",
                  transition: "all 0.2s",
                  "&:hover": {
                    background:
                      "linear-gradient(90deg, #1D4ED8 0%, #7E22CE 100%)",
                  },
                }}
              >
                Access Desktop Version
              </Button>
            </Stack>

            {/* Diagnostic — what the guard saw */}
            <Stack
              direction="row"
              spacing={1}
              sx={{
                justifyContent: "center",
                flexWrap: "wrap",
                fontFamily: '"IBM Plex Mono", monospace',
                fontSize: "0.6875rem",
                color: COLORS.textFaint,
              }}
            >
              <span>viewport_width: {width}px</span>
              <span>· min_required: 1024px ·</span>
              <Box component="span" sx={{ color: COLORS.warn }}>
                {reasonTag}
              </Box>
            </Stack>

            {/* Alternative access */}
            <Box
              sx={{
                backgroundColor: "rgba(17, 24, 39, 0.3)",
                border: "1px solid rgba(31, 41, 55, 0.5)",
                borderRadius: "12px",
                p: 2,
              }}
            >
              <Typography
                sx={{
                  fontSize: "0.75rem",
                  textAlign: "center",
                  color: COLORS.textMuted,
                }}
              >
                Need immediate access? Contact IT Support at{" "}
                <Link
                  href={`mailto:${SUPPORT_EMAIL}`}
                  sx={{
                    color: COLORS.accent,
                    textDecoration: "none",
                    "&:hover": { color: "#93C5FD" },
                  }}
                >
                  {SUPPORT_EMAIL}
                </Link>
              </Typography>
            </Box>
          </Stack>
        </Box>

        {/* Footer */}
        <Box
          sx={{
            flexShrink: 0,
            py: 2,
            px: 3,
            borderTop: `1px solid ${COLORS.footerBorder}`,
            textAlign: "center",
          }}
        >
          <Stack
            direction="row"
            spacing={3}
            sx={{ justifyContent: "center", mb: 1 }}
          >
            <Link
              href="https://eduzenix.com"
              target="_blank"
              rel="noopener noreferrer"
              sx={footerLinkSx}
            >
              Eduzenix.com
            </Link>
            <Link href={`mailto:${SUPPORT_EMAIL}`} sx={footerLinkSx}>
              Support
            </Link>
            <Link
              href="https://eduzenix.com/help"
              target="_blank"
              rel="noopener noreferrer"
              sx={footerLinkSx}
            >
              Help Center
            </Link>
          </Stack>
          <Typography sx={{ fontSize: "0.75rem", color: "#475569" }}>
            © {new Date().getFullYear()} Eduzenix ERP • Education Management
            System
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default RestrictedAccess;
