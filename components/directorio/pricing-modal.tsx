"use client";

import {
  Modal,
  Title,
  Text,
  Button,
  Card,
  List,
  ThemeIcon,
  Badge,
} from "@mantine/core";
import { Check, Star, X } from "lucide-react";

interface PricingModalProps {
  opened: boolean;
  onClose: () => void;
}

export default function PricingModal({ opened, onClose }: PricingModalProps) {
  const plans = [
    {
      name: "Gratis",
      price: "0",
      description: "Publicación básica para pequeños emprendimientos",
      features: [
        { text: "Publicación básica", included: true },
        { text: "1 categoría", included: true },
        { text: "Contacto a través de la plataforma", included: true },
        { text: "Logo visible", included: false },
        { text: "Contacto directo", included: false },
        { text: "Prioridad en búsquedas", included: false },
        { text: "Animaciones y destacados", included: false },
        { text: "Campañas promocionales", included: false },
      ],
      color: "gray",
      buttonText: "Comenzar Gratis",
    },
    {
      name: "Destacado",
      price: "4.999",
      description: "Ideal para empresas en crecimiento",
      features: [
        { text: "Publicación completa", included: true },
        { text: "3 categorías", included: true },
        { text: "Contacto a través de la plataforma", included: true },
        { text: "Logo visible", included: true },
        { text: "Contacto directo", included: true },
        { text: "Prioridad media en búsquedas", included: true },
        { text: "Animaciones y destacados", included: false },
        { text: "Campañas promocionales", included: false },
      ],
      color: "blue",
      buttonText: "Elegir Plan Destacado",
      popular: true,
    },
    {
      name: "Premium",
      price: "9.999",
      description: "Máxima visibilidad para tu empresa",
      features: [
        { text: "Publicación completa", included: true },
        { text: "5 categorías", included: true },
        { text: "Contacto a través de la plataforma", included: true },
        { text: "Logo visible", included: true },
        { text: "Contacto directo destacado", included: true },
        { text: "Aparece primero en búsquedas", included: true },
        { text: "Animaciones y destacados", included: true },
        { text: "Campañas promocionales", included: true },
      ],
      color: "green",
      buttonText: "Elegir Plan Premium",
    },
  ];

  return (
    <Modal opened={opened} onClose={onClose} title={null} size="xl" centered>
      <Title order={3} className="text-center mb-2">
        Publicá tu Empresa en Appical
      </Title>
      <Text className="text-center mb-6 text-gray-600">
        Elige el plan que mejor se adapte a las necesidades de tu empresa
      </Text>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {plans.map((plan) => (
          <Card
            key={plan.name}
            withBorder
            shadow="sm"
            radius="md"
            className={`flex flex-col ${
              plan.popular ? "border-blue-400 relative" : ""
            }`}
          >
            {plan.popular && (
              <Badge
                color="blue"
                className="absolute -top-2 right-4"
                leftSection={<Star size={12} className="fill-current" />}
              >
                Más Popular
              </Badge>
            )}

            <Title order={4} className={`text-${plan.color}-600 mb-1`}>
              {plan.name}
            </Title>
            <div className="flex items-baseline mb-4">
              <Text size="xl" fw={700}>
                ${plan.price}
              </Text>
              <Text size="sm" color="dimmed" ml={4}>
                /mes
              </Text>
            </div>
            <Text size="sm" color="dimmed" mb={4}>
              {plan.description}
            </Text>

            <List spacing="sm" size="sm" className="mb-6 flex-grow">
              {plan.features.map((feature, index) => (
                <List.Item
                  key={index}
                  icon={
                    feature.included ? (
                      <ThemeIcon color={plan.color} size={20} radius="xl">
                        <Check size={12} />
                      </ThemeIcon>
                    ) : (
                      <ThemeIcon
                        color="gray"
                        size={20}
                        radius="xl"
                        variant="light"
                      >
                        <X size={12} />
                      </ThemeIcon>
                    )
                  }
                  className={feature.included ? "" : "text-gray-400"}
                >
                  {feature.text}
                </List.Item>
              ))}
            </List>

            <Button
              color={plan.color}
              fullWidth
              onClick={() =>
                alert(
                  "Funcionalidad de suscripción no disponible en la versión de demostración"
                )
              }
            >
              {plan.buttonText}
            </Button>
          </Card>
        ))}
      </div>

      <Text size="xs" color="dimmed" className="text-center mt-6">
        Todos los precios están expresados en pesos argentinos (ARS) y no
        incluyen IVA.
        <br />
        La facturación es mensual y puedes cancelar en cualquier momento.
      </Text>
    </Modal>
  );
}
