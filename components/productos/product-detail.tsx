"use client";

import { useState, useEffect } from "react";
import {
  Grid,
  Image,
  Text,
  Button,
  Badge,
  Card,
  Avatar,
  Rating,
  NumberInput,
  Group,
} from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { ShieldCheck } from "lucide-react";
import RelatedProducts from "./related-products";
import { productService } from "@/services/productService";
import type { Product } from "@/types/product";
import { useCart } from "@/contexts/cart-context";
import { useAuth } from "@/contexts/auth-context";
import { useRouter } from "next/navigation";

interface ProductDetailProps {
  productId: string;
}

export default function ProductDetail({ productId }: ProductDetailProps) {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [mainImage, setMainImage] = useState("");
  const [quantity, setQuantity] = useState(1);
  //const { addItem } = useCart();
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    loadProduct();
  }, [productId]);

  const loadProduct = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await productService.getProductById(productId);
      setProduct(data);
      if (data.images && data.images.length > 0) {
        setMainImage(data.images[0]);
      }
    } catch (err) {
      console.error("Error al cargar el producto:", err);
      setError("No se pudo cargar el producto. Por favor, intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = () => {
    if (!user) {
      // Si el usuario no está logueado, redirigir al login
      router.push(
        "/login?redirect=" + encodeURIComponent(`/product/${productId}`)
      );
      return;
    }

    if (user.role.name.toLowerCase() !== "cliente") {
      alert("Solo los clientes pueden realizar compras.");
      return;
    }

    if (product) {
      // addItem(product, quantity);
      alert("Producto agregado al carrito");
    }
  };

  if (loading) {
    return <div className="text-center py-10">Cargando producto...</div>;
  }

  if (error || !product) {
    return (
      <div className="text-center py-10 text-red-500">
        {error || "Producto no encontrado"}
      </div>
    );
  }

  return (
    <Grid gutter="xl">
      <Grid.Col span={{ base: 12, md: 6 }}>
        <Image
          src={mainImage || "/placeholder.svg?height=400&width=400"}
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
                src={img || "/placeholder.svg?height=80&width=80"}
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
          ${product.basePrice.toFixed(2)}
        </Text>
        <Badge color="green" size="lg" variant="light" mb="md">
          {product.condition}
        </Badge>

        <Group mb="xl">
          <NumberInput
            label="Cantidad"
            value={quantity}
            onChange={(val) => setQuantity(Number(val))}
            min={1}
            max={product.stock || 99}
            style={{ width: 100 }}
          />
          <Button color="green" size="lg" onClick={handleAddToCart}>
            Agregar al Carrito
          </Button>
        </Group>

        <Card withBorder p="md" radius="md" mb="xl">
          <Text fw={700} mb="xs">
            Vendedor
          </Text>
          <div className="flex items-center gap-2 mb-2">
            <Avatar color="cyan" radius="xl">
              {product.sellerId[0]}
            </Avatar>
            <div>
              <Text>{product.seller}</Text>
              <Text size="sm" c="dimmed">
                {product.sellerLocation || ""}
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
        <Text mb="xl">
          {product.description || "Sin descripción disponible"}
        </Text>

        {product.technicalDetails && product.technicalDetails.length > 0 && (
          <>
            <Text fw={700} mb="xs">
              Detalles Técnicos
            </Text>
            <ul className="list-disc pl-5 mb-xl">
              {product.technicalDetails.map((detail, index) => (
                <li key={index}>
                  <Text>
                    <strong>{detail.label}:</strong> {detail.value}
                  </Text>
                </li>
              ))}
            </ul>
          </>
        )}

        {product.reviews && product.reviews.length > 0 && (
          <>
            <Text fw={700} mb="xs">
              Reseñas
            </Text>
            {product.reviews.map((review) => (
              <Card key={review.id} withBorder mb="md">
                <Text fw={500}>{review.user}</Text>
                <Rating value={review.rating} readOnly />
                <Text size="sm">{review.comment}</Text>
              </Card>
            ))}
          </>
        )}
      </Grid.Col>

      <Grid.Col span={12}>
        <Text size="xl" fw={700} mb="md">
          Proximamente Productos Relacionados
        </Text>
        {/* <RelatedProducts category={product.category} /> */}
      </Grid.Col>
    </Grid>
  );
}
