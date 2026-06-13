import { Box, Paper, Typography, Stack, Grid } from "@mui/material";
import GroupIcon from "@mui/icons-material/Group";
import GppGoodIcon from "@mui/icons-material/GppGood";

import PendingActionsOutlinedIcon from "@mui/icons-material/PendingActionsOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";

const metricsData = [
  {
    title: "Total Leads",
    value: "1,284",
    icon: <GroupIcon sx={{ fontSize: 26 }} />,
    iconColor: "#2563eb",
    bgColor: "#e0f2fe",
  },
  {
    title: "Conversion Rate",
    value: "64.2%",
    icon: <GppGoodIcon sx={{ fontSize: 26 }} />,
    iconColor: "#16a34a",
    bgColor: "#dcfce7",
  },
  {
    title: "Active Pipeline",
    value: "312",
    icon: <PendingActionsOutlinedIcon sx={{ fontSize: 26 }} />,
    iconColor: "#ca8a04",
    bgColor: "#fef9c3",
  },
];

const topPerformer = {
  label: "Top Performer",
  name: "Elena Rodriguez",
  winRate: "85% Win Rate",
};

const LeadDistributionMetricsCard = () => {
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

            <Stack spacing={0.5}>
              <Typography
                variant="body2"
                sx={{
                  color: "text.secondary",
                  fontSize: "14px",
                }}
              >
                {item.title}
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  color: "#1e293b",
                }}
              >
                {item.value}
              </Typography>
            </Stack>
          </Paper>
        </Grid>
      ))}

      {/* Top Performer Card */}
      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <Paper
          elevation={0}
          sx={{
            p: 3,
            borderRadius: 3,
            height: "100%",
            backgroundColor: "#1e40af",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Stack
            spacing={1}
            sx={{
              position: "relative",
              zIndex: 2,
            }}
          >
            <Typography
              variant="caption"
              sx={{
                color: "#dbeafe",
                fontWeight: 700,
                letterSpacing: 1,
                textTransform: "uppercase",
              }}
            >
              {topPerformer.label}
            </Typography>

            <Typography
              variant="h6"
              sx={{
                color: "#ffffff",
                fontWeight: 700,
              }}
            >
              {topPerformer.name}
            </Typography>

            <Box
              sx={{
                mt: 1,
                px: 2,
                py: 0.8,
                borderRadius: 2,
                backgroundColor: "rgba(255,255,255,0.15)",
                width: "fit-content",
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  color: "#ffffff",
                  fontWeight: 600,
                }}
              >
                {topPerformer.winRate}
              </Typography>
            </Box>
          </Stack>

          <Box
            sx={{
              position: "absolute",
              right: -8,
              bottom: -8,
              color: "rgba(255,255,255,0.08)",
              transform: "rotate(12deg)",
            }}
          >
            <EmojiEventsOutlinedIcon
              sx={{
                fontSize: 95,
              }}
            />
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default LeadDistributionMetricsCard;
