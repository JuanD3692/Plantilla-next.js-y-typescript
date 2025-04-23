export type Role = "admin" | "user" | "guest";

export interface Session {
  user: {
    id: string;
    email: string;
    role: Role;
  };
  expires: string;
}
