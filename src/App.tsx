import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import CustomerDashboard from "./pages/CustomerDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import Layout from "../src/components/layout/Layout";
import LandingPage from "./pages/LandingPage";
import type { Navigation } from "@toolpad/core";
import { ReactRouterAppProvider } from "@toolpad/core/react-router";
import ProductList from "./components/productList/ProductList";
import Cart from "./components/cart/Cart";
import LocationManagement from "./components/locationManagement/LocationManagement";
import OrderHistory from "./components/orderHistory/OrderHistory";

const NAVIGATION: Navigation = [
  {
    segment: "client-dashboard",
    title: "Panel de Cliente",
    children: [
      { segment: "products", title: "Productos" },
      { segment: "cart", title: "Carrito" },
      { segment: "location", title: "Ubicación" },
      { segment: "orders", title: "Historial de Pedidos" },
    ],
  },
  { segment: "admin-dashboard", title: "Panel de Administrador" },
];

const App = () => {
  return (
    <Router>
      <ReactRouterAppProvider navigation={NAVIGATION}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/client-dashboard" element={<CustomerDashboard />}>
              <Route index element={<ProductList />} /> {/* Ruta por defecto */}
              <Route path="products" element={<ProductList />} />
              <Route path="cart" element={<Cart />} />
              <Route path="location" element={<LocationManagement />} />
              <Route path="orders" element={<OrderHistory />} />
            </Route>
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
          </Route>
        </Routes>
      </ReactRouterAppProvider>
    </Router>
  );
};

export default App;
