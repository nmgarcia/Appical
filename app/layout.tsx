import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { AuthProvider } from "@/contexts/auth-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Appical - Marketplace del Agro",
  description: "Conecta con el Agro del Futuro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <MantineProvider>
          <AuthProvider>
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-grow">{children}</main>
              <Footer />
            </div>
          </AuthProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
