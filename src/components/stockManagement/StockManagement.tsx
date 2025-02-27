import React, { useEffect, useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { Product } from "../../types/types";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Nombre", width: 150 },
  { field: "price", headerName: "Precio", width: 100 },
  { field: "stock", headerName: "Stock", width: 100 },
  { field: "supplierId", headerName: "Proveedor", width: 100 },
  { field: "entryDate", headerName: "Fecha de Ingreso", width: 150 },
  { field: "expiryDate", headerName: "Fecha de Vencimiento", width: 150 },
];

const StockManagement: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Simulación de llamada a la API
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
          stock: 50,
          supplierId: 2,
          entryDate: "2025-02-21",
          expiryDate: "2025-03-01",
        },
      ];
      setProducts(mockData);
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <Button variant="contained" sx={{ mb: 2 }}>
        Agregar Producto
      </Button>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid rows={products} columns={columns} autoPageSize />
      </div>
    </div>
  );
};

export default StockManagement;
