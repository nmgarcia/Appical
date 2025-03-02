import type { Metadata } from "next";
import UserProfile from "@/components/perfil/user-profile";

export const metadata: Metadata = {
  title: "Perfil de Usuario | Appical",
  description: "Gestiona tus datos y compras.",
};

export default function PerfilPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Mi Perfil</h1>
      <UserProfile />
    </div>
  );
}
