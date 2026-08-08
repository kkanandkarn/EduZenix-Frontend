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

  // Controlled by the parent so the field always reflects the applied column.
  const selectedColumn = searchColumn ?? defaultColumn;

  const handleColumnChange = (e: SelectChangeEvent) => {
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
          <SearchIcon sx={{ fontSize: "1.125rem", color: "var(--gray-400)" }} />
        </InputAdornment>
      }
      endAdornment={
        searchColumns && searchColumns.length > 0 ? (
          <InputAdornment position="end">
            <SearchColumnsSelect
              selectedColumn={selectedColumn}
              handleColumnChange={handleColumnChange}
              searchColumns={searchColumns}
              disabled={props.disabled}
            />
          </InputAdornment>
        ) : null
      }
      sx={{
        height: 38,
        borderRadius: "8px",
        backgroundColor: props.bgColor ?? "#ffffff",
        fontSize: "0.8125rem",
        pl: 1.5,
        pr: 1,
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: "var(--gray-200)",
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: "var(--gray-300)",
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderWidth: "1px",
          borderColor: "var(--blue-400)",
        },
        "& .MuiInputBase-input": {
          py: 1,
          px: 0,
          color: "var(--slate-800)",
          "&::placeholder": {
            color: "var(--gray-400)",
            opacity: 1,
          },
        },
      }}
    />
  );
};

export default SearchInput;
