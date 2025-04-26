"use client";

import { Card, Text, Badge, Group } from "@mantine/core";
import { Clock, Star } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Capacitacion } from "@/data/capacitaciones";

interface CapacitacionCardProps {
  capacitacion: Capacitacion;
}

// Ajustar colores de las tarjetas para mejor contraste
export default function CapacitacionCard({
  capacitacion,
}: CapacitacionCardProps) {
  return (
    <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
      <Link
        href={`/capacitaciones/${capacitacion.id}`}
        className="block h-full"
      >
        <Card
          p={0}
          radius="md"
          className="overflow-hidden h-full flex flex-col bg-white border border-gray-200 hover:border-green-500 hover:shadow-md transition-all"
        >
          <div
            className="h-40 relative"
            style={{
              backgroundImage: `url(${capacitacion.imagen})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {capacitacion.proximamente && (
              <Badge
                color="yellow"
                className="absolute top-2 right-2"
                size="lg"
                radius="sm"
                variant="filled"
              >
                Próximamente
              </Badge>
            )}
            {capacitacion.nueva && !capacitacion.proximamente && (
              <Badge
                color="green"
                className="absolute top-2 right-2"
                size="lg"
                radius="sm"
                variant="filled"
              >
                Nuevo
              </Badge>
            )}
          </div>

          <div className="p-4 flex-grow flex flex-col">
            <Badge
              color="green"
              size="sm"
              radius="sm"
              className="mb-2 self-start"
            >
              {capacitacion.categoria}
            </Badge>
            <Text
              fw={700}
              size="lg"
              lineClamp={2}
              className="mb-2 text-gray-800"
            >
              {capacitacion.titulo}
            </Text>
            <Text size="sm" c="dimmed" lineClamp={2} className="mb-auto">
              {capacitacion.descripcion}
            </Text>

            <Group align="apart" className="mt-4">
              <div className="flex items-center">
                <Clock size={14} className="mr-1 text-gray-500" />
                <Text size="xs" c="dimmed">
                  {capacitacion.duracion}
                </Text>
              </div>
              <div className="flex items-center">
                <Star size={14} className="mr-1 text-yellow-500" />
                <Text size="xs" c="dimmed">
                  {capacitacion.puntuacion.toFixed(1)}
                </Text>
              </div>
            </Group>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
}
