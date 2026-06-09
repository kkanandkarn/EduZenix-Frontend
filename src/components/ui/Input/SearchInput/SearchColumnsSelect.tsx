import { MenuItem, Select, type SelectChangeEvent } from "@mui/material";
import React from "react";
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
        minWidth: 100,
        fontSize: "0.8rem",
        fontFamily: "Poppins, sans-serif",
        color: "text.secondary",
        "& .MuiSelect-select": {
          py: 0,
          pr: "24px !important",
          pl: 1,
        },
        "& .MuiSvgIcon-root": {
          fontSize: "1rem",
          color: "text.secondary",
        },
        borderLeft: "1px solid",
        borderColor: "divider",
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
