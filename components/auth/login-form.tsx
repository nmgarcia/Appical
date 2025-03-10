"use client";

import { useState } from "react";
import { TextInput, PasswordInput, Button, Card, Text } from "@mantine/core";
import { useForm } from "@mantine/form";
import Link from "next/link";
import { useAuth } from "@/contexts/auth-context";

export default function LoginForm() {
  const { login } = useAuth();
  const [error, setError] = useState("");

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Email inválido"),
      password: (value) =>
        value.length > 0 ? null : "La contraseña es requerida",
    },
  });

  const handleSubmit = async (values: typeof form.values) => {
    try {
      await login(values.email, values.password);
    } catch (error) {
      setError("Credenciales inválidas. Por favor, intenta de nuevo.");
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
          label="Email"
          placeholder="tu@email.com"
          required
          {...form.getInputProps("email")}
        />
        <PasswordInput
          label="Contraseña"
          placeholder="Tu contraseña"
          required
          mt="md"
          {...form.getInputProps("password")}
        />
        {error && (
          <Text color="red" size="sm" mt="sm">
            {error}
          </Text>
        )}
        <Button type="submit" fullWidth mt="xl">
          Iniciar Sesión
        </Button>
      </form>
      <Text mt="md" ta="center">
        ¿No tienes una cuenta?{" "}
        <Link
          href="/registro-cliente"
          className="text-blue-500 hover:underline"
        >
          Regístrate
        </Link>
      </Text>
      <Text mt="md" ta="center">
        <Link
          href="/recuperar-contrasena"
          className="text-blue-500 hover:underline"
        >
          ¿Olvidaste tu contraseña?
        </Link>
      </Text>
    </Card>
  );
}
