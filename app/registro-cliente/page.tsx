import ClientRegistrationForm from "@/components/auth/client-registration-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Registro de Cliente | Appical",
  description:
    "Regístrate como cliente en Appical y comienza a comprar productos agrícolas.",
};

export default function RegistroClientePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Registro de Cliente
      </h1>
      <ClientRegistrationForm />
    </div>
  );
}
