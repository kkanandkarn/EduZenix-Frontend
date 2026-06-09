import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import { LOGO_IMAGE } from "../utils/constant";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

const AppTitle = () => {
  return (
    <>
      <Box
        sx={{
          width: 50,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 1,
          ml: 8,
        }}
      >
        <img src={LOGO_IMAGE} alt="logo" height={50} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontWeight: "bold",
              color: "primary.main",
              fontSize: "1.15rem",
            }}
          >
            EduZenix
          </Typography>
          <Box
            sx={{
              px: 1,
              py: 0,
              borderRadius: "12px",
              border: (theme) => `1px solid ${theme.palette.primary.main}`,
              gap: 0.5, // Add gap here instead of space
              color: "primary.main",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <AccountBalanceWalletIcon sx={{ fontSize: "1rem" }} />
            <Typography sx={{ display: "flex", fontSize: "0.75rem", gap: 0.2 }}>
              <span>₹</span>
              <span>50000</span>
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AppTitle;
