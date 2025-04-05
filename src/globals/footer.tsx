"use client";
import Link from "next/link";
import { useTheme } from "@/providers/ThemeProvider";
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

export default function Footer() {
  const theme = useTheme();

  const socialLinks = [
    { Icon: FaFacebookF, href: "https://facebook.com", name: "Facebook" },
    { Icon: FaTwitter, href: "https://twitter.com", name: "Twitter" },
    { Icon: FaInstagram, href: "https://instagram.com", name: "Instagram" },
    { Icon: FaGithub, href: "https://github.com", name: "GitHub" },
  ];

  return (
    <footer
      className="animate-fade-in backdrop-blur-sm bg-opacity-80"
      style={{
        backgroundColor: theme.colors.background.paper,
        color: theme.colors.text.primary,
        boxShadow: "0 -10px 30px rgba(0, 0, 0, 0.03)",
      }}
    >
      <div className="container mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* About Us */}
          <div className="space-y-4 animate-slide-in delay-100">
            <h3
              style={{ fontSize: theme.typography.h3.fontSize }}
              className="font-semibold"
            >
              Sobre Nosotros
            </h3>
            <p
              style={{
                color: theme.colors.text.secondary,
                fontSize: theme.typography.body2.fontSize,
              }}
            >
              Nos dedicamos a proporcionar el mejor servicio a nuestros clientes
              y crear experiencias increíbles.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 animate-slide-in delay-200">
            <h3
              style={{ fontSize: theme.typography.h3.fontSize }}
              className="font-semibold"
            >
              Enlaces Rápidos
            </h3>
            <ul className="space-y-2">
              <li className="hover-scale">
                <Link href="/" style={{ color: theme.colors.text.secondary }}>
                  Inicio
                </Link>
              </li>
              <li className="hover-scale">
                <Link
                  href="/servicios"
                  style={{ color: theme.colors.text.secondary }}
                >
                  Servicios
                </Link>
              </li>
              <li className="hover-scale">
                <Link
                  href="/contacto"
                  style={{ color: theme.colors.text.secondary }}
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4 animate-slide-in delay-300">
            <h3
              style={{ fontSize: theme.typography.h3.fontSize }}
              className="font-semibold"
            >
              Contacto
            </h3>
            <address
              className="not-italic"
              style={{
                color: theme.colors.text.secondary,
                fontSize: theme.typography.body2.fontSize,
              }}
            >
              <p>Calle Principal 123</p>
              <p>Ciudad, País</p>
              <p>Email: info@ejemplo.com</p>
              <p>Tel: +34 123 456 789</p>
            </address>
          </div>

          {/* Social Links */}
          <div className="space-y-4 animate-slide-in delay-400">
            <h3
              style={{ fontSize: theme.typography.h3.fontSize }}
              className="font-semibold"
            >
              Síguenos
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map(({ Icon, href, name }) => (
                <Link
                  key={href}
                  href={href}
                  className="hover-scale"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: theme.colors.text.secondary }}
                >
                  <Icon className="h-5 w-5" />
                  <span className="sr-only">{name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright and Policies */}
        <div
          className="mt-12 pt-8 animate-scale-in delay-500"
          style={{
            borderTop: `1px solid ${theme.colors.text.disabled}20`,
          }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p
              style={{
                color: theme.colors.text.secondary,
                fontSize: theme.typography.body2.fontSize,
              }}
            >
              © {new Date().getFullYear()} Tu Empresa. Todos los derechos
              reservados.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-4">
                <li className="hover-scale">
                  <Link
                    href="/privacidad"
                    style={{ color: theme.colors.text.secondary }}
                    className="text-xs"
                  >
                    Política de Privacidad
                  </Link>
                </li>
                <li className="hover-scale">
                  <Link
                    href="/terminos"
                    style={{ color: theme.colors.text.secondary }}
                    className="text-xs"
                  >
                    Términos de Servicio
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
