import { useState } from "react";
import {
  Divider,
  MenuItem,
  MenuList,
  Popover,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import CheckIcon from "@mui/icons-material/Check";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import ToolbarButton from "./ToolbarButton";
import { menuPaperSx, menuSectionLabelSx } from "./tableStyles";
import type { SortColumn } from "./types";

interface Props {
  sortColumns: SortColumn[];
  sortColumn: string;
  sortOrder: "asc" | "desc";
  onSortColumnChange: (key: string) => void;
  onSortOrderChange: (order: "asc" | "desc") => void;
}

/**
 * Replaces the per-header sort icons: one toolbar button that picks the column
 * to sort by and the direction.
 */
const SortMenu = ({
  sortColumns,
  sortColumn,
  sortOrder,
  onSortColumnChange,
  onSortOrderChange,
}: Props) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const isSorted = sortColumns.some((column) => column.key === sortColumn);

  const handleClose = () => setAnchorEl(null);

  // Picking an order before a column is a request to sort, so fall back to the
  // first column instead of leaving the toggle inert.
  const handleOrderChange = (order: "asc" | "desc") => {
    onSortOrderChange(order);
    if (!isSorted && sortColumns.length > 0) {
      onSortColumnChange(sortColumns[0].key);
    }
  };

  return (
    <>
      <ToolbarButton
        label="Sort"
        startIcon={<SwapVertIcon />}
        active={isSorted}
        onClick={(event) => setAnchorEl(event.currentTarget)}
      />

      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        slotProps={{ paper: { sx: menuPaperSx } }}
      >
        <Typography sx={menuSectionLabelSx}>Sort by</Typography>

        <MenuList dense sx={{ py: 0 }}>
          {sortColumns.map((column) => (
            <MenuItem
              key={column.key}
              selected={column.key === sortColumn}
              onClick={() => onSortColumnChange(column.key)}
              sx={{ gap: 1, justifyContent: "space-between", fontSize: "0.8125rem" }}
            >
              {column.label}
              {column.key === sortColumn && (
                <CheckIcon sx={{ fontSize: "1rem", color: "var(--blue-600)" }} />
              )}
            </MenuItem>
          ))}
        </MenuList>

        <Divider />

        <Typography sx={menuSectionLabelSx}>Order</Typography>

        <ToggleButtonGroup
          exclusive
          fullWidth
          size="small"
          value={sortOrder}
          onChange={(_, value: "asc" | "desc" | null) =>
            value && handleOrderChange(value)
          }
          sx={{ px: 1.5, pb: 1.5, pt: 0.5, gap: 1 }}
        >
          <ToggleButton
            value="asc"
            sx={{ gap: 0.5, textTransform: "none", borderRadius: "8px" }}
          >
            <ArrowUpwardIcon sx={{ fontSize: "1rem" }} />
            Ascending
          </ToggleButton>
          <ToggleButton
            value="desc"
            sx={{ gap: 0.5, textTransform: "none", borderRadius: "8px" }}
          >
            <ArrowDownwardIcon sx={{ fontSize: "1rem" }} />
            Descending
          </ToggleButton>
        </ToggleButtonGroup>

        {isSorted && (
          <>
            <Divider />
            <MenuList dense sx={{ py: 0 }}>
              <MenuItem
                onClick={() => {
                  onSortColumnChange("");
                  handleClose();
                }}
                sx={{ fontSize: "0.8125rem", color: "var(--slate-600)" }}
              >
                Clear sorting
              </MenuItem>
            </MenuList>
          </>
        )}
      </Popover>
    </>
  );
};

export default SortMenu;
