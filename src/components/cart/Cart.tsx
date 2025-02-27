import React, { useState } from "react";
import {
  Button,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Product } from "../../types/types";
import styles from "./Cart.module.css";

const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState<Product[]>([
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
      stock: 50,
      supplierId: 2,
      entryDate: "2025-02-21",
      expiryDate: "2025-03-01",
    },
  ]);

  const handleConfirmOrder = () => {
    // Aquí iría la lógica para enviar el pedido a la API
    alert("Pedido confirmado!");
    setCartItems([]);
  };

  return (
    <div className={styles.container}>
      <Typography variant="h5">Carrito de Compras</Typography>
      {cartItems.length === 0 ? (
        <Typography>El carrito está vacío.</Typography>
      ) : (
        <>
          <List>
            {cartItems.map((item) => (
              <ListItem key={item.id}>
                <ListItemText
                  primary={item.name}
                  secondary={`Precio: $${item.price} | Stock disponible: ${item.stock}`}
                />
              </ListItem>
            ))}
          </List>
          <Button
            variant="contained"
            color="primary"
            onClick={handleConfirmOrder}
          >
            Confirmar Pedido
          </Button>
        </>
      )}
    </div>
  );
};

export default Cart;
