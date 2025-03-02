"use client"

import { useState } from "react"
import { Table, Button, TextInput, Group, Modal } from "@mantine/core"
import { useForm } from "@mantine/form"

// Datos mockeados de categorías
const initialCategories = [
  { id: "1", name: "Semillas" },
  { id: "2", name: "Fertilizantes" },
  { id: "3", name: "Herramientas" },
]

export default function CategoryManagement() {
  const [categories, setCategories] = useState(initialCategories)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingCategory, setEditingCategory] = useState<any | null>(null)

  const form = useForm({
    initialValues: {
      name: "",
    },
  })

  const handleCreateCategory = (values: any) => {
    const newCategory = {
      id: (categories.length + 1).toString(),
      name: values.name,
    }
    setCategories([...categories, newCategory])
    setIsModalOpen(false)
    form.reset()
  }

  const handleEditCategory = (category: any) => {
    setEditingCategory(category)
    form.setValues(category)
    setIsModalOpen(true)
  }

  const handleSaveEdit = (values: any) => {
    setCategories(categories.map((c) => (c.id === editingCategory.id ? { ...c, ...values } : c)))
    setIsModalOpen(false)
    setEditingCategory(null)
    form.reset()
  }

  const handleDeleteCategory = (id: string) => {
    setCategories(categories.filter((c) => c.id !== id))
  }

  return (
    <>
      <Button onClick={() => setIsModalOpen(true)} mb="md">
        Crear Categoría
      </Button>
      <Table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr key={category.id}>
              <td>{category.name}</td>
              <td>
                <Button onClick={() => handleEditCategory(category)} variant="light" size="xs" mr="xs">
                  Editar
                </Button>
                <Button onClick={() => handleDeleteCategory(category.id)} variant="light" color="red" size="xs">
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal
        opened={isModalOpen}
        onClose={() => {
          setIsModalOpen(false)
          setEditingCategory(null)
          form.reset()
        }}
        title={editingCategory ? "Editar Categoría" : "Crear Categoría"}
      >
        <form onSubmit={form.onSubmit(editingCategory ? handleSaveEdit : handleCreateCategory)}>
          <TextInput label="Nombre de la categoría" {...form.getInputProps("name")} />
          <Group mt="xl">
            <Button type="submit">{editingCategory ? "Guardar" : "Crear"}</Button>
            <Button
              variant="light"
              onClick={() => {
                setIsModalOpen(false)
                setEditingCategory(null)
                form.reset()
              }}
            >
              Cancelar
            </Button>
          </Group>
        </form>
      </Modal>
    </>
  )
}

