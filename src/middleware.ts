import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Definir tipos de roles
type Role = "admin" | "user" | "guest";

// Configuración de rutas protegidas
const protectedRoutes: Record<string, Role[]> = {
  "/admin": ["admin"],
  "/dashboard": ["admin", "user"],
  "/profile": ["admin", "user", "guest"],
};

export function middleware(request: NextRequest) {
  // Obtener la sesión/token (ejemplo usando cookies)
  const session = request.cookies.get("session")?.value;

  // Obtener la ruta actual
  const path = request.nextUrl.pathname;

  // Verificar si la ruta necesita autorización
  const requiredRoles = Object.entries(protectedRoutes).find(([route]) =>
    path.startsWith(route)
  )?.[1];

  if (requiredRoles) {
    // Si no hay sesión, redirigir a login
    if (!session) {
      const loginUrl = new URL("/login", request.url);

      return NextResponse.redirect(loginUrl);
    }

    // Aquí deberías decodificar tu token/sesión y obtener el rol
    // Este es un ejemplo, ajústalo según tu implementación
    const userRole = getUserRole(session);

    // Verificar si el usuario tiene el rol requerido
    if (!requiredRoles.includes(userRole)) {
      // Redirigir a login o página de acceso denegado
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.next();
}

// Configurar las rutas que el middleware debe procesar
export const config = {
  matcher: ["/admin/:path*", "/dashboard/:path*", "/profile/:path*"],
};

// Función auxiliar para obtener el rol del usuario
function getUserRole(session: string): Role {
  try {
    // Aquí implementar la lógica real para decodificar el token
    // y obtener el rol del usuario
    const decodedSession = JSON.parse(session);
    if (decodedSession.role && isValidRole(decodedSession.role)) {
      return decodedSession.role;
    }
    return "guest";
  } catch {
    return "guest";
  }
}

// Función auxiliar para verificar si un valor es un rol válido
function isValidRole(role: any): role is Role {
  return ["admin", "user", "guest"].includes(role);
}
