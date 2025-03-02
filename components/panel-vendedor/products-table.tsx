"use client";

import { useState } from "react";
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
  Card,
  FileInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { Price, Product } from "@/types/product";

// Datos mockeados
const initialProducts: Product[] = [
  {
    id: "1",
    name: "Semillas de Maíz Premium",
    description: "Semillas de alta calidad para cultivo de maíz",
    basePrice: 100,
    prices: [
      { role: "restaurante", price: 90 },
      { role: "campo", price: 85 },
      { role: "verduleria", price: 95 },
    ],
    stock: 1000,
    category: "Semillas",
    images: [],
    seller: "",
    condition: "",
    sellerId: "",
    sellerLocation: "",
  },
  {
    id: "2",
    name: "Fertilizante Orgánico",
    description: "Fertilizante 100% orgánico para todo tipo de cultivos",
    basePrice: 50,
    prices: [
      { role: "restaurante", price: 45 },
      { role: "campo", price: 40 },
      { role: "verduleria", price: 48 },
    ],
    stock: 500,
    category: "Fertilizantes",
    images: [],
    seller: "",
    condition: "",
    sellerId: "",
    sellerLocation: "",
  },
];

const categories = ["Semillas", "Fertilizantes", "Herramientas", "Maquinaria"];
const clientRoles = ["restaurante", "campo", "verduleria"];

export default function ProductsTable() {
  const [products, setProducts] = useState(initialProducts);
  const [editingProduct, setEditingProduct] = useState<any | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [productToDelete, setProductToDelete] = useState<any | null>(null);

  const productForm = useForm({
    initialValues: {
      name: "",
      description: "",
      basePrice: 0,
      prices: [],
      stock: 0,
      category: "",
    },
  });

  const handleProductSubmit = (values: typeof productForm.values) => {
    initialProducts.push({
      id: String(initialProducts.length + 1),
      ...values,
      images: [],
      seller: "",
      condition: "",
      sellerId: "",
      sellerLocation: "",
    });
    setProducts(initialProducts);
  };

  const handleEditProduct = (product: any) => {
    setEditingProduct(product);
    productForm.setValues(product);
    setIsEditModalOpen(true);
  };

  const handleSaveEdit = (values: any) => {
    setProducts(
      products.map((p) =>
        p.id === editingProduct.id ? { ...p, ...values } : p
      )
    );
    setIsEditModalOpen(false);
  };

  const handleDeleteProduct = (product: any) => {
    setProductToDelete(product);
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    setProducts(products.filter((p) => p.id !== productToDelete.id));
    setIsDeleteModalOpen(false);
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
          {clientRoles.map((role) => (
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
          {clientRoles.map((role) => (
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
