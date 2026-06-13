import { useState } from "react";
import {
  InputAdornment,
  OutlinedInput,
  type SelectChangeEvent,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import type { TextInputProps } from "../../type";
import SearchColumnsSelect from "./SearchColumnsSelect";

const SearchInput = (props: TextInputProps) => {
  const { searchColumns, onColumnChange, searchColumn } = props;
  const defaultColumn =
    searchColumns?.find((col) => col.default)?.key ??
    searchColumns?.[0]?.key ??
    "";

  const [selectedColumn, setSelectedColumn] = useState<string>(
    searchColumn ?? defaultColumn,
  );

  const handleColumnChange = (e: SelectChangeEvent) => {
    setSelectedColumn(e.target.value);
    onColumnChange?.(e.target.value);
  };
  return (
    <OutlinedInput
      type={"text"}
      placeholder={props.placeholder}
      name={props.name}
      value={props.value}
      onChange={props.onChange}
      required={props.required}
      disabled={props.disabled}
      autoFocus={props.autoFocus}
      inputRef={props.inputRef}
      size="small"
      fullWidth={props.fullWidth}
      startAdornment={
        <InputAdornment position="start">
          <SearchIcon fontSize="small" />
        </InputAdornment>
      }
      endAdornment={
        searchColumns && searchColumns.length > 0 ? (
          <InputAdornment position="end">
            <SearchColumnsSelect
              selectedColumn={selectedColumn}
              handleColumnChange={handleColumnChange}
              searchColumns={searchColumns}
            />
          </InputAdornment>
        ) : null
      }
      sx={{
        "& .MuiOutlinedInput-root": {
          backgroundColor: props.disabled ? "grey.100" : "grey.100",
          "& fieldset": {
            border: "none",
          },
          "&:hover fieldset": {
            border: "none",
          },
          "&.Mui-focused fieldset": {
            border: "none",
          },
        },
        "& .MuiInputBase-input": {
          py: 1,
          px: 0,
          fontFamily: "Poppins, sans-serif",
          fontSize: "0.875rem",
          color: "text.primary",
          "&::placeholder": {
            color: "grey.400",
          },
        },
      }}
    />
  );
};

export default SearchInput;
