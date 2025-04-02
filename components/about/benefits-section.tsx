"use client";

import {
  Card,
  Text,
  Title,
  SimpleGrid,
  ThemeIcon,
  Group,
  List,
  Container,
  Divider,
  Badge,
} from "@mantine/core";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  TractorIcon as Farm,
  Building,
  Microscope,
  Store,
  Check,
} from "lucide-react";

export default function BenefitsSection() {
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
    <div className="bg-white py-20" id="beneficios">
      <Container size="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Title order={2} className="text-3xl font-bold mb-2">
            Beneficios de Appical
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
                p="xl"
                className="h-full hover:shadow-md transition-all duration-300"
                style={{
                  background:
                    "linear-gradient(135deg, #f0fdf4 0%, #ffffff 100%)",
                  borderTop: "5px solid #16a34a",
                }}
              >
                <Group mb="md" justify="apart">
                  <div className="flex items-center">
                    <ThemeIcon
                      size={60}
                      radius="xl"
                      color="green"
                      className="mr-4"
                    >
                      <Farm size={30} />
                    </ThemeIcon>
                    <div>
                      <Title
                        order={3}
                        className="text-2xl font-bold text-green-700"
                      >
                        Para Productores
                      </Title>
                      <Badge
                        color="green"
                        size="lg"
                        radius="sm"
                        variant="light"
                      >
                        Crecimiento Garantizado
                      </Badge>
                    </div>
                  </div>
                </Group>
                <Divider className="mb-6" />
                <List
                  spacing="md"
                  size="md"
                  center
                  icon={
                    <ThemeIcon color="green" size={28} radius="xl">
                      <Check size={18} />
                    </ThemeIcon>
                  }
                  className="text-gray-700"
                >
                  <List.Item className="text-base">
                    <Text fw={500}>
                      Acceso directo a distribuidores y comercios
                    </Text>
                    <Text size="sm" className="ml-9 mt-1">
                      Elimina intermediarios innecesarios y aumenta tus márgenes
                    </Text>
                  </List.Item>
                  <List.Item className="text-base">
                    <Text fw={500}>
                      Visibilidad en un mercado especializado
                    </Text>
                    <Text size="sm" className="ml-9 mt-1">
                      Destaca en un ecosistema en crecimiento y llega a más
                      clientes
                    </Text>
                  </List.Item>
                  <List.Item className="text-base">
                    <Text fw={500}>
                      Herramientas para gestionar tus productos
                    </Text>
                    <Text size="sm" className="ml-9 mt-1">
                      Optimiza tu catálogo y promociona tus mejores ofertas
                    </Text>
                  </List.Item>
                  <List.Item className="text-base">
                    <Text fw={500}>Capacitación continua</Text>
                    <Text size="sm" className="ml-9 mt-1">
                      Mejora tus procesos productivos con conocimiento
                      actualizado
                    </Text>
                  </List.Item>
                  <List.Item className="text-base">
                    <Text fw={500}>Conexión con otros productores</Text>
                    <Text size="sm" className="ml-9 mt-1">
                      Comparte experiencias y crea sinergias con otros
                      agricultores
                    </Text>
                  </List.Item>
                </List>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card
                withBorder
                shadow="sm"
                radius="lg"
                p="xl"
                className="h-full hover:shadow-md transition-all duration-300"
                style={{
                  background:
                    "linear-gradient(135deg, #f0fdf4 0%, #ffffff 100%)",
                  borderTop: "5px solid #16a34a",
                }}
              >
                <Group mb="md" justify="apart">
                  <div className="flex items-center">
                    <ThemeIcon
                      size={60}
                      radius="xl"
                      color="green"
                      className="mr-4"
                    >
                      <Building size={30} />
                    </ThemeIcon>
                    <div>
                      <Title
                        order={3}
                        className="text-2xl font-bold text-green-700"
                      >
                        Para Empresas
                      </Title>
                      <Badge
                        color="green"
                        size="lg"
                        radius="sm"
                        variant="light"
                      >
                        Expansión de Mercado
                      </Badge>
                    </div>
                  </div>
                </Group>
                <Divider className="mb-6" />
                <List
                  spacing="md"
                  size="md"
                  center
                  icon={
                    <ThemeIcon color="green" size={28} radius="xl">
                      <Check size={18} />
                    </ThemeIcon>
                  }
                  className="text-gray-700"
                >
                  <List.Item className="text-base">
                    <Text fw={500}>Mayor visibilidad en el sector</Text>
                    <Text size="sm" className="ml-9 mt-1">
                      Accede a clientes potenciales interesados en tus productos
                    </Text>
                  </List.Item>
                  <List.Item className="text-base">
                    <Text fw={500}>Herramientas de marketing digital</Text>
                    <Text size="sm" className="ml-9 mt-1">
                      Especializadas para el sector agrícola
                    </Text>
                  </List.Item>
                  <List.Item className="text-base">
                    <Text fw={500}>Análisis de mercado y tendencias</Text>
                    <Text size="sm" className="ml-9 mt-1">
                      Toma decisiones informadas basadas en datos reales
                    </Text>
                  </List.Item>
                  <List.Item className="text-base">
                    <Text fw={500}>Networking con actores clave</Text>
                    <Text size="sm" className="ml-9 mt-1">
                      Conecta con los principales jugadores de la industria
                    </Text>
                  </List.Item>
                  <List.Item className="text-base">
                    <Text fw={500}>Oportunidades de colaboración</Text>
                    <Text size="sm" className="ml-9 mt-1">
                      Establece alianzas estratégicas para crecer juntos
                    </Text>
                  </List.Item>
                </List>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card
                withBorder
                shadow="sm"
                radius="lg"
                p="xl"
                className="h-full hover:shadow-md transition-all duration-300"
                style={{
                  background:
                    "linear-gradient(135deg, #f0fdf4 0%, #ffffff 100%)",
                  borderTop: "5px solid #16a34a",
                }}
              >
                <Group mb="md" justify="apart">
                  <div className="flex items-center">
                    <ThemeIcon
                      size={60}
                      radius="xl"
                      color="green"
                      className="mr-4"
                    >
                      <Microscope size={30} />
                    </ThemeIcon>
                    <div>
                      <Title
                        order={3}
                        className="text-2xl font-bold text-green-700"
                      >
                        Para Investigadores
                      </Title>
                      <Badge
                        color="green"
                        size="lg"
                        radius="sm"
                        variant="light"
                      >
                        Innovación Aplicada
                      </Badge>
                    </div>
                  </div>
                </Group>
                <Divider className="mb-6" />
                <List
                  spacing="md"
                  size="md"
                  center
                  icon={
                    <ThemeIcon color="green" size={28} radius="xl">
                      <Check size={18} />
                    </ThemeIcon>
                  }
                  className="text-gray-700"
                >
                  <List.Item className="text-base">
                    <Text fw={500}>Canal para difusión de estudios</Text>
                    <Text size="sm" className="ml-9 mt-1">
                      Comparte nuevas tecnologías y productos innovadores
                    </Text>
                  </List.Item>
                  <List.Item className="text-base">
                    <Text fw={500}>Conexión directa con productores</Text>
                    <Text size="sm" className="ml-9 mt-1">
                      Implementa y prueba nuevas soluciones en campo real
                    </Text>
                  </List.Item>
                  <List.Item className="text-base">
                    <Text fw={500}>Acceso a datos y estadísticas</Text>
                    <Text size="sm" className="ml-9 mt-1">
                      Información valiosa del sector para tus investigaciones
                    </Text>
                  </List.Item>
                  <List.Item className="text-base">
                    <Text fw={500}>
                      Plataforma para compartir conocimientos
                    </Text>
                    <Text size="sm" className="ml-9 mt-1">
                      Publica y difunde tus descubrimientos a un público
                      interesado
                    </Text>
                  </List.Item>
                  <List.Item className="text-base">
                    <Text fw={500}>Oportunidades de colaboración</Text>
                    <Text size="sm" className="ml-9 mt-1">
                      Trabaja con empresas y productores en proyectos conjuntos
                    </Text>
                  </List.Item>
                </List>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card
                withBorder
                shadow="sm"
                radius="lg"
                p="xl"
                className="h-full hover:shadow-md transition-all duration-300"
                style={{
                  background:
                    "linear-gradient(135deg, #f0fdf4 0%, #ffffff 100%)",
                  borderTop: "5px solid #16a34a",
                }}
              >
                <Group mb="md" justify="apart">
                  <div className="flex items-center">
                    <ThemeIcon
                      size={60}
                      radius="xl"
                      color="green"
                      className="mr-4"
                    >
                      <Store size={30} />
                    </ThemeIcon>
                    <div>
                      <Title
                        order={3}
                        className="text-2xl font-bold text-green-700"
                      >
                        Para Comercios
                      </Title>
                      <Badge
                        color="green"
                        size="lg"
                        radius="sm"
                        variant="light"
                      >
                        Calidad Garantizada
                      </Badge>
                    </div>
                  </div>
                </Group>
                <Divider className="mb-6" />
                <List
                  spacing="md"
                  size="md"
                  center
                  icon={
                    <ThemeIcon color="green" size={28} radius="xl">
                      <Check size={18} />
                    </ThemeIcon>
                  }
                  className="text-gray-700"
                >
                  <List.Item className="text-base">
                    <Text fw={500}>
                      Conexión directa con productores locales
                    </Text>
                    <Text size="sm" className="ml-9 mt-1">
                      Garantiza calidad y frescura en tus productos
                    </Text>
                  </List.Item>
                  <List.Item className="text-base">
                    <Text fw={500}>Trazabilidad completa de productos</Text>
                    <Text size="sm" className="ml-9 mt-1">
                      Conoce el origen y proceso de todo lo que adquieres
                    </Text>
                  </List.Item>
                  <List.Item className="text-base">
                    <Text fw={500}>Acceso a productos de temporada</Text>
                    <Text size="sm" className="ml-9 mt-1">
                      Encuentra especialidades y productos únicos
                    </Text>
                  </List.Item>
                  <List.Item className="text-base">
                    <Text fw={500}>Reducción de costos</Text>
                    <Text size="sm" className="ml-9 mt-1">
                      Elimina intermediarios y mejora tus márgenes
                    </Text>
                  </List.Item>
                  <List.Item className="text-base">
                    <Text fw={500}>Apoyo para prácticas sostenibles</Text>
                    <Text size="sm" className="ml-9 mt-1">
                      Implementa soluciones eco-amigables en tu negocio
                    </Text>
                  </List.Item>
                </List>
              </Card>
            </motion.div>
          </SimpleGrid>
        </motion.div>
      </Container>
    </div>
  );
}
