import api from "./api"

export const orderService = {
  getOrders: async (filters?: any) => {
    const response = await api.get("/orders", { params: filters })
    return response.data
  },

  getOrderById: async (id: string) => {
    const response = await api.get(`/orders/${id}`)
    return response.data
  },

  createOrder: async (orderData: any) => {
    const response = await api.post("/orders", orderData)
    return response.data
  },

  updateOrder: async (id: string, orderData: any) => {
    const response = await api.put(`/orders/${id}`, orderData)
    return response.data
  },

  deleteOrder: async (id: string) => {
    const response = await api.delete(`/orders/${id}`)
    return response.data
  },
}

