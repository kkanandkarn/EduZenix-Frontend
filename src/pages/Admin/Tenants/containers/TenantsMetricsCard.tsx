import { Box, Grid, Paper, Typography } from "@mui/material";
import BusinessIcon from "@mui/icons-material/Business";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";

const TenantsMetricsCard = () => {
  const metricsData = [
    {
      title: "Total Tenants",
      value: "1,200",
      icon: <BusinessIcon sx={{ fontSize: 26 }} />,
      iconColor: "#2563eb",
      bgColor: "#e0f2fe",
    },
    {
      title: "Free Trials",
      value: "52",
      icon: <CardGiftcardIcon sx={{ fontSize: 26 }} />,
      iconColor: "#ca8a04",
      bgColor: "#fef9c3",
    },
    {
      title: "Active Packages",
      value: "263",
      icon: <SubscriptionsIcon sx={{ fontSize: 26 }} />,
      iconColor: "#16a34a",
      bgColor: "#dcfce7",
    },
    {
      title: "Expiring Soon",
      value: "35",
      icon: <AccessTimeFilledIcon sx={{ fontSize: 26 }} />,
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

export default TenantsMetricsCard;
