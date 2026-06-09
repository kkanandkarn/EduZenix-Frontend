export interface LoginFormData {
  email: string;
  password: string;
}

export type LoginType = "password" | "otp";
export type OtpStep = "idle" | "sent";
export interface LoginTypeButtonProps {
  loginType: LoginType;
  setLoginType: (loginType: LoginType) => void;
}
export interface TabsProps {
  value: string;
  tabs: TabsPropsTabs[];
  onChange: (event: React.SyntheticEvent, value: string) => void;
}
export interface TabsPropsTabs {
  value: string;
  label: string;
}
