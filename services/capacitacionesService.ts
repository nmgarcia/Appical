import type { Capacitacion } from "@/data/capacitaciones"
import { capacitacionesMock } from "@/data/capacitaciones"

// Servicio para las capacitaciones
export const capacitacionesService = {
  // Obtener todas las capacitaciones
  getCapacitaciones: async (): Promise<Capacitacion[]> => {
    // Simulamos una llamada a API con un pequeño delay
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(capacitacionesMock)
      }, 300)
    })
  },

  // Obtener una capacitación por ID
  getCapacitacionById: async (id: string): Promise<Capacitacion | null> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const capacitacion = capacitacionesMock.find((c) => c.id === id) || null
        resolve(capacitacion)
      }, 300)
    })
  },

  // Obtener capacitaciones destacadas
  getCapacitacionesDestacadas: async (): Promise<Capacitacion[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const destacadas = capacitacionesMock.filter((c) => c.destacada)
        resolve(destacadas)
      }, 300)
    })
  },

  // Obtener capacitaciones nuevas
  getCapacitacionesNuevas: async (): Promise<Capacitacion[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const nuevas = capacitacionesMock.filter((c) => c.nueva)
        resolve(nuevas)
      }, 300)
    })
  },

  // Obtener capacitaciones próximas
  getCapacitacionesProximas: async (): Promise<Capacitacion[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const proximas = capacitacionesMock.filter((c) => c.proximamente)
        resolve(proximas)
      }, 300)
    })
  },

  // Obtener top 10 capacitaciones
  getCapacitacionesTop10: async (): Promise<Capacitacion[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const top10 = capacitacionesMock
          .filter((c) => c.top10)
          .sort((a, b) => b.puntuacion - a.puntuacion)
          .slice(0, 10)
        resolve(top10)
      }, 300)
    })
  },

  // Filtrar capacitaciones por criterios
  filterCapacitaciones: async (filters: {
    searchTerm?: string
    categorias?: string[]
    niveles?: string[]
    duracionMax?: number
    precioMax?: number
    puntuacionMin?: number
    soloDisponibles?: boolean
  }): Promise<Capacitacion[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        let filtered = [...capacitacionesMock]

        // Aplicar filtro de búsqueda por término
        if (filters.searchTerm) {
          const searchLower = filters.searchTerm.toLowerCase()
          filtered = filtered.filter(
            (cap) =>
              cap.titulo.toLowerCase().includes(searchLower) ||
              cap.descripcion.toLowerCase().includes(searchLower) ||
              cap.categoria.toLowerCase().includes(searchLower) ||
              cap.instructor.toLowerCase().includes(searchLower),
          )
        }

        // Aplicar filtros de categoría
        if (filters.categorias && filters.categorias.length > 0) {
          filtered = filtered.filter((cap) => filters.categorias?.includes(cap.categoria))
        }

        // Aplicar filtros de nivel
        if (filters.niveles && filters.niveles.length > 0) {
          filtered = filtered.filter((cap) => filters.niveles?.includes(cap.nivel))
        }

        // Aplicar filtros de duración
        if (filters.duracionMax) {
          filtered = filtered.filter((cap) => {
            const duracionHoras = Number.parseInt(cap.duracion.split(" ")[0])
            return duracionHoras <= (filters.duracionMax ?? Infinity)
          })
        }

        // Aplicar filtros de precio
        if (filters.precioMax) {
          filtered = filtered.filter((cap) => cap.precio <= (filters.precioMax ?? Infinity))
        }

        // Aplicar filtros de puntuación
        if (filters.puntuacionMin) {
          filtered = filtered.filter((cap) => cap.puntuacion >= (filters.puntuacionMin ?? 0))
        }

        // Aplicar filtros de disponibilidad
        if (filters.soloDisponibles) {
          filtered = filtered.filter((cap) => !cap.proximamente)
        }

        resolve(filtered)
      }, 300)
    })
  },

  // Obtener capacitaciones por categoría
  getCapacitacionesByCategoria: async (categoria: string): Promise<Capacitacion[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const filtradas = capacitacionesMock.filter((c) => c.categoria === categoria)
        resolve(filtradas)
      }, 300)
    })
  },

  // Obtener capacitaciones por nivel
  getCapacitacionesByNivel: async (nivel: string): Promise<Capacitacion[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const filtradas = capacitacionesMock.filter((c) => c.nivel === nivel)
        resolve(filtradas)
      }, 300)
    })
  },
}
