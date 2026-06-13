import {
  Badge,
  Box,
  Divider,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HelpIcon from "@mui/icons-material/Help";
import SettingsIcon from "@mui/icons-material/Settings";
import { Account } from "@toolpad/core/Account";
import ModuleFinder from "./ModuleFinder";

const ToolbarActions = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
      <ModuleFinder />

      <Tooltip title="Notifications">
        <IconButton color="primary">
          <Badge badgeContent={0} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </Tooltip>

      {/* FAQ / Help Icon */}
      <Tooltip title="Help & FAQ">
        <IconButton color="primary">
          <HelpIcon />
        </IconButton>
      </Tooltip>

      {/* Settings Icon */}
      <Tooltip title="Settings">
        <IconButton color="primary">
          <SettingsIcon />
        </IconButton>
      </Tooltip>

      <Divider orientation="vertical" flexItem />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "end",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="caption"
          sx={{
            lineHeight: 1,
            ml: 2,
            fontWeight: "bold",
            fontSize: 14,
          }}
          className=" text-slate-600"
        >
          Anand Kumar Karn
        </Typography>
        <Typography
          variant="caption"
          sx={{ fontSize: 12, color: "text.secondary", lineHeight: 1 }}
        >
          Admin
        </Typography>
      </Box>
      <Account />
    </Box>
  );
};

export default ToolbarActions;
