import { useState } from "react";
import {
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

export interface AppMenuItem {
  label: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}

interface AppMenuProps {
  trigger: (
    openMenu: (event: React.MouseEvent<HTMLElement>) => void,
  ) => React.ReactNode;
  items: AppMenuItem[];
}

const AppMenu = ({ trigger, items }: AppMenuProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {trigger(handleOpen)}

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            sx: {
              minWidth: 140,
            },
          },
        }}
      >
        {items.map((item) => (
          <MenuItem
            key={item.label}
            onClick={() => {
              item.onClick?.();
              handleClose();
            }}
            sx={{
              minHeight: 36,
              px: 1.5,
              py: 0.5,
              gap: 1,
            }}
          >
            {item.icon}

            <Typography variant="body2">{item.label}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default AppMenu;
