import React from "react";
import {
  Drawer,
  Box,
  Typography,
  IconButton,
  Divider,
  Stack,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AppButton from "../AppButton";

interface FilterDrawerProps {
  open: boolean;
  onClose: () => void;
  onApply: () => void;
  children?: React.ReactNode;
  onReset: () => void;
}

const FilterDrawer = ({
  open,
  onClose,
  onApply,
  children,
  onReset,
}: FilterDrawerProps) => {
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      // MUI Drawer uses SlideTransition by default from the anchor direction
      // No extra transitionDuration config needed — the default slide is built in
      slotProps={{
        paper: {
          sx: {
            width: { xs: "100%", sm: 380 },
            display: "flex",
            flexDirection: "column",
          },
        },
      }}
      sx={{ zIndex: 10000 }}
    >
      {/* ── Header ── */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: 2.5,
          py: 1.5,
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          Filters
        </Typography>
        <IconButton
          onClick={onClose}
          size="small"
          aria-label="close filter drawer"
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      </Box>

      <Divider />

      {/* ── Filter content area (consumer fills this in) ── */}
      <Box sx={{ flex: 1, overflowY: "auto", py: 0.5 }}>{children}</Box>
      {/* <Box sx={{ flex: 1, overflowY: "auto", px: 2.5, py: 2 }}>{children}</Box> */}

      <Divider />

      {/* ── Footer actions ── */}
      <Stack
        direction="row"
        spacing={1.5}
        sx={{ px: 2.5, py: 2, justifyContent: "space-between" }}
      >
        <AppButton variant="outlined" label="Cancel" onClick={onClose} />

        <Box sx={{ display: "flex", gap: 1.5 }}>
          <AppButton variant="outlined" label="Clear All" onClick={onReset} />
          <AppButton variant="contained" onClick={onApply} label="Apply" />
        </Box>
      </Stack>
    </Drawer>
  );
};

export default FilterDrawer;
