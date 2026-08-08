import { MenuItem, Select, type SelectChangeEvent } from "@mui/material";
import type { SearchColumn } from "../../type";

interface Props {
  selectedColumn: string;
  handleColumnChange: (e: SelectChangeEvent) => void;
  searchColumns: SearchColumn[];
  disabled?: boolean;
}
const SearchColumnsSelect = (props: Props) => {
  return (
    <Select
      value={props.selectedColumn}
      onChange={props.handleColumnChange}
      size="small"
      variant="standard"
      disableUnderline
      disabled={props.disabled}
      sx={{
        minWidth: 62,
        height: 26,
        fontSize: "0.75rem",
        fontFamily: "Poppins, sans-serif",
        color: "var(--slate-600)",
        border: "1px solid var(--gray-200)",
        borderRadius: "6px",
        "& .MuiSelect-select": {
          py: 0,
          pr: "22px !important",
          pl: 1,
        },
        "& .MuiSvgIcon-root": {
          fontSize: "1rem",
          color: "var(--slate-500)",
        },
      }}
      MenuProps={{
        slotProps: {
          paper: {
            sx: {
              fontFamily: "Poppins, sans-serif",
              fontSize: "0.875rem",
            },
          },
        },
      }}
    >
      {props.searchColumns.map((col) => (
        <MenuItem
          key={col.key}
          value={col.key}
          sx={{
            fontFamily: "Poppins, sans-serif",
            fontSize: "0.875rem",
          }}
        >
          {col.label}
        </MenuItem>
      ))}
    </Select>
  );
};

export default SearchColumnsSelect;
