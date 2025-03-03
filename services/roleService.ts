import api from "./api"
import type { Role } from "@/types/role"

export const roleService = {
  getRoles: async (): Promise<Role[]> => {
    const response = await api.get("/roles")
    return response.data
  },

  getRoleById: async (id: string): Promise<Role> => {
    const response = await api.get(`/roles/${id}`)
    return response.data
  },

  createRole: async (roleData: Omit<Role, "id">): Promise<Role> => {
    const response = await api.post("/roles", roleData)
    return response.data
  },

  updateRole: async (id: string, roleData: Partial<Role>): Promise<Role> => {
    const response = await api.put(`/roles/${id}`, roleData)
    return response.data
  },

  deleteRole: async (id: string): Promise<void> => {
    await api.delete(`/roles/${id}`)
  },
}

