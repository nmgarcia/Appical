"use client";

import { useState, useEffect } from "react";
import {
  Table,
  Button,
  Modal,
  Select,
  TextInput,
  NumberInput,
  Group,
  Text,
  Card,
  Badge,
  Divider,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { type Order, OrderStatus, type OrderItem } from "@/types/order";
import { orderService } from "@/services/orderService";
import { userService } from "@/services/userService";
import { productService } from "@/services/productService";
import { useAuth } from "@/contexts/auth-context";
import type { Product } from "@/types/product";
import { Trash2, Plus } from "lucide-react";
import { User } from "@/types/user";

const orderStatuses = Object.values(OrderStatus);

export default function OrdersTable() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [availableProducts, setAvailableProducts] = useState<Product[]>([]);
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const [orderItems, setOrderItems] = useState<OrderItem[]>([]);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isStatusModalOpen, setIsStatusModalOpen] = useState(false);
  const [editingOrder, setEditingOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product>();

  // Obtener el usuario actual del contexto de autenticación
  const { user } = useAuth();

  const form = useForm({
    initialValues: {
      date: new Date().toISOString().split("T")[0],
      clientId: "",
      status: OrderStatus.PENDING,
      sellerId: user?.id || "",
    },
  });

  useEffect(() => {
    if (user?.id) {
      loadOrders();
      loadUsers();
      loadProducts();
    }
  }, [user]);

  const loadOrders = async () => {
    setLoading(true);
    setError(null);
    try {
      // Filtrar para obtener solo los pedidos del vendedor actual
      const data = await orderService.getOrders({ sellerId: user?.id });
      setOrders(data);
    } catch (err) {
      console.error("Error al cargar pedidos:", err);
      setError(
        "No se pudieron cargar los pedidos. Por favor, intenta de nuevo."
      );
    } finally {
      setLoading(false);
    }
  };

  const loadUsers = async () => {
    try {
      const data = await userService.getUsers({
        role: "67c98fa2ab5a32162ae5b5b7",
      });
      setUsers(data);
    } catch (err) {
      console.error("Error al cargar usuarios:", err);
    }
  };

  const loadProducts = async () => {
    try {
      // Cargar solo los productos del vendedor actual
      const data = await productService.getProducts({ sellerId: user?.id });
      setAvailableProducts(data);
    } catch (err) {
      console.error("Error al cargar productos:", err);
    }
  };

  const handleCreateOrder = () => {
    form.setValues({
      date: new Date().toISOString().split("T")[0],
      clientId: "",
      status: OrderStatus.PENDING,
      sellerId: user?.id || "",
    });
    setSelectedProducts([]);
    setOrderItems([]);
    setIsCreateModalOpen(true);
  };

  const handleAddProduct = () => {
    if (!selectedProduct) return;

    const productToAdd = availableProducts.find(
      (p) => p._id === selectedProduct._id
    );
    if (!productToAdd) return;

    // Verificar si el producto ya está en la lista
    if (selectedProducts.some((p) => p._id === selectedProduct._id)) {
      setError("Este producto ya está en la lista");
      return;
    }

    setSelectedProducts([...selectedProducts, productToAdd]);

    // Crear un nuevo OrderItem con valores predeterminados
    const newOrderItem: OrderItem = {
      product: productToAdd,
      quantity: 1,
      price: productToAdd.basePrice,
    };

    setOrderItems([...orderItems, newOrderItem]);
    setSelectedProduct(undefined);
  };

  const handleRemoveProduct = (productId: string) => {
    setSelectedProducts(selectedProducts.filter((p) => p._id !== productId));
    setOrderItems(orderItems.filter((item) => item.product._id !== productId));
  };

  const updateOrderItemQuantity = (productId: string, quantity: number) => {
    setOrderItems(
      orderItems.map((item) =>
        item.product._id === productId ? { ...item, quantity: quantity } : item
      )
    );
  };

  const updateOrderItemPrice = (productId: string, price: number) => {
    setOrderItems(
      orderItems.map((item) =>
        item.product._id === productId ? { ...item, price: price } : item
      )
    );
  };

  const calculateTotal = () => {
    return orderItems.reduce(
      (sum, item) => sum + item.quantity * item.price,
      0
    );
  };

  const handleSaveCreate = async (values: typeof form.values) => {
    if (orderItems.length === 0) {
      setError("Debe agregar al menos un producto al pedido");
      return;
    }

    setLoading(true);
    setError(null);
    try {
      // Buscar el cliente seleccionado
      const selectedClient = await userService.getUserById(values.clientId);

      // Crear el objeto de pedido
      const orderData: Omit<Order, "_id"> = {
        date: values.date,
        client: selectedClient,
        items: orderItems,
        total: calculateTotal(),
        status: values.status,
        sellerId: user?.id || "",
      };

      await orderService.createOrder(orderData);
      setIsCreateModalOpen(false);
      loadOrders();
    } catch (err) {
      console.error("Error al crear pedido:", err);
      setError("No se pudo crear el pedido. Por favor, intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  const handleEditOrder = (order: Order) => {
    setEditingOrder(order);
    form.setValues({
      date: order.date,
      clientId: order.client._id,
      status: order.status,
      sellerId: order.sellerId || user?.id || "",
    });

    // Cargar los productos y OrderItems del pedido
    setSelectedProducts(order.items.map((item) => item.product));
    setOrderItems(order.items);

    setIsEditModalOpen(true);
  };

  const handleSaveEdit = async (values: typeof form.values) => {
    if (!editingOrder) return;

    if (orderItems.length === 0) {
      setError("Debe agregar al menos un producto al pedido");
      return;
    }

    setLoading(true);
    setError(null);
    try {
      // Buscar el cliente seleccionado
      const selectedClient = await userService.getUserById(values.clientId);

      // Crear el objeto de pedido actualizado
      const orderData: Omit<Order, "_id"> = {
        date: values.date,
        client: selectedClient,
        items: orderItems,
        total: calculateTotal(),
        status: values.status,
        sellerId: editingOrder.sellerId || user?.id || "",
      };

      await orderService.updateOrder(editingOrder._id, orderData);
      setIsEditModalOpen(false);
      loadOrders();
    } catch (err) {
      console.error("Error al actualizar pedido:", err);
      setError("No se pudo actualizar el pedido. Por favor, intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateStatus = (order: Order) => {
    setEditingOrder(order);
    setIsStatusModalOpen(true);
  };

  const handleSaveStatus = async (status: OrderStatus) => {
    if (!editingOrder) return;

    setLoading(true);
    setError(null);
    try {
      await orderService.updateOrder(editingOrder._id, { status });
      setIsStatusModalOpen(false);
      loadOrders();
    } catch (err) {
      console.error("Error al actualizar estado del pedido:", err);
      setError(
        "No se pudo actualizar el estado del pedido. Por favor, intenta de nuevo."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Button onClick={handleCreateOrder} mb="md" loading={loading}>
        Crear Pedido
      </Button>

      {error && (
        <Text color="red" mb="md">
          {error}
        </Text>
      )}

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
            <tr key={order._id}>
              <td>{order.date}</td>
              <td>{order.client.name}</td>
              <td>
                {order.items.map((item) => (
                  <div key={item.product._id}>
                    {item.product.name} ({item.quantity} x $
                    {item.price.toFixed(2)})
                  </div>
                ))}
              </td>
              <td>${order.total.toFixed(2)}</td>
              <td>
                <Badge
                  color={
                    order.status === OrderStatus.DELIVERED
                      ? "green"
                      : order.status === OrderStatus.CANCELED
                      ? "red"
                      : order.status === OrderStatus.ON_THE_WAY
                      ? "blue"
                      : "yellow"
                  }
                >
                  {order.status}
                </Badge>
              </td>
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
          {orders.length === 0 && !loading && (
            <tr>
              <td colSpan={6} style={{ textAlign: "center" }}>
                No hay pedidos disponibles
              </td>
            </tr>
          )}
        </tbody>
      </Table>

      {/* Modal para crear pedido */}
      <Modal
        opened={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        title="Crear Pedido"
        size="lg"
      >
        <form onSubmit={form.onSubmit(handleSaveCreate)}>
          <TextInput
            label="Fecha"
            type="date"
            {...form.getInputProps("date")}
            required
          />

          <Select
            label="Cliente"
            data={users.map((u) => ({ value: u._id, label: u.name }))}
            {...form.getInputProps("clientId")}
            mt="sm"
            required
            searchable
            placeholder="Seleccione un cliente"
          />

          <Divider
            my="md"
            label="Productos del pedido"
            labelPosition="center"
          />

          <Group mb="md">
            <Select
              label="Agregar producto"
              data={availableProducts.map((p) => ({
                value: p._id,
                label: p.name,
              }))}
              value={selectedProduct?._id}
              onChange={(value) => {
                const product = availableProducts.find((p) => p._id === value);
                setSelectedProduct(product);
              }}
              searchable
              clearable
              placeholder="Seleccione un producto"
              style={{ flex: 1 }}
            />
            <Button onClick={handleAddProduct} mt={25}>
              <Plus size={16} />
            </Button>
          </Group>

          {/* Lista de productos seleccionados */}
          {selectedProducts.length > 0 ? (
            <div>
              {selectedProducts.map((product, index) => {
                const orderItem = orderItems.find(
                  (item) => item.product._id === product._id
                );
                return (
                  <Card key={product._id} withBorder mb="sm" padding="sm">
                    <Group justify="space-between">
                      <Text fw={500}>{product.name}</Text>
                      <Button
                        variant="subtle"
                        color="red"
                        size="xs"
                        onClick={() => handleRemoveProduct(product._id)}
                      >
                        <Trash2 size={16} />
                      </Button>
                    </Group>
                    <Group mt="xs">
                      <NumberInput
                        label="Cantidad"
                        value={orderItem?.quantity || 1}
                        onChange={(val) =>
                          updateOrderItemQuantity(product._id, Number(val))
                        }
                        min={1}
                        max={product.stock || 999}
                        style={{ width: "45%" }}
                      />
                      <NumberInput
                        label="Precio unitario"
                        value={orderItem?.price || product.basePrice}
                        onChange={(val) =>
                          updateOrderItemPrice(product._id, Number(val))
                        }
                        min={0}
                        step={0.01}
                        style={{ width: "45%" }}
                      />
                    </Group>
                    <Text size="sm" mt="xs" style={{ textAlign: "right" }}>
                      Subtotal: $
                      {(
                        (orderItem?.quantity || 1) *
                        (orderItem?.price || product.basePrice)
                      ).toFixed(2)}
                    </Text>
                  </Card>
                );
              })}
              <Text fw={700} size="lg" mt="md" style={{ textAlign: "right" }}>
                Total: ${calculateTotal().toFixed(2)}
              </Text>
            </div>
          ) : (
            <Text color="dimmed" style={{ textAlign: "center" }} my="md">
              No hay productos seleccionados
            </Text>
          )}

          <Select
            label="Estado"
            data={orderStatuses}
            {...form.getInputProps("status")}
            mt="md"
            required
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
              Crear Pedido
            </Button>
            <Button
              variant="light"
              onClick={() => setIsCreateModalOpen(false)}
              disabled={loading}
            >
              Cancelar
            </Button>
          </Group>
        </form>
      </Modal>

      {/* Modal para editar pedido */}
      <Modal
        opened={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        title="Editar Pedido"
        size="lg"
      >
        <form onSubmit={form.onSubmit(handleSaveEdit)}>
          <TextInput
            label="Fecha"
            type="date"
            {...form.getInputProps("date")}
            required
          />

          <Select
            label="Cliente"
            data={users.map((u) => ({ value: u._id, label: u.name }))}
            {...form.getInputProps("clientId")}
            mt="sm"
            required
            searchable
            placeholder="Seleccione un cliente"
          />

          <Divider
            my="md"
            label="Productos del pedido"
            labelPosition="center"
          />

          <Group mb="md">
            <Select
              label="Agregar producto"
              data={availableProducts.map((p) => ({
                value: p._id,
                label: p.name,
              }))}
              value={selectedProduct?._id}
              onChange={(value) => {
                const product = availableProducts.find((p) => p._id === value);
                setSelectedProduct(product);
              }}
              searchable
              clearable
              placeholder="Seleccione un producto"
              style={{ flex: 1 }}
            />
            <Button onClick={handleAddProduct} mt={25}>
              <Plus size={16} />
            </Button>
          </Group>

          {/* Lista de productos seleccionados */}
          {selectedProducts.length > 0 ? (
            <div>
              {selectedProducts.map((product, index) => {
                const orderItem = orderItems.find(
                  (item) => item.product._id === product._id
                );
                return (
                  <Card key={product._id} withBorder mb="sm" padding="sm">
                    <Group justify="space-between">
                      <Text fw={500}>{product.name}</Text>
                      <Button
                        variant="subtle"
                        color="red"
                        size="xs"
                        onClick={() => handleRemoveProduct(product._id)}
                      >
                        <Trash2 size={16} />
                      </Button>
                    </Group>
                    <Group mt="xs">
                      <NumberInput
                        label="Cantidad"
                        value={orderItem?.quantity || 1}
                        onChange={(val) =>
                          updateOrderItemQuantity(product._id, Number(val))
                        }
                        min={1}
                        max={product.stock || 999}
                        style={{ width: "45%" }}
                      />
                      <NumberInput
                        label="Precio unitario"
                        value={orderItem?.price || product.basePrice}
                        onChange={(val) =>
                          updateOrderItemPrice(product._id, Number(val))
                        }
                        min={0}
                        step={0.01}
                        style={{ width: "45%" }}
                      />
                    </Group>
                    <Text size="sm" mt="xs" style={{ textAlign: "right" }}>
                      Subtotal: $
                      {(
                        (orderItem?.quantity || 1) *
                        (orderItem?.price || product.basePrice)
                      ).toFixed(2)}
                    </Text>
                  </Card>
                );
              })}
              <Text fw={700} size="lg" mt="md" style={{ textAlign: "right" }}>
                Total: ${calculateTotal().toFixed(2)}
              </Text>
            </div>
          ) : (
            <Text color="dimmed" style={{ textAlign: "center" }} my="md">
              No hay productos seleccionados
            </Text>
          )}

          <Select
            label="Estado"
            data={orderStatuses}
            {...form.getInputProps("status")}
            mt="md"
            required
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
              Guardar Cambios
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

      {/* Modal para actualizar estado */}
      <Modal
        opened={isStatusModalOpen}
        onClose={() => setIsStatusModalOpen(false)}
        title="Actualizar Estado del Pedido"
      >
        <Select
          label="Nuevo Estado"
          data={orderStatuses}
          value={editingOrder?.status}
          onChange={(value) => handleSaveStatus(value as OrderStatus)}
        />

        {error && (
          <Text color="red" size="sm" mt="sm">
            {error}
          </Text>
        )}

        <Group mt="xl">
          <Button
            onClick={() => setIsStatusModalOpen(false)}
            disabled={loading}
          >
            Cerrar
          </Button>
        </Group>
      </Modal>
    </>
  );
}
