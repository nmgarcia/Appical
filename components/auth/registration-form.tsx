"use client";

import { useState } from "react";
import { TextInput, PasswordInput, Button, Card, Text } from "@mantine/core";
import { useForm } from "@mantine/form";
import Link from "next/link";
import { useAuth } from "@/contexts/auth-context";

export default function RegistrationForm() {
  const { register } = useAuth();
  const [error, setError] = useState("");

  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validate: {
      name: (value) =>
        value.length < 2 ? "El nombre es demasiado corto" : null,
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
    try {
      await register({
        name: values.name,
        email: values.email,
        password: values.password,
      });
    } catch (error) {
      setError("Error en el registro. Por favor, intenta de nuevo.");
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
          label="Nombre completo"
          placeholder="Juan Pérez"
          required
          {...form.getInputProps("name")}
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
        {error && (
          <Text color="red" size="sm" mt="sm">
            {error}
          </Text>
        )}
        <Button type="submit" fullWidth mt="xl">
          Registrarse
        </Button>
      </form>
      <Text mt="md" ta="center">
        ¿Ya tienes una cuenta?{" "}
        <Link href="/login" className="text-blue-500 hover:underline">
          Inicia sesión
        </Link>
      </Text>
    </Card>
  );
}
