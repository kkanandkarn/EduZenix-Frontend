import * as React from "react";
import { type Theme, useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { type SelectChangeEvent } from "@mui/material/Select";
import type { TableFilterOptions, TableFilters } from "../../../../types/Table";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

function getStyles(name: number, selected: number[], theme: Theme) {
  return {
    fontWeight: selected.includes(name)
      ? theme.typography.fontWeightMedium
      : theme.typography.fontWeightRegular,
  };
}

interface Props {
  options: TableFilterOptions[];
  values: number[];
  label: string;
  onChange: (values: number[]) => void;
}

export default function MultiSelect({
  options,
  values,
  label,
  onChange,
}: Props) {
  const theme = useTheme();

  const handleChange = (event: SelectChangeEvent<number[]>) => {
    const { value } = event.target;
    // MUI can return a string when typing; cast to number[]
    onChange((value as number[]).map(Number));
  };
  return (
    <FormControl fullWidth size="small">
      <InputLabel>{label}</InputLabel>
      <Select
        multiple
        value={values}
        onChange={handleChange}
        input={<OutlinedInput label={label} />}
        MenuProps={{
          // ✅ Render inside the drawer's stacking context, not the document body
          disablePortal: true,
          slotProps: {
            paper: {
              style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
              },
            },
          },
        }}
      >
        {options.map((option) => (
          <MenuItem
            key={option.value}
            value={option.value}
            style={getStyles(option.value, values, theme)}
          >
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
