import { Category } from "./category"

export interface Product {
  _id: string
  name: string
  basePrice: number
  prices?: Price[]
  images: string[]
  seller?: string
  sellerLocation?: string
  category: Category
  condition: string
  sellerId:string
  stock?: number 
  description?: string
  technicalDetails?: TechnicalDetail[] 
  reviews?: Review[]
}

export interface Review {
  id: number
  user: string
  rating: number
  comment: string
}

export interface TechnicalDetail {
  label: string
  value: string
}

export interface Price {
  role: string
  price: number
}

