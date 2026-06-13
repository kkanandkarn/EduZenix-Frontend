import { InputAdornment, OutlinedInput } from "@mui/material";
import type { TextInputProps } from "../../type";

const OutlineInput = (props: TextInputProps) => {
  const { StartIcon, EndIcon } = props;
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
        StartIcon ? (
          <InputAdornment position="start">
            <StartIcon sx={{ color: "var(--gray-500)" }} />
          </InputAdornment>
        ) : null
      }
      endAdornment={
        EndIcon ? (
          <InputAdornment position="end">
            <EndIcon />
          </InputAdornment>
        ) : null
      }
      sx={{
        backgroundColor: props.bgColor ?? "grey.100",

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
            color: "grey.900",
          },
        },
      }}
    />
  );
};

export default OutlineInput;
