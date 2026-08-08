import { useState } from "react";
import {
  Checkbox,
  Divider,
  MenuItem,
  MenuList,
  Popover,
  Typography,
} from "@mui/material";
import ViewWeekOutlinedIcon from "@mui/icons-material/ViewWeekOutlined";
import type { GridColumnVisibilityModel } from "@mui/x-data-grid";
import ToolbarButton from "./ToolbarButton";
import { menuPaperSx, menuSectionLabelSx } from "./tableStyles";

export interface HideableColumn {
  field: string;
  label: string;
}

interface Props {
  columns: HideableColumn[];
  model: GridColumnVisibilityModel;
  onChange: (model: GridColumnVisibilityModel) => void;
}

/** Toggles which grid columns are visible. */
const ColumnsMenu = ({ columns, model, onChange }: Props) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const hiddenCount = columns.filter(
    (column) => model[column.field] === false,
  ).length;

  return (
    <>
      <ToolbarButton
        label="Columns"
        startIcon={<ViewWeekOutlinedIcon />}
        active={hiddenCount > 0}
        onClick={(event) => setAnchorEl(event.currentTarget)}
      />

      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        slotProps={{ paper: { sx: menuPaperSx } }}
      >
        <Typography sx={menuSectionLabelSx}>Columns</Typography>

        <MenuList dense sx={{ py: 0, maxHeight: 320, overflowY: "auto" }}>
          {columns.map((column) => {
            const visible = model[column.field] !== false;

            return (
              <MenuItem
                key={column.field}
                onClick={() => onChange({ ...model, [column.field]: !visible })}
                sx={{ gap: 0.5, fontSize: "0.8125rem" }}
              >
                <Checkbox size="small" checked={visible} sx={{ p: 0.5 }} />
                {column.label}
              </MenuItem>
            );
          })}
        </MenuList>

        {hiddenCount > 0 && (
          <>
            <Divider />
            <MenuList dense sx={{ py: 0 }}>
              <MenuItem
                onClick={() => onChange({})}
                sx={{ fontSize: "0.8125rem", color: "var(--slate-600)" }}
              >
                Show all columns
              </MenuItem>
            </MenuList>
          </>
        )}
      </Popover>
    </>
  );
};

export default ColumnsMenu;
