"use client";

import { Card, Avatar, Text, Grid } from "@mantine/core";
import ProductCatalog from "../productos/product-catalog";

// Simulated vendor data
const vendorData = {
  id: "1",
  name: "AgroSemillas S.A.",
  city: "Córdoba",
  country: "Argentina",
  phone: "+54 351 123 4567",
  logo: "/placeholder.svg?height=200&width=200",
  description:
    "Proveedor líder de semillas y productos agrícolas de alta calidad.",
};

interface VendorProfileProps {
  vendorId: string;
}

export default function VendorProfile({ vendorId }: VendorProfileProps) {
  // In a real application, you would fetch the vendor data based on the vendorId

  return (
    <div>
      <Card withBorder mb="xl">
        <Grid>
          <Grid.Col span={{ base: 12, sm: 4 }}>
            <Avatar src={vendorData.logo} size={200} radius={100} mx="auto" />
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 8 }}>
            <Text size="xl" fw={700}>
              {vendorData.name}
            </Text>
            <Text>
              <strong>Ubicación:</strong> {vendorData.city},{" "}
              {vendorData.country}
            </Text>
            <Text>
              <strong>Teléfono:</strong> {vendorData.phone}
            </Text>
            <Text mt="md">{vendorData.description}</Text>
          </Grid.Col>
        </Grid>
      </Card>

      <Text size="xl" fw={700} mb="xl">
        Catálogo de Productos
      </Text>
      <ProductCatalog vendorId={vendorId} />
    </div>
  );
}
