import {
  Box,
  Paper,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

interface Module {
  name: string;
  description: string;
  route: string;
}

interface ModuleAutoCompleteProps {
  matches: Module[];
  onSelect: (module: Module) => void;
}

const ModuleAutoComplete: React.FC<ModuleAutoCompleteProps> = ({
  matches,
  onSelect,
}) => {
  return (
    <Paper
      elevation={4}
      sx={{
        position: "absolute",
        top: "100%",
        left: 0,
        right: 0,
        zIndex: 1300,
        mt: 0.5,
        maxHeight: 320,
        overflowY: "auto",
        border: "1px solid",
        borderColor: "divider",
        borderRadius: 1,
      }}
    >
      <List disablePadding>
        {matches.map((mod) => (
          <ListItemButton
            component={Link}
            key={mod.route}
            onClick={() => onSelect(mod)}
            sx={{
              px: 2,
              py: 1,
              "&:not(:last-child)": {
                borderBottom: "1px solid",
                borderColor: "divider",
              },
              "&:hover": {
                backgroundColor: "action.hover",
              },
            }}
            to={mod.route}
          >
            <ListItemText
              primary={
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: 600,
                    color: "text.primary",
                  }}
                >
                  {mod.name}
                </Typography>
              }
              secondary={
                <Box
                  component="span"
                  sx={{ display: "flex", flexDirection: "column", gap: 0.25 }}
                >
                  <Typography variant="caption" color="text.secondary" noWrap>
                    {mod.description}
                  </Typography>
                </Box>
              }
            />
          </ListItemButton>
        ))}
      </List>
    </Paper>
  );
};

export default ModuleAutoComplete;
