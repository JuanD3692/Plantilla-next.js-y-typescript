"use client";
import Link from "next/link";
import { useTheme } from "@/providers/ThemeProvider";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import MobileDrawer from "./mobileDrawer";
import { FiUser } from "react-icons/fi"; // Importamos el icono

export default function Header() {
  const theme = useTheme();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  const links = [
    { name: "Inicio", path: "/" },
    { name: "Productos", path: "/productos" },
    { name: "Servicios", path: "/servicios" },
    { name: "Contacto", path: "/contacto" },
  ];

  // Detectar scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-40 transition-all duration-300 animate-fade-in backdrop-blur-md
        ${isScrolled ? "py-4" : "py-6"}`}
      style={{
        backgroundColor: isScrolled
          ? `${theme.colors.background.default}cc`
          : "transparent",
        boxShadow: isScrolled ? "0 4px 20px rgba(0, 0, 0, 0.05)" : "none",
      }}
    >
      <nav className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-semibold hover-scale"
            style={{ color: theme.colors.primary.main }}
          >
            Tu Logo
          </Link>

          {/* Enlaces de navegación para Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`hover-scale transition-colors duration-300
                  ${pathname === link.path ? "animate-slide-in" : ""}`}
                style={{
                  color:
                    pathname === link.path
                      ? theme.colors.primary.main
                      : theme.colors.text.secondary,
                }}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Icono de inicio de sesión para Desktop */}
          <Link
            href="/login"
            className="animate-scale-in hover-scale hidden md:flex items-center justify-center space-x-2 px-4 py-2 rounded-full transition-all duration-300"
            style={{
              backgroundColor: isScrolled
                ? `${theme.colors.background.paper}80`
                : `${theme.colors.background.paper}40`,
              boxShadow: isScrolled ? "0 2px 8px rgba(0, 0, 0, 0.05)" : "none",
              backdropFilter: "blur(8px)",
            }}
          >
            <FiUser
              size={18}
              style={{
                color: theme.colors.text.secondary,
              }}
            />
            <span
              className="text-sm"
              style={{
                color: theme.colors.text.secondary,
              }}
            >
              Iniciar sesión
            </span>
          </Link>

          {/* Mobile Drawer */}
          <MobileDrawer links={links} pathname={pathname} />
        </div>
      </nav>
    </header>
  );
}
