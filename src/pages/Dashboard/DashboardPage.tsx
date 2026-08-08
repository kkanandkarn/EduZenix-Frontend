import { Box, Stack } from "@mui/material";
import { TopBar } from "../../components";
import {
  DashboardMetricsCard,
  NodeDetails,
  RecentOnboardings,
  RevenueEnrollmentChart,
} from "./containers";

const DashboardPage = () => {
  return (
    <>
      <TopBar
        title="Dashboard"
        description="Real-time performance and enrollment metrics across all institutional
          nodes."
      />
      <Box sx={{ paddingY: 2, paddingX: 4 }}>
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
    </>
  );
};

export default DashboardPage;
