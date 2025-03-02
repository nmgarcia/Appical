"use client"

import { useState } from "react"
import { Table, Button, Modal, Select, TextInput, NumberInput, MultiSelect, Group } from "@mantine/core"
import { useForm } from "@mantine/form"

// Datos mockeados
const initialOrders = [
  {
    id: "1",
    date: "2023-07-01",
    client: "Restaurante El Sabor",
    items: ["Semillas de Maíz Premium x2", "Fertilizante Orgánico x1"],
    total: 250,
    status: "Pendiente",
  },
  {
    id: "2",
    date: "2023-07-02",
    client: "Granja Los Girasoles",
    items: ["Fertilizante Orgánico x3"],
    total: 150,
    status: "En camino",
  },
]

const products = [
  { value: "1", label: "Semillas de Maíz Premium" },
  { value: "2", label: "Fertilizante Orgánico" },
]

const clients = [
  { value: "1", label: "Restaurante El Sabor" },
  { value: "2", label: "Granja Los Girasoles" },
  { value: "3", label: "Verdulería Frescura" },
]

const orderStatuses = ["Pendiente", "En preparación", "En camino", "Entregado", "Cancelado"]

export default function OrdersTable() {
  const [orders, setOrders] = useState(initialOrders)
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [isStatusModalOpen, setIsStatusModalOpen] = useState(false)
  const [editingOrder, setEditingOrder] = useState<any | null>(null)

  const form = useForm({
    initialValues: {
      date: "",
      client: "",
      items: [],
      total: 0,
      status: "Pendiente",
    },
  })

  const handleCreateOrder = (values: any) => {
    const newOrder = {
      id: (orders.length + 1).toString(),
      ...values,
      items: values.items.map((id: string) => products.find((p) => p.value === id)?.label),
    }
    setOrders([...orders, newOrder])
    setIsCreateModalOpen(false)
  }

  const handleEditOrder = (order: any) => {
    setEditingOrder(order)
    form.setValues({
      ...order,
      items: order.items.map((item: string) => products.find((p) => p.label === item.split(" x")[0])?.value),
    })
    setIsEditModalOpen(true)
  }

  const handleSaveEdit = (values: any) => {
    const updatedOrder = {
      ...editingOrder,
      ...values,
      items: values.items.map((id: string) => products.find((p) => p.value === id)?.label),
    }
    setOrders(orders.map((o) => (o.id === editingOrder.id ? updatedOrder : o)))
    setIsEditModalOpen(false)
  }

  const handleUpdateStatus = (order: any) => {
    setEditingOrder(order)
    setIsStatusModalOpen(true)
  }

  const handleSaveStatus = (status: string) => {
    setOrders(orders.map((o) => (o.id === editingOrder.id ? { ...o, status } : o)))
    setIsStatusModalOpen(false)
  }

  return (
    <>
      <Button onClick={() => setIsCreateModalOpen(true)} mb="md">
        Crear Pedido
      </Button>
      <Table>
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Cliente</th>
            <th>Artículos</th>
            <th>Total</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.date}</td>
              <td>{order.client}</td>
              <td>{order.items.join(", ")}</td>
              <td>${order.total}</td>
              <td>{order.status}</td>
              <td>
                <Button onClick={() => handleEditOrder(order)} variant="light" size="xs" mr="xs">
                  Editar
                </Button>
                <Button onClick={() => handleUpdateStatus(order)} variant="light" size="xs">
                  Actualizar Estado
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal opened={isCreateModalOpen} onClose={() => setIsCreateModalOpen(false)} title="Crear Pedido">
        <form onSubmit={form.onSubmit(handleCreateOrder)}>
          <TextInput label="Fecha" type="date" {...form.getInputProps("date")} />
          <Select label="Cliente" data={clients} {...form.getInputProps("client")} mt="sm" />
          <MultiSelect label="Artículos" data={products} {...form.getInputProps("items")} mt="sm" />
          <NumberInput label="Total" {...form.getInputProps("total")} mt="sm" />
          <Group mt="xl">
            <Button type="submit">Crear</Button>
            <Button variant="light" onClick={() => setIsCreateModalOpen(false)}>
              Cancelar
            </Button>
          </Group>
        </form>
      </Modal>

      <Modal opened={isEditModalOpen} onClose={() => setIsEditModalOpen(false)} title="Editar Pedido">
        <form onSubmit={form.onSubmit(handleSaveEdit)}>
          <TextInput label="Fecha" type="date" {...form.getInputProps("date")} />
          <Select label="Cliente" data={clients} {...form.getInputProps("client")} mt="sm" />
          <MultiSelect label="Artículos" data={products} {...form.getInputProps("items")} mt="sm" />
          <NumberInput label="Total" {...form.getInputProps("total")} mt="sm" />
          <Select label="Estado" data={orderStatuses} {...form.getInputProps("status")} mt="sm" />
          <Group mt="xl">
            <Button type="submit">Guardar</Button>
            <Button variant="light" onClick={() => setIsEditModalOpen(false)}>
              Cancelar
            </Button>
          </Group>
        </form>
      </Modal>

      <Modal
        opened={isStatusModalOpen}
        onClose={() => setIsStatusModalOpen(false)}
        title="Actualizar Estado del Pedido"
      >
        <Select
          label="Nuevo Estado"
          data={orderStatuses}
          value={editingOrder?.status}
          onChange={(value) => handleSaveStatus(value as string)}
        />
      </Modal>
    </>
  )
}

