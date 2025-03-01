"use client"

import { Button } from "@mantine/core"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { MenuIcon as Menu2 } from "lucide-react"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/placeholder.svg?height=40&width=40"
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
            <Link href="/productos" className="text-gray-700 hover:text-green-600">
              Productos
            </Link>
            <Link href="/capacitaciones" className="text-gray-700 hover:text-green-600">
              Capacitaciones
            </Link>
            <Link href="/vendedores" className="text-gray-700 hover:text-green-600">
              Vendedores
            </Link>
          </nav>
          <div className="flex gap-3">
            <Button variant="outline" color="green">
              Iniciar Sesión
            </Button>
            <Button color="green">Registrarse</Button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <Menu2 size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 px-6 pb-4">
          <nav className="flex flex-col gap-4">
            <Link href="/productos" className="text-gray-700 hover:text-green-600">
              Productos
            </Link>
            <Link href="/capacitaciones" className="text-gray-700 hover:text-green-600">
              Capacitaciones
            </Link>
            <Link href="/vendedores" className="text-gray-700 hover:text-green-600">
              Vendedores
            </Link>
          </nav>
          <div className="flex flex-col gap-3 mt-4">
            <Button variant="outline" color="green" fullWidth>
              Iniciar Sesión
            </Button>
            <Button color="green" fullWidth>
              Registrarse
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}

