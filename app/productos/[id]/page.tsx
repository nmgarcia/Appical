import type { Metadata } from "next";
import ProductDetail from "@/components/productos/product-detail";

export const metadata: Metadata = {
  title: "Detalle del Producto | Appical",
  description: "Información detallada del producto.",
};

export default function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <div className="container mx-auto px-4 py-8">
      <ProductDetail productId={params.id} />
    </div>
  );
}
