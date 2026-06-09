import React from "react";
import { Box, Typography, Stack, Paper } from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import type { TooltipProps } from "recharts";
// -------------------- Types --------------------
type ChartData = {
  month: string;
  Revenue: number;
  Enrollments: number;
};

// -------------------- Data --------------------
const data: ChartData[] = [
  { month: "JAN", Revenue: 62, Enrollments: 78 },
  { month: "FEB", Revenue: 74, Enrollments: 88 },
  { month: "MAR", Revenue: 68, Enrollments: 92 },
  { month: "APR", Revenue: 82, Enrollments: 100 },
  { month: "MAY", Revenue: 85, Enrollments: 95 },
  { month: "JUN", Revenue: 90, Enrollments: 88 },
];

// -------------------- Custom Tooltip --------------------
const CustomTooltip = ({
  active,
  payload,
  label,
}: TooltipProps<number, string>) => {
  if (active && payload && payload.length) {
    return (
      <Paper
        elevation={6}
        sx={{
          bgcolor: "#0f172a",
          color: "#fff",
          px: 2,
          py: 1.5,
          borderRadius: 2,
        }}
      >
        <Typography
          variant="caption"
          sx={{ color: "#93c5fd", fontWeight: 700 }}
        >
          {label}
        </Typography>

        {payload.map((entry, index) => (
          <Typography
            key={index}
            variant="caption"
            sx={{ display: "block", color: "#e2e8f0" }}
          >
            {entry.name}:{" "}
            <Box component="span" sx={{ fontWeight: 600, color: "#fff" }}>
              {entry.value}%
            </Box>
          </Typography>
        ))}
      </Paper>
    );
  }
  return null;
};

// -------------------- Main Component --------------------
const RevenueEnrollmentChart: React.FC = () => {
  return (
    <Paper
      elevation={3}
      sx={{
        p: 4,
        borderRadius: 4,
        width: "100%",
        maxWidth: 600,
      }}
    >
      {/* Header */}
      <Stack
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          mb: 3,
        }}
      >
        <Box>
          <Typography
            variant="h6"
            sx={{ fontWeight: 700, color: "text.primary" }}
          >
            Revenue vs. Enrollment Growth
          </Typography>

          <Typography variant="body2" color="text.secondary">
            Year-to-date comparative analysis
          </Typography>
        </Box>

        {/* Legend */}
        <Stack sx={{ display: "flex", pt: 0.5 }} spacing={3}>
          <Stack
            sx={{
              display: "flex",
              alignItems: "center",
              mb: 3,
            }}
            spacing={1}
          >
            <Box
              sx={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                bgcolor: "#1d4ed8",
              }}
            />
            <Typography variant="caption" color="text.secondary">
              Revenue
            </Typography>
          </Stack>

          <Stack
            sx={{
              display: "flex",
              alignItems: "center",
              mb: 3,
            }}
            spacing={1}
          >
            <Box
              sx={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                bgcolor: "#bfdbfe",
              }}
            />
            <Typography variant="caption" color="text.secondary">
              Enrollments
            </Typography>
          </Stack>
        </Stack>
      </Stack>

      {/* Chart */}
      <Box sx={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <BarChart
            data={data}
            barCategoryGap="30%"
            barGap={4}
            margin={{ top: 8, right: 8, left: -20, bottom: 0 }}
          >
            <CartesianGrid
              vertical={false}
              stroke="#e2e8f0"
              strokeDasharray="4 4"
            />

            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{
                fontSize: 11,
                fontWeight: 700,
                fill: "#94a3b8",
              }}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 11, fill: "#cbd5e1" }}
              tickFormatter={(v: number) => `${v}%`}
            />

            <Tooltip
              content={<CustomTooltip />}
              cursor={{ fill: "rgba(219,234,254,0.3)" }}
            />

            <Bar dataKey="Enrollments" fill="#bfdbfe" radius={[6, 6, 2, 2]} />

            <Bar dataKey="Revenue" fill="#1d4ed8" radius={[6, 6, 2, 2]} />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Paper>
  );
};

export default RevenueEnrollmentChart;
