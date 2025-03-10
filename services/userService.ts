import api from "./api"

export const userService = {
  getUsers: async (filters?: any) => {
    const response = await api.get("/users", { params: filters })
    return response.data.users
  },

  getUserById: async (id: string) => {
    const response = await api.get(`/users/${id}`)
    return response.data
  },

  createUser: async (userData: any) => {
    const response = await api.post("/users", userData)
    return response.data
  },

  updateUser: async (id: string, userData: any) => {
    const response = await api.put(`/users/${id}`, userData)
    return response.data
  },

  deleteUser: async (id: string) => {
    const response = await api.delete(`/users/${id}`)
    return response.data
  },
}

