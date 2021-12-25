import axios from "axios";
import {LoginDto, User} from "../Models/User";
import {Item, ItemDto} from "../Models/Item";
import {OrderItem} from "../Models/Order";

class Api {
    path = 'http://localhost:5000/'
    jwt = localStorage.getItem('jwt')

    async login(LoginData: LoginDto): Promise<User | undefined> {
        const res = await axios.post(`${this.path}user/login`, LoginData, {
            headers: {"Content-Type": "application/json"},
        })
        localStorage.setItem('jwt', res?.data.token)

        return res.data.user
    }

    async getItems(): Promise<Item[] | undefined> {
        const res = await axios.get(`${this.path}items/get`, {
            headers: {"Authorization": `Bearer ${this.jwt}`}
        })

        return res.data
    }

    async getOrders(): Promise<OrderItem[] | undefined> {
        const res = await axios.get(`${this.path}orders/get`, {
            headers: {"Authorization": `Bearer ${this.jwt}`}
        })

        return res.data
    }

    async createOrders(orderItems: OrderItem[]): Promise<OrderItem[] | undefined> {
        const res = await axios.post(`${this.path}orders/add`, orderItems, {
            headers: {"Content-Type": "application/json", "Authorization": `Bearer ${this.jwt}`}
        })

        return res.data
    }

    async createItem(item: ItemDto): Promise<void> {
        const res = await axios.post(`${this.path}items/add`, item, {
            headers: {"Content-Type": "application/json", "Authorization": `Bearer ${this.jwt}`}
        })

        return res.data
    }

    async updateItem(itemId: number, item: ItemDto): Promise<void> {
        const res = await axios.put(`${this.path}items/update?itemId=${itemId}`, item, {
            headers: {"Content-Type": "application/json", "Authorization": `Bearer ${this.jwt}`}
        })

        return res.data
    }

    async deleteItem(itemId: number): Promise<void> {
        const res = await axios.delete(`${this.path}items/create?itemId=${itemId}`, {
            headers: {"Content-Type": "application/json", "Authorization": `Bearer ${this.jwt}`}
        })

        return res.data
    }
}

export default new Api()