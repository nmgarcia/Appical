import axios from "axios"

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000/api/" //"https://appical-backend.vercel.app/api/";

// Rutas que no requieren autenticación
const publicRoutes = [
  "/products", // Listado de productos
  "/categories", // Listado de categorías
  "/auth/login",
  "/auth/register",
  "/auth/request-password-reset",
  "/auth/reset-password",
]

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
})

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token")
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Solo redirigir al login si no es una ruta pública y el error es 401
    if (error.response && error.response.status === 401) {
      // Verificar si la URL actual es una ruta pública
      const isPublicRoute = publicRoutes.some(
        (route) =>
          error.config.url.includes(route) ||
          // Permitir acceso a detalles de producto individual
          (error.config.url.match(/\/products\/[a-zA-Z0-9-_]+/) && error.config.method === "get"),
      )

      if (!isPublicRoute) {
        localStorage.removeItem("token")
        window.location.href = "/login"
      }
    }
    return Promise.reject(error)
  },
)

export default api



