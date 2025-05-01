import type { Metadata } from "next";
import LicitacionesPage from "@/components/licitaciones/licitaciones-page";

export const metadata: Metadata = {
  title: "Licitaciones | Appical",
  description: "Sistema de licitaciones para el sector agrícola e hidropónico.",
};

export default function Licitaciones() {
  return <LicitacionesPage />;
}
