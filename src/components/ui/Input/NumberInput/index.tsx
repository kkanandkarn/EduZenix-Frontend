import React from "react";
import type { TextInputProps } from "../../type";
import { Box, TextField } from "@mui/material";

const NumberInput = (props: TextInputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (/^\d*$/.test(val)) {
      props.onChange(e);
    }
  };
  return (
    <Box sx={{ height: 80 }}>
      <TextField
        type="text"
        id="outlined-basic"
        label={props.label}
        variant={props.variant ?? "outlined"}
        placeholder={props.placeholder}
        autoFocus={props.autoFocus ?? false}
        name={props.name}
        value={props.value}
        onChange={handleChange}
        required={props.required ?? false}
        inputRef={props.inputRef}
        disabled={props.disabled ?? false}
        error={!!props.error}
        helperText={props.error}
        slotProps={{
          input: {
            readOnly: props.readonly ?? false,
          },
        }}
        fullWidth
      />
    </Box>
  );
};

export default NumberInput;
