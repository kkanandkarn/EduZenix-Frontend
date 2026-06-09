import React from "react";
import { Bounce, toast, ToastContainer } from "react-toastify";

const Notifier = () => {
  return (
    <ToastContainer
      position="top-center"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      transition={Bounce}
    />
  );
};
export const notifier = {
  success: (msg: string) =>
    toast.success(msg, { style: { whiteSpace: "pre-line" } }),
  error: (msg: string) =>
    toast.error(msg, { style: { whiteSpace: "pre-line" } }),
  info: (msg: string) => toast.info(msg, { style: { whiteSpace: "pre-line" } }),
  warning: (msg: string) =>
    toast.warning(msg, { style: { whiteSpace: "pre-line" } }),
};
export default Notifier;
