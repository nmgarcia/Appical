import { Card, Image, Text, Button, Badge } from "@mantine/core";
import Link from "next/link";
import type { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src={product.images[0] || "/placeholder.svg?height=200&width=200"}
          height={160}
          alt={product.name}
        />
      </Card.Section>

      <Text fw={500} mt="md">
        {product.name}
      </Text>
      <Text c="dimmed" size="sm">
        {product.seller}
      </Text>

      <Text fw={700} size="xl" mt="md">
        ${product.basePrice.toFixed(2)}
      </Text>

      <Badge color="green" variant="light" mt="xs">
        {product.condition}
      </Badge>

      <Button
        component={Link}
        href={`/productos/${product._id}`}
        color="green"
        fullWidth
        mt="md"
        radius="md"
      >
        Ver Detalle
      </Button>
    </Card>
  );
}
