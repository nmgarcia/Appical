"use client";

import {
  Card,
  Text,
  Title,
  SimpleGrid,
  ThemeIcon,
  Group,
  Container,
  Divider,
} from "@mantine/core";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import {
  Leaf,
  Lightbulb,
  LineChart,
  Users,
  ShieldCheck,
  Sprout,
} from "lucide-react";

export default function MissionVisionValues() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="bg-white py-20" id="mision-vision">
      <Container size="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <Title order={2} className="text-3xl font-bold mb-2">
            Nuestra Esencia
          </Title>
          <div className="flex justify-center items-center mb-2">
            <div className="h-1 w-16 bg-green-500 rounded-full"></div>
            <div className="h-1 w-4 bg-green-300 rounded-full mx-2"></div>
            <div className="h-1 w-16 bg-green-500 rounded-full"></div>
          </div>
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="mb-20"
        >
          <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
            <motion.div variants={itemVariants}>
              <Card
                withBorder
                shadow="sm"
                radius="md"
                p={0}
                className="h-full overflow-hidden"
                style={{
                  borderTop: "4px solid #16a34a",
                  transition: "transform 0.3s ease",
                  transform: inView ? "translateY(0)" : "translateY(20px)",
                }}
              >
                <div className="relative h-40 w-full">
                  <Image
                    src="https://images.unsplash.com/photo-1472289065668-ce650ac443d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
                    alt="Misión"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <Title
                      order={3}
                      className="text-2xl font-bold text-white flex items-center"
                    >
                      <ThemeIcon
                        size="xl"
                        radius="xl"
                        color="green"
                        className="mr-3"
                      >
                        <Lightbulb size={24} />
                      </ThemeIcon>
                      Nuestra Misión
                    </Title>
                  </div>
                </div>
                <div className="p-6">
                  <Text className="text-gray-700 leading-relaxed">
                    En Appical, creemos en el poder de la tecnología para
                    potenciar el sector agrícola, fomentando la innovación, el
                    desarrollo y la transparencia. Nuestra misión es crear un
                    ecosistema digital donde productores, distribuidores,
                    investigadores y comercios puedan conectarse, colaborar y
                    crecer juntos, promoviendo un comercio justo, eficiente y
                    sustentable.
                  </Text>
                </div>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card
                withBorder
                shadow="sm"
                radius="md"
                p={0}
                className="h-full overflow-hidden"
                style={{
                  borderTop: "4px solid #16a34a",
                  transition: "transform 0.3s ease",
                  transform: inView ? "translateY(0)" : "translateY(20px)",
                }}
              >
                <div className="relative h-40 w-full">
                  <Image
                    src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2013&q=80"
                    alt="Visión"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <Title
                      order={3}
                      className="text-2xl font-bold text-white flex items-center"
                    >
                      <ThemeIcon
                        size="xl"
                        radius="xl"
                        color="green"
                        className="mr-3"
                      >
                        <LineChart size={24} />
                      </ThemeIcon>
                      Nuestra Visión
                    </Title>
                  </div>
                </div>
                <div className="p-6">
                  <Text className="text-gray-700 leading-relaxed">
                    Ser la plataforma líder en el sector agropecuario a nivel
                    global, impulsando la transformación digital del sector
                    mediante conexiones estratégicas, educación especializada y
                    soluciones tecnológicas innovadoras que permitan una
                    producción más eficiente y sostenible.
                  </Text>
                </div>
              </Card>
            </motion.div>
          </SimpleGrid>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <div className="text-center mb-10">
            <Title order={3} className="text-2xl font-bold mb-2">
              Nuestros Valores
            </Title>
            <div className="flex justify-center items-center mb-4">
              <div className="h-1 w-12 bg-green-500 rounded-full"></div>
              <div className="h-1 w-3 bg-green-300 rounded-full mx-2"></div>
              <div className="h-1 w-12 bg-green-500 rounded-full"></div>
            </div>
          </div>

          <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
            <motion.div variants={itemVariants}>
              <Card
                withBorder
                shadow="sm"
                radius="md"
                p="lg"
                className="h-full hover:shadow-md transition-shadow"
                style={{ borderLeft: "4px solid #16a34a" }}
              >
                <Group justify="apart">
                  <Title order={4} className="text-xl font-bold">
                    Conexión
                  </Title>
                  <ThemeIcon
                    size="xl"
                    radius="xl"
                    color="green"
                    variant="light"
                  >
                    <Users size={24} />
                  </ThemeIcon>
                </Group>
                <Divider my="sm" />
                <Text mt="md" className="text-gray-700">
                  Unimos a todos los actores del sector agrícola en un
                  ecosistema digital eficiente y transparente.
                </Text>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card
                withBorder
                shadow="sm"
                radius="md"
                p="lg"
                className="h-full hover:shadow-md transition-shadow"
                style={{ borderLeft: "4px solid #16a34a" }}
              >
                <Group justify="apart">
                  <Title order={4} className="text-xl font-bold">
                    Innovación
                  </Title>
                  <ThemeIcon
                    size="xl"
                    radius="xl"
                    color="green"
                    variant="light"
                  >
                    <Lightbulb size={24} />
                  </ThemeIcon>
                </Group>
                <Divider my="sm" />
                <Text mt="md" className="text-gray-700">
                  Apostamos por la tecnología para optimizar cada eslabón de la
                  cadena agroalimentaria.
                </Text>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card
                withBorder
                shadow="sm"
                radius="md"
                p="lg"
                className="h-full hover:shadow-md transition-shadow"
                style={{ borderLeft: "4px solid #16a34a" }}
              >
                <Group justify="apart">
                  <Title order={4} className="text-xl font-bold">
                    Transparencia
                  </Title>
                  <ThemeIcon
                    size="xl"
                    radius="xl"
                    color="green"
                    variant="light"
                  >
                    <ShieldCheck size={24} />
                  </ThemeIcon>
                </Group>
                <Divider my="sm" />
                <Text mt="md" className="text-gray-700">
                  Brindamos información clara y verificada para garantizar
                  transacciones seguras y justas.
                </Text>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card
                withBorder
                shadow="sm"
                radius="md"
                p="lg"
                className="h-full hover:shadow-md transition-shadow"
                style={{ borderLeft: "4px solid #16a34a" }}
              >
                <Group justify="apart">
                  <Title order={4} className="text-xl font-bold">
                    Sostenibilidad
                  </Title>
                  <ThemeIcon
                    size="xl"
                    radius="xl"
                    color="green"
                    variant="light"
                  >
                    <Leaf size={24} />
                  </ThemeIcon>
                </Group>
                <Divider my="sm" />
                <Text mt="md" className="text-gray-700">
                  Promovemos prácticas responsables que beneficien tanto a los
                  productores como al medioambiente.
                </Text>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card
                withBorder
                shadow="sm"
                radius="md"
                p="lg"
                className="h-full hover:shadow-md transition-shadow"
                style={{ borderLeft: "4px solid #16a34a" }}
              >
                <Group justify="apart">
                  <Title order={4} className="text-xl font-bold">
                    Desarrollo
                  </Title>
                  <ThemeIcon
                    size="xl"
                    radius="xl"
                    color="green"
                    variant="light"
                  >
                    <LineChart size={24} />
                  </ThemeIcon>
                </Group>
                <Divider my="sm" />
                <Text mt="md" className="text-gray-700">
                  Fomentamos el crecimiento y la capacitación constante de todos
                  los integrantes del ecosistema.
                </Text>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card
                withBorder
                shadow="sm"
                radius="md"
                p="lg"
                className="h-full hover:shadow-md transition-shadow"
                style={{ borderLeft: "4px solid #16a34a" }}
              >
                <Group justify="apart">
                  <Title order={4} className="text-xl font-bold">
                    Crecimiento
                  </Title>
                  <ThemeIcon
                    size="xl"
                    radius="xl"
                    color="green"
                    variant="light"
                  >
                    <Sprout size={24} />
                  </ThemeIcon>
                </Group>
                <Divider my="sm" />
                <Text mt="md" className="text-gray-700">
                  Impulsamos el progreso continuo de todos los participantes de
                  nuestro ecosistema agrícola.
                </Text>
              </Card>
            </motion.div>
          </SimpleGrid>
        </motion.div>
      </Container>
    </div>
  );
}
