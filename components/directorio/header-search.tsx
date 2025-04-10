"use client";

import type React from "react";

import { useState } from "react";
import { Container, Title, Text, TextInput, Button } from "@mantine/core";
import { Search, Building } from "lucide-react";

interface HeaderSearchProps {
  onSearch: (term: string) => void;
  onOpenPricing: () => void;
}

export default function HeaderSearch({
  onSearch,
  onOpenPricing,
}: HeaderSearchProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <div className="bg-gradient-to-r from-green-800 to-green-600 text-white py-16">
      <Container size="xl">
        <div className="text-center mb-8">
          <Title className="text-4xl md:text-5xl font-bold mb-4">
            Conectá con Empresas del Agro
          </Title>
          <Text size="xl" className="max-w-3xl mx-auto">
            Buscá por rubro, producto, ubicación o tipo de producción
          </Text>
        </div>

        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSearch} className="relative">
            <TextInput
              placeholder="Buscar empresas, productos o servicios..."
              size="lg"
              radius="xl"
              className="mb-6"
              rightSection={
                <button
                  type="submit"
                  className="bg-green-500 hover:bg-green-600 text-white rounded-full p-2 transition-colors"
                >
                  <Search size={20} />
                </button>
              }
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.currentTarget.value)}
              styles={{
                input: {
                  "&:focus": {
                    borderColor: "#22c55e",
                  },
                },
              }}
            />
          </form>
        </div>

        <div className="flex justify-center mt-8">
          <Button
            onClick={onOpenPricing}
            size="lg"
            radius="md"
            className="bg-white text-green-700 hover:bg-gray-100"
          >
            <Building size={20} />
            Publicá tu Empresa
          </Button>
        </div>
      </Container>
    </div>
  );
}
