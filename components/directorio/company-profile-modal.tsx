"use client";

import { Company } from "@/data/companies";
import {
  Modal,
  Image,
  Text,
  Badge,
  Button,
  Group,
  Tabs,
  Divider,
  SimpleGrid,
  Card,
} from "@mantine/core";
import {
  MapPin,
  Building,
  Phone,
  Mail,
  Globe,
  MessageCircle,
  BadgeIcon as Certificate,
  Star,
} from "lucide-react";

interface CompanyProfileModalProps {
  company: Company;
  opened: boolean;
  onClose: () => void;
}

export default function CompanyProfileModal({
  company,
  opened,
  onClose,
}: CompanyProfileModalProps) {
  const isPremium = company.plan === "premium";
  const isDestacado = company.plan === "destacado" || isPremium;

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      size="xl"
      title={null}
      centered
      overlayProps={{ blur: 3 }}
      classNames={{
        content: "p-0 overflow-hidden",
      }}
    >
      <div className="relative">
        {/* Banner */}
        <div
          className="h-48 bg-cover bg-center"
          style={{
            backgroundImage: `url(${
              company.banner || "/placeholder.svg?height=400&width=1200"
            })`,
          }}
        >
          {isPremium && (
            <div className="absolute top-4 right-4 z-10">
              <Badge
                color="green"
                variant="filled"
                size="lg"
                leftSection={<Star size={14} className="fill-current" />}
              >
                Premium
              </Badge>
            </div>
          )}
          {isDestacado && !isPremium && (
            <div className="absolute top-4 right-4 z-10">
              <Badge color="blue" variant="filled" size="lg">
                Destacado
              </Badge>
            </div>
          )}
        </div>

        {/* Logo */}
        <div className="absolute -bottom-16 left-8">
          <Image
            src={company.logo || "/placeholder.svg"}
            width={120}
            height={120}
            alt={company.nombre}
            className="border-4 border-white rounded-lg shadow-md"
          />
        </div>
      </div>

      <div className="pt-20 px-8 pb-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <Text size="xl" fw={700}>
              {company.nombre}
            </Text>
            <Group gap="xs">
              <MapPin size={16} className="text-gray-500" />
              <Text size="sm" color="dimmed">
                {company.ubicacion}
              </Text>
            </Group>
            <Group gap="xs">
              <Building size={16} className="text-gray-500" />
              <Text size="sm" color="dimmed">
                {company.rubro}
              </Text>
            </Group>
          </div>
          <div className="flex flex-wrap gap-1 justify-end">
            {company.certificaciones.map((cert) => (
              <Badge key={cert} size="md" variant="outline" color="green">
                {cert}
              </Badge>
            ))}
            <Badge size="md" variant="outline" color="blue">
              {company.tipoProduccion}
            </Badge>
          </div>
        </div>

        <Tabs defaultValue="info">
          <Tabs.List>
            <Tabs.Tab value="info">Información</Tabs.Tab>
            <Tabs.Tab value="products">Productos y Servicios</Tabs.Tab>
            <Tabs.Tab value="gallery">Galería</Tabs.Tab>
            <Tabs.Tab value="contact">Contacto</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="info" pt="md">
            <Text>{company.descripcionCompleta || company.descripcion}</Text>

            {company.certificaciones.length > 0 && (
              <>
                <Divider my="md" />
                <Text fw={600} mb="xs">
                  Certificaciones
                </Text>
                <div className="flex flex-wrap gap-2">
                  {company.certificaciones.map((cert) => (
                    <Badge
                      key={cert}
                      size="lg"
                      color="green"
                      variant="light"
                      leftSection={<Certificate size={14} />}
                    >
                      {cert}
                    </Badge>
                  ))}
                </div>
              </>
            )}
          </Tabs.Panel>

          <Tabs.Panel value="products" pt="md">
            <Text fw={600} mb="md">
              Productos y Servicios
            </Text>
            <SimpleGrid cols={2} spacing="md" className="sm:grid-cols-1">
              {company.productos.map((producto, index) => (
                <Card key={index} withBorder p="md">
                  <Text fw={500}>{producto}</Text>
                </Card>
              ))}
            </SimpleGrid>
          </Tabs.Panel>

          <Tabs.Panel value="gallery" pt="md">
            <Text fw={600} mb="md">
              Galería
            </Text>
            <SimpleGrid cols={3} spacing="md" className="sm:grid-cols-1">
              {(company.galeria || []).map((imagen, index) => (
                <Image
                  key={index}
                  src={imagen || "/placeholder.svg"}
                  radius="md"
                  alt={`Imagen ${index + 1}`}
                />
              ))}
            </SimpleGrid>
          </Tabs.Panel>

          <Tabs.Panel value="contact" pt="md">
            <Text fw={600} mb="md">
              Información de Contacto
            </Text>
            {company.contacto && (
              <div className="space-y-3">
                {company.contacto.telefono && (
                  <Group>
                    <Phone size={20} className="text-green-600" />
                    <Text>{company.contacto.telefono}</Text>
                  </Group>
                )}
                {company.contacto.whatsapp && (
                  <Group>
                    <MessageCircle size={20} className="text-green-600" />
                    <Text>WhatsApp: {company.contacto.whatsapp}</Text>
                  </Group>
                )}
                {company.contacto.email && (
                  <Group>
                    <Mail size={20} className="text-green-600" />
                    <Text>{company.contacto.email}</Text>
                  </Group>
                )}
                {company.contacto.web && (
                  <Group>
                    <Globe size={20} className="text-green-600" />
                    <Text>{company.contacto.web}</Text>
                  </Group>
                )}
              </div>
            )}

            {company.coordenadas && (
              <>
                <Divider my="md" />
                <Text fw={600} mb="xs">
                  Ubicación
                </Text>
                <div className="h-64 bg-gray-200 rounded-md flex items-center justify-center">
                  <Text color="dimmed">
                    Mapa no disponible en la versión de demostración
                  </Text>
                </div>
              </>
            )}
          </Tabs.Panel>
        </Tabs>
      </div>

      <div className="p-4 bg-gray-50 border-t">
        <Button
          fullWidth
          color="green"
          onClick={() =>
            alert(
              "Funcionalidad de contacto no disponible en la versión de demostración"
            )
          }
        >
          <MessageCircle size={18} />
          Contactar
        </Button>
      </div>
    </Modal>
  );
}
