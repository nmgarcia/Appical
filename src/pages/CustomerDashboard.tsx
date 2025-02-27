// src/pages/CustomerDashboard.tsx
import React, { useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";

import styles from "./CustomerDashboard.module.css";
import ProductList from "../components/productList/ProductList";
import Cart from "../components/cart/Cart";
import LocationManagement from "../components/locationManagement/LocationManagement";
import OrderHistory from "../components/orderHistory/OrderHistory";

const CustomerDashboard: React.FC = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Box className={styles.container}>
      <Tabs
        value={tabValue}
        onChange={handleTabChange}
        centered
        className={styles.tabs}
      >
        <Tab label="Productos" />
        <Tab label="Carrito" />
        <Tab label="Ubicación" />
        <Tab label="Historial de Pedidos" />
      </Tabs>
      <Box className={styles.tabContent}>
        {tabValue === 0 && <ProductList />}
        {tabValue === 1 && <Cart />}
        {tabValue === 2 && <LocationManagement />}
        {tabValue === 3 && <OrderHistory />}
      </Box>
    </Box>
  );
};

export default CustomerDashboard;
