"use client";
import { useState } from "react";
import { useTheme } from "@/providers/ThemeProvider";
import { useSnack } from "@/providers/snackProvider";
import Link from "next/link";
import { FiMail, FiLock, FiArrowRight, FiLoader } from "react-icons/fi";

export default function LoginPage() {
  const theme = useTheme();
  const { showSnack } = useSnack();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Validación de campos
      if (!email || !password) {
        showSnack("Por favor completa todos los campos", "error");
        return;
      }

      setIsLoading(true);

      // Aquí iría tu lógica de login real
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simula llamada API

      // Simulamos éxito
      showSnack("¡Inicio de sesión exitoso!", "success");
    } catch (error) {
      showSnack("Error al iniciar sesión", "error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center p-4 animate-fade-in">
      <div className="flex flex-col md:flex-row w-full max-w-5xl gap-8 items-center">
        {/* Columna izquierda - Decorativa */}
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left animate-slide-in">
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
            className="relative p-8 rounded-3xl animate-scale-in"
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
                <div className="animate-slide-in delay-100">
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

                <div className="animate-slide-in delay-200">
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
                className={`w-full py-3 rounded-xl flex items-center justify-center space-x-2 hover-scale animate-slide-in delay-300 cursor-pointer transition-all duration-300 ${
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
              <div className="flex flex-col items-center space-y-4 animate-slide-in delay-400">
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
