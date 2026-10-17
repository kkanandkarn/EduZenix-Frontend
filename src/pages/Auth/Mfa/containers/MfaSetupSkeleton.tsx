import { Box, Divider, Paper, Skeleton } from "@mui/material";

const MfaSetupSkeleton = () => {
  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Box
        sx={{
          width: "70%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "start",
        }}
      >
        <Skeleton variant="text" width="45%" sx={{ fontSize: "1.5rem" }} />
        <Skeleton variant="text" width="90%" />
      </Box>
      <Box
        sx={{
          mt: 2,
          width: "70%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Paper
          elevation={0}
          sx={{
            width: "100%",
            p: 2,
            border: "1px solid var(--gray-200)",
            borderRadius: 4,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Skeleton variant="rounded" width={200} height={200} />
          <Skeleton variant="text" width="50%" sx={{ fontSize: 12, mt: 1 }} />
          <Divider sx={{ alignSelf: "stretch", my: 1.5 }} />
          <Skeleton variant="text" width="60%" sx={{ fontSize: 12 }} />
          <Skeleton
            variant="rounded"
            width="100%"
            height={42}
            sx={{ mt: 1, borderRadius: 2 }}
          />
        </Paper>
      </Box>
      <Box
        sx={{
          mt: 2,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Skeleton variant="rounded" width="70%" height={42} />
      </Box>
    </Box>
  );
};

export default MfaSetupSkeleton;
