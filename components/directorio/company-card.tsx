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
        <Card.Section className="relative">
          <Image
            src={company.logo || "/placeholder.svg"}
            height={160}
            alt={company.nombre}
          />
          {isPremium && (
            <Badge
              className="absolute top-2 right-2"
              color="green"
              variant="filled"
              leftSection={<Star size={12} className="fill-current" />}
            >
              Premium
            </Badge>
          )}
          {isDestacado && !isPremium && (
            <Badge
              className="absolute top-2 right-2"
              color="blue"
              variant="filled"
            >
              Destacado
            </Badge>
          )}
        </Card.Section>

        <div className="flex-grow p-4">
          <Text fw={700} size="lg" mb={2} lineClamp={1}>
            {company.nombre}
          </Text>

          <Group gap="xs" mb={2}>
            <MapPin size={16} className="text-gray-500" />
            <Text size="sm" color="dimmed" lineClamp={1}>
              {company.ubicacion}
            </Text>
          </Group>

          <Group gap="xs" mb={3}>
            <Building size={16} className="text-gray-500" />
            <Text size="sm" color="dimmed">
              {company.rubro}
            </Text>
          </Group>

          <div className="mb-3 flex flex-wrap gap-1">
            {company.certificaciones.map((cert) => (
              <Badge key={cert} size="sm" variant="outline" color="green">
                {cert}
              </Badge>
            ))}
            <Badge size="sm" variant="outline" color="blue">
              {company.tipoProduccion}
            </Badge>
          </div>

          <Text size="sm" color="dimmed" lineClamp={2} mb={4}>
            {company.descripcion}
          </Text>
        </div>

        <Card.Section className="p-4 pt-0 mt-auto">
          <Button
            variant="light"
            color="green"
            fullWidth
            onClick={onViewProfile}
            className="transition-colors hover:bg-green-100"
          >
            Ver Perfil
          </Button>
        </Card.Section>
      </Card>
    </motion.div>
  );
}
