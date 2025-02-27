export interface Product {
    id: number;
    name: string;
    price: number;
    stock: number;
    supplierId: number;
    entryDate: string; // ISO Date: "2025-02-22"
    expiryDate?: string; // Opcional
  }
  
  export interface Order {
    id: number;
    customerId: number;
    products: { productId: number; quantity: number }[];
    status: 'Pendiente' | 'Procesado' | 'Enviado' | 'Entregado';
    orderDate: string;
  }
  
  export interface Supplier {
    id: number;
    name: string;
    salesHistory: { productId: number; quantity: number; date: string }[];
  }
  
  export interface Customer {
    id: number;
    name: string;
    email: string;
    address: string;
    location: { lat: number; lng: number }; // Para rutas
    active: boolean;
    orderHistory: Order[];
  }
  
  export interface DeliveryRoute {
    id: number;
    orders: Order[];
    route: { lat: number; lng: number }[];
  }