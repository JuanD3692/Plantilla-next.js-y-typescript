"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { SnackbarProvider } from "@/providers/snackProvider";
import { ApiProvider } from "@/providers/ApiProvider";
import Footer from "@/globals/footer";
import Header from "@/globals/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <SnackbarProvider>
            <ApiProvider>
              <Header />
              {children}
              <Footer />
            </ApiProvider>
          </SnackbarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
