import Alert from "@mui/material/Alert";

type severity = "success" | "info" | "warning" | "error";
type variant = "filled" | "outlined";
interface Props {
  severity: severity;
  variant: variant;
  message: string;
}
const AppAlert = ({ severity, variant, message }: Props) => {
  return (
    <Alert variant={variant} severity={severity}>
      {message}
    </Alert>
  );
};

export default AppAlert;
