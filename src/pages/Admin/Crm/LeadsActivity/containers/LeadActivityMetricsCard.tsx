import React from "react";
import type { ReactNode } from "react";
import { Box, Grid, Paper, Typography, LinearProgress } from "@mui/material";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import DomainOutlinedIcon from "@mui/icons-material/DomainOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";

interface Stat {
  icon: ReactNode;
  label: string;
  total: number;
  pending: number;
  completed: number;
}

const stats: Stat[] = [
  {
    icon: <AccountBalanceOutlinedIcon fontSize="small" />,
    label: "Total University",
    total: 89,
    pending: 12,
    completed: 77,
  },
  {
    icon: <DomainOutlinedIcon fontSize="small" />,
    label: "Total Colleges",
    total: 35,
    pending: 8,
    completed: 27,
  },
  {
    icon: <SchoolOutlinedIcon fontSize="small" />,
    label: "Total Schools",
    total: 72,
    pending: 20,
    completed: 52,
  },
  {
    icon: <BusinessOutlinedIcon fontSize="small" />,
    label: "Other Institutions",
    total: 22,
    pending: 17,
    completed: 5,
  },
];

const LeadActivityMetricsCard: React.FC = () => {
  const getBgColor = (percentage: number) => {
    if (percentage <= 25) return "var(--red-500)";
    if (percentage <= 50) return "var(--yellow-400)";
    return "var(--green-500)";
  };
  const getPendingTextColor = (pendingPercentage: number) => {
    if (pendingPercentage <= 25) return "var(--green-500)"; // low pending → good
    if (pendingPercentage <= 50) return "var(--yellow-500)"; // moderate
    return "var(--red-500)"; // high pending → bad
  };
  return (
    <Grid container spacing={3} sx={{ py: 1, justifyContent: "space-between" }}>
      {stats.map((stat: Stat, i: number) => (
        <Grid sx={{ width: "23%" }} key={i}>
          <Paper
            elevation={0}
            sx={{
              p: 3,
              borderRadius: 2,
              bgcolor: "white",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "space-between",
              gap: 2,
            }}
          >
            {/* Icon */}
            <Box
              sx={{
                color: "primary.main",
                bgcolor: "var(--blue-100)",
                p: 1,
                borderRadius: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {stat.icon}
            </Box>

            {/* Content */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 0.5,
                width: "100%",
              }}
            >
              <Typography variant="body2" color="text.secondary">
                {stat.label}
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  color: "var(--slate-600)",
                  fontWeight: 600,
                  lineHeight: 1.3,
                }}
              >
                {stat.total}
              </Typography>

              {/* Pending & Completed */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  mt: 0.5,
                }}
              >
                {/* Pending */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                  <Box
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      bgcolor: "var(--yellow-400)",
                      flexShrink: 0,
                    }}
                  />
                  <Typography variant="caption" color="text.secondary">
                    Pending:
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      color: getPendingTextColor(
                        (Number(stat.pending) / Number(stat.total)) * 100,
                      ),
                      fontWeight: 600,
                    }}
                  >
                    {stat.pending}
                  </Typography>
                </Box>

                {/* Completed */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                  <Box
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      bgcolor: "#4ade80",
                      flexShrink: 0,
                    }}
                  />
                  <Typography variant="caption" color="text.secondary">
                    Completed:
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ color: "#22c55e", fontWeight: 600 }}
                  >
                    {stat.completed}
                  </Typography>
                </Box>
              </Box>

              {/* Progress Bar */}
              <LinearProgress
                variant="determinate"
                value={Math.round((stat.completed / stat.total) * 100)}
                sx={{
                  mt: 0.5,
                  height: 6,
                  borderRadius: 999,
                  bgcolor: "var(--slate-200)",
                  "& .MuiLinearProgress-bar": {
                    bgcolor: `${getBgColor(
                      (Number(stat.completed) / Number(stat.total)) * 100,
                    )}`,
                    borderRadius: 999,
                  },
                }}
              />
            </Box>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default LeadActivityMetricsCard;
