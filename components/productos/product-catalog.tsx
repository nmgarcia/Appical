"use client"

import { useState } from "react"
import { Grid, Pagination } from "@mantine/core"
import SearchBar from "./search-bar"
import Filters from "./filters"
import ProductCard from "./product-card"
import type { Product } from "@/types/product"

// Simulated product data
const products: Product[] = [
  {
    id: "1",
    name: "Semillas de Maíz Premium",
    price: 120.0,
    image: "/placeholder.svg?height=200&width=200",
    seller: "AgroSemillas S.A.",
    category: "Semillas",
    condition: "Nuevo",
  },
  // ... add more products
]

export default function ProductCatalog() {
  const [filteredProducts, setFilteredProducts] = useState(products)
  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 12

  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct)

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <aside className="w-full md:w-1/4">
        <Filters onFilterChange={(filtered) => setFilteredProducts(filtered)} products={products} />
      </aside>
      <main className="w-full md:w-3/4">
        <SearchBar
          onSearch={(term) => {
            const filtered = products.filter(
              (p) =>
                p.name.toLowerCase().includes(term.toLowerCase()) ||
                p.seller.toLowerCase().includes(term.toLowerCase()),
            )
            setFilteredProducts(filtered)
          }}
        />
        <Grid className="mt-8">
          {currentProducts.map((product) => (
            <Grid.Col key={product.id} span={{ base: 12, sm: 6, md: 4 }}>
              <ProductCard product={product} />
            </Grid.Col>
          ))}
        </Grid>
        <Pagination
          className="mt-8 flex justify-center"
          total={Math.ceil(filteredProducts.length / productsPerPage)}
          value={currentPage}
          onChange={setCurrentPage}
        />
      </main>
    </div>
  )
}

