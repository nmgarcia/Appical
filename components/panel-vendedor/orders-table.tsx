"use client";

import { useState, useEffect } from "react";
import {
  Table,
  Button,
  Modal,
  Select,
  TextInput,
  NumberInput,
  MultiSelect,
  Group,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { type Order } from "@/types/order";
import { OrderStatus } from "@/types/order";
import { orderService } from "@/services/orderService";
import { userService } from "@/services/userService";
import { productService } from "@/services/productService";

const orderStatuses = Object.values(OrderStatus);

const products = [
  { value: "1", label: "Semillas de Maíz Premium" },
  { value: "2", label: "Fertilizante Orgánico" },
];

const clients = [
  { value: "1", label: "Restaurante El Sabor" },
  { value: "2", label: "Granja Los Girasoles" },
  { value: "3", label: "Verdulería Frescura" },
];

export default function OrdersTable() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [users, setUsers] = useState<{ value: string; label: string }[]>([]);
  const [products, setProducts] = useState<{ value: string; label: string }[]>(
    []
  );
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isStatusModalOpen, setIsStatusModalOpen] = useState(false);
  const [editingOrder, setEditingOrder] = useState<any | null>(null);

  const form = useForm<Omit<Order, "id">>({
    initialValues: {
      date: "",
      client: { id: "", name: "", email: "", role: { id: "", name: "" } },
      items: [],
      total: 0,
      status: OrderStatus.PENDING,
    },
  });

  useEffect(() => {
    loadOrders();
    loadUsers();
    loadProducts();
  }, []);

  const loadOrders = async () => {
    const data = await orderService.getOrders();
    setOrders(data);
  };

  const loadUsers = async () => {
    const data = await userService.getUsers();
    setUsers(data.map((user: any) => ({ value: user.id, label: user.name })));
  };

  const loadProducts = async () => {
    const data = await productService.getProducts();
    setProducts(
      data.map((product) => ({ value: product.id, label: product.name }))
    );
  };

  const handleCreateOrder = async (values: Omit<Order, "id">) => {
    await orderService.createOrder(values);
    setIsCreateModalOpen(false);
    loadOrders();
  };

  const handleEditOrder = (order: Order) => {
    setEditingOrder(order);
    form.setValues(order);
    setIsEditModalOpen(true);
  };

  const handleSaveEdit = async (values: Omit<Order, "id">) => {
    if (editingOrder) {
      await orderService.updateOrder(editingOrder.id, values);
      setIsEditModalOpen(false);
      loadOrders();
    }
  };

  const handleUpdateStatus = (order: Order) => {
    setEditingOrder(order);
    setIsStatusModalOpen(true);
  };

  const handleSaveStatus = async (status: OrderStatus) => {
    if (editingOrder) {
      await orderService.updateOrder(editingOrder.id, { status });
      setIsStatusModalOpen(false);
      loadOrders();
    }
  };

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
              <td>{order.client.name}</td>
              <td>{order.items.map((x) => x.product.name).join(", ")}</td>
              <td>${order.total}</td>
              <td>{order.status}</td>
              <td>
                <Button
                  onClick={() => handleEditOrder(order)}
                  variant="light"
                  size="xs"
                  mr="xs"
                >
                  Editar
                </Button>
                <Button
                  onClick={() => handleUpdateStatus(order)}
                  variant="light"
                  size="xs"
                >
                  Actualizar Estado
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal
        opened={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        title="Crear Pedido"
      >
        <form onSubmit={form.onSubmit(handleCreateOrder)}>
          <TextInput
            label="Fecha"
            type="date"
            {...form.getInputProps("date")}
          />
          <Select
            label="Cliente"
            data={clients}
            {...form.getInputProps("client")}
            mt="sm"
          />
          <MultiSelect
            label="Artículos"
            data={products}
            {...form.getInputProps("items")}
            mt="sm"
          />
          <NumberInput label="Total" {...form.getInputProps("total")} mt="sm" />
          <Group mt="xl">
            <Button type="submit">Crear</Button>
            <Button variant="light" onClick={() => setIsCreateModalOpen(false)}>
              Cancelar
            </Button>
          </Group>
        </form>
      </Modal>

      <Modal
        opened={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        title="Editar Pedido"
      >
        <form onSubmit={form.onSubmit(handleSaveEdit)}>
          <TextInput
            label="Fecha"
            type="date"
            {...form.getInputProps("date")}
          />
          <Select
            label="Cliente"
            data={clients}
            {...form.getInputProps("client")}
            mt="sm"
          />
          <MultiSelect
            label="Artículos"
            data={products}
            {...form.getInputProps("items")}
            mt="sm"
          />
          <NumberInput label="Total" {...form.getInputProps("total")} mt="sm" />
          <Select
            label="Estado"
            data={orderStatuses}
            {...form.getInputProps("status")}
            mt="sm"
          />
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
          onChange={(value: any) => handleSaveStatus(value)}
        />
      </Modal>
    </>
  );
}
