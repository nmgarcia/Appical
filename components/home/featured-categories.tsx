"use client";

import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import { useRef } from "react";
import Link from "next/link";
import {
  GrapeIcon as Grain,
  Tractor,
  FlaskRoundIcon as Flask,
  Shovel,
  Bug,
  Droplet,
  Wheat,
  HardHat,
} from "lucide-react";
import { Card, SimpleGrid, Text } from "@mantine/core";
import styles from "./featured-categories.module.css";

const categories = [
  {
    id: 1,
    name: "Semillas",
    icon: <Grain size={40} className="text-green-600" />,
  },
  {
    id: 2,
    name: "Maquinaria",
    icon: <Tractor size={40} className="text-green-600" />,
  },
  {
    id: 3,
    name: "Fertilizantes",
    icon: <Flask size={40} className="text-green-600" />,
  },
  {
    id: 4,
    name: "Herramientas",
    icon: <Shovel size={40} className="text-green-600" />,
  },
  {
    id: 5,
    name: "Pesticidas",
    icon: <Bug size={40} className="text-green-600" />,
  },
  {
    id: 6,
    name: "Sistemas de Riego",
    icon: <Droplet size={40} className="text-green-600" />,
  },
  {
    id: 7,
    name: "Alimentos para Ganado",
    icon: <Wheat size={40} className="text-green-600" />,
  },
  {
    id: 8,
    name: "Equipos de Protección",
    icon: <HardHat size={40} className="text-green-600" />,
  },
];

export default function FeaturedCategories() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const carouselRef = useRef(null);

  const categoryCards = categories.map((category) => (
    <Card
      key={category.name}
      className={styles.categoryCard}
      padding="xl"
      radius="md"
    >
      {category.icon}
      <Text size="lg" style={{ fontWeight: 500 }} mt="md">
        {category.name}
      </Text>
    </Card>
  ));

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Categorías Destacadas
        </h2>

        {isMobile ? (
          <Carousel
            ref={carouselRef}
            slideSize={{ base: "50%", sm: "33.333333%", md: "25%", lg: "20%" }}
            slideGap="md"
            align="start"
            slidesToScroll={isMobile ? 1 : 2}
            withControls
            loop
          >
            {categories.map((category) => (
              <Carousel.Slide key={category.id}>
                <Link
                  href={`/productos?categoria=${category.id}`}
                  className="block"
                >
                  <div className="aspect-square flex flex-col items-center justify-center p-6 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all hover:border-green-300">
                    <div className="mb-4 flex items-center justify-center w-16 h-16 bg-green-50 rounded-lg">
                      {category.icon}
                    </div>
                    <h3 className="text-lg font-medium text-center">
                      {category.name}
                    </h3>
                  </div>
                </Link>
              </Carousel.Slide>
            ))}
          </Carousel>
        ) : (
          <SimpleGrid cols={{ base: 2, sm: 3, md: 4 }} spacing="xl" mt={50}>
            {categoryCards}
          </SimpleGrid>
        )}
      </div>
    </section>
  );
}
