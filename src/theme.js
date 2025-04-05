export const theme = {
  colors: {
    primary: {
      main: "#0066CC", // Azul Apple principal
      light: "#147CE5",
      dark: "#004999",
    },
    secondary: {
      main: "#86868B", // Gris Apple
      light: "#A1A1A6",
      dark: "#424245",
    },
    text: {
      primary: "#1D1D1F", // Casi negro Apple
      secondary: "#86868B", // Gris Apple
      disabled: "#AEAEB2",
    },
    background: {
      default: "#FFFFFF", // Blanco Apple
      paper: "#F5F5F7", // Gris claro Apple
    },
    error: "#FF3B30", // Rojo Apple
    warning: "#FF9500", // Naranja Apple
    success: "#34C759", // Verde Apple
    info: "#007AFF", // Azul Apple iOS
  },
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
  },
  breakpoints: {
    xs: "320px",
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
  },
  typography: {
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Helvetica Neue', sans-serif",
    h1: { fontSize: "2.5rem", fontWeight: 600 },
    h2: { fontSize: "2rem", fontWeight: 600 },
    h3: { fontSize: "1.75rem", fontWeight: 500 },
    body1: { fontSize: "1.125rem", fontWeight: 400 },
    body2: { fontSize: "0.875rem", fontWeight: 400 },
  },
};
