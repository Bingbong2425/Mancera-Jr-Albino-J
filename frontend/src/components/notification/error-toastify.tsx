import toast from "react-hot-toast";

export const handleErrorToast = (text: string) => {
  toast.error(text);
};
