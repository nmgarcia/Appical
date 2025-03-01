import ProductCatalog from "@/components/productos/product-catalog";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Catálogo de Productos | Appical",
  description: "Explora nuestra amplia gama de productos agrícolas.",
};

export default function ProductosPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Catálogo de Productos</h1>
      <ProductCatalog />
    </div>
  );
}
