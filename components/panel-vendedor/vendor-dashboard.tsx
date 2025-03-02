"use client";

import { useState } from "react";
import { Tabs, Card, Text } from "@mantine/core";
import ProductsTable from "./products-table";
import OrdersTable from "./orders-table";
import SalesChart from "./sales-chart";
import RouteOptimization from "./route-optimization";
import CategoryManagement from "./category-management";
import RoleManagement from "./role-management";

export default function VendorDashboard() {
  const [activeTab, setActiveTab] = useState<string | null>("dashboard");

  return (
    <Tabs value={activeTab} onChange={setActiveTab}>
      <Tabs.List>
        <Tabs.Tab value="dashboard">Dashboard</Tabs.Tab>
        <Tabs.Tab value="products">Mis Productos</Tabs.Tab>
        <Tabs.Tab value="orders">Pedidos</Tabs.Tab>
        <Tabs.Tab value="routes">Optimización de Rutas</Tabs.Tab>
        <Tabs.Tab value="categories">Categorías</Tabs.Tab>
        <Tabs.Tab value="roles">Roles de Cliente</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="dashboard">
        <Card withBorder mt="xl">
          <Text size="xl" fw={700} mb="md">
            Estadísticas de Ventas
          </Text>
          <SalesChart />
        </Card>
      </Tabs.Panel>

      <Tabs.Panel value="products">
        <ProductsTable />
      </Tabs.Panel>

      <Tabs.Panel value="orders">
        <OrdersTable />
      </Tabs.Panel>

      <Tabs.Panel value="routes">
        <RouteOptimization />
      </Tabs.Panel>

      <Tabs.Panel value="categories">
        <CategoryManagement />
      </Tabs.Panel>

      <Tabs.Panel value="roles">
        <RoleManagement />
      </Tabs.Panel>
    </Tabs>
  );
}
