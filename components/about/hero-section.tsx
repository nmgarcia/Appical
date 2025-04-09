"use client";

import { Button, Container, Text, Title, Overlay } from "@mantine/core";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="relative h-[80vh] min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage:
            "url('https://www.loneralj.com/wp-content/uploads/2022/03/nutrientes-necesarios-para-los-cultivos-hidroponicos-1024x683.jpg')",
        }}
      >
        <Overlay
          gradient="linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.55))"
          opacity={0.6}
          zIndex={1}
        />
      </div>

      <Container size="lg" className="relative z-10 text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <Title className="text-5xl font-bold mb-6 text-green-0">
            El futuro del agro está aquí: conecta, aprende y crece con Appical.
          </Title>

          <Text size="xl" className="mb-8 text-gray-100">
            Innovación, Conexión y Crecimiento para el Agro del Futuro. La
            tecnología y la naturaleza se unen en Appical para transformar la
            industria agrícola. Conéctate con un ecosistema de productores,
            distribuidores, investigadores y comercios en un espacio digital
            diseñado para impulsar el comercio justo, la innovación y la
            sostenibilidad.
          </Text>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <Button
              component={Link}
              // href="/registro"
              href="#contacto"
              size="lg"
              color="green"
              radius={"md"}
              className="bg-green-600 hover:bg-green-700"
            >
              Contactanos
              {/* Únete Ahora */}
            </Button>
            <Button
              component={Link}
              href="#servicios"
              size="lg"
              variant="outline"
              color="white"
              radius={"md"}
              className="border-white text-white hover:bg-white hover:text-green-700"
            >
              Conoce Más
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </div>
  );
}
