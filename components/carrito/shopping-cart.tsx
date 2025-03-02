"use client";

import { useState } from "react";
import {
  Button,
  Card,
  Grid,
  Text,
  Image,
  NumberInput,
  Group,
} from "@mantine/core";
import { Trash2 } from "lucide-react";
import Link from "next/link";
import RelatedProducts from "../productos/related-products";

// Simulated cart items
const initialCartItems = [
  {
    id: "1",
    name: "Semillas de Maíz Premium",
    price: 120.0,
    image: "/placeholder.svg?height=100&width=100",
    quantity: 2,
  },
  {
    id: "2",
    name: "Fertilizante Orgánico",
    price: 45.0,
    image: "/placeholder.svg?height=100&width=100",
    quantity: 1,
  },
];

export default function ShoppingCart() {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const updateQuantity = (id: string, quantity: number) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shippingCost = 10; // Example shipping cost
  const total = subtotal + shippingCost;

  return (
    <Grid gutter="xl">
      <Grid.Col span={{ base: 12, md: 8 }}>
        {cartItems.map((item) => (
          <Card key={item.id} withBorder mb="md">
            <Group>
              <Image
                src={item.image || "/placeholder.svg"}
                width={100}
                height={100}
                alt={item.name}
              />
              <div style={{ flex: 1 }}>
                <Text fw={500}>{item.name}</Text>
                <Text c="dimmed">Precio: ${item.price.toFixed(2)}</Text>
                <NumberInput
                  value={item.quantity}
                  onChange={(value) => updateQuantity(item.id, Number(value))}
                  min={1}
                  max={99}
                  style={{ width: 100 }}
                />
              </div>
              <Button
                variant="subtle"
                color="red"
                onClick={() => removeItem(item.id)}
              >
                <Trash2 size={20} />
              </Button>
            </Group>
          </Card>
        ))}
      </Grid.Col>

      <Grid.Col span={{ base: 12, md: 4 }}>
        <Card withBorder>
          <Text fw={700} size="lg" mb="md">
            Resumen del Pedido
          </Text>
          <Text>Subtotal: ${subtotal.toFixed(2)}</Text>
          <Text>Envío: ${shippingCost.toFixed(2)}</Text>
          <Text fw={700} mt="md">
            Total: ${total.toFixed(2)}
          </Text>
          <Button
            component={Link}
            href="/checkout"
            color="green"
            fullWidth
            mt="xl"
          >
            Proceder al Pago
          </Button>
        </Card>

        <Card withBorder mt="xl">
          <Text fw={700} size="lg" mb="md">
            Productos Sugeridos
          </Text>
          <RelatedProducts category="Semillas" />
        </Card>
      </Grid.Col>
    </Grid>
  );
}
