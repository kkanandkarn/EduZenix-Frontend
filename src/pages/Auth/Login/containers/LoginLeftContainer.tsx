import React from "react";
import { Box, Typography, Stack, Paper } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import PeopleIcon from "@mui/icons-material/People";
import ShieldIcon from "@mui/icons-material/Shield";
import loginBanner from "../../../../assets/images/login-banner.png";
import { LOGO_IMAGE } from "../../../../utils/constant";

const LoginLeftContainer = () => {
  return (
    <Box
      sx={{
        height: "100%",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Gradient */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(135deg,#0059bb 0%,#001a41 100%)",
        }}
      />

      {/* Image */}
      <Box
        component="img"
        src={loginBanner}
        sx={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: 0.4,
        }}
      />

      {/* Content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          color: "#fff",
          width: "65%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
          p: 5,
        }}
      >
        {/* Logo */}
        <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
          <Box component="img" src={LOGO_IMAGE} sx={{ width: 56 }} />
          <Typography variant="h5">EduZenix</Typography>
        </Stack>

        {/* Center */}
        <Box>
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            Empowering the future <br /> of education.
          </Typography>

          <Typography sx={{ mt: 2, opacity: 0.8 }}>
            The most advanced ERP designed for high-performance academic
            institutions worldwide.
          </Typography>

          <Stack spacing={2} sx={{ mt: 4 }}>
            <FeatureCard icon={<SchoolIcon />} text="1200+ Institutions" />
            <FeatureCard icon={<PeopleIcon />} text="500k+ Students" />
            <FeatureCard
              icon={<ShieldIcon />}
              text="Secure & Scalable Architecture"
            />
          </Stack>
        </Box>

        {/* Footer */}
        <Stack direction="row" sx={{ justifyContent: "space-between" }}>
          <Typography variant="body2" sx={{ opacity: 0.6 }}>
            © {new Date().getFullYear()} EduZenix ERP
          </Typography>
          <Typography sx={{ color: "skyblue", cursor: "pointer" }}>
            Need Help?
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
};

const FeatureCard = ({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) => (
  <Paper
    sx={{
      p: 2,
      display: "flex",
      alignItems: "center",
      gap: 2,
      background: "rgba(255,255,255,0.1)",
      backdropFilter: "blur(10px)",
      border: "1px solid rgba(255,255,255,0.2)",
      color: "#fff",
    }}
  >
    {icon}
    <Typography variant="body2">{text}</Typography>
  </Paper>
);

export default LoginLeftContainer;
