"use client";

import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";
import { MapPin, Building, Star } from "lucide-react";
import { motion } from "framer-motion";
import { Company } from "@/data/companies";

interface CompanyCardProps {
  company: Company;
  onViewProfile: () => void;
}

export default function CompanyCard({
  company,
  onViewProfile,
}: CompanyCardProps) {
  const isPremium = company.plan === "premium";
  const isDestacado = company.plan === "destacado" || isPremium;

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className={`h-full ${isPremium ? "relative overflow-hidden" : ""}`}
    >
      {/* Borde animado para empresas premium */}
      {isPremium && (
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-green-400 via-blue-500 to-green-400 animate-gradient-x -z-10" />
      )}

      <Card
        withBorder
        shadow="sm"
        radius="md"
        className={`h-full flex flex-col ${
          isPremium ? "m-0.5 bg-white" : isDestacado ? "border-green-300" : ""
        }`}
      >
        {/* Contenedor de imagen con altura fija */}
        <div className="w-full h-[200px] relative mb-4 bg-white rounded-lg">
          <Image
            src={company.logo || "/placeholder.svg"}
            alt={company.nombre}
            className="rounded-lg p-4"
            style={{
              objectFit: "contain",
              width: "100%",
              height: "100%",
            }}
          />
        </div>

        {/* Contenido de texto alineado */}
        <div className="flex-grow flex flex-col p-4">
          <Text size="lg" fw={600} className="mb-2 line-clamp-2">
            {company.nombre}
          </Text>

          <div className="flex items-center gap-2 mb-2">
            <MapPin size={16} className="text-gray-500" />
            <Text size="sm" className="text-gray-600 line-clamp-1">
              {company.ubicacion}
            </Text>
          </div>

          <div className="flex items-center gap-2 mb-2">
            <Building size={16} className="text-gray-500" />
            <Text size="sm" className="text-gray-600">
              {company.rubro}
            </Text>
          </div>

          <Text size="sm" color="dimmed" className="mb-4 line-clamp-2">
            {company.descripcion}
          </Text>

          {/* Botón alineado al final */}
          <div className="mt-auto">
            <Button
              variant="light"
              color="blue"
              fullWidth
              onClick={onViewProfile}
            >
              Ver Perfil
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
