import { Box, Typography } from "@mui/material";

const InviteUserDialogTitle = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <Typography variant="h6" sx={{ color: "var(--slate-600)" }}>
          Invite User
        </Typography>
      </Box>
    </Box>
  );
};

export default InviteUserDialogTitle;
