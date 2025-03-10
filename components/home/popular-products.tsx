"use client";
import { Button, Card, Badge } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";

const urlPlaceholder =
  "https://thefoodtech.com/wp-content/uploads/2020/06/exportación-de-productos-agrícolas.jpg";

const products = [
  {
    id: 1,
    name: "Semillas de Maíz Premium",
    price: 120.0,
    image: urlPlaceholder,
    seller: "AgroSemillas S.A.",
    rating: 4.8,
  },
  {
    id: 2,
    name: "Fertilizante Orgánico 5kg",
    price: 45.5,
    image: urlPlaceholder,
    seller: "EcoAgro",
    rating: 4.5,
  },
  {
    id: 3,
    name: "Kit de Herramientas de Jardín",
    price: 89.99,
    image: urlPlaceholder,
    seller: "HerramientasAgro",
    rating: 4.7,
  },
  {
    id: 4,
    name: "Sistema de Riego por Goteo",
    price: 199.99,
    image: urlPlaceholder,
    seller: "RiegoTech",
    rating: 4.9,
  },
];

export default function PopularProducts() {
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
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={400}
                  height={200}
                  className="h-48 w-full object-cover"
                />
              </Card.Section>

              <div className="mt-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-medium">{product.name}</h3>
                  <Badge color="green">{product.rating}</Badge>
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  Vendedor: {product.seller}
                </p>
                <p className="text-xl font-bold text-green-700 mt-2">
                  ${product.price}
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
        </div>
      </div>
    </section>
  );
}
