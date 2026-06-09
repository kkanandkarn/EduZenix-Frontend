import { Box, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import { BreadCrumbs } from "../../components";
import {
  DashboardMetricsCard,
  NodeDetails,
  RecentOnboardings,
  RevenueEnrollmentChart,
} from "./containers";

const DashboardPage = () => {
  return (
    <Box sx={{ paddingY: 2, paddingX: 4 }}>
      {" "}
      <BreadCrumbs />
      <Box sx={{ marginY: 2 }}>
        <Typography
          variant="h6"
          sx={{ fontWeight: "semibold", color: "var(--slate-800)" }}
        >
          System Overview
        </Typography>
        <Typography className="text-slate-600">
          Real-time performance and enrollment metrics across all institutional
          nodes.
        </Typography>
      </Box>
      <DashboardMetricsCard />
      <Stack
        direction={"row"}
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "stretch",
          justifyContent: "space-between",
          gap: 2,
        }}
      >
        <RevenueEnrollmentChart />
        <RecentOnboardings />
      </Stack>
      <NodeDetails />
    </Box>
  );
};

export default DashboardPage;
