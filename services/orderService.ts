import api from "./api"
import type { Order } from "@/types/order"

export const orderService = {
  getOrders: async (filters?: any): Promise<Order[]> => {
    const response = await api.get("/orders", { params: filters })
    return response.data
  },

  getOrderById: async (id: string): Promise<Order> => {
    const response = await api.get(`/orders/${id}`)
    return response.data
  },

  createOrder: async (orderData: Omit<Order, "id">): Promise<Order> => {
    const response = await api.post("/orders", orderData)
    return response.data
  },

  updateOrder: async (id: string, orderData: Partial<Order>): Promise<Order> => {
    const response = await api.put(`/orders/${id}`, orderData)
    return response.data
  },

  deleteOrder: async (id: string): Promise<void> => {
    await api.delete(`/orders/${id}`)
  },
}

