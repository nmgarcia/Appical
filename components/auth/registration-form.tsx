"use client";

import { useState } from "react";
import {
  TextInput,
  PasswordInput,
  Button,
  Card,
  Text,
  Textarea,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import Link from "next/link";
import { useAuth } from "@/contexts/auth-context";

export default function VendorRegistrationForm() {
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();

  const form = useForm({
    initialValues: {
      companyName: "",
      description: "",
      address: "",
      phone: "",
      email: user?.email || "",
      password: "",
      confirmPassword: "",
    },
    validate: {
      companyName: (value) =>
        value.length < 2 ? "El nombre de la empresa es demasiado corto" : null,
      description: (value) =>
        value.length < 10 ? "La descripción es demasiado corta" : null,
      address: (value) =>
        value.length < 5 ? "La dirección es demasiado corta" : null,
      phone: (value) =>
        /^\+?[0-9]{10,}$/.test(value) ? null : "Número de teléfono inválido",
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Email inválido"),
      password: (value) =>
        value.length < 6
          ? "La contraseña debe tener al menos 6 caracteres"
          : null,
      confirmPassword: (value, values) =>
        value !== values.password ? "Las contraseñas no coinciden" : null,
    },
  });

  const handleSubmit = async (values: typeof form.values) => {
    setLoading(true);
    try {
      // Aquí iría la lógica para enviar los datos al backend
      console.log("Datos de registro de vendedor:", values);
      // Simular una espera de la respuesta del servidor
      await new Promise((resolve) => setTimeout(resolve, 1000));
      alert(
        "Registro de vendedor exitoso! Tu cuenta será revisada y aprobada pronto."
      );
      // Aquí podrías redirigir al usuario a una página de confirmación o al dashboard
    } catch (error) {
      console.error("Error en el registro de vendedor:", error);
      alert("Hubo un error en el registro. Por favor, intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  };

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
          label="Nombre de la empresa"
          required
          {...form.getInputProps("companyName")}
        />
        <Textarea
          label="Descripción de la empresa"
          placeholder="Describe tu empresa y los productos que ofreces"
          required
          mt="md"
          {...form.getInputProps("description")}
        />
        <TextInput
          label="Dirección"
          placeholder="Dirección de la empresa"
          required
          mt="md"
          {...form.getInputProps("address")}
        />
        <TextInput
          label="Teléfono"
          placeholder="+1234567890"
          required
          mt="md"
          {...form.getInputProps("phone")}
        />
        <TextInput
          label="Email"
          placeholder="tu@email.com"
          required
          mt="md"
          {...form.getInputProps("email")}
        />
        <PasswordInput
          label="Contraseña"
          placeholder="Tu contraseña"
          required
          mt="md"
          {...form.getInputProps("password")}
        />
        <PasswordInput
          label="Confirmar contraseña"
          placeholder="Repite tu contraseña"
          required
          mt="md"
          {...form.getInputProps("confirmPassword")}
        />
        <Button type="submit" fullWidth mt="xl" loading={loading}>
          Registrarse como Vendedor
        </Button>
      </form>
      <Text mt="md" ta="center">
        ¿Ya tienes una cuenta de vendedor?{" "}
        <Link href="/login" className="text-blue-500 hover:underline">
          Inicia sesión
        </Link>
      </Text>
    </Card>
  );
}
