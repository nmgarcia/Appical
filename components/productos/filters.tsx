import { useState } from "react";
import { Checkbox, RangeSlider, Button, Stack, Text } from "@mantine/core";
import type { Product } from "@/types/product";

interface FiltersProps {
  onFilterChange: (filteredProducts: Product[]) => void;
  products: Product[];
}

export default function Filters({ onFilterChange, products }: FiltersProps) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [selectedConditions, setSelectedConditions] = useState<string[]>([]);

  const categories = Array.from(new Set(products.map((p) => p.category)));
  const conditions = Array.from(new Set(products.map((p) => p.condition)));

  const applyFilters = () => {
    const filtered = products.filter(
      (product) =>
        (selectedCategories.length === 0 ||
          selectedCategories.includes(product.category)) &&
        product.basePrice >= priceRange[0] &&
        product.basePrice <= priceRange[1] &&
        (selectedConditions.length === 0 ||
          selectedConditions.includes(product.condition))
    );
    onFilterChange(filtered);
  };

  const resetFilters = () => {
    setSelectedCategories([]);
    setPriceRange([0, 1000]);
    setSelectedConditions([]);
    onFilterChange(products);
  };

  return (
    <Stack gap="md">
      <Text fw={700}>Categorías</Text>
      {categories.map((category) => (
        <Checkbox
          key={category}
          label={category}
          checked={selectedCategories.includes(category)}
          onChange={(e) => {
            if (e.currentTarget.checked) {
              setSelectedCategories([...selectedCategories, category]);
            } else {
              setSelectedCategories(
                selectedCategories.filter((c) => c !== category)
              );
            }
          }}
        />
      ))}

      <Text fw={700} mt="md">
        Rango de Precio
      </Text>
      <RangeSlider
        min={0}
        max={1000}
        value={priceRange}
        onChange={setPriceRange}
        label={(value) => `$${value}`}
      />

      <Text fw={700} mt="md">
        Condición
      </Text>
      {conditions.map((condition) => (
        <Checkbox
          key={condition}
          label={condition}
          checked={selectedConditions.includes(condition)}
          onChange={(e) => {
            if (e.currentTarget.checked) {
              setSelectedConditions([...selectedConditions, condition]);
            } else {
              setSelectedConditions(
                selectedConditions.filter((c) => c !== condition)
              );
            }
          }}
        />
      ))}

      <Button onClick={applyFilters} color="green" fullWidth>
        Aplicar Filtros
      </Button>
      <Button onClick={resetFilters} variant="outline" color="gray" fullWidth>
        Resetear Filtros
      </Button>
    </Stack>
  );
}
