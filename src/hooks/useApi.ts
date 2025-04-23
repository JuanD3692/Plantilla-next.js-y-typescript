import { useContext } from "react";
import { ApiContext } from "@/providers/ApiProvider";

export function useApi() {
  const context = useContext(ApiContext);
  if (!context) {
    throw new Error("useApi debe usarse dentro de un ApiProvider");
  }
  return context;
}
