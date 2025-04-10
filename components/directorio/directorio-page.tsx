"use client";

import { useState } from "react";
import { Container, Button } from "@mantine/core";
import HeaderSearch from "./header-search";
import Filters from "./filters";
import CompanyGrid from "./company-grid";
import PricingModal from "./pricing-modal";
import CompanyProfileModal from "./company-profile-modal";
import { companiesMock, Company } from "@/data/companies";

export default function DirectorioPage() {
  const [companies, setCompanies] = useState<Company[]>(companiesMock);
  const [filteredCompanies, setFilteredCompanies] =
    useState<Company[]>(companiesMock);
  const [searchTerm, setSearchTerm] = useState("");
  const [isPricingModalOpen, setIsPricingModalOpen] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  // Función para manejar la búsqueda
  const handleSearch = (term: string) => {
    setSearchTerm(term);
    applyFilters({}, term);
  };

  // Función para aplicar filtros
  const applyFilters = (filters: any, term = searchTerm) => {
    let filtered = [...companies];

    // Aplicar filtro de búsqueda
    if (term) {
      const searchLower = term.toLowerCase();
      filtered = filtered.filter(
        (company) =>
          company.nombre.toLowerCase().includes(searchLower) ||
          company.descripcion.toLowerCase().includes(searchLower) ||
          company.ubicacion.toLowerCase().includes(searchLower) ||
          company.rubro.toLowerCase().includes(searchLower) ||
          company.productos.some((producto) =>
            producto.toLowerCase().includes(searchLower)
          )
      );
    }

    // Aplicar filtros de categoría
    if (filters.rubros && filters.rubros.length > 0) {
      filtered = filtered.filter((company) =>
        filters.rubros.includes(company.rubro)
      );
    }

    // Aplicar filtros de tipo de producción
    if (filters.tiposProduccion && filters.tiposProduccion.length > 0) {
      filtered = filtered.filter((company) =>
        filters.tiposProduccion.includes(company.tipoProduccion)
      );
    }

    // Aplicar filtros de certificaciones
    if (filters.certificaciones && filters.certificaciones.length > 0) {
      filtered = filtered.filter((company) =>
        company.certificaciones.some((cert) =>
          filters.certificaciones.includes(cert)
        )
      );
    }

    // Aplicar filtros de productos
    if (filters.productos && filters.productos.length > 0) {
      filtered = filtered.filter((company) =>
        company.productos.some((producto) =>
          filters.productos.some((filteredProduct: string) =>
            producto.includes(filteredProduct)
          )
        )
      );
    }

    // Aplicar filtro de provincia
    if (filters.provincia) {
      filtered = filtered.filter(
        (company) => company.provincia === filters.provincia
      );
    }

    // Aplicar filtro de destacadas
    if (filters.soloDestacadas) {
      filtered = filtered.filter((company) => company.destacada);
    }

    setFilteredCompanies(filtered);
  };

  // Función para abrir el modal de perfil de empresa
  const handleOpenProfile = (company: Company) => {
    setSelectedCompany(company);
    setIsProfileModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <HeaderSearch
        onSearch={handleSearch}
        onOpenPricing={() => setIsPricingModalOpen(true)}
      />

      <Container size="xl" className="py-8">
        <div className="lg:flex gap-6">
          {/* Filtros */}
          <div className="lg:w-1/4 mb-6 lg:mb-0">
            <Filters onApplyFilters={applyFilters} />
          </div>

          {/* Grid de empresas */}
          <div className="lg:w-3/4">
            <CompanyGrid
              companies={filteredCompanies}
              onViewProfile={handleOpenProfile}
              searchTerm={searchTerm}
            />
          </div>
        </div>
      </Container>

      {/* Modal de precios */}
      <PricingModal
        opened={isPricingModalOpen}
        onClose={() => setIsPricingModalOpen(false)}
      />

      {/* Modal de perfil de empresa */}
      {selectedCompany && (
        <CompanyProfileModal
          company={selectedCompany}
          opened={isProfileModalOpen}
          onClose={() => setIsProfileModalOpen(false)}
        />
      )}

      {/* Botón flotante para publicar empresa (visible en mobile) */}
      <div className="fixed bottom-6 right-6 lg:hidden">
        <Button
          color="green"
          size="lg"
          radius="xl"
          className="shadow-lg"
          onClick={() => setIsPricingModalOpen(true)}
        >
          Publicá tu Empresa
        </Button>
      </div>
    </div>
  );
}
