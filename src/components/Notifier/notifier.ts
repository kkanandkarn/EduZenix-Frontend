import { toast } from "react-toastify";

export const notifier = {
  success: (msg: string) =>
    toast.success(msg, { style: { whiteSpace: "pre-line" } }),
  error: (msg: string) =>
    toast.error(msg, { style: { whiteSpace: "pre-line" } }),
  info: (msg: string) => toast.info(msg, { style: { whiteSpace: "pre-line" } }),
  warning: (msg: string) =>
    toast.warning(msg, { style: { whiteSpace: "pre-line" } }),
};
