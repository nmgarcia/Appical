"use client";

import { useState } from "react";
import {
  Button,
  Card,
  Grid,
  Text,
  TextInput,
  Select,
  Checkbox,
} from "@mantine/core";
import { useForm } from "@mantine/form";

export default function CheckoutForm() {
  const [isPhysicalProduct] = useState(true); // This could be determined based on cart contents

  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      address: "",
      city: "",
      country: "",
      phone: "",
      paymentMethod: "",
    },
    validate: {
      name: (value) =>
        value.length < 2 ? "El nombre es demasiado corto" : null,
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Email inválido"),
      address: (value) =>
        isPhysicalProduct && value.length < 5 ? "Dirección inválida" : null,
      city: (value) =>
        isPhysicalProduct && value.length < 2 ? "Ciudad inválida" : null,
      country: (value) =>
        isPhysicalProduct && value.length < 2 ? "País inválido" : null,
      phone: (value) =>
        isPhysicalProduct && value.length < 5 ? "Teléfono inválido" : null,
      paymentMethod: (value) => (value ? null : "Selecciona un método de pago"),
    },
  });

  const handleSubmit = (values: typeof form.values) => {
    console.log(values);
    // Here you would typically send the form data to your backend
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Grid gutter="xl">
        <Grid.Col span={{ base: 12, md: 8 }}>
          <Card withBorder mb="xl">
            <Text fw={700} size="lg" mb="md">
              Datos de Envío
            </Text>
            <TextInput
              label="Nombre Completo"
              placeholder="Juan Pérez"
              required
              {...form.getInputProps("name")}
            />
            <TextInput
              label="Email"
              placeholder="juan@example.com"
              required
              mt="md"
              {...form.getInputProps("email")}
            />
            {isPhysicalProduct && (
              <>
                <TextInput
                  label="Dirección"
                  placeholder="Calle Ejemplo 123"
                  required
                  mt="md"
                  {...form.getInputProps("address")}
                />
                <TextInput
                  label="Ciudad"
                  placeholder="Ciudad Ejemplo"
                  required
                  mt="md"
                  {...form.getInputProps("city")}
                />
                <TextInput
                  label="País"
                  placeholder="País Ejemplo"
                  required
                  mt="md"
                  {...form.getInputProps("country")}
                />
                <TextInput
                  label="Teléfono"
                  placeholder="+1234567890"
                  required
                  mt="md"
                  {...form.getInputProps("phone")}
                />
              </>
            )}
          </Card>

          <Card withBorder>
            <Text fw={700} size="lg" mb="md">
              Método de Pago
            </Text>
            <Select
              label="Selecciona un método de pago"
              placeholder="Elige una opción"
              data={[
                { value: "tarjeta", label: "Tarjeta de Crédito/Débito" },
                { value: "transferencia", label: "Transferencia Bancaria" },
                { value: "mercadopago", label: "MercadoPago" },
              ]}
              required
              {...form.getInputProps("paymentMethod")}
            />
            {/* Additional payment fields would go here based on selected method */}
          </Card>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 4 }}>
          <Card withBorder>
            <Text fw={700} size="lg" mb="md">
              Resumen del Pedido
            </Text>
            {/* This would typically be populated from your cart state */}
            <Text>Subtotal: $165.00</Text>
            <Text>Envío: $10.00</Text>
            <Text fw={700} mt="md">
              Total: $175.00
            </Text>
            <Checkbox
              label="He leído y acepto los términos y condiciones"
              required
              mt="xl"
            />
            <Button type="submit" color="green" fullWidth mt="md">
              Confirmar Compra
            </Button>
          </Card>
        </Grid.Col>
      </Grid>
    </form>
  );
}
