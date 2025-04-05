"use client";
import React, { createContext, useContext, useState } from "react";
import { Snackbar } from "@/components/snackBar";

type SnackType = "success" | "error" | "warning" | "info";

interface SnackContextType {
  showSnack: (message: string, type?: SnackType) => void;
}

const SnackContext = createContext<SnackContextType | null>(null);

export function SnackbarProvider({ children }: { children: React.ReactNode }) {
  const [snack, setSnack] = useState({
    open: false,
    message: "",
    type: "error" as SnackType,
  });

  const showSnack = (message: string, type: SnackType = "error") => {
    setSnack({ open: true, message, type });
    setTimeout(() => {
      setSnack((prev) => ({ ...prev, open: false }));
    }, 3000);
  };

  const handleClose = () => {
    setSnack((prev) => ({ ...prev, open: false }));
  };

  return (
    <SnackContext.Provider value={{ showSnack }}>
      {children}
      <Snackbar
        open={snack.open}
        message={snack.message}
        type={snack.type}
        onClose={handleClose}
      />
    </SnackContext.Provider>
  );
}

export const useSnack = () => {
  const context = useContext(SnackContext);
  if (!context) {
    throw new Error("useSnack debe usarse dentro de un SnackbarProvider");
  }
  return context;
};
