import React from "react";
import ApartmentIcon from "@mui/icons-material/Apartment";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PaymentsIcon from "@mui/icons-material/Payments";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import RemoveIcon from "@mui/icons-material/Remove";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import { Box, Card, Grid, Paper, Typography } from "@mui/material";

const DashboardMetricsCard = () => {
  const metricsData = [
    {
      leftIcon: <ApartmentIcon />,
      rightIcon: <TrendingUpIcon />,
      statusValue: "+12 %",
      status: "growth",
      label: "Total Tenants",
      value: "1,284",
    },
    {
      leftIcon: <PaymentsIcon />,
      rightIcon: <TrendingUpIcon />,
      statusValue: "+24 %",
      status: "growth",
      label: "Monthly Revenue",
      value: "4,28,900",
    },
    {
      leftIcon: <RocketLaunchIcon />,
      rightIcon: <RemoveIcon />,
      statusValue: "Steady",
      status: "steady",
      label: "Active Leads",
      value: "856",
    },
    {
      leftIcon: <HealthAndSafetyIcon />,
      rightIcon: <TrendingUpIcon />,
      statusValue: "100%",
      status: "growth",
      label: "System Health",
      value: "Optimal",
    },
  ];
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        py: 2,
        gap: 3,
      }}
    >
      {metricsData.map((data, index) => (
        <Paper elevation={0} key={index} sx={{ width: "25%" }}>
          <Card
            elevation={0}
            sx={{
              p: 3,
              borderRadius: 2,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: 2,
            }}
          >
            {/* Top Section */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                width: "100%",
              }}
            >
              {/* Left Icon */}
              <Box
                sx={{
                  fontSize: 24,
                  color: "primary.main",
                  bgcolor: "var(--gray-100)",
                  p: 1,
                  borderRadius: 2,
                  display: "flex",
                }}
              >
                {data.leftIcon}
              </Box>

              {/* Status */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  px: 1.5,
                  py: 0.5,
                  borderRadius: "999px",
                  fontSize: 12,
                  ...(data.status === "growth" && {
                    color: "success.main",
                    bgcolor: "success.light",
                  }),
                  ...(data.status === "steady" && {
                    color: "warning.main",
                    bgcolor: "warning.light",
                  }),
                  ...(data.status === "decline" && {
                    color: "error.main",
                    bgcolor: "error.light",
                  }),
                }}
              >
                <Box sx={{ display: "flex", fontSize: 14 }}>
                  {data.rightIcon}
                </Box>
                <Typography variant="caption">{data.statusValue}</Typography>
              </Box>
            </Box>

            {/* Bottom Section */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Typography variant="body2" color="text.secondary">
                {data.label}
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                {data.value}
              </Typography>
            </Box>
          </Card>
        </Paper>
      ))}
    </Box>
  );
};

export default DashboardMetricsCard;
