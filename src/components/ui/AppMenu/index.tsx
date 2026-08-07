import { useState } from "react";
import { Menu, MenuItem, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export interface AppMenuItem {
  label: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  color?: string;
  onClick?: () => void;
  component?: "typography" | "link";
  url?: string;
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
        {items.map((item) => {
          const isLink = item.component === "link" && !!item.url;

          return (
            <MenuItem
              key={item.label}
              disabled={item.disabled}
              {...(isLink ? { component: Link, to: item.url as string } : {})}
              onClick={() => {
                item.onClick?.();
                handleClose();
              }}
              sx={{
                minHeight: 36,
                px: 1.5,
                py: 0.5,
                gap: 1,
                color: "inherit",
                textDecoration: "none",
              }}
            >
              {item.icon}

              <Typography variant="body2" sx={{ color: item.color }}>
                {item.label}
              </Typography>
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
};

export default AppMenu;
