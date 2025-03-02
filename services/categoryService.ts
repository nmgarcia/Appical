import api from "./api"

export const categoryService = {
  getCategories: async () => {
    const response = await api.get("/categories")
    return response.data
  },

  getCategoryById: async (id: string) => {
    const response = await api.get(`/categories/${id}`)
    return response.data
  },

  createCategory: async (categoryData: any) => {
    const response = await api.post("/categories", categoryData)
    return response.data
  },

  updateCategory: async (id: string, categoryData: any) => {
    const response = await api.put(`/categories/${id}`, categoryData)
    return response.data
  },

  deleteCategory: async (id: string) => {
    const response = await api.delete(`/categories/${id}`)
    return response.data
  },
}

