"use client";

import { useState } from "react";
import { Tabs, Card, TextInput, Button, Table, Badge } from "@mantine/core";
import { useForm } from "@mantine/form";

// Simulated user data
const userData = {
  name: "Juan Pérez",
  email: "juan@example.com",
  address: "Calle Ejemplo 123, Ciudad Ejemplo",
};

// Simulated purchase history
const purchaseHistory = [
  {
    id: "1",
    date: "2023-05-15",
    items: "Semillas de Maíz Premium",
    total: 240.0,
    status: "Entregado",
  },
  {
    id: "2",
    date: "2023-06-01",
    items: "Fertilizante Orgánico",
    total: 45.0,
    status: "Enviado",
  },
  {
    id: "3",
    date: "2023-06-10",
    items: "Curso: Técnicas Modernas de Cultivo",
    total: 99.99,
    status: "Completado",
  },
];

// Simulated enrolled courses
const enrolledCourses = [
  {
    id: "1",
    name: "Técnicas Modernas de Cultivo",
    progress: "60%",
    link: "/curso/1",
  },
  {
    id: "2",
    name: "Manejo Sostenible de Plagas",
    progress: "30%",
    link: "/curso/2",
  },
];

export default function UserProfile() {
  const [isEditing, setIsEditing] = useState(false);

  const form = useForm({
    initialValues: { ...userData },
    validate: {
      name: (value: string) =>
        value.length < 2 ? "El nombre es demasiado corto" : null,
      email: (value: string) =>
        /^\S+@\S+$/.test(value) ? null : "Email inválido",
      address: (value: string) =>
        value.length < 5 ? "Dirección inválida" : null,
    },
  });

  const handleSubmit = (values: typeof form.values) => {
    console.log(values);
    // Here you would typically update the user data in your backend
    setIsEditing(false);
  };

  return (
    <Tabs defaultValue="personal">
      <Tabs.List>
        <Tabs.Tab value="personal">Datos Personales</Tabs.Tab>
        <Tabs.Tab value="purchases">Historial de Compras</Tabs.Tab>
        <Tabs.Tab value="courses">Cursos Inscritos</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="personal">
        <Card withBorder mt="xl">
          <form onSubmit={form.onSubmit(handleSubmit)}>
            <TextInput
              label="Nombre"
              {...form.getInputProps("name")}
              disabled={!isEditing}
            />
            <TextInput
              label="Email"
              {...form.getInputProps("email")}
              disabled={!isEditing}
              mt="md"
            />
            <TextInput
              label="Dirección"
              {...form.getInputProps("address")}
              disabled={!isEditing}
              mt="md"
            />
            {isEditing ? (
              <Button type="submit" color="green" mt="xl">
                Guardar Cambios
              </Button>
            ) : (
              <Button onClick={() => setIsEditing(true)} mt="xl">
                Editar
              </Button>
            )}
          </form>
        </Card>
      </Tabs.Panel>

      <Tabs.Panel value="purchases">
        <Card withBorder mt="xl">
          <Table>
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Artículos</th>
                <th>Total</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              {purchaseHistory.map((purchase) => (
                <tr key={purchase.id}>
                  <td>{purchase.date}</td>
                  <td>{purchase.items}</td>
                  <td>${purchase.total.toFixed(2)}</td>
                  <td>
                    <Badge
                      color={purchase.status === "Entregado" ? "green" : "blue"}
                    >
                      {purchase.status}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card>
      </Tabs.Panel>

      <Tabs.Panel value="courses">
        <Card withBorder mt="xl">
          <Table>
            <thead>
              <tr>
                <th>Curso</th>
                <th>Progreso</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {enrolledCourses.map((course) => (
                <tr key={course.id}>
                  <td>{course.name}</td>
                  <td>{course.progress}</td>
                  <td>
                    <Button
                      component="a"
                      href={course.link}
                      variant="light"
                      size="xs"
                    >
                      Continuar Curso
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
