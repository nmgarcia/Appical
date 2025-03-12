import type { Metadata } from "next";
import VendorProfile from "@/components/vendedor/vendor-profile";

export const metadata: Metadata = {
  title: "Perfil de Vendedor | Appical",
  description: "Ver los datos y productos del vendedor.",
};

export async function generateStaticParams() {
  // Aquí deberías devolver un array de objetos con el id del vendedor
  // Este array podría venir de una API o una base de datos, dependiendo de tu caso
  //const vendors = await fetch("URL_DE_TU_API_O_BASE_DE_DATOS");

  // Supongamos que la respuesta tiene un array de vendedores, con la propiedad `id`
  //return vendors.map((vendor) => ({
  //id: vendor._id,
  //}));
  return [{ id: "1" }];
}

export default function VendorProfilePage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <div className="container mx-auto px-4 py-8">
      <VendorProfile vendorId={params.id} />
    </div>
  );
}
