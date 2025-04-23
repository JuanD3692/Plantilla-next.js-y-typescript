import { useContext } from "react";
import { ApiContext } from "@/providers/ApiProvider";

export const useApi = () => {
  const context = useContext(ApiContext);

  if (!context) {
    throw new Error("useApi debe utilizarse dentro de ApiProvider");
  }

  return context;
};
