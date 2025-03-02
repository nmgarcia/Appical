import { Button } from "@mantine/core";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative h-[600px] flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1560493676-04071c5f467b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(0,0,0,0.4)",
        }}
      />

      <div className="container mx-auto px-6 relative z-10 text-white">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Conecta con el Agro las 24 horas con Appical
          </h1>
          <p className="text-xl mb-8 text-gray-100">
            una plataforma digital innovadora que impulsa el comercio justo y
            abierto en la industria de insumos agrícolas y sus derivados.
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
              color="white"
              className="border-white text-white hover:bg-white hover:text-green-700"
            >
              Registrarme como Vendedor
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
