"use client";

import { useState, useEffect } from "react";
import { Container, Button } from "@mantine/core";
import HeroCarousel from "./hero-carousel";
import CapacitacionesSection from "./capacitaciones-section";
import SearchBar from "./search-bar";
import InterestFormModal from "@/components/shared/interest-form-modal";
import { capacitacionesService } from "@/services/capacitacionesService";
import type { Capacitacion } from "@/data/capacitaciones";

export default function CapacitacionesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCapacitaciones, setFilteredCapacitaciones] = useState<
    Capacitacion[]
  >([]);
  const [showFilters, setShowFilters] = useState(false);
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);

  // Estados para almacenar las capacitaciones
  const [capacitacionesDestacadas, setCapacitacionesDestacadas] = useState<
    Capacitacion[]
  >([]);
  const [capacitacionesNuevas, setCapacitacionesNuevas] = useState<
    Capacitacion[]
  >([]);
  const [capacitacionesProximas, setCapacitacionesProximas] = useState<
    Capacitacion[]
  >([]);
  const [capacitacionesTop10, setCapacitacionesTop10] = useState<
    Capacitacion[]
  >([]);
  const [capacitacionesHidroponia, setCapacitacionesHidroponia] = useState<
    Capacitacion[]
  >([]);
  const [capacitacionesPrincipiante, setCapacitacionesPrincipiante] = useState<
    Capacitacion[]
  >([]);
  const [loading, setLoading] = useState(true);

  // Cargar datos al iniciar
  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        // Cargar todas las categorías de capacitaciones
        const destacadas =
          await capacitacionesService.getCapacitacionesDestacadas();
        const nuevas = await capacitacionesService.getCapacitacionesNuevas();
        const proximas =
          await capacitacionesService.getCapacitacionesProximas();
        const top10 = await capacitacionesService.getCapacitacionesTop10();
        const hidroponia =
          await capacitacionesService.getCapacitacionesByCategoria(
            "Hidroponía"
          );
        const principiante =
          await capacitacionesService.getCapacitacionesByNivel("Principiante");

        setCapacitacionesDestacadas(destacadas);
        setCapacitacionesNuevas(nuevas);
        setCapacitacionesProximas(proximas);
        setCapacitacionesTop10(top10);
        setCapacitacionesHidroponia(hidroponia);
        setCapacitacionesPrincipiante(principiante);
        setFilteredCapacitaciones([]); // Inicializar vacío
      } catch (error) {
        console.error("Error al cargar capacitaciones:", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const handleSearch = async (term: string, filters?: any) => {
    setSearchTerm(term);

    try {
      const filtered = await capacitacionesService.filterCapacitaciones({
        searchTerm: term,
        ...filters,
      });
      setFilteredCapacitaciones(filtered);
    } catch (error) {
      console.error("Error al filtrar capacitaciones:", error);
    }
  };

  return (
    <div className="min-h-screen bg-green-100 text-gray-800 pb-16">
      {/* Barra de búsqueda */}
      <SearchBar
        onSearch={handleSearch}
        showFilters={showFilters}
        setShowFilters={setShowFilters}
      />

      {/* Hero Carousel */}
      {/* {!searchTerm && !loading && (
        <HeroCarousel capacitaciones={capacitacionesDestacadas} />
      )} */}

      <Container size="xl" className="mt-8">
        {/* Botón para abrir el formulario de interés */}
        <div className="flex justify-end mb-6">
          <Button
            color="green"
            onClick={() => setIsFormModalOpen(true)}
            className="bg-green-600 hover:bg-green-700"
          >
            ¿Te interesan nuestras capacitaciones?
          </Button>
        </div>

        {searchTerm ? (
          // Mostrar resultados de búsqueda
          <CapacitacionesSection
            title={`Resultados para "${searchTerm}"`}
            capacitaciones={filteredCapacitaciones}
            emptyMessage="No se encontraron capacitaciones que coincidan con tu búsqueda"
          />
        ) : (
          // Mostrar secciones normales
          <>
            <CapacitacionesSection
              title="Nuevas Capacitaciones"
              capacitaciones={capacitacionesNuevas}
            />
            <CapacitacionesSection
              title="Próximamente"
              capacitaciones={capacitacionesProximas}
            />
            <CapacitacionesSection
              title="Top 10 Capacitaciones"
              capacitaciones={capacitacionesTop10}
            />
            <CapacitacionesSection
              title="Hidroponía"
              capacitaciones={capacitacionesHidroponia}
            />
            <CapacitacionesSection
              title="Para Principiantes"
              capacitaciones={capacitacionesPrincipiante}
            />
          </>
        )}
      </Container>

      {/* Modal de formulario de interés */}
      <InterestFormModal
        opened={isFormModalOpen}
        onClose={() => setIsFormModalOpen(false)}
        title="¿Te interesan nuestras capacitaciones?"
        origen="capacitaciones"
        showCapacitacionesSelect={true}
      />
    </div>
  );
}
