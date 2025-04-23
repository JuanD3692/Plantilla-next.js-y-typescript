"use client";
import { useTheme } from "@/providers/ThemeProvider";

export default function Home() {
  const theme = useTheme();

  return (
    <main
      className="flex min-h-screen flex-col items-center justify-between p-24 animate-fade-in"
      style={{
        backgroundColor: theme.colors.background.default,
        color: theme.colors.text.primary,
      }}
    >
      <h1
        className="delay-200"
        style={{
          fontSize: theme.typography.h1.fontSize,
          fontWeight: theme.typography.h1.fontWeight,
          color: theme.colors.primary.main,
        }}
      >
        Bienvenido a mi aplicación
      </h1>

      <p
        className="delay-300"
        style={{
          fontSize: theme.typography.body1.fontSize,
          color: theme.colors.text.secondary,
        }}
      >
        Esta es una página de ejemplo usando el tema personalizado
      </p>
    </main>
  );
}
