"use client";

import { useState, useEffect } from "react";
import { Button, Card, Badge, Loader, Text } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import { productService } from "@/services/productService";
import type { Product } from "@/types/product";

export default function PopularProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadLatestProducts();
  }, []);

  const loadLatestProducts = async () => {
    setLoading(true);
    setError(null);
    try {
      // Obtener todos los productos y ordenarlos por fecha de creación (asumiendo que los más recientes vienen primero)
      const data = await productService.getProducts({
        limit: 5,
        sort: "createdAt:desc",
      });
      setProducts(data.slice(0, 5)); // Asegurarnos de tomar solo los primeros 5
    } catch (err) {
      console.error("Error al cargar productos populares:", err);
      setError("No se pudieron cargar los productos populares.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">Productos Populares</h2>
          <Loader size="lg" className="mx-auto" />
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">Productos Populares</h2>
          <Text color="red">{error}</Text>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold">Productos Populares</h2>
          <Button
            component={Link}
            href="/productos"
            variant="outline"
            color="green"
          >
            Ver Todos
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card
              key={product._id}
              shadow="sm"
              padding="lg"
              radius="md"
              withBorder
            >
              <Card.Section>
                <Image
                  src={
                    product.images[0] || "/placeholder.svg?height=200&width=200"
                  }
                  alt={product.name}
                  width={400}
                  height={200}
                  className="h-48 w-full object-cover"
                />
              </Card.Section>

              <div className="mt-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-medium">{product.name}</h3>
                  <Badge color="green">{product.condition}</Badge>
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  Vendedor: {product.seller}
                </p>
                <p className="text-xl font-bold text-green-700 mt-2">
                  ${product.basePrice.toFixed(2)}
                </p>

                <Button
                  component={Link}
                  href={`/productos/${product._id}`}
                  color="green"
                  fullWidth
                  mt="md"
                  radius="md"
                >
                  Ver Detalles
                </Button>
              </div>
            </Card>
          ))}

          {products.length === 0 && !loading && (
            <div className="col-span-full text-center py-10">
              <Text c="dimmed">
                No hay productos disponibles en este momento.
              </Text>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
