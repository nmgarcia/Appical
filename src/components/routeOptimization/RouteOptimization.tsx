import React, { useEffect, useState } from "react";
import { Typography, List, ListItem, ListItemText } from "@mui/material";
import { DeliveryRoute } from "../../types/types";
import styles from "./RouteOptimization.module.css";

const RouteOptimization: React.FC = () => {
  const [routes, setRoutes] = useState<DeliveryRoute[]>([]);

  useEffect(() => {
    const mockRoutes: DeliveryRoute[] = [
      {
        id: 1,
        orders: [
          {
            id: 1,
            customerId: 1,
            products: [],
            status: "Pendiente",
            orderDate: "2025-02-20",
          },
        ],
        route: [{ lat: -34.6037, lng: -58.3816 }],
      },
      {
        id: 2,
        orders: [
          {
            id: 2,
            customerId: 2,
            products: [],
            status: "Enviado",
            orderDate: "2025-02-21",
          },
        ],
        route: [{ lat: -34.6137, lng: -58.3916 }],
      },
    ];
    setRoutes(mockRoutes);
  }, []);

  return (
    <div className={styles.container}>
      <Typography variant="h5">Optimización de Rutas</Typography>
      <List>
        {routes.map((route) => (
          <ListItem key={route.id}>
            <ListItemText
              primary={`Ruta ${route.id} - Pedidos: ${route.orders.length}`}
              secondary={`Coordenadas: ${route.route[0].lat}, ${route.route[0].lng}`}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default RouteOptimization;
