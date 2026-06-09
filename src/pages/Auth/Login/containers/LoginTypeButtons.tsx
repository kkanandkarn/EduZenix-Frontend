import React from "react";
import { Box, Button } from "@mui/material";
import type { LoginTypeButtonProps } from "../type";

const LoginTypeButtons = ({
  loginType,
  setLoginType,
}: LoginTypeButtonProps) => {
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        bgcolor: "grey.200",
        width: "100%",
        p: 1,
        borderRadius: 2,
      }}
    >
      {/* Animated Sliding Background */}
      <Box
        sx={{
          position: "absolute",
          top: 8,
          left: 8,
          height: "calc(100% - 16px)",
          width: "calc(50% - 8px)",
          bgcolor: "white",
          borderRadius: 1.5,
          boxShadow: 0,
          transition: "all 0.3s ease-in-out",
          transform: loginType === "otp" ? "translateX(100%)" : "translateX(0)",
        }}
      />

      <Button
        onClick={() => setLoginType("password")}
        sx={{
          position: "relative",
          zIndex: 10,
          width: "50%",
          py: 1,
          fontWeight: "fontWeightBold",
          borderRadius: 1.5,
          transition: "colors 0.3s",
          color: loginType === "password" ? "primary.main" : "grey.600",
          "&:hover": {
            bgcolor: "transparent",
          },
        }}
        disableRipple
      >
        Password
      </Button>

      <Button
        onClick={() => setLoginType("otp")}
        sx={{
          position: "relative",
          zIndex: 10,
          width: "50%",
          py: 1,
          fontWeight: "fontWeightBold",
          borderRadius: 1.5,
          transition: "colors 0.3s",
          color: loginType === "otp" ? "primary.main" : "grey.600",
          "&:hover": {
            bgcolor: "transparent",
          },
        }}
        disableRipple
      >
        OTP
      </Button>
    </Box>
  );
};

export default LoginTypeButtons;
