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
  MultiSelect,
  Group,
  Card,
  Text,
  FileInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import type { Product } from "@/types/product";
import { productService } from "@/services/productService";
import { categoryService } from "@/services/categoryService";
import { roleService } from "@/services/roleService";

export default function ProductsTable() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [roles, setRoles] = useState<string[]>([]);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [productToDelete, setProductToDelete] = useState<Product | null>(null);

  const productForm = useForm<Omit<Product, "id">>({
    initialValues: {
      name: "",
      basePrice: 0,
      prices: [],
      images: [],
      seller: "",
      category: "",
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
    const data = await productService.getProducts();
    setProducts(data);
  };

  const loadCategories = async () => {
    const data = await categoryService.getCategories();
    setCategories(data.map((category) => category.name));
  };

  const loadRoles = async () => {
    const data = await roleService.getRoles();
    setRoles(data.map((role) => role.name));
  };

  const handleEditProduct = (product: Product) => {
    setEditingProduct(product);
    productForm.setValues({
      ...product,
    });
    setIsEditModalOpen(true);
  };

  const handleSaveEdit = async (values: Omit<Product, "id">) => {
    if (editingProduct) {
      await productService.updateProduct(editingProduct.id, { ...values });
      setIsEditModalOpen(false);
      loadProducts();
    }
  };

  const handleDeleteProduct = (product: Product) => {
    setProductToDelete(product);
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = async () => {
    if (productToDelete) {
      await productService.deleteProduct(productToDelete.id);
      setIsDeleteModalOpen(false);
      loadProducts();
    }
  };

  const handleProductSubmit = async (values: Omit<Product, "id">) => {
    try {
      await productService.createProduct(values);
      loadProducts();
      productForm.reset();
    } catch (error) {
      console.error("Error al agregar el producto:", error);
    }
  };

  return (
    <>
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
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>${product.basePrice}</td>
              <td>{product.stock}</td>
              <td>{product.category}</td>
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
        </tbody>
      </Table>
      <Card withBorder mt="xl">
        <Text size="xl" fw={700} mb="md">
          Agregar Nuevo Producto
        </Text>
        <form onSubmit={productForm.onSubmit(handleProductSubmit)}>
          <TextInput
            label="Nombre del Producto"
            placeholder="Ej: Semillas de Maíz Premium"
            required
            {...productForm.getInputProps("name")}
          />
          <Textarea
            label="Descripción"
            placeholder="Describe tu producto..."
            required
            mt="md"
            {...productForm.getInputProps("description")}
          />
          <NumberInput
            label="Precio Base"
            placeholder="0"
            required
            mt="md"
            {...productForm.getInputProps("basePrice")}
          />
          <Select
            label="Categoría"
            placeholder="Selecciona una categoría"
            required
            data={categories}
            {...productForm.getInputProps("category")}
            mt="md"
          />
          {roles.map((role) => (
            <NumberInput
              key={role}
              label={`Precio para ${role}`}
              {...productForm.getInputProps(`prices.${role}`)}
              mt="sm"
            />
          ))}

          <NumberInput
            label="Stock"
            placeholder="0"
            required
            mt="md"
            min={0}
            {...productForm.getInputProps("stock")}
          />
          <FileInput
            label="Imágenes del Producto"
            placeholder="Sube imágenes"
            accept="image/*"
            multiple
            mt="md"
            {...productForm.getInputProps("images")}
          />
          <Button type="submit" mt="xl">
            Agregar Producto
          </Button>
        </form>
      </Card>
      <Modal
        opened={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        title="Editar Producto"
      >
        <form onSubmit={productForm.onSubmit(handleSaveEdit)}>
          <TextInput label="Nombre" {...productForm.getInputProps("name")} />
          <Textarea
            label="Descripción"
            {...productForm.getInputProps("description")}
            mt="sm"
          />
          <NumberInput
            label="Precio Base"
            {...productForm.getInputProps("basePrice")}
            mt="sm"
          />
          <NumberInput
            label="Stock"
            {...productForm.getInputProps("stock")}
            mt="sm"
          />
          <Select
            label="Categoría"
            data={categories}
            {...productForm.getInputProps("category")}
            mt="sm"
          />
          {roles.map((role) => (
            <NumberInput
              key={role}
              label={`Precio para ${role}`}
              {...productForm.getInputProps(`prices.${role}`)}
              mt="sm"
            />
          ))}
          <Group mt="xl">
            <Button type="submit">Guardar</Button>
            <Button variant="light" onClick={() => setIsEditModalOpen(false)}>
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
          <Button onClick={confirmDelete} color="red">
            Sí, eliminar
          </Button>
          <Button variant="light" onClick={() => setIsDeleteModalOpen(false)}>
            No, cancelar
          </Button>
        </Group>
      </Modal>
    </>
  );
}
