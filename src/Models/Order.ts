import {Item} from "./Item";

export interface OrderItem {
    item: Item
    count: number
}

export interface OrderStatus {
    title: string
}

export interface Order {
    id: number
    items: OrderItem[]
    createdAt: Date
    status: OrderStatus
}