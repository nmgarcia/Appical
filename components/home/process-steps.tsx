"use client";
import { Timeline, Text } from "@mantine/core";
import { ShieldCheck, Package, CreditCard, Truck } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Verificación de Vendedores",
    description:
      "Todos los vendedores pasan por un riguroso proceso de verificación para garantizar la calidad y confiabilidad.",
    icon: <ShieldCheck className="text-green-600 bg-white" size={24} />,
  },
  {
    id: 2,
    title: "Publicación de Productos",
    description:
      "Los vendedores verificados pueden publicar sus productos con descripciones detalladas y precios transparentes.",
    icon: <Package className="text-green-600 bg-white" size={24} />,
  },
  {
    id: 3,
    title: "Compra Segura",
    description:
      "Procesamos los pagos de forma segura y mantenemos el dinero en custodia hasta que recibas tu producto.",
    icon: <CreditCard className="text-green-600 bg-white" size={24} />,
  },
  {
    id: 4,
    title: "Entrega y Soporte",
    description:
      "Seguimiento de envíos y soporte continuo para asegurar que recibas exactamente lo que compraste.",
    icon: <Truck className="text-green-600 bg-white" size={24} />,
  },
];

export default function ProcessSteps() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Nuestro Proceso
        </h2>

        <div className="max-w-3xl mx-auto">
          <Timeline active={4} bulletSize={40} lineWidth={2}>
            {steps.map((step) => (
              <Timeline.Item
                key={step._id}
                bullet={step.icon}
                title={<Text fw={700}>{step.title}</Text>}
                color="green"
              >
                <Text c="dimmed" size="sm">
                  {step.description}
                </Text>
              </Timeline.Item>
            ))}
          </Timeline>
        </div>
      </div>
    </section>
  );
}
