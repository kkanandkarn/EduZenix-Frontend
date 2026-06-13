import type { SvgIconComponent } from "@mui/icons-material";

export interface TextInputProps {
  type: InputType;
  label: string;
  variant?: "outlined" | "filled" | "standard";
  placeholder: string;
  autoFocus?: boolean;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  ref?: React.Ref<HTMLInputElement>;
  disabled?: boolean;
  error?: string;
  readonly?: boolean;
  fullWidth?: boolean;
  searchColumns?: SearchColumn[];
  searchColumn?: string;
  onColumnChange?: (key: string) => void;
  StartIcon?: SvgIconComponent;
  EndIcon?: SvgIconComponent;
  bgColor?: string;
}
export type SearchColumn = {
  key: string;
  label: string;
  default?: boolean;
};

export interface OTPInputProps {
  type: InputType;
  otp: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  length: number;
}
export type InputType =
  | "text"
  | "number"
  | "password"
  | "otp"
  | "search"
  | "SingleSelect"
  | "MultiSelect"
  | "outline";
export interface SingleSelectOptions {
  value: number;
  label: string;
}
export interface OutlineSelectProps {
  label: string;
  type: InputType;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  options: SingleSelectOptions[];
}
export type InputProps = TextInputProps | OTPInputProps | OutlineSelectProps;

export interface TabsProps {
  value: string;
  onChange: (event: React.SyntheticEvent, newValue: string) => void;
  tabs: { value: string; label: string; count?: number }[];
}
export type TextTransform =
  | "capitalize"
  | "uppercase"
  | "lowercase"
  | "none"
  | "full-width"
  | "full-size-kana";
export interface ButtonProps {
  startIcon?: React.ReactNode;
  onClick?: () => void;
  variant?: "contained" | "outlined" | "text";
  disabled?: boolean;
  label: string;
  fullWidth?: boolean;
  textTransform?: TextTransform;
}
