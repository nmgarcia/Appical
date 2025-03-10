import api from "./api"
import type { Product } from "@/types/product"

export const productService = {
  getProducts: async (filters?: any): Promise<Product[]> => {
    const response = await api.get("/products", { params: filters })
    return response.data.products
  },

  getProductById: async (id: string): Promise<Product> => {
    const response = await api.get(`/products/${id}`)
    return response.data
  },

  createProduct: async (productData: Omit<Product, "_id">): Promise<Product> => {
    const response = await api.post("/products", productData)
    return response.data
  },

  updateProduct: async (id: string, productData: Partial<Product>): Promise<Product> => {
    const response = await api.put(`/products/${id}`, productData)
    return response.data
  },

  deleteProduct: async (id: string): Promise<void> => {
    await api.delete(`/products/${id}`)
  },
}

