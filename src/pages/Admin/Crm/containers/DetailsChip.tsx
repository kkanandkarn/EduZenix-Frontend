import type { SvgIconComponent } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

interface ChipProps {
  label: string;
  value: string | null;
  icon: SvgIconComponent;
}

const DetailsChip = ({ label, value, icon: Icon }: ChipProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        gap: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 1,
          bgcolor: "var(--gray-100)",
          borderRadius: "6px",
        }}
      >
        <Icon sx={{ color: "var(--blue-500)", fontSize: "16px" }} />
      </Box>

      <Box>
        <Typography variant="body2" sx={{ color: "var(--slate-600)" }}>
          {label}
        </Typography>
        <Typography variant="body2" sx={{ color: "var(--slate-800)" }}>
          {value ?? "-"}
        </Typography>
      </Box>
    </Box>
  );
};

export default DetailsChip;
