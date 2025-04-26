"use client";

import { useState } from "react";
import { Title, Text, ScrollArea } from "@mantine/core";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CapacitacionCard from "./capacitacion-card";
import type { Capacitacion } from "@/data/capacitaciones";

interface CapacitacionesSectionProps {
  title: string;
  capacitaciones: Capacitacion[];
  emptyMessage?: string;
}

// Ajustar colores para fondo blanco
export default function CapacitacionesSection({
  title,
  capacitaciones,
  emptyMessage = "No hay capacitaciones disponibles en esta categoría",
}: CapacitacionesSectionProps) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);
  const scrollAmount = 300;

  const handleScroll = (direction: "left" | "right") => {
    const scrollAreaElement = document.getElementById(
      `scroll-area-${title.replace(/\s+/g, "-").toLowerCase()}`
    );
    if (scrollAreaElement) {
      const newPosition =
        direction === "left"
          ? scrollPosition - scrollAmount
          : scrollPosition + scrollAmount;
      scrollAreaElement.scrollTo({
        left: newPosition,
        behavior: "smooth",
      });
      setScrollPosition(newPosition);
    }
  };

  const handleScrollPositionChange = ({ x }: { x: number }) => {
    setScrollPosition(x);
  };

  if (capacitaciones.length === 0) {
    return (
      <div className="mb-12">
        <Title order={2} className="text-2xl font-bold mb-6 text-gray-800">
          {title}
        </Title>
        <Text c="dimmed" ta="center" className="py-8">
          {emptyMessage}
        </Text>
      </div>
    );
  }

  return (
    <div className="mb-12 relative group">
      <Title order={2} className="text-2xl font-bold mb-6 text-gray-800">
        {title}
      </Title>

      {/* Botones de navegación */}
      <button
        className="absolute left-0 top-1/2 z-10 bg-white bg-opacity-70 p-2 rounded-full text-green-700 opacity-0 group-hover:opacity-100 transition-opacity -translate-y-1/2 -ml-4 disabled:opacity-0 shadow-md"
        onClick={() => handleScroll("left")}
        disabled={scrollPosition <= 0}
      >
        <ChevronLeft size={24} />
      </button>

      <button
        className="absolute right-0 top-1/2 z-10 bg-white bg-opacity-70 p-2 rounded-full text-green-700 opacity-0 group-hover:opacity-100 transition-opacity -translate-y-1/2 -mr-4 disabled:opacity-0 shadow-md"
        onClick={() => handleScroll("right")}
        disabled={scrollPosition >= maxScroll}
      >
        <ChevronRight size={24} />
      </button>

      <ScrollArea
        id={`scroll-area-${title.replace(/\s+/g, "-").toLowerCase()}`}
        type="never"
        onScrollPositionChange={handleScrollPositionChange}
        viewportRef={(viewport) => {
          if (viewport) {
            setMaxScroll(viewport.scrollWidth - viewport.clientWidth);
          }
        }}
      >
        <div className="flex gap-4 pb-4">
          {capacitaciones.map((capacitacion) => (
            <div key={capacitacion.id} className="min-w-[280px]">
              <CapacitacionCard capacitacion={capacitacion} />
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
