import { Grid } from "@mantine/core";
import ProductCard from "./product-card";

// Simulated related products data
const relatedProducts = [
  {
    id: "2",
    name: "Fertilizante Orgánico",
    price: 45.0,
    image: "/placeholder.svg?height=200&width=200",
    seller: "EcoAgro",
    category: "Fertilizantes",
    condition: "Nuevo",
  },
  {
    id: "3",
    name: "Kit de Herramientas de Jardín",
    price: 89.99,
    image: "/placeholder.svg?height=200&width=200",
    seller: "HerramientasAgro",
    category: "Herramientas",
    condition: "Nuevo",
  },
  {
    id: "4",
    name: "Sistema de Riego por Goteo",
    price: 199.99,
    image: "/placeholder.svg?height=200&width=200",
    seller: "RiegoTech",
    category: "Sistemas de Riego",
    condition: "Nuevo",
  },
];

interface RelatedProductsProps {
  category: string;
}

export default function RelatedProducts({ category }: RelatedProductsProps) {
  // Filter products by category if needed
  const filteredProducts = relatedProducts.filter(
    (p) => p.category === category
  );

  return (
    <Grid>
      {filteredProducts.map((product) => (
        <Grid.Col key={product._id} span={{ base: 12, sm: 6, md: 4 }}>
          <ProductCard product={product} />
        </Grid.Col>
      ))}
    </Grid>
  );
}
