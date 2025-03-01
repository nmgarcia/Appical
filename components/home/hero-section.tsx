import { Button } from "@mantine/core"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="relative h-[600px] flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/placeholder.svg?height=600&width=1200')",
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(0,0,0,0.4)",
        }}
      />

      <div className="container mx-auto px-6 relative z-10 text-white">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Conecta con el Agro del Futuro</h1>
          <p className="text-xl mb-8 text-gray-100">
            La plataforma que une a productores, proveedores y compradores del sector agropecuario en un solo lugar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button component={Link} href="/productos" size="lg" color="green">
              Explorar Productos
            </Button>
            <Button
              component={Link}
              href="/registro-vendedor"
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-green-700"
            >
              Registrarme como Vendedor
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

