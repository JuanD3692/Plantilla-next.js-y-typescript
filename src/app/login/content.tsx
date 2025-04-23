"use client";
import { useState } from "react";
import { useTheme } from "@/providers/ThemeProvider";
import { useSnack } from "@/providers/snackProvider";
import Link from "next/link";
import { FiMail, FiLock, FiArrowRight, FiLoader } from "react-icons/fi";
import { useApi } from "@/hooks/useApi";

interface LoginResponse {
  token: string;
  user: {
    id: string;
    email: string;
    role: string;
  };
}

export default function LoginPage() {
  const theme = useTheme();
  const { showSnack } = useSnack();
  const { loadAPI, isLoading } = useApi();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (!email || !password) {
        showSnack("Por favor completa todos los campos", "error");
        return;
      }

      const response = await loadAPI<LoginResponse>({
        url: "/auth/login",
        method: "POST",
        data: { email, password },
      });

      if (response.ok && response.data) {
        // Guardar token
        localStorage.setItem("token", response.data.token);
        showSnack("¡Inicio de sesión exitoso!", "success");
        // Aquí podrías redirigir al usuario
      } else {
        showSnack(response.message || "Error al iniciar sesión", "error");
      }
    } catch (error) {
      showSnack("Error en el servidor", "error");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center p-4 animate-fade-in">
      <div className="flex flex-col md:flex-row w-full max-w-5xl gap-8 items-center">
        {/* Columna izquierda - Decorativa */}
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left delay-100">
          <h1
            className="text-4xl md:text-5xl font-bold"
            style={{ color: theme.colors.primary.main }}
          >
            Bienvenido de nuevo
          </h1>
          <p
            className="text-lg md:text-xl"
            style={{ color: theme.colors.text.secondary }}
          >
            Nos alegra verte otra vez. Accede a tu cuenta para continuar tu
            experiencia.
          </p>
        </div>

        {/* Columna derecha - Formulario */}
        <div className="w-full md:w-1/2">
          <div
            className="relative p-8 rounded-3xl delay-200"
            style={{
              backgroundColor: theme.colors.background.paper,
              boxShadow: `
                0 0 0 1px ${theme.colors.text.disabled}10,
                0 4px 20px ${theme.colors.primary.main}05
              `,
            }}
          >
            {/* Elementos decorativos */}
            <div
              className="absolute -top-4 -right-4 w-24 h-24 rounded-full opacity-50"
              style={{
                background: `conic-gradient(from 0deg, ${theme.colors.primary.light}, ${theme.colors.primary.main}, ${theme.colors.primary.dark})`,
                filter: "blur(25px)",
              }}
            />

            <form onSubmit={handleSubmit} className="space-y-6 relative">
              {/* Inputs */}
              <div className="space-y-4">
                <div className="delay-300">
                  <div className="relative group">
                    <FiMail
                      className="absolute left-3 top-1/2 -translate-y-1/2 transition-colors duration-200"
                      size={20}
                      style={{ color: theme.colors.text.secondary }}
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-xl outline-none transition-all duration-300"
                      style={{
                        backgroundColor: theme.colors.background.default,
                        color: theme.colors.text.primary,
                        border: `1px solid ${theme.colors.text.disabled}20`,
                      }}
                    />
                  </div>
                </div>

                <div className="delay-400">
                  <div className="relative group">
                    <FiLock
                      className="absolute left-3 top-1/2 -translate-y-1/2 transition-colors duration-200"
                      size={20}
                      style={{ color: theme.colors.text.secondary }}
                    />
                    <input
                      type="password"
                      placeholder="Contraseña"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-xl outline-none transition-all duration-300"
                      style={{
                        backgroundColor: theme.colors.background.default,
                        color: theme.colors.text.primary,
                        border: `1px solid ${theme.colors.text.disabled}20`,
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Botón de submit */}
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-3 rounded-xl flex items-center justify-center space-x-2 delay-500 cursor-pointer transition-all duration-300 ${
                  isLoading ? "opacity-70" : "hover:opacity-90"
                }`}
                style={{
                  background: `linear-gradient(45deg, ${theme.colors.primary.main}, ${theme.colors.primary.light})`,
                  color: "#FFFFFF",
                }}
              >
                {isLoading ? (
                  <FiLoader className="animate-spin" size={20} />
                ) : (
                  <>
                    <span>Iniciar Sesión</span>
                    <FiArrowRight size={18} />
                  </>
                )}
              </button>

              {/* Links */}
              <div className="flex flex-col items-center space-y-4 delay-600">
                <Link
                  href="/auth/forgot-password"
                  className="text-sm hover:opacity-80 transition-opacity"
                  style={{ color: theme.colors.primary.main }}
                >
                  ¿Olvidaste tu contraseña?
                </Link>

                <div className="flex items-center space-x-2">
                  <span style={{ color: theme.colors.text.secondary }}>
                    ¿No tienes cuenta?
                  </span>
                  <Link
                    href="/auth/register"
                    className="text-sm font-medium hover:opacity-80 transition-opacity"
                    style={{ color: theme.colors.primary.main }}
                  >
                    Registrarse
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
