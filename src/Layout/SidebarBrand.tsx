import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { Link } from "react-router-dom";
import { LOGO_IMAGE } from "../utils/constant";
import {
  BRAND_HEIGHT,
  MOBILE_BRAND_HEIGHT,
  SIDEBAR_BG,
  SIDEBAR_BORDER,
  SIDEBAR_HOVER_BG,
  SIDEBAR_MINI_WIDTH,
  SIDEBAR_TEXT_ACTIVE,
  SIDEBAR_TEXT_MUTED,
  SIDEBAR_WIDTH,
} from "./constants";

interface SidebarBrandProps {
  menuOpen: boolean;
  onToggleMenu: (open: boolean) => void;
  hideMenuButton?: boolean;
}

/**
 * Replaces the Toolpad header. It is pinned over the top of the sidebar so the
 * logo and app name sit inside the navigation instead of a top bar. Below `md`
 * the sidebar is a temporary drawer, so it stretches into a slim bar.
 */
const SidebarBrand = ({
  menuOpen,
  onToggleMenu,
  hideMenuButton = false,
}: SidebarBrandProps) => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: (theme) => theme.zIndex.drawer + 1,
        display: "flex",
        alignItems: "center",
        bgcolor: SIDEBAR_BG,
        borderBottom: `1px solid ${SIDEBAR_BORDER}`,
        borderRight: { xs: "none", md: `1px solid ${SIDEBAR_BORDER}` },
        width: { xs: "100%", md: menuOpen ? SIDEBAR_WIDTH : SIDEBAR_MINI_WIDTH },
        height: { xs: MOBILE_BRAND_HEIGHT, md: BRAND_HEIGHT },
        flexDirection: { xs: "row", md: menuOpen ? "row" : "column" },
        justifyContent: { xs: "flex-start", md: "center" },
        gap: { xs: 1, md: menuOpen ? 1 : 0.25 },
        px: { xs: 1, md: menuOpen ? 2 : 1 },
        transition: (theme) =>
          theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
      }}
    >
      <Box
        component={Link}
        to="/dashboard"
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          minWidth: 0,
          flex: { xs: "0 0 auto", md: menuOpen ? 1 : "0 0 auto" },
          textDecoration: "none",
        }}
      >
        <Box
          component="img"
          src={LOGO_IMAGE}
          alt="EduZenix"
          sx={{ height: { xs: 32, md: menuOpen ? 38 : 32 }, width: "auto" }}
        />

        <Box
          sx={{
            display: { xs: "flex", md: menuOpen ? "flex" : "none" },
            flexDirection: "column",
            alignItems: "flex-start",
            minWidth: 0,
          }}
        >
          <Typography
            sx={{
              fontWeight: 700,
              color: SIDEBAR_TEXT_ACTIVE,
              fontSize: "1.2rem",
              lineHeight: 1.2,
            }}
          >
            EduZenix
          </Typography>
          <Box
            sx={{
              px: 0.75,
              borderRadius: "12px",
              border: `1px solid ${SIDEBAR_BORDER}`,
              gap: 0.5,
              color: SIDEBAR_TEXT_MUTED,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <AccountBalanceWalletIcon sx={{ fontSize: "0.9rem" }} />
            <Typography sx={{ display: "flex", fontSize: "0.7rem", gap: 0.2 }}>
              <span>₹</span>
              <span>50000</span>
            </Typography>
          </Box>
        </Box>
      </Box>

      {!hideMenuButton && (
        <Tooltip title={menuOpen ? "Collapse menu" : "Expand menu"}>
          <IconButton
            size="small"
            onClick={() => onToggleMenu(!menuOpen)}
            aria-label={menuOpen ? "Collapse menu" : "Expand menu"}
            sx={{
              order: { xs: -1, md: 0 },
              color: SIDEBAR_TEXT_MUTED,
              "&:hover": {
                color: SIDEBAR_TEXT_ACTIVE,
                backgroundColor: SIDEBAR_HOVER_BG,
              },
            }}
          >
            {menuOpen ? <MenuOpenIcon /> : <MenuIcon />}
          </IconButton>
        </Tooltip>
      )}
    </Box>
  );
};

export default SidebarBrand;
