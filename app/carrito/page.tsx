import type { Metadata } from "next";
import ShoppingCart from "@/components/carrito/shopping-cart";

export const metadata: Metadata = {
  title: "Carrito de Compras | Appical",
  description: "Revisa y gestiona tus productos antes de comprar.",
};

export default function CarritoPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Carrito de Compras</h1>
      <ShoppingCart />
    </div>
  );
}
