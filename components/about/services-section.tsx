"use client";

import {
  Card,
  Text,
  Title,
  SimpleGrid,
  ThemeIcon,
  Button,
  Container,
  Divider,
} from "@mantine/core";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  GraduationCap,
  ShoppingCart,
  Gavel,
  ArrowRight,
} from "lucide-react";

export default function ServicesSection() {
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
    <div className="bg-green-50 py-20" id="servicios">
      <Container size="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Title order={2} className="text-3xl font-bold mb-2">
            ¿Qué Ofrecemos?
          </Title>
          <div className="flex justify-center items-center mb-4">
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
        >
          <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
            <motion.div variants={itemVariants}>
              <Card
                withBorder
                shadow="sm"
                radius="lg"
                p={0}
                className="h-full overflow-hidden hover:shadow-md transition-all duration-300"
              >
                <div className="relative h-56 w-full">
                  <Image
                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Sistema de Licitaciones"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                  <div className="absolute top-4 left-4">
                    <ThemeIcon
                      size={60}
                      radius="xl"
                      color="green"
                      className="border-4 border-white"
                    >
                      <Gavel size={30} />
                    </ThemeIcon>
                  </div>
                </div>

                <div className="p-6 relative -mt-16 bg-white rounded-t-3xl">
                  <Title
                    order={3}
                    className="text-2xl font-bold mb-3 text-green-700"
                  >
                    Sistema de Licitaciones
                  </Title>
                  <Divider className="mb-4" />
                  <Text className="text-gray-700 mb-6 leading-relaxed">
                    Conectamos productores con proveedores a través de un
                    sistema transparente y eficiente de licitaciones. Los
                    productores publican sus necesidades y los proveedores
                    pueden ofertar, creando un entorno competitivo que beneficia
                    a ambas partes.
                  </Text>
                  <Button
                    component={Link}
                    href="/licitaciones"
                    variant="light"
                    color="green"
                    fullWidth
                    rightSection={<ArrowRight size={16} />}
                    className="hover:bg-green-50 transition-colors"
                  >
                    Conocer Licitaciones
                  </Button>
                </div>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card
                withBorder
                shadow="sm"
                radius="lg"
                p={0}
                className="h-full overflow-hidden hover:shadow-md transition-all duration-300"
              >
                <div className="relative h-56 w-full">
                  <Image
                    src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Centro de Capacitación"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                  <div className="absolute top-4 left-4">
                    <ThemeIcon
                      size={60}
                      radius="xl"
                      color="green"
                      className="border-4 border-white"
                    >
                      <GraduationCap size={30} />
                    </ThemeIcon>
                  </div>
                </div>

                <div className="p-6 relative -mt-16 bg-white rounded-t-3xl">
                  <Title
                    order={3}
                    className="text-2xl font-bold mb-3 text-green-700"
                  >
                    Centro de Capacitación
                  </Title>
                  <Divider className="mb-4" />
                  <Text className="text-gray-700 mb-6 leading-relaxed">
                    Workshops, conferencias y clínicas especializadas para
                    productores, distribuidores y emprendedores del agro.
                    Aprende de expertos y mantente actualizado con las últimas
                    tendencias e innovaciones del sector.
                  </Text>
                  <Button
                    component={Link}
                    href="/capacitaciones"
                    variant="light"
                    color="green"
                    fullWidth
                    className="hover:bg-green-50 transition-colors"
                  >
                    Ver Capacitaciones
                    <ArrowRight size={16} />
                  </Button>
                </div>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card
                withBorder
                shadow="sm"
                radius="lg"
                p={0}
                className="h-full overflow-hidden hover:shadow-md transition-all duration-300"
              >
                <div className="relative h-56 w-full">
                  <Image
                    src="https://images.unsplash.com/photo-1595351298020-038700609878?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                    alt="Directorio de Empresas"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                  <div className="absolute top-4 left-4">
                    <ThemeIcon
                      size={60}
                      radius="xl"
                      color="green"
                      className="border-4 border-white"
                    >
                      <Building2 size={30} />
                    </ThemeIcon>
                  </div>
                </div>

                <div className="p-6 relative -mt-16 bg-white rounded-t-3xl">
                  <Title
                    order={3}
                    className="text-2xl font-bold mb-3 text-green-700"
                  >
                    Directorio de Empresas
                  </Title>
                  <Divider className="mb-4" />
                  <Text className="text-gray-700 mb-6 leading-relaxed">
                    Appical ofrece un servicio donde negocios agrícolas pueden
                    registrarse y ganar visibilidad. Diferentes planes de
                    suscripción permiten acceder a beneficios adicionales según
                    las necesidades de cada empresa.
                  </Text>
                  <Button
                    component={Link}
                    href="/directorio"
                    variant="light"
                    color="green"
                    fullWidth
                    className="hover:bg-green-50 transition-colors"
                  >
                    Explorar Directorio
                    <ArrowRight size={16} />
                  </Button>
                </div>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card
                withBorder
                shadow="sm"
                radius="lg"
                p={0}
                className="h-full overflow-hidden hover:shadow-md transition-all duration-300"
              >
                <div className="relative h-56 w-full">
                  <Image
                    src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Marketplace Agro"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                  <div className="absolute top-4 left-4">
                    <ThemeIcon
                      size={60}
                      radius="xl"
                      color="green"
                      className="border-4 border-white"
                    >
                      <ShoppingCart size={30} />
                    </ThemeIcon>
                  </div>
                </div>

                <div className="p-6 relative -mt-16 bg-white rounded-t-3xl">
                  <Title
                    order={3}
                    className="text-2xl font-bold mb-3 text-green-700"
                  >
                    Marketplace Agro
                  </Title>
                  <Divider className="mb-4" />
                  <Text className="text-gray-700 mb-6 leading-relaxed">
                    Un punto de encuentro digital para conectar productores con
                    proveedores, verdulerías, supermercados y restaurantes.
                    Encuentra los mejores productos y servicios para tu negocio
                    agrícola o compra directamente de los productores.
                  </Text>
                  <Button
                    component={Link}
                    href="/productos"
                    variant="light"
                    color="green"
                    fullWidth
                    className="hover:bg-green-50 transition-colors"
                  >
                    Próximamente
                    {/* Explorar Marketplace */}
                    <ArrowRight size={16} />
                  </Button>
                </div>
              </Card>
            </motion.div>
          </SimpleGrid>
        </motion.div>
      </Container>
    </div>
  );
}
