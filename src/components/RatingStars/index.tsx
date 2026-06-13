import { Box, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const RatingStars = ({
  value,
  displayValue = false,
}: {
  value: number;
  displayValue: boolean;
}) => {
  const fullStars = Math.floor(value);
  const hasHalf = value - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
      {displayValue && (
        <Typography
          sx={{
            ml: 0.5,
            fontSize: 13,
            fontWeight: 500,
            color: "var(--slate-500)",
          }}
        >
          {value}
        </Typography>
      )}
      <Box sx={{ display: "flex", alignItems: "center", gap: "2px" }}>
        {Array.from({ length: fullStars }).map((_, i) => (
          <StarIcon
            key={`full-${i}`}
            sx={{ fontSize: 18, color: "var(--yellow-400)" }}
          />
        ))}
        {hasHalf && (
          <StarHalfIcon sx={{ fontSize: 18, color: "var(--yellow-400)" }} />
        )}
        {Array.from({ length: emptyStars }).map((_, i) => (
          <StarBorderIcon
            key={`empty-${i}`}
            sx={{ fontSize: 18, color: "var(--yellow-400)" }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default RatingStars;
