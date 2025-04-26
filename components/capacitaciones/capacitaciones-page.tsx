"use client";

import { useState } from "react";
import { Container } from "@mantine/core";
import HeroCarousel from "./hero-carousel";
import CapacitacionesSection from "./capacitaciones-section";
import SearchBar from "./search-bar";
import { capacitacionesMock, type Capacitacion } from "@/data/capacitaciones";

export default function CapacitacionesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCapacitaciones, setFilteredCapacitaciones] =
    useState<Capacitacion[]>(capacitacionesMock);
  const [showFilters, setShowFilters] = useState(false);

  const handleSearch = (term: string, filters?: any) => {
    setSearchTerm(term);

    let filtered = capacitacionesMock;

    // Aplicar filtro de búsqueda por término
    if (term) {
      const searchLower = term.toLowerCase();
      filtered = filtered.filter(
        (cap) =>
          cap.titulo.toLowerCase().includes(searchLower) ||
          cap.descripcion.toLowerCase().includes(searchLower) ||
          cap.categoria.toLowerCase().includes(searchLower) ||
          cap.instructor.toLowerCase().includes(searchLower)
      );
    }

    // Aplicar filtros adicionales si existen
    if (filters) {
      // Filtrar por categoría
      if (filters.categorias && filters.categorias.length > 0) {
        filtered = filtered.filter((cap) =>
          filters.categorias.includes(cap.categoria)
        );
      }

      // Filtrar por nivel
      if (filters.niveles && filters.niveles.length > 0) {
        filtered = filtered.filter((cap) =>
          filters.niveles.includes(cap.nivel)
        );
      }

      // Filtrar por duración
      if (filters.duracionMax) {
        filtered = filtered.filter((cap) => {
          const duracionHoras = Number.parseInt(cap.duracion.split(" ")[0]);
          return duracionHoras <= filters.duracionMax;
        });
      }

      // Filtrar por precio
      if (filters.precioMax) {
        filtered = filtered.filter((cap) => cap.precio <= filters.precioMax);
      }

      // Filtrar por puntuación
      if (filters.puntuacionMin) {
        filtered = filtered.filter(
          (cap) => cap.puntuacion >= filters.puntuacionMin
        );
      }

      // Filtrar por disponibilidad
      if (filters.soloDisponibles) {
        filtered = filtered.filter((cap) => !cap.proximamente);
      }
    }

    setFilteredCapacitaciones(filtered);
  };

  // Obtener capacitaciones destacadas para el carrusel
  const capacitacionesDestacadas = capacitacionesMock.filter(
    (cap) => cap.destacada
  );

  // Obtener capacitaciones nuevas
  const capacitacionesNuevas = capacitacionesMock.filter((cap) => cap.nueva);

  // Obtener capacitaciones próximas
  const capacitacionesProximas = capacitacionesMock.filter(
    (cap) => cap.proximamente
  );

  // Obtener top 10
  const capacitacionesTop10 = capacitacionesMock
    .filter((cap) => cap.top10)
    .sort((a, b) => b.puntuacion - a.puntuacion)
    .slice(0, 10);

  // Obtener por categoría (ejemplo: Hidroponía)
  const capacitacionesHidroponia = capacitacionesMock.filter(
    (cap) => cap.categoria === "Hidroponía"
  );

  // Obtener por nivel (ejemplo: Principiante)
  const capacitacionesPrincipiante = capacitacionesMock.filter(
    (cap) => cap.nivel === "Principiante"
  );

  return (
    <div className="min-h-screen bg-white text-gray-800 pb-16">
      {/* Barra de búsqueda */}
      <SearchBar
        onSearch={handleSearch}
        showFilters={showFilters}
        setShowFilters={setShowFilters}
      />

      {/* Hero Carousel */}
      {!searchTerm && (
        <HeroCarousel capacitaciones={capacitacionesDestacadas} />
      )}

      <Container size="xl" className="mt-8">
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
    </div>
  );
}
