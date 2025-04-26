"use client";

import { useState } from "react";
import {
  TextInput,
  Button,
  Group,
  Collapse,
  MultiSelect,
  RangeSlider,
  Switch,
  Text,
  Container,
  Paper,
  Divider,
} from "@mantine/core";
import { Search, Filter, X } from "lucide-react";
import { categorias, niveles } from "@/data/capacitaciones";

interface SearchBarProps {
  onSearch: (term: string, filters?: any) => void;
  showFilters: boolean;
  setShowFilters: (show: boolean) => void;
}

export default function SearchBar({
  onSearch,
  showFilters,
  setShowFilters,
}: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategorias, setSelectedCategorias] = useState<string[]>([]);
  const [selectedNiveles, setSelectedNiveles] = useState<string[]>([]);
  const [duracionMax, setDuracionMax] = useState(40);
  const [precioMax, setPrecioMax] = useState(300);
  const [puntuacionMin, setPuntuacionMin] = useState(0);
  const [soloDisponibles, setSoloDisponibles] = useState(false);

  const handleSearch = () => {
    onSearch(searchTerm, {
      categorias: selectedCategorias,
      niveles: selectedNiveles,
      duracionMax,
      precioMax,
      puntuacionMin,
      soloDisponibles,
    });
  };

  const handleReset = () => {
    setSelectedCategorias([]);
    setSelectedNiveles([]);
    setDuracionMax(40);
    setPrecioMax(300);
    setPuntuacionMin(0);
    setSoloDisponibles(false);
    onSearch(searchTerm);
  };

  // Ajustar colores de la barra de búsqueda
  return (
    <div className="bg-gradient-to-b from-green-900 to-green-700 py-6">
      <Container size="xl">
        <Paper
          p="md"
          radius="md"
          className="bg-white border border-gray-200 shadow-sm"
        >
          <Group align="apart" mb={showFilters ? "md" : 0}>
            <TextInput
              placeholder="Buscar capacitaciones..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.currentTarget.value)}
              className="flex-grow"
              leftSection={<Search size={16} />}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              styles={{
                input: {
                  backgroundColor: "white",
                  color: "black",
                  border: "1px solid #e2e8f0",
                  "&:focus": {
                    borderColor: "#22c55e",
                  },
                },
              }}
            />
            <Group>
              <Button
                variant={showFilters ? "filled" : "outline"}
                color="green"
                onClick={() => setShowFilters(!showFilters)}
              >
                {showFilters ? "Ocultar Filtros" : "Filtros"}
              </Button>
              <Button color="green" onClick={handleSearch}>
                {showFilters ? <X size={16} /> : <Filter size={16} />}Buscar
              </Button>
            </Group>
          </Group>

          <Collapse in={showFilters}>
            <Divider my="md" color="gray.3" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <Text fw={600} size="sm" className="mb-2 text-gray-700">
                  Categorías
                </Text>
                <MultiSelect
                  data={categorias}
                  value={selectedCategorias}
                  onChange={setSelectedCategorias}
                  placeholder="Seleccionar categorías"
                  clearable
                  searchable
                  styles={{
                    input: {
                      backgroundColor: "white",
                      color: "black",
                      border: "1px solid #e2e8f0",
                    },
                    dropdown: {
                      backgroundColor: "white",
                      border: "1px solid #e2e8f0",
                    },
                    wrapper: {
                      "&[dataSelected]": {
                        backgroundColor: "#22c55e",
                      },
                      "&[dataHovered]": {
                        backgroundColor: "#f0fdf4",
                      },
                    },
                  }}
                />
              </div>

              <div>
                <Text fw={600} size="sm" className="mb-2 text-gray-700">
                  Nivel
                </Text>
                <MultiSelect
                  data={niveles}
                  value={selectedNiveles}
                  onChange={setSelectedNiveles}
                  placeholder="Seleccionar niveles"
                  clearable
                  styles={{
                    input: {
                      backgroundColor: "white",
                      color: "black",
                      border: "1px solid #e2e8f0",
                    },
                    dropdown: {
                      backgroundColor: "white",
                      border: "1px solid #e2e8f0",
                    },
                    wrapper: {
                      "&[data-selected]": {
                        backgroundColor: "#22c55e",
                      },
                      "&[data-hovered]": {
                        backgroundColor: "#f0fdf4",
                      },
                    },
                  }}
                />
              </div>

              <div>
                <Text fw={600} size="sm" className="mb-2 text-gray-700">
                  Duración máxima (horas)
                </Text>
                <RangeSlider
                  min={0}
                  max={40}
                  step={5}
                  value={[0, duracionMax]}
                  onChange={([_, value]) => setDuracionMax(value)}
                  label={(value) => `${value}h`}
                  color="green"
                  styles={{
                    track: {
                      backgroundColor: "#e2e8f0",
                    },
                    thumb: {
                      borderColor: "#22c55e",
                    },
                  }}
                />
              </div>

              <div>
                <Text fw={600} size="sm" className="mb-2 text-gray-700">
                  Precio máximo ($)
                </Text>
                <RangeSlider
                  min={0}
                  max={300}
                  step={50}
                  value={[0, precioMax]}
                  onChange={([_, value]) => setPrecioMax(value)}
                  label={(value) => `${value}`}
                  color="green"
                  styles={{
                    track: {
                      backgroundColor: "#e2e8f0",
                    },
                    thumb: {
                      borderColor: "#22c55e",
                    },
                  }}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <Text fw={600} size="sm" className="mb-2 text-gray-700">
                  Puntuación mínima
                </Text>
                <RangeSlider
                  min={0}
                  max={5}
                  step={0.5}
                  value={[puntuacionMin, 5]}
                  onChange={([value, _]) => setPuntuacionMin(value)}
                  label={(value) => `${value} ★`}
                  color="green"
                  styles={{
                    track: {
                      backgroundColor: "#e2e8f0",
                    },
                    thumb: {
                      borderColor: "#22c55e",
                    },
                  }}
                />
              </div>

              <div className="flex items-center">
                <Switch
                  label="Solo mostrar disponibles"
                  checked={soloDisponibles}
                  onChange={(e) => setSoloDisponibles(e.currentTarget.checked)}
                  color="green"
                  className="mt-6"
                  styles={{
                    label: {
                      color: "#374151",
                    },
                  }}
                />
              </div>
            </div>

            <Group align="right" mt="md">
              <Button variant="outline" color="gray" onClick={handleReset}>
                Restablecer
              </Button>
              <Button color="green" onClick={handleSearch}>
                Aplicar Filtros
              </Button>
            </Group>
          </Collapse>
        </Paper>
      </Container>
    </div>
  );
}
