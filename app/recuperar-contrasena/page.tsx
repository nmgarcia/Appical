import type { Metadata } from "next";
import PasswordRecoveryForm from "@/components/auth/password-recovery-form";

export const metadata: Metadata = {
  title: "Recuperar Contraseña | Appical",
  description: "Recupera el acceso a tu cuenta en Appical.",
};

export default function RecuperarContrasenaPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Recuperar Contraseña
      </h1>
      <PasswordRecoveryForm />
    </div>
  );
}
