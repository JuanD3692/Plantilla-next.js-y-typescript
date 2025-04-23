"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import { ApiOptions, ApiResponse } from "@/types/api";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';
const API_VERSION = process.env.NEXT_PUBLIC_API_VERSION || 'v1';

interface ApiContextType {
  isLoading: boolean;
  loadAPI: <T = unknown>(options: ApiOptions) => Promise<ApiResponse<T>>;
}

export const ApiContext = createContext<ApiContextType | undefined>(undefined);

export function ApiProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(false);

  const loadAPI = async <T = unknown,>(
    options: ApiOptions
  ): Promise<ApiResponse<T>> => {
    const {
      url,
      method,
      requiresAuth = false,
      data,
      isFormData = false,
    } = options;
    setIsLoading(true);

    try {
      // Construir URL completa
      const fullUrl = url.startsWith('http') ? url : `${BASE_URL}/${API_VERSION}${url}`;

      const headers: Record<string, string> = {
        Accept: "application/json",
      };

      if (!isFormData) {
        headers["Content-Type"] = "application/json";
      }

      if (requiresAuth) {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("No autorizado");
        }
        headers["Authorization"] = `Bearer ${token}`;
      }

      const fetchOptions: RequestInit = {
        method,
        headers,
        credentials: "include",
      };

      if (data) {
        fetchOptions.body = isFormData ? data : JSON.stringify(data);
      }

      const response = await fetch(fullUrl, fetchOptions);
      const responseData = await response.json();

      return {
        data: responseData as T,
        status: response.status,
        ok: response.ok,
        message: responseData.message,
      };
    } catch (error) {
      return {
        data: null,
        status: 500,
        ok: false,
        message: error instanceof Error ? error.message : "Error desconocido",
      };
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ApiContext.Provider value={{ isLoading, loadAPI }}>
      {children}
    </ApiContext.Provider>
  );
}
