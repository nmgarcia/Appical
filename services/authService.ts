import api from "./api"
import type { User } from "@/types/user"

export const authService = {
  register: async (
    userData: Omit<User, "_id" | "role"> & { password: string },
  ): Promise<{ token: string; user: User }> => {
    // Asegurarse de que el rol sea "cliente" por defecto para el registro normal
    const response = await api.post("/auth/register", {
      ...userData,
      role: "67c98fa2ab5a32162ae5b5b7", // Asignar rol de cliente por defecto
    })
    return response.data
  },

  registerVendor: async (
    userData: Omit<User, "_id" | "role"> & { password: string },
  ): Promise<{ token: string; user: User }> => {
    // Registro específico para vendedores
    const response = await api.post("/auth/register", {
      ...userData,
      role: "67c98fa2ab5a32162ae5b5b8",
    })
    return response.data
  },

  login: async (email: string, password: string): Promise<{ token: string; user: User }> => {
    const response = await api.post("/auth/login", { email, password })
    return response.data
  },

  getCurrentUser: async (): Promise<User> => {
    const response = await api.get("/auth/me")
    return response.data
  },

  logout: () => {
    localStorage.removeItem("token")
    // Aquí puedes agregar cualquier otra lógica de limpieza necesaria
  },

  requestPasswordReset: async (email: string): Promise<void> => {
    await api.post("/auth/request-password-reset", { email })
  },

  resetPassword: async (token: string, newPassword: string): Promise<void> => {
    await api.post("/auth/reset-password", { token, newPassword })
  },
}

