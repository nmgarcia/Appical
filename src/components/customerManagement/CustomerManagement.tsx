import React, { useEffect, useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { Customer } from "../../types/types";
import styles from "./CustomerManagement.module.css";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Nombre", width: 150 },
  { field: "email", headerName: "Email", width: 200 },
  { field: "address", headerName: "Dirección", width: 200 },
  { field: "active", headerName: "Activo", width: 100, type: "boolean" },
  {
    field: "actions",
    headerName: "Acciones",
    width: 150,
    renderCell: (params) => (
      <Button
        variant="outlined"
        onClick={() => alert(`Toggle estado del cliente ${params.row.id}`)}
      >
        {params.row.active ? "Desactivar" : "Activar"}
      </Button>
    ),
  },
];

const CustomerManagement: React.FC = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);

  useEffect(() => {
    const mockCustomers: Customer[] = [
      {
        id: 1,
        name: "Juan Pérez",
        email: "juan@example.com",
        address: "Av. Siempre Viva 123",
        location: { lat: -34.6037, lng: -58.3816 },
        active: true,
        orderHistory: [],
      },
      {
        id: 2,
        name: "María Gómez",
        email: "maria@example.com",
        address: "Calle Falsa 456",
        location: { lat: -34.6137, lng: -58.3916 },
        active: false,
        orderHistory: [],
      },
    ];
    setCustomers(mockCustomers);
  }, []);

  return (
    <div className={styles.container}>
      <h2>Gestión de Clientes</h2>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid rows={customers} columns={columns} autoPageSize />
      </div>
    </div>
  );
};

export default CustomerManagement;
