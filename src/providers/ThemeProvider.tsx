"use client";

import { createContext, useContext, ReactNode } from "react";
import { theme } from "@/theme";

const ThemeContext = createContext(theme);

export const useTheme = () => useContext(ThemeContext);

export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
}
