import { toast } from "react-toastify";
export const notificationError = (
  text: string,
  duration?: number
) => {
  toast.error(text, {
    position: "top-right",
    autoClose: duration,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};

export const notificationSuccess = (text: string, duration?: number) => {
  toast.success(text, {
    position: "top-right",
    autoClose: duration,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};

export const notificationLoading = (text: string) => {
  toast(text, { type: "info" });
};
