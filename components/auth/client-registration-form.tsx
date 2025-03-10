"use client"

import { useState } from "react"
import { TextInput, PasswordInput, Button, Card, Text } from "@mantine/core"
import { useForm } from "@mantine/form"
import Link from "next/link"
import { useAuth } from "@/contexts/auth-context"
import { useRouter } from "next/navigation"

export default function ClientRegistrationForm() {
  const { register } = useAuth()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)
  const router = useRouter()

  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      address: "",
      phone: "",
    },
    validate: {
      name: (value) => (value.length < 2 ? "El nombre es demasiado corto" : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Email inválido"),
      password: (value) => (value.length < 6 ? "La contraseña debe tener al menos 6 caracteres" : null),
      confirmPassword: (value, values) => (value !== values.password ? "Las contraseñas no coinciden" : null),
      phone: (value) => (value && !/^\+?[0-9]{10,}$/.test(value) ? "Número de teléfono inválido" : null),
    },
  })

  const handleSubmit = async (values: typeof form.values) => {
    setLoading(true)
    setError("")

    try {
      // Registrar al usuario como cliente
      await register({
        name: values.name,
        email: values.email,
        password: values.password,
        address: values.address,
        phone: values.phone,
      })

      setSuccess(true)

      // Redirigir después de un breve retraso para mostrar el mensaje de éxito
      setTimeout(() => {
        router.push("/")
      }, 2000)
    } catch (err: any) {
      console.error("Error en el registro:", err)
      setError(err.response?.data?.message || "Error en el registro. Por favor, intenta de nuevo.")
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <Card withBorder shadow="md" p="xl" radius="md" className="max-w-md mx-auto">
        <Text ta="center" size="lg" fw={700} color="green" mb="md">
          ¡Registro exitoso!
        </Text>
        <Text ta="center" mb="xl">
          Tu cuenta ha sido creada correctamente. Serás redirigido automáticamente...
        </Text>
        <Button component={Link} href="/" fullWidth>
          Ir al inicio
        </Button>
      </Card>
    )
  }

  return (
    <Card withBorder shadow="md" p="xl" radius="md" className="max-w-md mx-auto">
      <Text size="lg" fw={700} ta="center" mb="lg">
        Registro de Cliente
      </Text>

      <form onSubmit={form.onSubmit(handleSubmit)}>
        <TextInput label="Nombre completo" placeholder="Juan Pérez" required {...form.getInputProps("name")} />

        <TextInput label="Email" placeholder="tu@email.com" required mt="md" {...form.getInputProps("email")} />

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

        <TextInput label="Dirección" placeholder="Calle, número, ciudad" mt="md" {...form.getInputProps("address")} />

        <TextInput label="Teléfono" placeholder="+1234567890" mt="md" {...form.getInputProps("phone")} />

        {error && (
          <Text color="red" size="sm" mt="sm">
            {error}
          </Text>
        )}

        <Button type="submit" fullWidth mt="xl" loading={loading}>
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
  )
}

