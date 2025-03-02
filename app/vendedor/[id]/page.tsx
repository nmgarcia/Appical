import type { Metadata } from "next";
import VendorProfile from "@/components/vendedor/vendor-profile";

export const metadata: Metadata = {
  title: "Perfil de Vendedor | Appical",
  description: "Ver los datos y productos del vendedor.",
};

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
