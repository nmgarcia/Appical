"use client";

import { useState, useEffect } from "react";
import { Container, Button } from "@mantine/core";
import HeaderSearch from "./header-search";
import Filters from "./filters";
import CompanyGrid from "./company-grid";
import PricingModal from "./pricing-modal";
import type { Company } from "@/data/companies";
import CompanyProfileModal from "./company-profile-modal";
import InterestFormModal from "@/components/shared/interest-form-modal";
import { directoryService } from "@/services/directoryService";

export default function DirectorioPage() {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [filteredCompanies, setFilteredCompanies] = useState<Company[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isPricingModalOpen, setIsPricingModalOpen] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  // Cargar datos al iniciar
  useEffect(() => {
    const loadCompanies = async () => {
      setLoading(true);
      try {
        const data = await directoryService.getCompanies();
        setCompanies(data);
        setFilteredCompanies(data);
      } catch (error) {
        console.error("Error al cargar empresas:", error);
      } finally {
        setLoading(false);
      }
    };

    loadCompanies();
  }, []);

  // Función para manejar la búsqueda
  const handleSearch = async (term: string) => {
    setSearchTerm(term);
    try {
      const filtered = await directoryService.filterCompanies({
        searchTerm: term,
      });
      setFilteredCompanies(filtered);
    } catch (error) {
      console.error("Error al filtrar empresas:", error);
    }
  };

  // Función para aplicar filtros
  const applyFilters = async (filters: any) => {
    try {
      const filtered = await directoryService.filterCompanies({
        searchTerm,
        ...filters,
      });
      setFilteredCompanies(filtered);
    } catch (error) {
      console.error("Error al aplicar filtros:", error);
    }
  };

  // Función para abrir el modal de perfil de empresa
  const handleOpenProfile = async (companyId: string) => {
    try {
      const company = await directoryService.getCompanyById(companyId);
      if (company) {
        setSelectedCompany(company);
        setIsProfileModalOpen(true);
      }
    } catch (error) {
      console.error("Error al obtener detalles de la empresa:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <HeaderSearch
        onSearch={handleSearch}
        onOpenPricing={() => setIsPricingModalOpen(true)}
      />

      <Container size="xl" className="py-8">
        {/* Botón para abrir el formulario de interés */}
        <div className="flex justify-end mb-6">
          <Button
            color="green"
            onClick={() => setIsFormModalOpen(true)}
            className="bg-green-600 hover:bg-green-700"
          >
            ¿Te interesa formar parte del directorio?
          </Button>
        </div>

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
              loading={loading}
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

      {/* Modal de formulario de interés */}
      <InterestFormModal
        opened={isFormModalOpen}
        onClose={() => setIsFormModalOpen(false)}
        title="¿Te interesa formar parte del directorio?"
        origen="directorio"
      />

      {/* Botón flotante para publicar empresa (visible en mobile) */}
      {/* <div className="fixed bottom-6 right-6 lg:hidden">
        <Button
          color="green"
          size="lg"
          radius="xl"
          className="shadow-lg"
          onClick={() => setIsPricingModalOpen(true)}
        >
          Publicá tu Empresa
        </Button>
      </div> */}
    </div>
  );
}
