"use client";

import { Button, Menu } from "@mantine/core";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ChevronDown, MenuIcon as Menu2 } from "lucide-react";
import { useAuth } from "@/contexts/auth-context";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, logout } = useAuth();

  return (
    <header className="bg-white shadow-md py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/placeholder-logo.png"
            alt="Appical Logo"
            width={40}
            height={40}
            className="h-10 w-auto"
          />
          <span className="text-xl font-bold text-green-700">Appical</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex gap-6">
            <Link
              href="/productos"
              className="text-gray-700 hover:text-green-600"
            >
              Productos
            </Link>
            {/* <Link
              href="/capacitaciones"
              className="text-gray-700 hover:text-green-600"
            >
              Capacitaciones
            </Link>
            <Link
              href="/vendedores"
              className="text-gray-700 hover:text-green-600"
            >
              Vendedores
            </Link> */}
            {user && user.role.name === "admin" && (
              <Link
                href="/panel-vendedor"
                className="text-gray-700 hover:text-green-600"
              >
                Panel de Vendedor
              </Link>
            )}
          </nav>
          <div className="flex gap-3">
            {user ? (
              <Menu>
                <Menu.Target>
                  <Button variant="subtle">
                    Bienvenido {user.name}
                    <ChevronDown size={14} />
                  </Button>
                </Menu.Target>
                <Menu.Dropdown>
                  <Menu.Item component={Link} href="/perfil">
                    Perfil
                  </Menu.Item>
                  {user.role.name === "cliente" && (
                    <>
                      <Menu.Item component={Link} href="/carrito">
                        Mi Carrito
                      </Menu.Item>
                      {/* <Menu.Item component={Link} href="/registro-vendedor">
                        Registrarse como vendedor
                      </Menu.Item> */}
                    </>
                  )}
                  <Menu.Item onClick={logout}>Cerrar Sesión</Menu.Item>
                </Menu.Dropdown>
              </Menu>
            ) : (
              <>
                <Button
                  component={Link}
                  href="/login"
                  variant="outline"
                  color="green"
                >
                  Iniciar Sesión
                </Button>
                <Button component={Link} href="/registro-cliente" color="green">
                  Registrarse
                </Button>
              </>
            )}
          </div>
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
              href="/productos"
              className="text-gray-700 hover:text-green-600"
            >
              Productos
            </Link>
            {/* <Link
              href="/capacitaciones"
              className="text-gray-700 hover:text-green-600"
            >
              Capacitaciones
            </Link>
            <Link
              href="/vendedores"
              className="text-gray-700 hover:text-green-600"
            >
              Vendedores
            </Link> */}
            {user && user.role.name === "admin" && (
              <Link
                href="/panel-vendedor"
                className="text-gray-700 hover:text-green-600"
              >
                Panel de Vendedor
              </Link>
            )}
          </nav>
          <div className="flex flex-col gap-3 mt-4">
            {user ? (
              <>
                <Button
                  component={Link}
                  href="/perfil"
                  variant="subtle"
                  color="green"
                >
                  Perfil de {user.name}
                </Button>
                {user.role.name === "cliente" && (
                  <Button
                    component={Link}
                    href="/registro-vendedor"
                    variant="subtle"
                    color="green"
                  >
                    Registrarse como vendedor
                  </Button>
                )}
                <Button onClick={logout} variant="outline" color="red">
                  Cerrar Sesión
                </Button>
              </>
            ) : (
              <>
                <Button
                  component={Link}
                  href="/login"
                  variant="outline"
                  color="green"
                  fullWidth
                >
                  Iniciar Sesión
                </Button>
                <Button
                  component={Link}
                  href="/registro-cliente"
                  color="green"
                  fullWidth
                >
                  Registrarse
                </Button>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
