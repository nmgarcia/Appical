import type { Metadata } from "next";
import VendorDashboard from "@/components/panel-vendedor/vendor-dashboard";

export const metadata: Metadata = {
  title: "Panel de Vendedor | Appical",
  description: "Administra tus productos, capacitaciones y pedidos.",
};

export default function PanelVendedorPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Panel de Vendedor</h1>
      <VendorDashboard />
    </div>
  );
}
