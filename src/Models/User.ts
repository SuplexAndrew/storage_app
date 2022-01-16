export interface LoginDto {
    login: string
    password: string
}

export interface Role {
    id: number
    name: string
    value: number
}

export interface User {
    id: number
    login: string
    roles: Role[]
}