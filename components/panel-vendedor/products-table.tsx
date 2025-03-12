"use client";

import { useState, useEffect } from "react";
import {
  Table,
  Button,
  Modal,
  TextInput,
  Textarea,
  NumberInput,
  Select,
  Group,
  Text,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import type { Product } from "@/types/product";
import { productService } from "@/services/productService";
import { categoryService } from "@/services/categoryService";
import { roleService } from "@/services/roleService";
import { useAuth } from "@/contexts/auth-context";
import { Category } from "@/types/category";
import { Role } from "@/types/role";

export default function ProductsTable() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [roles, setRoles] = useState<Role[]>([]);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [productToDelete, setProductToDelete] = useState<Product | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Obtener el usuario actual del contexto de autenticación
  const { user } = useAuth();

  const form = useForm<Omit<Product, "_id">>({
    initialValues: {
      name: "",
      basePrice: 0,
      prices: [],
      images: [],
      sellerId: "",
      category: { _id: "", name: "", description: "" },
      condition: "",
      stock: 0,
      description: "",
    },
  });

  useEffect(() => {
    loadProducts();
    loadCategories();
    loadRoles();
  }, []);

  const loadProducts = async () => {
    setLoading(true);
    setError(null);
    try {
      // Cargar solo los productos del vendedor actual
      const data = await productService.getProducts({ sellerId: user?._id });
      setProducts(data);
    } catch (err) {
      console.error("Error al cargar productos:", err);
      setError(
        "No se pudieron cargar los productos. Por favor, intenta de nuevo."
      );
    } finally {
      setLoading(false);
    }
  };

  const loadCategories = async () => {
    try {
      const data = await categoryService.getCategories();
      setCategories(data);
    } catch (err) {
      console.error("Error al cargar categorías:", err);
    }
  };

  const loadRoles = async () => {
    try {
      const data = await roleService.getRoles();
      setRoles(data);
    } catch (err) {
      console.error("Error al cargar roles:", err);
    }
  };

  const handleCreateProduct = () => {
    // Inicializar el formulario con el ID del vendedor actual
    form.setValues({
      name: "",
      basePrice: 0,
      prices: [],
      images: [],
      seller: user?.name || "", // Nombre del vendedor actual
      category: { _id: "", name: "", description: "" },
      condition: "Nuevo",
      stock: 0,
      description: "",
      sellerId: user?.id || "", // ID del vendedor actual
    });
    setEditingProduct(null);
    setIsEditModalOpen(true);
  };

  const handleEditProduct = (product: Product) => {
    setEditingProduct(product);
    form.setValues({
      ...product,
      // Asegurarse de que el sellerId esté presente
      sellerId: product.sellerId || user?._id || "",
      // Convertir los precios al formato esperado por el formulario
      prices: product.prices || [],
    });
    setIsEditModalOpen(true);
  };

  const handleSaveEdit = async (values: Omit<Product, "_id">) => {
    setLoading(true);
    setError(null);
    try {
      // Asegurarse de que el ID del vendedor esté incluido
      const productData = {
        ...values,
        sellerId: user?.id || "",
        seller: user?.name || values.seller,
      };

      if (editingProduct) {
        await productService.updateProduct(editingProduct._id, productData);
      } else {
        await productService.createProduct(productData);
      }

      setIsEditModalOpen(false);
      loadProducts();
    } catch (err) {
      console.error("Error al guardar producto:", err);
      setError("No se pudo guardar el producto. Por favor, intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteProduct = (product: Product) => {
    setProductToDelete(product);
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = async () => {
    if (!productToDelete) return;

    setLoading(true);
    setError(null);
    try {
      await productService.deleteProduct(productToDelete._id);
      setIsDeleteModalOpen(false);
      loadProducts();
    } catch (err) {
      console.error("Error al eliminar producto:", err);
      setError("No se pudo eliminar el producto. Por favor, intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Button onClick={handleCreateProduct} mb="md" loading={loading}>
        Crear Producto
      </Button>

      {error && (
        <Text color="red" mb="md">
          {error}
        </Text>
      )}

      <Table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio Base</th>
            <th>Stock</th>
            <th>Categoría</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td>{product.name}</td>
              <td>${product.basePrice}</td>
              <td>{product.stock}</td>
              <td>{product.category.name}</td>
              <td>
                <Button
                  onClick={() => handleEditProduct(product)}
                  variant="light"
                  size="xs"
                  mr="xs"
                >
                  Editar
                </Button>
                <Button
                  onClick={() => handleDeleteProduct(product)}
                  variant="light"
                  color="red"
                  size="xs"
                >
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
          {products.length === 0 && !loading && (
            <tr>
              <td colSpan={5} style={{ textAlign: "center" }}>
                No hay productos disponibles
              </td>
            </tr>
          )}
        </tbody>
      </Table>

      <Modal
        opened={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        title={editingProduct ? "Editar Producto" : "Crear Producto"}
        size="lg"
      >
        <form onSubmit={form.onSubmit(handleSaveEdit)}>
          <TextInput label="Nombre" {...form.getInputProps("name")} required />
          <Textarea
            label="Descripción"
            {...form.getInputProps("description")}
            mt="sm"
          />
          <NumberInput
            label="Precio Base"
            {...form.getInputProps("basePrice")}
            mt="sm"
            required
            min={0}
          />
          <NumberInput
            label="Stock"
            {...form.getInputProps("stock")}
            mt="sm"
            required
            min={0}
          />
          <Select
            label="Categoría"
            placeholder="Selecciona una categoría"
            required
            data={categories.map((c) => ({ value: c._id, label: c.name }))}
            {...form.getInputProps("category")}
            mt="md"
          />

          <Text fw={700} mt="lg">
            Precios por Rol de Cliente
          </Text>
          <Text size="sm" c="dimmed" mb="sm">
            Define precios especiales para diferentes tipos de clientes
          </Text>

          {roles.map((role) => (
            <NumberInput
              key={role._id}
              label={`Precio para ${role.name}`}
              placeholder={`Precio especial para ${role.name}`}
              {...form.getInputProps(`prices.${role.name}`)}
              mt="sm"
              min={0}
            />
          ))}

          <TextInput
            label="URLs de Imágenes"
            placeholder="Separadas por comas"
            {...form.getInputProps("images")}
            mt="lg"
            description="Ingresa las URLs de las imágenes separadas por comas"
          />

          {/* Campo oculto para el ID del vendedor */}
          <input type="hidden" {...form.getInputProps("sellerId")} />

          {error && (
            <Text color="red" size="sm" mt="sm">
              {error}
            </Text>
          )}

          <Group mt="xl">
            <Button type="submit" loading={loading}>
              {editingProduct ? "Guardar" : "Crear"}
            </Button>
            <Button
              variant="light"
              onClick={() => setIsEditModalOpen(false)}
              disabled={loading}
            >
              Cancelar
            </Button>
          </Group>
        </form>
      </Modal>

      <Modal
        opened={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        title="Confirmar eliminación"
      >
        <Text>¿Desea eliminar el producto {productToDelete?.name}?</Text>
        <Group mt="xl">
          <Button onClick={confirmDelete} color="red" loading={loading}>
            Sí, eliminar
          </Button>
          <Button
            variant="light"
            onClick={() => setIsDeleteModalOpen(false)}
            disabled={loading}
          >
            No, cancelar
          </Button>
        </Group>
      </Modal>
    </>
  );
}
