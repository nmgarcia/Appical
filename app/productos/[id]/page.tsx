import type { Metadata } from "next";
import ProductDetail from "@/components/productos/product-detail";

export const metadata: Metadata = {
  title: "Detalle del Producto | Appical",
  description: "Información detallada del producto.",
};

export async function generateStaticParams() {
  // Aquí deberías devolver un array de objetos con el id del vendedor
  // Este array podría venir de una API o una base de datos, dependiendo de tu caso
  //const vendors = await fetch("URL_DE_TU_API_O_BASE_DE_DATOS");

  // Supongamos que la respuesta tiene un array de vendedores, con la propiedad `id`
  //return vendors.map((vendor) => ({
  //id: vendor.id,
  //}));
  return [{ id: "1" }];
}
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
