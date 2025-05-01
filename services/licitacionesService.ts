import type { Licitacion } from "@/data/licitaciones"
import { licitacionesMock } from "@/data/licitaciones"

// Servicio para las licitaciones
export const licitacionesService = {
  // Obtener todas las licitaciones
  getLicitaciones: async (): Promise<Licitacion[]> => {
    // Simulamos una llamada a API con un pequeño delay
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(licitacionesMock)
      }, 300)
    })
  },

  // Obtener una licitación por ID
  getLicitacionById: async (id: string): Promise<Licitacion | null> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const licitacion = licitacionesMock.find((l) => l.id === id) || null
        resolve(licitacion)
      }, 300)
    })
  },

  // Obtener licitaciones por estado
  getLicitacionesByEstado: async (estado: "abierta" | "cerrada" | "adjudicada"): Promise<Licitacion[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const filtradas = licitacionesMock.filter((l) => l.estado === estado)
        resolve(filtradas)
      }, 300)
    })
  },

  // Obtener licitaciones por categoría
  getLicitacionesByCategoria: async (categoria: string): Promise<Licitacion[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const filtradas = licitacionesMock.filter((l) => l.categoria === categoria)
        resolve(filtradas)
      }, 300)
    })
  },

  // Filtrar licitaciones por criterios
  filterLicitaciones: async (filters: {
    searchTerm?: string
    categorias?: string[]
    estados?: ("abierta" | "cerrada" | "adjudicada")[]
    ubicacion?: string
  }): Promise<Licitacion[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        let filtered = [...licitacionesMock]

        // Aplicar filtro de búsqueda por término
        if (filters.searchTerm) {
          const searchLower = filters.searchTerm.toLowerCase()
          filtered = filtered.filter(
            (lic) =>
              lic.titulo.toLowerCase().includes(searchLower) ||
              lic.descripcion.toLowerCase().includes(searchLower) ||
              lic.categoria.toLowerCase().includes(searchLower) ||
              lic.productorNombre.toLowerCase().includes(searchLower) ||
              lic.ubicacion.toLowerCase().includes(searchLower),
          )
        }

        // Aplicar filtros de categoría
        if (filters.categorias && filters.categorias.length > 0) {
          filtered = filtered.filter((lic) => filters.categorias?.includes(lic.categoria))
        }

        // Aplicar filtros de estado
        if (filters.estados && filters.estados.length > 0) {
          filtered = filtered.filter((lic) => filters.estados?.includes(lic.estado))
        }

        // Aplicar filtro de ubicación
        if (filters.ubicacion) {
          filtered = filtered.filter((lic) => lic.ubicacion.includes(filters.ubicacion || ""))
        }

        resolve(filtered)
      }, 300)
    })
  },
}
