"use client";

import { useState } from "react";
import {
  Button,
  Text,
  Title,
  Group,
  TextInput,
  Textarea,
  Container,
  Card,
  Divider,
  Notification,
} from "@mantine/core";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import {
  ArrowRight,
  Send,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  MessageCircle,
  Users,
  X,
  Check,
} from "lucide-react";
import { useForm } from "@mantine/form";
import emailjs from "@emailjs/browser";

export default function JoinSection() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailStatus, setEmailStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validate: {
      name: (value) =>
        value.length < 2 ? "El nombre debe tener al menos 2 caracteres" : null,
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Email inválido"),
      message: (value) =>
        value.length < 10
          ? "El mensaje debe tener al menos 10 caracteres"
          : null,
    },
  });

  const handleSubmit = async (values: typeof form.values) => {
    debugger;
    setIsSubmitting(true);
    setEmailStatus({ type: null, message: "" });

    try {
      // Configuración de EmailJS
      // Reemplaza estos valores con tus propias credenciales de EmailJS
      const serviceId =
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID";
      const templateId =
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID";
      const publicKey =
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY";

      // Preparar los parámetros para la plantilla
      const templateParams = {
        from_name: values.name,
        from_email: values.email,
        message: values.message,
        to_name: "Equipo Appical",
        to_email: "agroappical@gmail.com",
      };
      debugger;
      // Enviar el correo electrónico
      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      if (response.status === 200) {
        setEmailStatus({
          type: "success",
          message:
            "¡Mensaje enviado correctamente! Nos pondremos en contacto contigo pronto.",
        });
        form.reset();
      } else {
        throw new Error("Error al enviar el mensaje");
      }
    } catch (error) {
      console.error("Error al enviar el correo:", error);
      setEmailStatus({
        type: "error",
        message:
          "No se pudo enviar el mensaje. Por favor, intenta de nuevo más tarde.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-green-50 py-20" id="contacto">
      <Container size="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Title order={2} className="text-3xl font-bold mb-2">
            Únete a la Revolución del Agro
          </Title>
          <div className="flex justify-center items-center mb-4">
            <div className="h-1 w-16 bg-green-500 rounded-full"></div>
            <div className="h-1 w-4 bg-green-300 rounded-full mx-2"></div>
            <div className="h-1 w-16 bg-green-500 rounded-full"></div>
          </div>
          <Text size="lg" className="max-w-2xl mx-auto text-gray-700 mb-8">
            Forma parte de nuestra comunidad y transforma juntos la industria
            agroalimentaria.
          </Text>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card
              withBorder
              shadow="md"
              radius="lg"
              p="xl"
              className="h-full hover:shadow-lg transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #f0fdf4 0%, #ffffff 100%)",
                borderLeft: "5px solid #16a34a",
              }}
            >
              <Group mb="md">
                <Users size={36} className="text-green-600" />
                <Title order={3} className="text-2xl font-bold text-green-700">
                  Únete a Nuestra Comunidad
                </Title>
              </Group>
              <Divider className="mb-4" />
              <Text className="text-gray-700 mb-6 leading-relaxed">
                Appical es más que una plataforma digital: es una comunidad en
                crecimiento donde la tecnología, la transparencia y la conexión
                transforman la industria agroalimentaria. Únete a la evolución
                del agro y sé parte del cambio.
              </Text>

              {/* <Group justify="center" gap="md" className="mt-8">
                <Button
                  component={Link}
                  href="/registro"
                  size="lg"
                  color="green"
                  className="hover:bg-green-700 transition-colors"
                >
                  Registrarse
                  <ArrowRight size={18} />
                </Button>
                <Button
                  component={Link}
                  href="/login"
                  size="lg"
                  variant="outline"
                  color="green"
                  className="hover:bg-green-50 transition-colors"
                >
                  Iniciar Sesión
                </Button>
              </Group> */}
            </Card>

            <Card
              withBorder
              shadow="md"
              radius="lg"
              p="xl"
              className="h-full hover:shadow-lg transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #ffffff 0%, #f0fdf4 100%)",
                borderRight: "5px solid #16a34a",
              }}
            >
              <Group mb="md">
                <MessageCircle size={36} className="text-green-600" />
                <Title order={3} className="text-2xl font-bold text-green-700">
                  Contáctanos
                </Title>
              </Group>
              <Divider className="mb-4" />

              {emailStatus.type && (
                <Notification
                  icon={
                    emailStatus.type === "success" ? (
                      <Check size={18} />
                    ) : (
                      <X size={18} />
                    )
                  }
                  color={emailStatus.type === "success" ? "green" : "red"}
                  title={
                    emailStatus.type === "success"
                      ? "¡Mensaje enviado!"
                      : "Error"
                  }
                  onClose={() => setEmailStatus({ type: null, message: "" })}
                  className="mb-4"
                >
                  {emailStatus.message}
                </Notification>
              )}

              <form onSubmit={form.onSubmit(handleSubmit)}>
                <TextInput
                  label="Nombre"
                  placeholder="Tu nombre"
                  required
                  {...form.getInputProps("name")}
                  className="mb-4"
                />

                <TextInput
                  label="Email"
                  placeholder="tu@email.com"
                  required
                  {...form.getInputProps("email")}
                  className="mb-4"
                />

                <Textarea
                  label="Mensaje"
                  placeholder="¿Cómo podemos ayudarte?"
                  required
                  minRows={4}
                  {...form.getInputProps("message")}
                  className="mb-6"
                />

                <Button
                  type="submit"
                  color="green"
                  fullWidth
                  className="hover:bg-green-700 transition-colors"
                  loading={isSubmitting}
                >
                  <Send size={18} />
                  {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                </Button>
              </form>
            </Card>
          </div>

          <div className="text-center mt-16">
            <Title order={4} className="text-xl font-bold mb-6">
              Síguenos en Redes Sociales
            </Title>

            <Group justify="center" gap="lg">
              <Button
                variant="outline"
                color="blue"
                component="a"
                href="#"
                target="_blank"
                radius="xl"
                size="lg"
                className="hover:bg-blue-50 transition-colors"
              >
                <Facebook size={24} />
              </Button>
              <Button
                variant="outline"
                color="cyan"
                component="a"
                href="#"
                target="_blank"
                radius="xl"
                size="lg"
                className="hover:bg-cyan-50 transition-colors"
              >
                <Twitter size={24} />
              </Button>
              <Button
                variant="outline"
                color="pink"
                component="a"
                href="#"
                target="_blank"
                radius="xl"
                size="lg"
                className="hover:bg-pink-50 transition-colors"
              >
                <Instagram size={24} />
              </Button>
              <Button
                variant="outline"
                color="indigo"
                component="a"
                href="#"
                target="_blank"
                radius="xl"
                size="lg"
                className="hover:bg-indigo-50 transition-colors"
              >
                <Linkedin size={24} />
              </Button>
            </Group>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}
