"use client";

import { useState } from "react";
import {
  Tabs,
  Card,
  Text,
  Button,
  Table,
  TextInput,
  Textarea,
  NumberInput,
  FileInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { Chart } from "react-google-charts";

// Simulated data
const salesData = [
  ["Mes", "Ventas"],
  ["Enero", 1000],
  ["Febrero", 1170],
  ["Marzo", 660],
  ["Abril", 1030],
];

const products = [
  { id: "1", name: "Semillas de Maíz Premium", price: 120.0, stock: 100 },
  { id: "2", name: "Fertilizante Orgánico", price: 45.0, stock: 50 },
];

const courses = [
  { id: "1", name: "Técnicas Modernas de Cultivo", price: 99.99, students: 50 },
  { id: "2", name: "Manejo Sostenible de Plagas", price: 79.99, students: 30 },
];

const orders = [
  {
    id: "1",
    date: "2023-06-15",
    items: "Semillas de Maíz Premium",
    total: 240.0,
    status: "Pendiente",
  },
  {
    id: "2",
    date: "2023-06-16",
    items: "Fertilizante Orgánico",
    total: 45.0,
    status: "Enviado",
  },
];

export default function VendorDashboard() {
  const [activeTab, setActiveTab] = useState<string | null>("dashboard");

  const productForm = useForm({
    initialValues: {
      name: "",
      description: "",
      price: 0,
      stock: 0,
      images: null,
    },
  });

  const courseForm = useForm({
    initialValues: {
      name: "",
      description: "",
      price: 0,
      content: "",
    },
  });

  const handleProductSubmit = (values: typeof productForm.values) => {
    console.log("New Product:", values);
    // Here you would typically send the form data to your backend
  };

  const handleCourseSubmit = (values: typeof courseForm.values) => {
    console.log("New Course:", values);
    // Here you would typically send the form data to your backend
  };

  return (
    <Tabs value={activeTab} onChange={setActiveTab}>
      <Tabs.List>
        <Tabs.Tab value="dashboard">Dashboard</Tabs.Tab>
        <Tabs.Tab value="products">Mis Productos</Tabs.Tab>
        <Tabs.Tab value="courses">Mis Capacitaciones</Tabs.Tab>
        <Tabs.Tab value="orders">Pedidos</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="dashboard">
        <Card withBorder mt="xl">
          <Text size="xl" fw={700} mb="md">
            Estadísticas de Ventas
          </Text>
          <Chart
            chartType="LineChart"
            width="100%"
            height="400px"
            data={salesData}
            options={{
              hAxis: {
                title: "Mes",
              },
              vAxis: {
                title: "Ventas ($)",
              },
              series: {
                0: { curveType: "function" },
              },
            }}
          />
        </Card>
      </Tabs.Panel>

      <Tabs.Panel value="products">
        <Card withBorder mt="xl">
          <Text size="xl" fw={700} mb="md">
            Mis Productos
          </Text>
          <Table>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Stock</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>${product.price.toFixed(2)}</td>
                  <td>{product.stock}</td>
                  <td>
                    <Button variant="light" size="xs" mr="xs">
                      Editar
                    </Button>
                    <Button variant="light" color="red" size="xs">
                      Eliminar
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card>

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
              label="Precio"
              placeholder="0.00"
              required
              mt="md"
              min={0}
              step={0.01}
              {...productForm.getInputProps("price")}
            />
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
      </Tabs.Panel>

      <Tabs.Panel value="courses">
        <Card withBorder mt="xl">
          <Text size="xl" fw={700} mb="md">
            Mis Capacitaciones
          </Text>
          <Table>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Estudiantes</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course) => (
                <tr key={course.id}>
                  <td>{course.name}</td>
                  <td>${course.price.toFixed(2)}</td>
                  <td>{course.students}</td>
                  <td>
                    <Button variant="light" size="xs" mr="xs">
                      Editar
                    </Button>
                    <Button variant="light" color="red" size="xs">
                      Eliminar
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card>

        <Card withBorder mt="xl">
          <Text size="xl" fw={700} mb="md">
            Crear Nueva Capacitación
          </Text>
          <form onSubmit={courseForm.onSubmit(handleCourseSubmit)}>
            <TextInput
              label="Nombre del Curso"
              placeholder="Ej: Técnicas Modernas de Cultivo"
              required
              {...courseForm.getInputProps("name")}
            />
            <Textarea
              label="Descripción"
              placeholder="Describe tu curso..."
              required
              mt="md"
              {...courseForm.getInputProps("description")}
            />
            <NumberInput
              label="Precio"
              placeholder="0.00"
              required
              mt="md"
              min={0}
              step={0.01}
              {...courseForm.getInputProps("price")}
            />
            <Textarea
              label="Contenido del Curso"
              placeholder="Detalla el contenido y estructura del curso..."
              required
              mt="md"
              {...courseForm.getInputProps("content")}
            />
            <Button type="submit" mt="xl">
              Crear Curso
            </Button>
          </form>
        </Card>
      </Tabs.Panel>

      <Tabs.Panel value="orders">
        <Card withBorder mt="xl">
          <Text size="xl" fw={700} mb="md">
            Pedidos
          </Text>
          <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Fecha</th>
                <th>Artículos</th>
                <th>Total</th>
                <th>Estado</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.date}</td>
                  <td>{order.items}</td>
                  <td>${order.total.toFixed(2)}</td>
                  <td>{order.status}</td>
                  <td>
                    <Button variant="light" size="xs">
                      Actualizar Estado
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card>
      </Tabs.Panel>
    </Tabs>
  );
}
