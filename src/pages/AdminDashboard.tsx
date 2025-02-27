// src/pages/AdminDashboard.tsx
import React, { useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";
import styles from "./AdminDashboard.module.css";
import StockManagement from "../components/stockManagement/StockManagement";
import OrderManagement from "../components/orderManagement/OrderManagement";
import SupplierManagement from "../components/supplierManagement/SupplierManagement";
import CustomerManagement from "../components/customerManagement/CustomerManagement";
import RouteOptimization from "../components/routeOptimization/RouteOptimization";

const AdminDashboard: React.FC = () => {
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
        <Tab label="Gestión de Stock" />
        <Tab label="Gestión de Pedidos" />
        <Tab label="Gestión de Proveedores" />
        <Tab label="Gestión de Clientes" />
        <Tab label="Optimización de Rutas" />
      </Tabs>
      <Box className={styles.tabContent}>
        {tabValue === 0 && <StockManagement />}
        {tabValue === 1 && <OrderManagement />}
        {tabValue === 2 && <SupplierManagement />}
        {tabValue === 3 && <CustomerManagement />}
        {tabValue === 4 && <RouteOptimization />}
      </Box>
    </Box>
  );
};

export default AdminDashboard;
