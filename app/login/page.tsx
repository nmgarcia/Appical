import type { Metadata } from "next";
import LoginForm from "@/components/auth/login-form";

export const metadata: Metadata = {
  title: "Iniciar Sesión | Appical",
  description: "Accede a tu cuenta en Appical.",
};

export default function LoginPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Iniciar Sesión</h1>
      <LoginForm />
    </div>
  );
}
