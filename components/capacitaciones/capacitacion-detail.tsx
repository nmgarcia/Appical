"use client";

import { useEffect, useState } from "react";
import {
  Container,
  Title,
  Text,
  Badge,
  Button,
  Group,
  Tabs,
  List,
  ThemeIcon,
  Divider,
  Card,
  Avatar,
  Grid,
  Paper,
} from "@mantine/core";
import { useRouter } from "next/navigation";
import {
  Clock,
  Calendar,
  Star,
  User,
  CheckCircle,
  BookOpen,
  ArrowLeft,
  Play,
  AlertCircle,
} from "lucide-react";
import { capacitacionesService } from "@/services/capacitacionesService";
import type { Capacitacion } from "@/data/capacitaciones";
import InterestFormModal from "@/components/shared/interest-form-modal";

interface CapacitacionDetailProps {
  id: string;
}

export default function CapacitacionDetail({ id }: CapacitacionDetailProps) {
  const [capacitacion, setCapacitacion] = useState<Capacitacion | null>(null);
  const [loading, setLoading] = useState(true);
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const loadCapacitacion = async () => {
      setLoading(true);
      try {
        const data = await capacitacionesService.getCapacitacionById(id);
        setCapacitacion(data);
      } catch (error) {
        console.error("Error al cargar capacitación:", error);
      } finally {
        setLoading(false);
      }
    };

    loadCapacitacion();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white text-gray-800 flex items-center justify-center">
        <div className="animate-pulse">Cargando...</div>
      </div>
    );
  }

  if (!capacitacion) {
    return (
      <div className="min-h-screen bg-white text-gray-800 flex flex-col items-center justify-center p-4">
        <AlertCircle size={48} className="text-red-500 mb-4" />
        <Title order={2} className="text-2xl font-bold mb-4 text-center">
          Capacitación no encontrada
        </Title>
        <Text className="text-gray-600 mb-8 text-center">
          La capacitación que estás buscando no existe o ha sido eliminada.
        </Text>
        <Button
          color="green"
          leftSection={<ArrowLeft size={16} />}
          onClick={() => router.push("/capacitaciones")}
        >
          Volver a Capacitaciones
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-gray-800 pb-16">
      {/* Banner */}
      <div
        className="w-full h-[50vh] relative"
        style={{
          backgroundImage: `url(${capacitacion.banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

        <Container
          size="xl"
          className="relative h-full flex flex-col justify-end pb-8"
        >
          <Button
            variant="outline"
            color="gray"
            leftSection={<ArrowLeft size={16} />}
            onClick={() => router.push("/capacitaciones")}
            className="absolute top-8 self-start border-white text-white hover:bg-white hover:text-black"
            w={100}
          >
            Volver
          </Button>

          <Badge color="green" size="lg" radius="sm" className="mb-4 self-end">
            {capacitacion.categoria}
          </Badge>
          <Title className="text-4xl md:text-5xl font-bold mb-4 text-white">
            {capacitacion.titulo}
          </Title>

          <Grid>
            <Grid.Col span={{ base: 12, md: 8 }}>
              <Text className="text-xl mb-6" c={"white"}>
                {capacitacion.descripcion}
              </Text>

              <Group gap="xl">
                <div className="flex items-center">
                  <Clock size={20} className="mr-2 text-green-500" />
                  <Text c={"white"}>{capacitacion.duracion}</Text>
                </div>
                <div className="flex items-center">
                  <Calendar size={20} className="mr-2 text-green-500" />
                  <Text c={"white"}>
                    Inicia:{" "}
                    {new Date(capacitacion.fechaInicio).toLocaleDateString(
                      "es-ES",
                      { dateStyle: "long" }
                    )}
                  </Text>
                </div>
                <div className="flex items-center">
                  <User size={20} className="mr-2 text-green-500" />
                  <Text c={"white"}>{capacitacion.instructor}</Text>
                </div>
                <div className="flex items-center">
                  <Star size={20} className="mr-2 text-yellow-400" />
                  <Text c={"white"}>
                    {capacitacion.puntuacion.toFixed(1)} (
                    {capacitacion.views.toLocaleString()} vistas)
                  </Text>
                </div>
              </Group>
            </Grid.Col>

            <Grid.Col
              span={{ base: 12, md: 4 }}
              className="flex justify-center md:justify-end items-center mt-6 md:mt-0"
            >
              <div className="flex flex-col items-center md:items-end">
                <Text className="text-3xl font-bold mb-4 text-white">
                  ${capacitacion.precio.toFixed(2)}
                </Text>
                <div className="flex gap-4">
                  <Button
                    color="green"
                    size="lg"
                    className="bg-green-600 hover:bg-green-700"
                    disabled={capacitacion.proximamente}
                    onClick={() => setIsFormModalOpen(true)}
                  >
                    {capacitacion.proximamente
                      ? "Próximamente"
                      : "Preinscribirme"}
                  </Button>
                  <Button
                    component="a"
                    href={capacitacion.trailer || "#"}
                    target="_blank"
                    size="lg"
                    variant="outline"
                    leftSection={<Play size={16} />}
                    className="border-white text-white hover:bg-white hover:text-green-700"
                  >
                    Ver Trailer
                  </Button>
                </div>
              </div>
            </Grid.Col>
          </Grid>
        </Container>
      </div>

      {/* Contenido */}
      <Container size="xl" className="mt-8">
        <Tabs
          defaultValue="descripcion"
          color="green"
          styles={{
            tabSection: {
              borderColor: "#e2e8f0",
            },
            tab: {
              color: "#374151",
              "&[data-active]": {
                color: "#22c55e",
                borderColor: "#22c55e",
              },
            },
          }}
        >
          <Tabs.List>
            <Tabs.Tab value="descripcion" leftSection={<BookOpen size={16} />}>
              Descripción
            </Tabs.Tab>
            <Tabs.Tab value="contenido" leftSection={<CheckCircle size={16} />}>
              Contenido
            </Tabs.Tab>
            <Tabs.Tab value="instructor" leftSection={<User size={16} />}>
              Instructor
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="descripcion" pt="xl">
            <Grid>
              <Grid.Col span={{ base: 12, md: 8 }}>
                <Title order={3} className="mb-4 text-gray-800">
                  Acerca de esta capacitación
                </Title>
                <Text className="text-gray-700 mb-6 leading-relaxed">
                  {capacitacion.descripcionCompleta}
                </Text>

                {capacitacion.requisitos && (
                  <>
                    <Title order={4} className="mb-3 mt-6 text-gray-800">
                      Requisitos
                    </Title>
                    <List
                      spacing="sm"
                      icon={
                        <ThemeIcon color="green" size={24} radius="xl">
                          <CheckCircle size={16} />
                        </ThemeIcon>
                      }
                      className="mb-6"
                    >
                      {capacitacion.requisitos.map((req, index) => (
                        <List.Item key={index} className="text-gray-700">
                          {req}
                        </List.Item>
                      ))}
                    </List>
                  </>
                )}

                {capacitacion.objetivos && (
                  <>
                    <Title order={4} className="mb-3 mt-6 text-gray-800">
                      Lo que aprenderás
                    </Title>
                    <List
                      spacing="sm"
                      icon={
                        <ThemeIcon color="green" size={24} radius="xl">
                          <CheckCircle size={16} />
                        </ThemeIcon>
                      }
                      className="mb-6"
                    >
                      {capacitacion.objetivos.map((obj, index) => (
                        <List.Item key={index} className="text-gray-700">
                          {obj}
                        </List.Item>
                      ))}
                    </List>
                  </>
                )}
              </Grid.Col>

              <Grid.Col span={{ base: 12, md: 4 }}>
                <Paper
                  p="md"
                  radius="md"
                  className="bg-white border border-gray-200 shadow-sm"
                >
                  <Title order={4} className="mb-4 text-gray-800">
                    Detalles del curso
                  </Title>
                  <Divider className="mb-4" />

                  <div className="space-y-4">
                    <div>
                      <Text size="sm" color="dimmed">
                        Duración
                      </Text>
                      <Text className="text-gray-700">
                        {capacitacion.duracion}
                      </Text>
                    </div>

                    <div>
                      <Text size="sm" color="dimmed">
                        Nivel
                      </Text>
                      <Text className="text-gray-700">
                        {capacitacion.nivel}
                      </Text>
                    </div>

                    <div>
                      <Text size="sm" color="dimmed">
                        Fecha de inicio
                      </Text>
                      <Text className="text-gray-700">
                        {new Date(capacitacion.fechaInicio).toLocaleDateString(
                          "es-ES",
                          { dateStyle: "long" }
                        )}
                      </Text>
                    </div>

                    <div>
                      <Text size="sm" color="dimmed">
                        Categoría
                      </Text>
                      <Text className="text-gray-700">
                        {capacitacion.categoria}
                      </Text>
                    </div>

                    <div>
                      <Text size="sm" color="dimmed">
                        Precio
                      </Text>
                      <Text className="text-gray-700">
                        ${capacitacion.precio.toFixed(2)}
                      </Text>
                    </div>
                  </div>
                </Paper>
              </Grid.Col>
            </Grid>
          </Tabs.Panel>

          <Tabs.Panel value="contenido" pt="xl">
            <Title order={3} className="mb-6 text-gray-800">
              Contenido del curso
            </Title>

            {capacitacion.temas && (
              <div className="space-y-4">
                {capacitacion.temas.map((tema, index) => (
                  <Card
                    key={index}
                    withBorder
                    className="bg-white border-gray-200 shadow-sm"
                  >
                    <Group align="apart">
                      <div className="flex items-center">
                        <div className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-4">
                          {index + 1}
                        </div>
                        <Text size="lg" className="text-gray-800">
                          {tema}
                        </Text>
                      </div>
                      <Badge
                        color={capacitacion.proximamente ? "yellow" : "green"}
                      >
                        {capacitacion.proximamente
                          ? "Próximamente"
                          : "Disponible"}
                      </Badge>
                    </Group>
                  </Card>
                ))}
              </div>
            )}

            {!capacitacion.temas && (
              <Text c="white">
                El contenido detallado de este curso estará disponible
                próximamente.
              </Text>
            )}
          </Tabs.Panel>

          <Tabs.Panel value="instructor" pt="xl">
            <Title order={3} className="mb-6 text-gray-800">
              Acerca del instructor
            </Title>

            <Card withBorder className="bg-white border-gray-200 shadow-sm">
              <Group>
                <Avatar
                  size={120}
                  radius="md"
                  src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                    capacitacion.instructor
                  )}&background=22c55e&color=fff&size=120`}
                />
                <div>
                  <Title order={4} className="text-gray-800">
                    {capacitacion.instructor}
                  </Title>
                  <Text color="dimmed" className="mb-2">
                    Especialista en {capacitacion.categoria}
                  </Text>
                  <Text className="text-gray-700">
                    Instructor con amplia experiencia en el sector agrícola,
                    especializado en {capacitacion.categoria}. Ha impartido más
                    de 20 cursos y capacitado a cientos de profesionales del
                    sector.
                  </Text>
                </div>
              </Group>
            </Card>
          </Tabs.Panel>
        </Tabs>
      </Container>

      {/* Modal de formulario de preinscripción */}
      <InterestFormModal
        opened={isFormModalOpen}
        onClose={() => setIsFormModalOpen(false)}
        title={`Preinscripción: ${capacitacion.titulo}`}
        origen="capacitaciones"
        capacitacionId={capacitacion.id}
      />
    </div>
  );
}
