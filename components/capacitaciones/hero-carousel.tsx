"use client";

import { useState } from "react";
import { Carousel } from "@mantine/carousel";
import { Button, Text, Title, Badge, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { Calendar, Clock, Star } from "lucide-react";
import Link from "next/link";
import type { Capacitacion } from "@/data/capacitaciones";

interface HeroCarouselProps {
  capacitaciones: Capacitacion[];
}

export default function HeroCarousel({ capacitaciones }: HeroCarouselProps) {
  const theme = useMantineTheme();
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Carousel
      height={isMobile ? 500 : 600}
      slideSize="100%"
      slideGap="md"
      loop
      withIndicators
      withControls
      onSlideChange={setActiveIndex}
      classNames={{
        root: "w-full",
        indicators: "bottom-4",
        indicator: "w-2 h-2 mx-1 rounded-full bg-green-600 bg-opacity-50",
        control:
          "bg-white bg-opacity-30 text-green-700 border-0 hover:bg-white hover:bg-opacity-50",
      }}
      orientation="horizontal"
    >
      {capacitaciones.map((capacitacion) => (
        <Carousel.Slide key={capacitacion.id}>
          <div
            className="relative w-full h-full flex items-center"
            style={{
              backgroundImage: `url(${capacitacion.banner})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />

            <div className="relative z-10 container mx-auto px-6 flex flex-col items-start">
              <Badge color="green" size="lg" radius="sm" className="mb-4">
                {capacitacion.categoria}
              </Badge>
              <Title className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 max-w-2xl text-white">
                {capacitacion.titulo}
              </Title>
              <Text className="text-lg md:text-xl mb-6 max-w-xl text-gray-200">
                {capacitacion.descripcion}
              </Text>

              <div className="flex flex-wrap gap-4 mb-8 text-white">
                <div className="flex items-center">
                  <Clock size={18} className="mr-2" />
                  <Text>{capacitacion.duracion}</Text>
                </div>
                <div className="flex items-center">
                  <Calendar size={18} className="mr-2" />
                  <Text>
                    Inicia:{" "}
                    {new Date(capacitacion.fechaInicio).toLocaleDateString(
                      "es-ES",
                      { dateStyle: "long" }
                    )}
                  </Text>
                </div>
                <div className="flex items-center">
                  <Star size={18} className="mr-2 text-yellow-400" />
                  <Text>{capacitacion.puntuacion.toFixed(1)}</Text>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button
                  component={Link}
                  href={`/capacitaciones/${capacitacion.id}`}
                  size="lg"
                  color="green"
                  className="bg-green-600 hover:bg-green-700"
                >
                  Ver Detalles
                </Button>
                <Button
                  component="a"
                  href={capacitacion.trailer || "#"}
                  target="_blank"
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-green-700"
                >
                  Ver Trailer
                </Button>
              </div>
            </div>
          </div>
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}
