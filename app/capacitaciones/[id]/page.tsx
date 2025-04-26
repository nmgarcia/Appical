import type { Metadata } from "next"
import { capacitacionesMock } from "@/data/capacitaciones"
import CapacitacionDetail from "@/components/capacitaciones/capacitacion-detail"

type Props = {
  params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const capacitacion = capacitacionesMock.find((c) => c.id === params.id)

  if (!capacitacion) {
    return {
      title: "Capacitación no encontrada | Appical",
      description: "La capacitación que buscas no existe o ha sido eliminada.",
    }
  }

  return {
    title: `${capacitacion.titulo} | Appical`,
    description: capacitacion.descripcion,
  }
}

export default function CapacitacionPage({ params }: Props) {
  return <CapacitacionDetail id={params.id} />
}
