import type { Metadata } from "next";
import VendorRegistrationForm from "@/components/auth/vendor-registration-form";

export const metadata: Metadata = {
  title: "Registro de Vendedor | Appical",
  description:
    "Regístrate como vendedor en Appical y comienza a ofrecer tus productos.",
};

export default function RegistroVendedorPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Registro de Vendedor
      </h1>
      <VendorRegistrationForm />
    </div>
  );
}
