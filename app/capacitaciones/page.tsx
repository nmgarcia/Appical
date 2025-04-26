import type { Metadata } from "next"
import CapacitacionesPage from "@/components/capacitaciones/capacitaciones-page"

export const metadata: Metadata = {
  title: "Capacitaciones | Appical",
  description: "Explora nuestras capacitaciones para el sector agrícola e hidropónico.",
}

export default function Capacitaciones() {
  return <CapacitacionesPage />
}
