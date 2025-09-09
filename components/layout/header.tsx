"use client";

import { Button, Menu } from "@mantine/core";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ChevronDown, MenuIcon as Menu2 } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/appical-logo-largo.png"
            alt="Appical Logo"
            width={150}
            height={75}
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex gap-6">
            <Link
              href="/directorio"
              className="text-gray-700 hover:text-green-600"
            >
              Proveedores
            </Link>
            <Link
              href="/capacitaciones"
              className="text-gray-700 hover:text-green-600"
            >
              Capacitaciones
            </Link>
            <Link
              href="/licitaciones"
              className="text-gray-700 hover:text-green-600"
            >
              Licitaciones
            </Link>
            <Link
              href="/about-us"
              className="text-gray-700 hover:text-green-600"
            >
              Acerca de
            </Link>
            <Link
              href="/home"
              className="text-gray-700 hover:text-green-600"
            >
              Inicio
            </Link>

          </nav>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu2 size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 px-6 pb-4">
          <nav className="flex flex-col gap-4">
            <Link
              href="/directorio"
              className="text-gray-700 hover:text-green-600"
            >
              Proveedores
            </Link>
            <Link
              href="/capacitaciones"
              className="text-gray-700 hover:text-green-600"
            >
              Capacitaciones
            </Link>
            <Link
              href="/licitaciones"
              className="text-gray-700 hover:text-green-600"
            >
              Licitaciones
            </Link>
            <Link
              href="/about-us"
              className="text-gray-700 hover:text-green-600"
            >
              Acerca de
            </Link>
            <Link
              href="/home"
              className="text-gray-700 hover:text-green-600"
            >
              Inicio
            </Link>

          </nav>
        </div>
      )}
    </header>
  );
}
