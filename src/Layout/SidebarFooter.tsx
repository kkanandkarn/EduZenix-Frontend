import * as React from "react";
import {
  Avatar,
  Box,
  ButtonBase,
  Divider,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import HelpOutlineIcon from "@mui/icons-material/HelpOutlineOutlined";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import { AuthenticationContext } from "@toolpad/core/AppProvider";
import { useSession } from "@toolpad/core/useSession";
import {
  SIDEBAR_BG,
  SIDEBAR_BORDER,
  SIDEBAR_HOVER_BG,
  SIDEBAR_TEXT,
  SIDEBAR_TEXT_ACTIVE,
  SIDEBAR_TEXT_MUTED,
  SIDEBAR_WIDTH,
} from "./constants";

const DANGER = "#F87171";
const DANGER_HOVER = "#FCA5A5";

interface SidebarFooterProps {
  mini: boolean;
}

const SidebarFooter = ({ mini }: SidebarFooterProps) => {
  const session = useSession();
  const authentication = React.useContext(AuthenticationContext);
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const user = session?.user;
  const initials = (user?.name ?? "")
    .split(" ")
    .slice(0, 2)
    .map((word) => word.charAt(0).toUpperCase())
    .join("");

  const closeMenu = () => setAnchorEl(null);

  const handleSignOut = () => {
    closeMenu();
    authentication?.signOut();
  };

  return (
    <Box
      sx={{
        position: "sticky",
        bottom: 0,
        mt: "auto",
        bgcolor: SIDEBAR_BG,
        borderTop: `1px solid ${SIDEBAR_BORDER}`,
        px: 1,
        py: 0.5,
        zIndex: 1,
      }}
    >
      <ButtonBase
        onClick={(event) => setAnchorEl(event.currentTarget)}
        aria-haspopup="menu"
        aria-expanded={Boolean(anchorEl)}
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: mini ? "center" : "flex-start",
          gap: 1.25,
          px: mini ? 0 : 1.5,
          py: 1.25,
          borderRadius: "10px",
          "&:hover": { backgroundColor: SIDEBAR_HOVER_BG },
        }}
      >
        <Avatar
          src={user?.image ?? undefined}
          alt={user?.name ?? "Account"}
          sx={{ width: 32, height: 32, fontSize: 13 }}
        >
          {initials}
        </Avatar>

        {!mini && (
          <>
            <Box sx={{ minWidth: 0, textAlign: "left", flex: 1 }}>
              <Typography
                noWrap
                sx={{
                  fontSize: "0.875rem",
                  fontWeight: 700,
                  lineHeight: 1.3,
                  color: SIDEBAR_TEXT_ACTIVE,
                }}
              >
                {user?.name}
              </Typography>
              <Typography
                noWrap
                sx={{
                  fontSize: "0.75rem",
                  lineHeight: 1.3,
                  color: SIDEBAR_TEXT_MUTED,
                }}
              >
                Admin
              </Typography>
            </Box>
            <KeyboardArrowRightIcon
              sx={{ fontSize: 20, color: SIDEBAR_TEXT_MUTED }}
            />
          </>
        )}
      </ButtonBase>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={closeMenu}
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
        transformOrigin={{ vertical: "bottom", horizontal: "left" }}
        slotProps={{
          list: { sx: { py: 0.5 } },
          paper: {
            sx: {
              width: mini ? 240 : SIDEBAR_WIDTH - 16,
              mb: 1,
              backgroundColor: SIDEBAR_BG,
              backgroundImage: "none",
              border: `1px solid ${SIDEBAR_BORDER}`,
              borderRadius: "12px",
              color: SIDEBAR_TEXT,
              "& .MuiMenuItem-root": {
                borderRadius: "8px",
                mx: 0.5,
                py: 1,
                color: SIDEBAR_TEXT,
                "& .MuiSvgIcon-root": { fontSize: 20, color: SIDEBAR_TEXT },
                "& .MuiTypography-root": { fontSize: "0.875rem" },
                "&:hover": {
                  backgroundColor: SIDEBAR_HOVER_BG,
                  color: SIDEBAR_TEXT_ACTIVE,
                  "& .MuiSvgIcon-root": { color: SIDEBAR_TEXT_ACTIVE },
                },
              },
              "& .MuiDivider-root": { borderColor: SIDEBAR_BORDER },
            },
          },
        }}
      >
        <Box
          sx={{ display: "flex", alignItems: "center", gap: 1.25, px: 2, py: 1 }}
        >
          <Avatar
            src={user?.image ?? undefined}
            alt={user?.name ?? "Account"}
            sx={{ width: 36, height: 36, fontSize: 14 }}
          >
            {initials}
          </Avatar>
          <Box sx={{ minWidth: 0 }}>
            <Typography
              noWrap
              sx={{
                fontSize: "0.875rem",
                fontWeight: 700,
                color: SIDEBAR_TEXT_ACTIVE,
              }}
            >
              {user?.name}
            </Typography>
            <Typography
              noWrap
              sx={{ fontSize: "0.75rem", color: SIDEBAR_TEXT_MUTED }}
            >
              {user?.email}
            </Typography>
          </Box>
        </Box>

        <Divider sx={{ my: 0.5 }} />

        {/* TODO: link these up once the help and profile pages exist */}
        <MenuItem onClick={closeMenu}>
          <ListItemIcon>
            <HelpOutlineIcon />
          </ListItemIcon>
          <ListItemText>Help &amp; Support</ListItemText>
        </MenuItem>

        <MenuItem onClick={closeMenu}>
          <ListItemIcon>
            <ManageAccountsOutlinedIcon />
          </ListItemIcon>
          <ListItemText>Profile &amp; Settings</ListItemText>
        </MenuItem>

        <Divider sx={{ my: 0.5 }} />

        <MenuItem
          onClick={handleSignOut}
          sx={{
            "&&": {
              color: DANGER,
              "& .MuiSvgIcon-root": { color: DANGER },
              "&:hover": {
                backgroundColor: "rgba(248, 113, 113, 0.12)",
                color: DANGER_HOVER,
                "& .MuiSvgIcon-root": { color: DANGER_HOVER },
              },
            },
          }}
        >
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText>Logout</ListItemText>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default SidebarFooter;
