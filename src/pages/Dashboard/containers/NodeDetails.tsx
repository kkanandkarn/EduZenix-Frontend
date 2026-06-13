import { Box, Typography } from "@mui/material";

const NodeDetails = () => {
  const sectionStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  };

  const dividerStyle = {
    height: 40,
    borderRight: "2px solid",
    borderColor: "grey.400",
  };

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#334155", // slate-700
        px: 3,
        py: 2,
        my: 2,
        borderRadius: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: 4,
      }}
    >
      {/* Section 1 */}
      <Box sx={sectionStyle}>
        <Typography
          sx={{
            color: "#e2e8f0", // slate-200
            fontSize: "0.875rem",
          }}
        >
          Active System Scope
        </Typography>
        <Typography
          sx={{
            fontSize: "1.25rem",
            fontWeight: "bold",
            color: "#ffffff",
          }}
        >
          52
        </Typography>
      </Box>

      <Box sx={dividerStyle} />

      {/* Section 2 */}
      <Box sx={sectionStyle}>
        <Typography sx={{ color: "#e2e8f0", fontSize: "0.875rem" }}>
          Core Operational Drivers
        </Typography>
        <Typography
          sx={{ fontSize: "1.25rem", fontWeight: "bold", color: "#fff" }}
        >
          37
        </Typography>
      </Box>

      <Box sx={dividerStyle} />

      {/* Section 3 */}
      <Box sx={sectionStyle}>
        <Typography sx={{ color: "#e2e8f0", fontSize: "0.875rem" }}>
          Adoption Gaps
        </Typography>
        <Typography
          sx={{ fontSize: "1.25rem", fontWeight: "bold", color: "#fff" }}
        >
          15
        </Typography>
      </Box>

      <Box sx={dividerStyle} />

      {/* Section 4 */}
      <Box sx={sectionStyle}>
        <Typography sx={{ color: "#e2e8f0", fontSize: "0.875rem" }}>
          Experience Quality Index
        </Typography>
        <Typography
          sx={{
            fontSize: "1.25rem",
            fontWeight: "bold",
            color: "#22c55e", // green-500
          }}
        >
          86%
        </Typography>
      </Box>
    </Box>
  );
};

export default NodeDetails;
