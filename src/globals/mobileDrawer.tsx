"use client";
import { useState } from "react";
import Link from "next/link";
import { useTheme } from "@/providers/ThemeProvider";
import { HiX } from "react-icons/hi";
import { FiMenu, FiHome, FiBox, FiTool, FiMail, FiUser } from "react-icons/fi";

interface MobileDrawerProps {
  links: Array<{ name: string; path: string }>;
  pathname: string;
}

// Mapa de iconos para cada ruta
const iconMap = {
  "/": FiHome,
  "/productos": FiBox,
  "/servicios": FiTool,
  "/contacto": FiMail,
  "/login": FiUser,
};

export default function MobileDrawer({ links, pathname }: MobileDrawerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();

  return (
    <div className="md:hidden">
      {/* Botón de menú */}
      <button
        onClick={() => setIsOpen(true)}
        className="hover-scale p-2 transition-colors duration-300"
        style={{ color: theme.colors.text.primary }}
        aria-label="Menú"
      >
        <FiMenu size={24} />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0" onClick={() => setIsOpen(false)} />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-screen w-[280px] z-50 transition-all duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          backgroundColor: theme.colors.background.default,
          boxShadow: "-4px 0 15px rgba(0, 0, 0, 0.05)",
        }}
      >
        {/* Header del drawer */}
        <div
          className="flex justify-between items-center px-6 py-4"
          style={{
            borderBottom: `1px solid ${theme.colors.text.disabled}15`,
          }}
        >
          <span
            className="font-semibold text-lg"
            style={{ color: theme.colors.primary.main }}
          >
            Menú
          </span>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:opacity-70 transition-opacity duration-200"
            style={{ color: theme.colors.text.primary }}
            aria-label="Cerrar menú"
          >
            <HiX size={20} />
          </button>
        </div>

        {/* Links con iconos */}
        <nav className="p-6">
          <ul className="space-y-6">
            {[...links, { name: "Iniciar Sesión", path: "/login" }].map(
              (link) => {
                const Icon =
                  iconMap[link.path as keyof typeof iconMap] || FiBox;
                return (
                  <li key={link.path}>
                    <Link
                      href={link.path}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center space-x-3 py-2 transition-colors duration-200 hover:opacity-80"
                      style={{
                        color:
                          pathname === link.path
                            ? theme.colors.primary.main
                            : theme.colors.text.secondary,
                      }}
                    >
                      <Icon size={20} />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                );
              }
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
}
