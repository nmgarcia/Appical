"use client";
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
// import { useCart } from "@/contexts/cart-context";
import { useAuth } from "@/contexts/auth-context";
import { useRouter } from "next/navigation";

export default function ShoppingCart() {
  // const { items, removeItem, updateQuantity, clearCart } = useCart();
  const { user } = useAuth();
  const router = useRouter();

  // Datos hardcoded del carrito
  const items = [
    {
      product: {
        _id: "1",
        name: "Producto de Ejemplo",
        basePrice: 29.99,
        stock: 10,
        images: ["/placeholder.svg?height=100&width=100"],
      },
      quantity: 2,
    },
  ];

  // Calcular subtotal
  const subtotal = items.reduce(
    (sum, item) => sum + item.product.basePrice * item.quantity,
    0
  );
  const shippingCost = 10; // Costo de envío fijo
  const total = subtotal + shippingCost;

  const handleCheckout = () => {
    if (!user) {
      router.push("/login?redirect=/checkout");
      return;
    }

    if (user.role.name.toLowerCase() !== "cliente") {
      alert("Solo los clientes pueden realizar compras.");
      return;
    }

    router.push("/checkout");
  };

  if (items.length === 0) {
    return (
      <Card withBorder p="xl" className="text-center">
        <Text size="lg" mb="md">
          Tu carrito está vacío
        </Text>
        <Button component={Link} href="/productos" color="green">
          Explorar Productos
        </Button>
      </Card>
    );
  }

  return (
    <Grid gutter="xl">
      <Grid.Col span={{ base: 12, md: 8 }}>
        {items.map((item) => (
          <Card key={item.product._id} withBorder mb="md">
            <Group>
              <Image
                src={
                  item.product.images[0] ||
                  "/placeholder.svg?height=100&width=100"
                }
                width={100}
                height={100}
                alt={item.product.name}
              />
              <div style={{ flex: 1 }}>
                <Text fw={500}>{item.product.name}</Text>
                <Text c="dimmed">
                  Precio: ${item.product.basePrice.toFixed(2)}
                </Text>
                <NumberInput
                  value={item.quantity}
                  // onChange={(value) =>
                  //   updateQuantity(item.product._id, Number(value))
                  // }
                  min={1}
                  max={item.product.stock || 99}
                  style={{ width: 100 }}
                  disabled
                />
              </div>
              <Button
                variant="subtle"
                color="red"
                // onClick={() => removeItem(item.product._id)}
                disabled
              >
                <Trash2 size={20} />
              </Button>
            </Group>
          </Card>
        ))}

        <Button
          variant="outline"
          color="red"
          /* onClick={clearCart} */ mt="md"
          disabled
        >
          Vaciar Carrito
        </Button>
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
          <Button onClick={handleCheckout} color="green" fullWidth mt="xl">
            Proceder al Pago
          </Button>
        </Card>

        <Card withBorder mt="xl">
          <Text fw={700} size="lg" mb="md">
            Proximamente Productos Sugeridos
          </Text>
          {/* <RelatedProducts category={items[0]?.product.category || ""} /> */}
        </Card>
      </Grid.Col>
    </Grid>
  );
}
