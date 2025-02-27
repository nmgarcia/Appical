import React, { useEffect, useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { Order } from "../../types/types";
import styles from "./OrderManagement.module.css";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "customerId", headerName: "Cliente", width: 100 },
  { field: "orderDate", headerName: "Fecha", width: 150 },
  { field: "status", headerName: "Estado", width: 120 },
  {
    field: "products",
    headerName: "Productos",
    width: 200,
    //valueGetter: (params) => params.row.products.length,
  },
  {
    field: "actions",
    headerName: "Acciones",
    width: 150,
    renderCell: (params) => (
      <Button
        variant="outlined"
        onClick={() => alert(`Cambiar estado del pedido ${params.row.id}`)}
      >
        Cambiar Estado
      </Button>
    ),
  },
];

const OrderManagement: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const mockOrders: Order[] = [
      {
        id: 1,
        customerId: 1,
        products: [{ productId: 1, quantity: 2 }],
        status: "Pendiente",
        orderDate: "2025-02-20",
      },
      {
        id: 2,
        customerId: 2,
        products: [{ productId: 2, quantity: 1 }],
        status: "Enviado",
        orderDate: "2025-02-21",
      },
    ];
    setOrders(mockOrders);
  }, []);

  return (
    <div className={styles.container}>
      <h2>Gestión de Pedidos</h2>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid rows={orders} columns={columns} autoPageSize />
      </div>
    </div>
  );
};

export default OrderManagement;
