import { Box, OutlinedInput, TextField } from "@mui/material";
import type { TextInputProps } from "../../type";

const TextInput = (props: TextInputProps) => {
  return (
    <Box sx={{ height: 80 }}>
      <TextField
        id="outlined-basic"
        label={props.label}
        variant={props.variant ?? "outlined"}
        placeholder={props.placeholder}
        autoFocus={props.autoFocus ?? false}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        required={props.required ?? false}
        inputRef={props.ref}
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

export default TextInput;
