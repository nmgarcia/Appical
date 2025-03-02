import api from "./api"

export const roleService = {
  getRoles: async () => {
    const response = await api.get("/roles")
    return response.data
  },

  getRoleById: async (id: string) => {
    const response = await api.get(`/roles/${id}`)
    return response.data
  },

  createRole: async (roleData: any) => {
    const response = await api.post("/roles", roleData)
    return response.data
  },

  updateRole: async (id: string, roleData: any) => {
    const response = await api.put(`/roles/${id}`, roleData)
    return response.data
  },

  deleteRole: async (id: string) => {
    const response = await api.delete(`/roles/${id}`)
    return response.data
  },
}

