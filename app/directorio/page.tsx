import type { Metadata } from "next"
import DirectorioPage from "@/components/directorio/directorio-page"

export const metadata: Metadata = {
  title: "Directorio de Empresas | Appical",
  description: "Conectá con empresas del sector agrícola e hidropónico en Argentina.",
}

export default function Directorio() {
  return <DirectorioPage />
}
