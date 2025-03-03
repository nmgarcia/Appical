import type { Product } from "./product"
import type { User } from "./user"

export interface Order {
  id: string
  date: string
  client: User
  items: OrderItem[]
  total: number
  status: OrderStatus
}

export interface OrderItem {
  product: Product
  quantity: number
  price: number
}

export enum OrderStatus {
  PENDING = "Pendiente",
  PREPARING = "En preparación",
  ON_THE_WAY = "En camino",
  DELIVERED = "Entregado",
  CANCELED = "Cancelado"
}

