import React from "react";
import {
  Box,
  Typography,
  Button,
  Stack,
  Avatar,
  Chip,
  Divider,
  Paper,
} from "@mui/material";
import ScheduleIcon from "@mui/icons-material/Schedule";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";

type Status =
  | "Active"
  | "Inactive"
  | "Hold"
  | "Suspended"
  | "Under Negotiation";

interface Onboarding {
  id: number;
  logo: string;
  name: string;
  type: string;
  package: string;
  onboarded: string;
  status: Status;
}

const getStatusStyle = (status: Status) => {
  const normalized = status.toLowerCase();

  switch (normalized) {
    case "active":
      return {
        bgcolor: "var(--green-200)",
        color: "success.main",
      };

    case "inactive":
    case "hold":
    case "suspended":
      return {
        bgcolor: "var(--red-200)",
        color: "error.main",
      };

    case "under negotiation":
      return {
        bgcolor: "var(--yellow-200)",
        color: "warning.main",
      };

    default:
      return {
        bgcolor: "grey.200",
        color: "grey.600",
      };
  }
};

const recentOnboardingData: Onboarding[] = [
  {
    id: 1,
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuDuZ7VFn7xj6MzGEKhQInIx5fKwHpoi3abZPXqgyzpRL7ISHD07ZEmb5wl5zStuPocW3vC7oG06qKPBCvbAIzmmJtrqxOGXkuXvj28ODk3vMfcAWs8sQwpfRjAmj01q6qbKJnhuLBIOBM0JLxm0dZEjzV2IwnvneVOhpbNUhFynTbpU28wbWouGCYMbp4nKYBkIwtdK_XMGrOmKhqIeyyEQtLhhystiGGnqqxFH8ht07j5UAVDpzUydBujhNT7qWmuVqZoQVfigoGk",
    name: "Oxford Academy North",
    type: "School",
    package: "Premium Tier Plan",
    onboarded: "2 hours ago",
    status: "Active",
  },
  {
    id: 2,
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuDE99oXjfO28qiR81kJ9WWFAgtQRwnd__hzUEh0uh2AjaMcfU_5SDdezoPVSK6eUkeQ2FrvKh7fbQyXztZhfPGdEIW6uVgrCKESmRMh_SjeVxh0ediLWNAjne8zi0M3MPTr7wnxC1OR2yN2F_QFVgqnY86Redm4myN5Rm1xeOXhmkSSiseNYags8G-S3zj7qhyErkTl4fS0rNnb1x7nPEr-fn96T9njRqzUz3aIJtoJAqq_7fvM4E28JK_RaQQAP9-3EDWvc24dWGM",
    name: "Elite Prep Institute",
    type: "University",
    package: "Elite Prep Institute",
    onboarded: "5 hours ago",
    status: "Inactive",
  },
  {
    id: 3,
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuCgQT7l3lW7cmBumwWSaz-D77Pb8FIuGDDi_yRjl6XAkx96hH959hCmJn9LRaoHkhM1gETbup0aFSz2JFOPvZzWove0fadUJMVpg8JrvAOAsX1qVA-FtjGTbPpGnHp-ddhN8gj-59bONBH66Svl2a6K2Eds7gpHRd__dZavHuv7Eh4Alw_nusvh8yqqPnM9oc_iHirF_biwtxZtpDIlAA4E7HCOmZlcsVuxzowWk8YHmZw9D64d-UJm_UlI9udmGQI5kMVGvfs9y-I",
    name: "Global Tech College",
    type: "College",
    package: "Pro Tier Plan",
    onboarded: "Yesterday, 4:30 PM",
    status: "Active",
  },
  {
    id: 4,
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuB4BsbONkBY99Ff9yGCEWTDgodY7iCJL2TntIPN5vEUgASkZtasVCWHdHrmCIy0U_VHEi89KILaxOUvpt2aOiGYLvoLeMC69QPso5X-Q3-d7c3csBpsBc7L66-cgQOOf2GcO0qLOT6xYLL_W8T9fWNHaEF2NCXGCkufBvqD-3_2kt13Fa-NnwbCFL7cuaEfZpR71Kt-mmKtJZreqpFe3KkwiGAsXAonRdBH5fHTVRZRuAz1ZGQERBzU8jk4pxWBlajr55X3nTsxQcI",
    name: "Skyline Montessori",
    type: "School",
    package: "Trial Period",
    onboarded: "5 days ago",
    status: "Under Negotiation",
  },
];

const RecentOnboardings: React.FC = () => {
  return (
    <Paper elevation={0} sx={{ width: "30%", pt: 3, px: 2, minHeight: 380 }}>
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{ fontWeight: 600, fontSize: 18, color: "text.primary" }}
        >
          Recent Onboardings
        </Typography>

        <Button
          variant="text"
          sx={{
            textTransform: "none",
            fontSize: 13,
            color: "primary.main",
          }}
        >
          View All
        </Button>
      </Box>

      {/* List */}
      {recentOnboardingData.length > 0 ? (
        recentOnboardingData.map((data, index) => (
          <Box key={data.id}>
            <Box
              sx={{
                mt: 2,
                py: 2,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
              }}
            >
              {/* Left */}
              <Stack direction="row" spacing={2}>
                <Avatar
                  src={data.logo}
                  variant="rounded"
                  sx={{
                    width: 40,
                    height: 40,
                    border: "1px solid",
                    borderColor: "grey.300",
                  }}
                />

                <Box>
                  <Typography sx={{ fontSize: 14, fontWeight: 600 }}>
                    {data.name}
                  </Typography>

                  <Box
                    sx={{
                      py: 0.5,
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <Chip
                      label={data.type}
                      size="small"
                      variant="outlined"
                      sx={{ fontSize: 10 }}
                    />
                    <Typography sx={{ fontSize: 12, color: "text.secondary" }}>
                      {data.package}
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <ScheduleIcon
                      sx={{ fontSize: 16, color: "text.secondary" }}
                    />
                    <Typography sx={{ fontSize: 12, color: "text.secondary" }}>
                      {data.onboarded}
                    </Typography>
                  </Box>
                </Box>
              </Stack>

              {/* Status */}
              <Chip
                label={data.status}
                size="small"
                sx={{
                  borderRadius: "999px",
                  fontSize: 11,
                  ...getStatusStyle(data.status),
                }}
              />
            </Box>

            {index !== recentOnboardingData.length - 1 && <Divider />}
          </Box>
        ))
      ) : (
        <Stack
          spacing={2}
          sx={{
            minHeight: 160,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <WarningAmberIcon sx={{ fontSize: 50, color: "warning.main" }} />
          <Typography sx={{ fontWeight: 600, color: "text.secondary" }}>
            No Recent Onboardings
          </Typography>
        </Stack>
      )}
    </Paper>
  );
};

export default RecentOnboardings;
