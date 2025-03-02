"use client";

import { useState } from "react";
import { TextInput, Button, Card, Text } from "@mantine/core";
import { useForm } from "@mantine/form";
import Link from "next/link";

export default function PasswordRecoveryForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const form = useForm({
    initialValues: {
      email: "",
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Email inválido"),
    },
  });

  const handleSubmit = async (values: typeof form.values) => {
    setLoading(true);
    try {
      // Aquí iría la lógica para enviar la solicitud de recuperación de contraseña
      console.log("Solicitud de recuperación para:", values.email);
      // Simular una espera de la respuesta del servidor
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitted(true);
    } catch (error) {
      console.error("Error en la solicitud de recuperación:", error);
      alert(
        "Hubo un error al procesar tu solicitud. Por favor, intenta de nuevo."
      );
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <Card
        withBorder
        shadow="md"
        p="xl"
        radius="md"
        className="max-w-md mx-auto"
      >
        <Text ta="center" size="lg" mb="xl">
          Se ha enviado un enlace de recuperación a tu correo electrónico. Por
          favor, revisa tu bandeja de entrada y sigue las instrucciones.
        </Text>
        <Link
          href="/login"
          className="text-blue-500 hover:underline block text-center"
        >
          Volver al inicio de sesión
        </Link>
      </Card>
    );
  }

  return (
    <Card
      withBorder
      shadow="md"
      p="xl"
      radius="md"
      className="max-w-md mx-auto"
    >
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <TextInput
          label="Email"
          placeholder="tu@email.com"
          required
          {...form.getInputProps("email")}
        />
        <Button type="submit" fullWidth mt="xl" loading={loading}>
          Enviar enlace de recuperación
        </Button>
      </form>
      <Text mt="md" ta="center">
        <Link href="/login" className="text-blue-500 hover:underline">
          Volver al inicio de sesión
        </Link>
      </Text>
    </Card>
  );
}
