import React from "react";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import VerifiedIcon from "@mui/icons-material/Verified";
import WarningIcon from "@mui/icons-material/Warning";
import { Box, Grid, Paper, Typography } from "@mui/material";

const UniversityStats = () => {
  const metricsData = [
    {
      title: "Total Universities",
      value: "1,248",
      icon: <AccountBalanceIcon sx={{ fontSize: 26 }} />,
      iconColor: "#2563eb",
      bgColor: "#e0f2fe",
    },
    {
      title: "Pending Approvals",
      value: "42",
      icon: <PendingActionsIcon sx={{ fontSize: 26 }} />,
      iconColor: "#ca8a04",
      bgColor: "#fef9c3",
    },
    {
      title: "Active Partners",
      value: "896",
      icon: <VerifiedIcon sx={{ fontSize: 26 }} />,
      iconColor: "#16a34a",
      bgColor: "#dcfce7",
    },
    {
      title: "Review Required",
      value: "12",
      icon: <WarningIcon sx={{ fontSize: 26 }} />,
      iconColor: "#dc2626",
      bgColor: "#fee2e2",
    },
  ];
  return (
    <Grid container spacing={3}>
      {metricsData.map((item, index) => (
        <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
          <Paper
            elevation={0}
            sx={{
              p: 3,
              borderRadius: 3,
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: 2,
              bgcolor: "#ffffff",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "start",
                gap: 2,
              }}
            >
              <Box
                sx={{
                  width: 50,
                  height: 50,
                  borderRadius: 2,
                  backgroundColor: item.bgColor,
                  color: item.iconColor,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {item.icon}
              </Box>
              <Box>
                <Typography variant="h6" component="div">
                  {item.value}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.title}
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default UniversityStats;
