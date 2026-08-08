import { Box, Typography, Stack, IconButton } from "@mui/material";
import type { SxProps, Theme } from "@mui/material";
import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

export interface StickyTopBarProps {
  /** Main heading text */
  title: string;
  /** Optional subtitle/description text */
  description?: string;
  /** Optional actions area (buttons, menus, etc.) */
  actions?: React.ReactNode;
  /** Optional style overrides for the outer container */
  sx?: SxProps<Theme>;
  back?: {
    name: string;
    route: string;
  };
}

const TopBar: React.FC<StickyTopBarProps> = ({
  title,
  description,
  actions,
  sx,
  back,
}) => {
  const navigate = useNavigate();

  return (
    <Box
      component="header"
      sx={{
        position: "sticky",
        top: 0,
        zIndex: (theme) => theme.zIndex.appBar,
        bgcolor: "#ffffff",
        boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.08)",
        px: { xs: 2, sm: 3 },
        py: 1,
        ...sx,
      }}
    >
      <Stack
        sx={{
          flexDirection: { xs: "column", sm: "row" },
          alignItems: { xs: "flex-start", sm: "center" },
          justifyContent: "space-between",
          gap: 2,
        }}
      >
        <Stack
          sx={{
            flexDirection: "row",
            alignItems: "center",
            gap: 1,
          }}
        >
          {back && (
            <IconButton
              aria-label="Go back"
              onClick={() => navigate(back.route)}
              size="small"
              sx={{ mt: description ? "-2px" : 0 }}
            >
              <ArrowBackIcon />
            </IconButton>
          )}

          <Box>
            <Typography variant="h6" component="h1" sx={{ fontWeight: 600 }}>
              {back && (
                <Box component="span" sx={{}}>
                  {back.name} /{" "}
                </Box>
              )}
              {title}
            </Typography>
            {description && (
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mt: 0.5 }}
              >
                {description}
              </Typography>
            )}
          </Box>
        </Stack>

        {actions && <Box sx={{ flexShrink: 0 }}>{actions}</Box>}
      </Stack>
    </Box>
  );
};

export default TopBar;
