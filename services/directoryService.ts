import type { Company } from "@/data/companies"
import { companiesMock } from "@/data/companies"

// Servicio para el directorio de empresas
export const directoryService = {
  // Obtener todas las empresas
  getCompanies: async (): Promise<Company[]> => {
    // Simulamos una llamada a API con un pequeño delay
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(companiesMock)
      }, 300)
    })
  },

  // Obtener una empresa por ID
  getCompanyById: async (id: string): Promise<Company | null> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const company = companiesMock.find((c) => c.id === id) || null
        resolve(company)
      }, 300)
    })
  },

  // Filtrar empresas por criterios
  filterCompanies: async (filters: {
    searchTerm?: string
    rubros?: string[]
    tiposProduccion?: string[]
    certificaciones?: string[]
    productos?: string[]
    provincia?: string
    soloDestacadas?: boolean
  }): Promise<Company[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        let filtered = [...companiesMock]

        // Aplicar filtro de búsqueda por término
        if (filters.searchTerm) {
          const searchLower = filters.searchTerm.toLowerCase()
          filtered = filtered.filter(
            (company) =>
              company.nombre.toLowerCase().includes(searchLower) ||
              company.descripcion.toLowerCase().includes(searchLower) ||
              company.ubicacion.toLowerCase().includes(searchLower) ||
              company.rubro.toLowerCase().includes(searchLower) ||
              company.productos.some((producto) => producto.toLowerCase().includes(searchLower)),
          )
        }

        // Aplicar filtros de categoría
        if (filters.rubros && filters.rubros.length > 0) {
          filtered = filtered.filter((company) => filters.rubros?.includes(company.rubro))
        }

        // Aplicar filtros de tipo de producción
        if (filters.tiposProduccion && filters.tiposProduccion.length > 0) {
          filtered = filtered.filter((company) => filters.tiposProduccion?.includes(company.tipoProduccion))
        }

        // Aplicar filtros de certificaciones
        if (filters.certificaciones && filters.certificaciones.length > 0) {
          filtered = filtered.filter((company) =>
            company.certificaciones.some((cert) => filters.certificaciones?.includes(cert)),
          )
        }

        // Aplicar filtros de productos
        if (filters.productos && filters.productos.length > 0) {
          filtered = filtered.filter((company) =>
            company.productos.some((producto) =>
              filters.productos?.some((filteredProduct) => producto.includes(filteredProduct)),
            ),
          )
        }

        // Aplicar filtro de provincia
        if (filters.provincia) {
          filtered = filtered.filter((company) => company.provincia === filters.provincia)
        }

        // Aplicar filtro de destacadas
        if (filters.soloDestacadas) {
          filtered = filtered.filter((company) => company.destacada)
        }

        resolve(filtered)
      }, 300)
    })
  },
}
