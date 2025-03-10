"use client";

import { useState } from "react";
import {
  Grid,
  Image,
  Text,
  Button,
  Badge,
  Card,
  Avatar,
  Rating,
} from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { ShieldCheck } from "lucide-react";
import RelatedProducts from "./related-products";
import { Product } from "@/types/product";

// Simulated product data
const product: Product = {
  id: "1",
  name: "Semillas de Maíz Premium",
  basePrice: 120.0,
  images: [
    "/placeholder.svg?height=400&width=400",
    "/placeholder.svg?height=400&width=400",
    "/placeholder.svg?height=400&width=400",
  ],
  seller: "AgroSemillas S.A.",
  sellerLocation: "Córdoba, Argentina",
  category: "Semillas",
  condition: "Nuevo",
  description:
    "Semillas de maíz de alta calidad, ideales para cultivos de alto rendimiento. Resistentes a plagas y enfermedades comunes.",
  technicalDetails: [
    { label: "Variedad", value: "Híbrido DK7210" },
    { label: "Ciclo", value: "Intermedio" },
    { label: "Resistencia", value: "Alta a sequía y enfermedades" },
    { label: "Rendimiento Potencial", value: "12-14 toneladas/hectárea" },
  ],
  reviews: [
    {
      id: 1,
      user: "Juan Pérez",
      rating: 5,
      comment: "Excelente producto, muy buen rendimiento en mi campo.",
    },
    {
      id: 2,
      user: "María Gómez",
      rating: 4,
      comment: "Buena calidad de semillas, germinarón rápidamente.",
    },
  ],
};

interface ProductDetailProps {
  productId: string;
}

export default function ProductDetail({ productId }: ProductDetailProps) {
  const [mainImage, setMainImage] = useState(product.images[0]);

  return (
    <Grid gutter="xl">
      <Grid.Col span={{ base: 12, md: 6 }}>
        <Image
          src={mainImage || "/placeholder.svg"}
          alt={product.name}
          height={400}
          fit="contain"
        />
        <Carousel
          withIndicators
          height={100}
          slideSize="25%"
          slideGap="sm"
          loop
          align="start"
          slidesToScroll={4}
        >
          {product.images.map((img, index) => (
            <Carousel.Slide key={index}>
              <Image
                src={img || "/placeholder.svg"}
                height={80}
                width={80}
                fit="cover"
                alt={`${product.name} - imagen ${index + 1}`}
                onClick={() => setMainImage(img)}
                style={{ cursor: "pointer" }}
              />
            </Carousel.Slide>
          ))}
        </Carousel>
      </Grid.Col>

      <Grid.Col span={{ base: 12, md: 6 }}>
        <Text size="xl" fw={700}>
          {product.name}
        </Text>
        <Text size="xl" fw={700} c="green" my="md">
          ${product.basePrice}
        </Text>
        <Badge color="green" size="lg" variant="light" mb="md">
          {product.condition}
        </Badge>

        <Button color="green" size="lg" fullWidth mb="xl">
          Agregar al Carrito
        </Button>

        <Card withBorder p="md" radius="md" mb="xl">
          <Text fw={700} mb="xs">
            Vendedor
          </Text>
          <div className="flex items-center gap-2 mb-2">
            <Avatar color="cyan" radius="xl">
              {product.seller[0]}
            </Avatar>
            <div>
              <Text>{product.seller}</Text>
              <Text size="sm" c="dimmed">
                {product.sellerLocation}
              </Text>
            </div>
          </div>
          <Badge
            leftSection={<ShieldCheck size={14} />}
            color="blue"
            variant="light"
          >
            Vendedor Verificado
          </Badge>
        </Card>

        <Text fw={700} mb="xs">
          Descripción
        </Text>
        <Text mb="xl">{product.description}</Text>

        <Text fw={700} mb="xs">
          Detalles Técnicos
        </Text>
        <ul className="list-disc pl-5 mb-xl">
          {product.technicalDetails!.map((detail, index) => (
            <li key={index}>
              <Text>
                <strong>{detail.label}:</strong> {detail.value}
              </Text>
            </li>
          ))}
        </ul>

        <Text fw={700} mb="xs">
          Reseñas
        </Text>
        {product.reviews!.map((review) => (
          <Card key={review._id} withBorder mb="md">
            <Text fw={500}>{review.user}</Text>
            <Rating value={review.rating} readOnly />
            <Text size="sm">{review.comment}</Text>
          </Card>
        ))}
      </Grid.Col>

      <Grid.Col span={12}>
        <Text size="xl" fw={700} mb="md">
          Productos Relacionados
        </Text>
        <RelatedProducts category={product.category} />
      </Grid.Col>
    </Grid>
  );
}
