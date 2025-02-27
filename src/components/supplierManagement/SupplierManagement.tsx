import React, { useEffect, useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Supplier } from "../../types/types";
import styles from "./SupplierManagement.module.css";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Nombre", width: 150 },
  {
    field: "salesHistory",
    headerName: "Ventas",
    width: 200,
    //valueGetter: (params) => params.row.salesHistory.length,
  },
];

const SupplierManagement: React.FC = () => {
  const [suppliers, setSuppliers] = useState<Supplier[]>([]);

  useEffect(() => {
    const mockSuppliers: Supplier[] = [
      {
        id: 1,
        name: "Proveedor A",
        salesHistory: [{ productId: 1, quantity: 50, date: "2025-02-20" }],
      },
      {
        id: 2,
        name: "Proveedor B",
        salesHistory: [{ productId: 2, quantity: 30, date: "2025-02-21" }],
      },
    ];
    setSuppliers(mockSuppliers);
  }, []);

  return (
    <div className={styles.container}>
      <h2>Gestión de Proveedores</h2>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid rows={suppliers} columns={columns} autoPageSize />
      </div>
    </div>
  );
};

export default SupplierManagement;
