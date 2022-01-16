export interface Item {
    id: number
    name: string
    price: number
    countInStorage: number
    createdAt?: Date
    updatedAt?: Date
}

export interface ItemDto {
    name: string
    price: number
    countInStorage: number
}
