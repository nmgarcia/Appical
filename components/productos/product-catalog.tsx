"use client";

import { useState, useEffect } from "react";
import { Grid, Loader, Text, Container } from "@mantine/core";
import { productService } from "@/services/productService";
import type { Product } from "@/types/product";
import ProductCard from "./product-card";
import SearchBar from "./search-bar";
import Filters from "./filters";

interface ProductCatalogProps {
  vendorId?: string;
}

export default function ProductCatalog({ vendorId }: ProductCatalogProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    loadProducts();
  }, [vendorId]);

  const loadProducts = async () => {
    setLoading(true);
    setError(null);
    try {
      // Si hay un vendorId, filtramos por ese vendedor
      const filters = vendorId ? { sellerId: vendorId } : {};
      const data = await productService.getProducts(filters);
      setProducts(data);
      setFilteredProducts(data);
    } catch (err) {
      console.error("Error al cargar productos:", err);
      setError(
        "No se pudieron cargar los productos. Por favor, intenta de nuevo."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    if (!term.trim()) {
      setFilteredProducts(products);
      return;
    }

    const filtered = products.filter(
      (product) =>
        product.name.toLowerCase().includes(term.toLowerCase()) ||
        product.description?.toLowerCase().includes(term.toLowerCase()) ||
        product.category.name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const handleFilterChange = (filtered: Product[]) => {
    setFilteredProducts(filtered);
  };

  if (loading) {
    return (
      <Container className="flex justify-center items-center py-20">
        <Loader size="lg" />
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="py-10">
        <Text color="red" size="lg" ta="center">
          {error}
        </Text>
      </Container>
    );
  }

  return (
    <div>
      <div className="mb-6">
        <SearchBar onSearch={handleSearch} />
      </div>

      <Grid>
        <Grid.Col span={{ base: 12, md: 3 }}>
          <Filters onFilterChange={handleFilterChange} products={products} />
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 9 }}>
          {filteredProducts.length === 0 ? (
            <Text ta="center" size="lg" c="dimmed" className="py-10">
              No se encontraron productos que coincidan con tu búsqueda.
            </Text>
          ) : (
            <Grid>
              {filteredProducts.map((product) => (
                <Grid.Col key={product._id} span={{ base: 12, sm: 6, lg: 4 }}>
                  <ProductCard product={product} />
                </Grid.Col>
              ))}
            </Grid>
          )}
        </Grid.Col>
      </Grid>
    </div>
  );
}
