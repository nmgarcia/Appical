import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";
import { Product } from "../../types/types";
import styles from "./ProductList.module.css";

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const currentTime = new Date();
  const orderStart = new Date();
  orderStart.setHours(9, 0, 0); // 9:00 AM
  const orderEnd = new Date();
  orderEnd.setHours(18, 0, 0); // 6:00 PM
  const canOrder = currentTime >= orderStart && currentTime <= orderEnd;

  useEffect(() => {
    const fetchProducts = async () => {
      const mockData: Product[] = [
        {
          id: 1,
          name: "Tomate",
          price: 2.5,
          stock: 100,
          supplierId: 1,
          entryDate: "2025-02-20",
        },
        {
          id: 2,
          name: "Lechuga",
          price: 1.8,
          stock: 0,
          supplierId: 2,
          entryDate: "2025-02-21",
          expiryDate: "2025-03-01",
        },
      ];
      setProducts(mockData);
    };
    fetchProducts();
  }, []);

  const handleAddToCart = (product: Product) => {
    if (!canOrder) {
      alert("Solo puedes hacer pedidos entre 9:00 AM y 6:00 PM.");
      return;
    }
    if (product.stock === 0) {
      alert("Producto sin stock.");
      return;
    }
    // Lógica para agregar al carrito (puedes usar un contexto o estado global)
    console.log(`Añadido al carrito: ${product.name}`);
  };

  return (
    <div className={styles.productGrid}>
      {products.map((product) => (
        <Card key={product.id} className={styles.productCard}>
          <CardContent>
            <Typography variant="h6">{product.name}</Typography>
            <Typography>Precio: ${product.price}</Typography>
            <Typography>Stock: {product.stock}</Typography>

            <Button
              variant="contained"
              onClick={() => handleAddToCart(product)}
              disabled={!canOrder || product.stock === 0}
            >
              Agregar al Carrito
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ProductList;
