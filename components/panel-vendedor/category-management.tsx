"use client";

import { useState, useEffect } from "react";
import { Table, Button, TextInput, Group, Modal, Text } from "@mantine/core";
import { useForm } from "@mantine/form";
import { categoryService } from "@/services/categoryService";
import type { Category } from "@/types/category";

export default function CategoryManagement() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<Omit<Category, "_id">>({
    initialValues: {
      name: "",
      description: "",
    },
    validate: {
      name: (value) =>
        value.length < 2 ? "El nombre debe tener al menos 2 caracteres" : null,
    },
  });

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await categoryService.getCategories();
      setCategories(data);
    } catch (err) {
      console.error("Error al cargar categorías:", err);
      setError(
        "No se pudieron cargar las categorías. Por favor, intenta de nuevo."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleCreateCategory = async (values: typeof form.values) => {
    setIsLoading(true);
    setError(null);
    try {
      await categoryService.createCategory(values);
      setIsModalOpen(false);
      form.reset();
      await loadCategories();
    } catch (err) {
      console.error("Error al crear categoría:", err);
      setError("No se pudo crear la categoría. Por favor, intenta de nuevo.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleEditCategory = (category: Category) => {
    setEditingCategory(category);
    form.setValues({
      name: category.name,
      description: category.description || "",
    });
    setIsModalOpen(true);
  };

  const handleSaveEdit = async (values: typeof form.values) => {
    if (!editingCategory) return;

    setIsLoading(true);
    setError(null);
    try {
      await categoryService.updateCategory(editingCategory._id, values);
      setIsModalOpen(false);
      setEditingCategory(null);
      form.reset();
      await loadCategories();
    } catch (err) {
      console.error("Error al actualizar categoría:", err);
      setError(
        "No se pudo actualizar la categoría. Por favor, intenta de nuevo."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteCategory = async (id: string) => {
    setIsLoading(true);
    setError(null);
    try {
      await categoryService.deleteCategory(id);
      await loadCategories();
    } catch (err) {
      console.error("Error al eliminar categoría:", err);
      setError(
        "No se pudo eliminar la categoría. Por favor, intenta de nuevo."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Button
        onClick={() => setIsModalOpen(true)}
        mb="md"
        loading={isLoading}
        mt="sm"
      >
        Crear Categoría
      </Button>

      {error && (
        <Text color="red" mb="md">
          {error}
        </Text>
      )}

      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Nombre</Table.Th>
            <Table.Th>Descripción</Table.Th>
            <Table.Th>Acciones</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {categories.map((category) => (
            <Table.Tr key={category._id}>
              <Table.Td>{category.name}</Table.Td>
              <Table.Td>{category.description || "-"}</Table.Td>
              <Table.Td>
                <Button
                  onClick={() => handleEditCategory(category)}
                  variant="light"
                  size="xs"
                  mr="xs"
                >
                  Editar
                </Button>
                <Button
                  onClick={() => handleDeleteCategory(category._id)}
                  variant="light"
                  color="red"
                  size="xs"
                >
                  Eliminar
                </Button>
              </Table.Td>
            </Table.Tr>
          ))}
          {categories.length === 0 && !isLoading && (
            <Table.Tr>
              <Table.Td colSpan={3} style={{ textAlign: "center" }}>
                No hay categorías disponibles
              </Table.Td>
            </Table.Tr>
          )}
        </Table.Tbody>
      </Table>

      <Modal
        opened={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditingCategory(null);
          form.reset();
        }}
        title={editingCategory ? "Editar Categoría" : "Crear Categoría"}
      >
        <form
          onSubmit={form.onSubmit(
            editingCategory ? handleSaveEdit : handleCreateCategory
          )}
        >
          <TextInput
            label="Nombre de la categoría"
            {...form.getInputProps("name")}
            required
          />
          <TextInput
            label="Descripción"
            placeholder="Descripción opcional"
            {...form.getInputProps("description")}
            mt="md"
          />
          {error && (
            <Text color="red" size="sm" mt="sm">
              {error}
            </Text>
          )}
          <Group mt="xl">
            <Button type="submit" loading={isLoading}>
              {editingCategory ? "Guardar" : "Crear"}
            </Button>
            <Button
              variant="light"
              onClick={() => {
                setIsModalOpen(false);
                setEditingCategory(null);
                form.reset();
              }}
              disabled={isLoading}
            >
              Cancelar
            </Button>
          </Group>
        </form>
      </Modal>
    </>
  );
}
