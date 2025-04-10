"use client";

import { useState, useEffect } from "react";
import {
  Card,
  Title,
  Checkbox,
  Select,
  Button,
  Divider,
  MultiSelect,
  Switch,
  Accordion,
} from "@mantine/core";
import { Filter, RefreshCw } from "lucide-react";
import {
  rubros,
  tiposProduccion,
  certificaciones,
  tiposProducto,
  provincias,
} from "@/data/companies";

interface FiltersProps {
  onApplyFilters: (filters: any) => void;
}

export default function Filters({ onApplyFilters }: FiltersProps) {
  const [selectedRubros, setSelectedRubros] = useState<string[]>([]);
  const [selectedTiposProduccion, setSelectedTiposProduccion] = useState<
    string[]
  >([]);
  const [selectedCertificaciones, setSelectedCertificaciones] = useState<
    string[]
  >([]);
  const [selectedProductos, setSelectedProductos] = useState<string[]>([]);
  const [selectedProvincia, setSelectedProvincia] = useState<string | null>(
    null
  );
  const [soloDestacadas, setSoloDestacadas] = useState(false);
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  // Aplicar filtros cuando cambien los valores
  useEffect(() => {
    applyFilters();
  }, [
    selectedRubros,
    selectedTiposProduccion,
    selectedCertificaciones,
    selectedProductos,
    selectedProvincia,
    soloDestacadas,
  ]);

  const applyFilters = () => {
    onApplyFilters({
      rubros: selectedRubros,
      tiposProduccion: selectedTiposProduccion,
      certificaciones: selectedCertificaciones,
      productos: selectedProductos,
      provincia: selectedProvincia,
      soloDestacadas,
    });
  };

  const resetFilters = () => {
    setSelectedRubros([]);
    setSelectedTiposProduccion([]);
    setSelectedCertificaciones([]);
    setSelectedProductos([]);
    setSelectedProvincia(null);
    setSoloDestacadas(false);
  };

  return (
    <>
      {/* Botón de filtros para mobile */}
      <div className="lg:hidden mb-4">
        <Button
          fullWidth
          onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
          variant={isMobileFiltersOpen ? "filled" : "outline"}
          color="green"
        >
          <Filter size={18} />
          {isMobileFiltersOpen ? "Ocultar Filtros" : "Mostrar Filtros"}
        </Button>
      </div>

      <Card
        withBorder
        shadow="sm"
        radius="md"
        className={`sticky top-4 transition-all duration-300 ${
          isMobileFiltersOpen
            ? "max-h-[2000px] opacity-100"
            : "max-h-0 opacity-0 overflow-hidden lg:max-h-[2000px] lg:opacity-100"
        }`}
      >
        <div className="flex justify-between items-center mb-4">
          <Title order={4}>Filtros</Title>
          <Button variant="subtle" color="gray" onClick={resetFilters}>
            <RefreshCw size={16} />
            Limpiar
          </Button>
        </div>

        <Divider className="mb-4" />

        {/* Filtros para pantallas grandes */}
        <div className="hidden lg:block">
          <div className="mb-6">
            <Title order={5} className="mb-2">
              Rubro / Categoría
            </Title>
            {rubros.map((rubro) => (
              <Checkbox
                key={rubro}
                label={rubro}
                checked={selectedRubros.includes(rubro)}
                onChange={(e) => {
                  if (e.currentTarget.checked) {
                    setSelectedRubros([...selectedRubros, rubro]);
                  } else {
                    setSelectedRubros(
                      selectedRubros.filter((r) => r !== rubro)
                    );
                  }
                }}
                className="mb-2"
              />
            ))}
          </div>

          <Divider className="mb-4" />

          <div className="mb-6">
            <Title order={5} className="mb-2">
              Tipo de Producto
            </Title>
            <MultiSelect
              data={tiposProducto}
              value={selectedProductos}
              onChange={setSelectedProductos}
              placeholder="Seleccionar productos"
              searchable
              clearable
              className="mb-2"
            />
          </div>

          <Divider className="mb-4" />

          <div className="mb-6">
            <Title order={5} className="mb-2">
              Ubicación
            </Title>
            <Select
              data={provincias}
              value={selectedProvincia}
              onChange={setSelectedProvincia}
              placeholder="Seleccionar provincia"
              searchable
              clearable
              className="mb-2"
            />
          </div>

          <Divider className="mb-4" />

          <div className="mb-6">
            <Title order={5} className="mb-2">
              Tipo de Producción
            </Title>
            {tiposProduccion.map((tipo) => (
              <Checkbox
                key={tipo}
                label={tipo}
                checked={selectedTiposProduccion.includes(tipo)}
                onChange={(e) => {
                  if (e.currentTarget.checked) {
                    setSelectedTiposProduccion([
                      ...selectedTiposProduccion,
                      tipo,
                    ]);
                  } else {
                    setSelectedTiposProduccion(
                      selectedTiposProduccion.filter((t) => t !== tipo)
                    );
                  }
                }}
                className="mb-2"
              />
            ))}
          </div>

          <Divider className="mb-4" />

          <div className="mb-6">
            <Title order={5} className="mb-2">
              Certificaciones
            </Title>
            {certificaciones.map((cert) => (
              <Checkbox
                key={cert}
                label={cert}
                checked={selectedCertificaciones.includes(cert)}
                onChange={(e) => {
                  if (e.currentTarget.checked) {
                    setSelectedCertificaciones([
                      ...selectedCertificaciones,
                      cert,
                    ]);
                  } else {
                    setSelectedCertificaciones(
                      selectedCertificaciones.filter((c) => c !== cert)
                    );
                  }
                }}
                className="mb-2"
              />
            ))}
          </div>

          <Divider className="mb-4" />

          <div className="mb-2">
            <Switch
              label="Mostrar solo empresas destacadas"
              checked={soloDestacadas}
              onChange={(e) => setSoloDestacadas(e.currentTarget.checked)}
            />
          </div>
        </div>

        {/* Filtros para mobile (usando Accordion) */}
        <div className="lg:hidden">
          <Accordion>
            <Accordion.Item value="rubro">
              <Accordion.Control>Rubro / Categoría</Accordion.Control>
              <Accordion.Panel>
                {rubros.map((rubro) => (
                  <Checkbox
                    key={rubro}
                    label={rubro}
                    checked={selectedRubros.includes(rubro)}
                    onChange={(e) => {
                      if (e.currentTarget.checked) {
                        setSelectedRubros([...selectedRubros, rubro]);
                      } else {
                        setSelectedRubros(
                          selectedRubros.filter((r) => r !== rubro)
                        );
                      }
                    }}
                    className="mb-2"
                  />
                ))}
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="productos">
              <Accordion.Control>Tipo de Producto</Accordion.Control>
              <Accordion.Panel>
                <MultiSelect
                  data={tiposProducto}
                  value={selectedProductos}
                  onChange={setSelectedProductos}
                  placeholder="Seleccionar productos"
                  searchable
                  clearable
                  className="mb-2"
                />
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="ubicacion">
              <Accordion.Control>Ubicación</Accordion.Control>
              <Accordion.Panel>
                <Select
                  data={provincias}
                  value={selectedProvincia}
                  onChange={setSelectedProvincia}
                  placeholder="Seleccionar provincia"
                  searchable
                  clearable
                  className="mb-2"
                />
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="produccion">
              <Accordion.Control>Tipo de Producción</Accordion.Control>
              <Accordion.Panel>
                {tiposProduccion.map((tipo) => (
                  <Checkbox
                    key={tipo}
                    label={tipo}
                    checked={selectedTiposProduccion.includes(tipo)}
                    onChange={(e) => {
                      if (e.currentTarget.checked) {
                        setSelectedTiposProduccion([
                          ...selectedTiposProduccion,
                          tipo,
                        ]);
                      } else {
                        setSelectedTiposProduccion(
                          selectedTiposProduccion.filter((t) => t !== tipo)
                        );
                      }
                    }}
                    className="mb-2"
                  />
                ))}
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="certificaciones">
              <Accordion.Control>Certificaciones</Accordion.Control>
              <Accordion.Panel>
                {certificaciones.map((cert) => (
                  <Checkbox
                    key={cert}
                    label={cert}
                    checked={selectedCertificaciones.includes(cert)}
                    onChange={(e) => {
                      if (e.currentTarget.checked) {
                        setSelectedCertificaciones([
                          ...selectedCertificaciones,
                          cert,
                        ]);
                      } else {
                        setSelectedCertificaciones(
                          selectedCertificaciones.filter((c) => c !== cert)
                        );
                      }
                    }}
                    className="mb-2"
                  />
                ))}
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>

          <Divider className="my-4" />

          <div className="mb-2">
            <Switch
              label="Mostrar solo empresas destacadas"
              checked={soloDestacadas}
              onChange={(e) => setSoloDestacadas(e.currentTarget.checked)}
            />
          </div>
        </div>
      </Card>
    </>
  );
}
