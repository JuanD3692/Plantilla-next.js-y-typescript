export type HttpMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

export interface ApiOptions {
  url: string;
  method: HttpMethod;
  requiresAuth?: boolean;
  data?: any;
  isFormData?: boolean;
}

export interface ApiResponse<T = unknown> {
  data: T | null;
  status: number;
  ok: boolean;
  message?: string;
}
