import api from "./api"
import type { Category } from "@/types/category"

export const categoryService = {
  getCategories: async (): Promise<Category[]> => {
    const response = await api.get("/categories")
    return response.data
  },

  getCategoryById: async (id: string): Promise<Category> => {
    const response = await api.get(`/categories/${id}`)
    return response.data
  },

  createCategory: async (categoryData: Omit<Category, "_id">): Promise<Category> => {
    const response = await api.post("/categories", categoryData)
    return response.data
  },

  updateCategory: async (id: string, categoryData: Partial<Category>): Promise<Category> => {
    const response = await api.put(`/categories/${id}`, categoryData)
    return response.data
  },

  deleteCategory: async (id: string): Promise<void> => {
    await api.delete(`/categories/${id}`)
  },
}