"use client";

import { useState, useEffect } from "react";
import {
  Container,
  Title,
  Text,
  Button,
  Card,
  Grid,
  Badge,
  Group,
  Divider,
} from "@mantine/core";
import { licitacionesService } from "@/services/licitacionesService";
import type { Licitacion } from "@/data/licitaciones";
import InterestFormModal from "@/components/shared/interest-form-modal";
import { Calendar, User, MapPin, DollarSign, CheckCircle } from "lucide-react";

export default function LicitacionesPage() {
  const [licitacionesAbiertas, setLicitacionesAbiertas] = useState<
    Licitacion[]
  >([]);
  const [loading, setLoading] = useState(true);
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);

  useEffect(() => {
    const loadLicitaciones = async () => {
      setLoading(true);
      try {
        const data = await licitacionesService.getLicitacionesByEstado(
          "abierta"
        );
        setLicitacionesAbiertas(data);
      } catch (error) {
        console.error("Error al cargar licitaciones:", error);
      } finally {
        setLoading(false);
      }
    };

    loadLicitaciones();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Banner con video */}
      <div className="bg-green-900 py-16">
        <Container size="lg">
          <Grid gutter={40}>
            <Grid.Col span={6}>
              <div className="flex flex-col justify-center h-full gap-3">
                <Text
                  className="text-xl font-bold mb-6 bg-blue-400 rounded-xl px-4 py-2 text-center"
                  c={"white"}
                  w={150}
                >
                  Proximamente!
                </Text>
                <Title className="text-4xl font-bold mb-6 text-white">
                  Sistema de Licitaciones
                </Title>
                <Text className="text-xl mb-8" c="white">
                  Conectamos productores con proveedores a través de un sistema
                  transparente y eficiente de licitaciones.
                </Text>
                <Button
                  color="green"
                  size="lg"
                  onClick={() => setIsFormModalOpen(true)}
                  className="self-start"
                >
                  ¡Quiero participar!
                </Button>
              </div>
            </Grid.Col>
            <Grid.Col span={6}>
              <div className="aspect-video rounded-lg overflow-hidden shadow-xl">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Video informativo sobre licitaciones"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </Grid.Col>
          </Grid>
        </Container>
      </div>

      <div className="py-16 bg-gray-50">
        <Container size="lg">
          <Title className="text-3xl font-bold text-center" mb={12}>
            ¿Cómo funciona nuestro sistema?
          </Title>

          {/* Vista desktop: horizontal cards */}
          <div className="hidden md:block">
            <Grid>
              <Grid.Col span={3}>
                <Card withBorder p="xl" radius="md" className="h-full">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4 mx-auto">
                    <Text className="text-3xl font-bold text-green-600">1</Text>
                  </div>
                  <Title
                    order={3}
                    className="text-xl font-bold mb-4 text-center"
                  >
                    Publicación
                  </Title>
                  <Text className="text-gray-600 text-center">
                    Los productores publican sus necesidades específicas de
                    productos o servicios.
                  </Text>
                </Card>
              </Grid.Col>

              <Grid.Col span={3}>
                <Card withBorder p="xl" radius="md" className="h-full">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4 mx-auto">
                    <Text className="text-3xl font-bold text-green-600">2</Text>
                  </div>
                  <Title
                    order={3}
                    className="text-xl font-bold mb-4 text-center"
                  >
                    Ofertas
                  </Title>
                  <Text className="text-gray-600 text-center">
                    Los proveedores presentan sus ofertas con precios,
                    condiciones y plazos.
                  </Text>
                </Card>
              </Grid.Col>

              <Grid.Col span={3}>
                <Card withBorder p="xl" radius="md" className="h-full">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4 mx-auto">
                    <Text className="text-3xl font-bold text-green-600">3</Text>
                  </div>
                  <Title
                    order={3}
                    className="text-xl font-bold mb-4 text-center"
                  >
                    Selección
                  </Title>
                  <Text className="text-gray-600 text-center">
                    El productor evalúa las ofertas y selecciona la que mejor se
                    adapte a sus necesidades.
                  </Text>
                </Card>
              </Grid.Col>

              <Grid.Col span={3}>
                <Card withBorder p="xl" radius="md" className="h-full">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4 mx-auto">
                    <Text className="text-3xl font-bold text-green-600">4</Text>
                  </div>
                  <Title
                    order={3}
                    className="text-xl font-bold mb-4 text-center"
                  >
                    Adjudicación
                  </Title>
                  <Text className="text-gray-600 text-center">
                    Se formaliza la operación y nuestro sistema facilita la
                    comunicación entre las partes.
                  </Text>
                </Card>
              </Grid.Col>
            </Grid>
          </div>

          {/* Vista mobile: timeline vertical */}
          <div className="md:hidden">
            <div className="relative">
              {/* Línea vertical de timeline */}
              <div className="absolute left-9 top-0 bottom-0 w-1 bg-green-200"></div>

              {/* Paso 1 */}
              <div className="flex mb-8 relative">
                <div className="z-10 flex-shrink-0 w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mr-4">
                  <Text className="text-3xl font-bold text-green-600">1</Text>
                </div>
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 flex-grow">
                  <Title order={3} className="text-lg font-bold mb-2">
                    Publicación
                  </Title>
                  <Text className="text-gray-600">
                    Los productores publican sus necesidades específicas de
                    productos o servicios.
                  </Text>
                </div>
              </div>

              {/* Paso 2 */}
              <div className="flex mb-8 relative">
                <div className="z-10 flex-shrink-0 w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mr-4">
                  <Text className="text-3xl font-bold text-green-600">2</Text>
                </div>
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 flex-grow">
                  <Title order={3} className="text-lg font-bold mb-2">
                    Ofertas
                  </Title>
                  <Text className="text-gray-600">
                    Los proveedores presentan sus ofertas con precios,
                    condiciones y plazos.
                  </Text>
                </div>
              </div>

              {/* Paso 3 */}
              <div className="flex mb-8 relative">
                <div className="z-10 flex-shrink-0 w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mr-4">
                  <Text className="text-3xl font-bold text-green-600">3</Text>
                </div>
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 flex-grow">
                  <Title order={3} className="text-lg font-bold mb-2">
                    Selección
                  </Title>
                  <Text className="text-gray-600">
                    El productor evalúa las ofertas y selecciona la que mejor se
                    adapte a sus necesidades.
                  </Text>
                </div>
              </div>

              {/* Paso 4 */}
              <div className="flex relative">
                <div className="z-10 flex-shrink-0 w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mr-4">
                  <Text className="text-3xl font-bold text-green-600">4</Text>
                </div>
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 flex-grow">
                  <Title order={3} className="text-lg font-bold mb-2">
                    Adjudicación
                  </Title>
                  <Text className="text-gray-600">
                    Se formaliza la operación y nuestro sistema facilita la
                    comunicación entre las partes.
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Licitaciones abiertas */}
      {/* <div className="py-16">
        <Container size="lg">
          <Title className="text-3xl font-bold mb-2 text-center">
            Licitaciones Abiertas
          </Title>
          <Text className="text-gray-600 text-center mb-12">
            Estas son algunas de las licitaciones actualmente disponibles en
            nuestra plataforma
          </Text>

          <div className="space-y-6">
            {licitacionesAbiertas.slice(0, 5).map((licitacion) => (
              <Card
                key={licitacion.id}
                withBorder
                p="lg"
                radius="md"
                className="hover:shadow-md transition-shadow"
              >
                <Grid>
                  <Grid.Col span={8}>
                    <Badge color="green" className="mb-2">
                      {licitacion.categoria}
                    </Badge>
                    <Title order={3} className="text-xl font-bold mb-2">
                      {licitacion.titulo}
                    </Title>
                    <Text className="text-gray-600 mb-4">
                      {licitacion.descripcion}
                    </Text>

                    <Group gap="lg" className="mb-4">
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-2 text-gray-500" />
                        <Text size="sm" color="dimmed">
                          Cierre:{" "}
                          {new Date(
                            licitacion.fechaCierre
                          ).toLocaleDateString()}
                        </Text>
                      </div>
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-2 text-gray-500" />
                        <Text size="sm" color="dimmed">
                          {licitacion.ubicacion}
                        </Text>
                      </div>
                      <div className="flex items-center">
                        <User size={16} className="mr-2 text-gray-500" />
                        <Text size="sm" color="dimmed">
                          {licitacion.productorNombre}
                        </Text>
                      </div>
                    </Group>

                    {licitacion.presupuestoEstimado && (
                      <div className="flex items-center mb-4">
                        <DollarSign size={16} className="mr-2 text-gray-500" />
                        <Text size="sm" color="dimmed">
                          Presupuesto estimado: {licitacion.presupuestoEstimado}
                        </Text>
                      </div>
                    )}
                  </Grid.Col>

                  <Grid.Col
                    span={4}
                    className="flex flex-col justify-center items-center border-l border-gray-200 pl-4"
                  >
                    <div className="text-center mb-4">
                      <Text className="text-gray-600">Ofertas recibidas</Text>
                      <Text className="text-3xl font-bold text-green-600">
                        {licitacion.cantidadOfertas}
                      </Text>
                    </div>
                    <Button color="green" fullWidth>
                      Ver detalles
                    </Button>
                  </Grid.Col>
                </Grid>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" color="green" size="lg">
              Ver todas las licitaciones
            </Button>
          </div>
        </Container>
      </div> */}

      {/* Sección de interés */}
      <div className="py-16 bg-green-50">
        <Container size="lg" className="text-center">
          <div className="flex flex-col justify-center h-full gap-3">
            <Title className="text-3xl font-bold margin-bottom-4">
              ¿Te interesa formar parte?
            </Title>
            <Text className="text-xl margin-bottom-8">
              Entérate cuando comiencen las licitaciones y sé de los primeros en
              participar en este innovador sistema.
            </Text>
            <Button
              color="green"
              size="lg"
              className="self-center"
              onClick={() => setIsFormModalOpen(true)}
            >
              Quiero más información
            </Button>
          </div>
        </Container>
      </div>

      {/* Beneficios */}
      {/* <div className="py-16">
        <Container size="lg">
          <Title className="text-3xl font-bold mb-12 text-center">
            Beneficios del Sistema
          </Title>

          <Grid>
            <Grid.Col span={6}>
              <Card withBorder p="lg" radius="md" className="h-full">
                <Title
                  order={3}
                  className="text-xl font-bold mb-4 flex items-center"
                >
                  <CheckCircle size={24} className="text-green-600 mr-2" />
                  Para Productores
                </Title>
                <Divider className="mb-4" />
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle
                      size={16}
                      className="text-green-600 mr-2 mt-1"
                    />
                    <Text>Acceso a múltiples ofertas competitivas</Text>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle
                      size={16}
                      className="text-green-600 mr-2 mt-1"
                    />
                    <Text>Ahorro de tiempo en la búsqueda de proveedores</Text>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle
                      size={16}
                      className="text-green-600 mr-2 mt-1"
                    />
                    <Text>Transparencia en precios y condiciones</Text>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle
                      size={16}
                      className="text-green-600 mr-2 mt-1"
                    />
                    <Text>Verificación de proveedores</Text>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle
                      size={16}
                      className="text-green-600 mr-2 mt-1"
                    />
                    <Text>Reducción de costos operativos</Text>
                  </li>
                </ul>
              </Card>
            </Grid.Col>

            <Grid.Col span={6}>
              <Card withBorder p="lg" radius="md" className="h-full">
                <Title
                  order={3}
                  className="text-xl font-bold mb-4 flex items-center"
                >
                  <CheckCircle size={24} className="text-green-600 mr-2" />
                  Para Proveedores
                </Title>
                <Divider className="mb-4" />
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle
                      size={16}
                      className="text-green-600 mr-2 mt-1"
                    />
                    <Text>Acceso a nuevas oportunidades de negocio</Text>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle
                      size={16}
                      className="text-green-600 mr-2 mt-1"
                    />
                    <Text>Reducción de costos de adquisición de clientes</Text>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle
                      size={16}
                      className="text-green-600 mr-2 mt-1"
                    />
                    <Text>Visibilidad ante productores verificados</Text>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle
                      size={16}
                      className="text-green-600 mr-2 mt-1"
                    />
                    <Text>Proceso de oferta simplificado</Text>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle
                      size={16}
                      className="text-green-600 mr-2 mt-1"
                    />
                    <Text>Competencia justa basada en calidad y precio</Text>
                  </li>
                </ul>
              </Card>
            </Grid.Col>
          </Grid>
        </Container>
      </div> */}

      {/* Preguntas frecuentes */}
      {/* <div className="py-16 bg-gray-50">
        <Container size="lg">
          <Title className="text-3xl font-bold mb-12 text-center">
            Preguntas Frecuentes
          </Title>

          <Grid>
            <Grid.Col span={6}>
              <Card withBorder p="lg" radius="md" className="mb-4">
                <Title order={3} className="text-lg font-bold mb-2">
                  ¿Cómo puedo publicar una licitación?
                </Title>
                <Text className="text-gray-600">
                  Para publicar una licitación, debes registrarte como productor
                  en nuestra plataforma. Una vez verificada tu cuenta, podrás
                  crear y gestionar tus licitaciones desde tu panel de control.
                </Text>
              </Card>

              <Card withBorder p="lg" radius="md" className="mb-4">
                <Title order={3} className="text-lg font-bold mb-2">
                  ¿Qué información debo incluir en mi licitación?
                </Title>
                <Text className="text-gray-600">
                  Es importante incluir una descripción detallada de tus
                  necesidades, cantidades, plazos, ubicación, requisitos
                  específicos y, si es posible, un presupuesto estimado para
                  orientar a los proveedores.
                </Text>
              </Card>

              <Card withBorder p="lg" radius="md">
                <Title order={3} className="text-lg font-bold mb-2">
                  ¿Cómo se garantiza la calidad de los proveedores?
                </Title>
                <Text className="text-gray-600">
                  Todos los proveedores pasan por un proceso de verificación
                  antes de poder participar en licitaciones. Además, contamos
                  con un sistema de calificaciones y reseñas para mantener altos
                  estándares de calidad.
                </Text>
              </Card>
            </Grid.Col>

            <Grid.Col span={6}>
              <Card withBorder p="lg" radius="md" className="mb-4">
                <Title order={3} className="text-lg font-bold mb-2">
                  ¿Cuánto tiempo permanece abierta una licitación?
                </Title>
                <Text className="text-gray-600">
                  El productor define el plazo de la licitación al crearla.
                  Generalmente, las licitaciones permanecen abiertas entre 7 y
                  30 días, dependiendo de la urgencia y complejidad de la
                  solicitud.
                </Text>
              </Card>

              <Card withBorder p="lg" radius="md" className="mb-4">
                <Title order={3} className="text-lg font-bold mb-2">
                  ¿Cómo se selecciona al ganador de una licitación?
                </Title>
                <Text className="text-gray-600">
                  El productor evalúa todas las ofertas recibidas y selecciona
                  la que mejor se adapte a sus necesidades, considerando precio,
                  calidad, plazos y reputación del proveedor.
                </Text>
              </Card>

              <Card withBorder p="lg" radius="md">
                <Title order={3} className="text-lg font-bold mb-2">
                  ¿Hay algún costo por participar en el sistema?
                </Title>
                <Text className="text-gray-600">
                  Para los productores, publicar licitaciones es gratuito. Los
                  proveedores pueden acceder a un plan básico gratuito o a
                  planes premium con beneficios adicionales como ofertas
                  destacadas y estadísticas avanzadas.
                </Text>
              </Card>
            </Grid.Col>
          </Grid>
        </Container>
      </div> */}

      {/* Modal de formulario de interés */}
      <InterestFormModal
        opened={isFormModalOpen}
        onClose={() => setIsFormModalOpen(false)}
        title="¿Te interesa nuestro sistema de licitaciones?"
        origen="licitaciones"
      />
    </div>
  );
}
