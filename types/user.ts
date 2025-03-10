import type { Role } from "./role"

export interface User {
  _id: string
  name: string
  email: string
  role: Role
  address?: string
  phone?: string
}

