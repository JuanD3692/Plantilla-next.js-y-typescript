import { useState } from "react";

type SnackType = "success" | "error" | "warning" | "info";

interface SnackState {
  open: boolean;
  message: string;
  type: SnackType;
}

export const useSnack = () => {
  const [snack, setSnack] = useState<SnackState>({
    open: false,
    message: "",
    type: "error",
  });

  const showSnack = (message: string, type: SnackType = "error") => {
    setSnack({ open: true, message, type });
    setTimeout(() => {
      setSnack((prev) => ({ ...prev, open: false }));
    }, 3000);
  };

  const hideSnack = () => {
    setSnack((prev) => ({ ...prev, open: false }));
  };

  return {
    snack,
    showSnack,
    hideSnack,
  };
};
