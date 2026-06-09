import { useState, useRef } from "react";
import {
  TextField,
  IconButton,
  InputAdornment,
  FormControl,
  InputLabel,
  OutlinedInput,
  FormHelperText,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import type { TextInputProps } from "../../type";

const PasswordInput = (props: TextInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };
  return (
    <FormControl sx={{ m: 1, height: 80 }} variant="outlined" fullWidth>
      <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
      <OutlinedInput
        id="outlined-adornment-password"
        type={showPassword ? "text" : "password"}
        placeholder={props.placeholder}
        autoFocus={props.autoFocus ?? false}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        required={props.required ?? false}
        inputRef={props.ref}
        disabled={props.disabled ?? false}
        error={!!props.error}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label={
                showPassword ? "hide the password" : "display the password"
              }
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              onMouseUp={handleMouseUpPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        label={props.label}
        fullWidth
      />
      {props.error && <FormHelperText error>{props.error}</FormHelperText>}
    </FormControl>
  );
  // const [showPassword, setShowPassword] = useState(false);
  // const inputRef = useRef<HTMLInputElement>(null);

  // const handleClickShowPassword = () => {
  //   const input = inputRef.current;
  //   const selectionStart = input?.selectionStart ?? null;
  //   const selectionEnd = input?.selectionEnd ?? null;

  //   setShowPassword((prev) => !prev);

  //   requestAnimationFrame(() => {
  //     if (input) {
  //       input.focus();
  //       if (selectionStart !== null && selectionEnd !== null) {
  //         input.setSelectionRange(selectionStart, selectionEnd);
  //       }
  //     }
  //   });
  // };

  // const handleMouseDownPassword = (
  //   event: React.MouseEvent<HTMLButtonElement>,
  // ) => {
  //   event.preventDefault();
  // };

  // return (
  //   <TextField
  //     id="outlined-password-input"
  //     label={props.label}
  //     variant={props.variant ?? "outlined"}
  //     placeholder={props.placeholder}
  //     autoFocus={props.autoFocus ?? false}
  //     name={props.name}
  //     value={props.value}
  //     onChange={props.onChange}
  //     required={props.required ?? false}
  //     inputRef={inputRef}
  //     disabled={props.disabled ?? false}
  //     type={showPassword ? "text" : "password"}
  //     slotProps={{
  //       input: {
  //         endAdornment: (
  //           <InputAdornment position="end">
  //             <IconButton
  //               aria-label="toggle password visibility"
  //               onClick={handleClickShowPassword}
  //               onMouseDown={handleMouseDownPassword}
  //               edge="end"
  //             >
  //               {showPassword ? <VisibilityOff /> : <Visibility />}
  //             </IconButton>
  //           </InputAdornment>
  //         ),
  //       },
  //     }}
  //   />
  // );
};

export default PasswordInput;
