import {LoginDto, User} from "../Models/User";
import axios from "axios";
import {Item} from "../Models/Storage";

class Api {
    path = 'http://localhost:5000/'

    async login(LoginData: LoginDto): Promise<User | undefined> {
        const res = await axios.post<User>(`${this.path}user/login`, LoginData,{
            headers: {"Content-Type": "application/json"},
        })

        return res.data
    }

    async getItems(): Promise<Item[] | undefined> {
        const res = await axios.get<Item[]>(`${this.path}items/get`)

        return res.data
    }
}

export default new Api()