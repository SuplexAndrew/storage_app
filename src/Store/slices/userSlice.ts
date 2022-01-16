import {User} from "../../Models/User";
import {createSlice} from "@reduxjs/toolkit";
import {authService} from "../services/authService";

export interface UserState {
    user: User | null
    token: string
}

const initialState: UserState = {
    user: null,
    token: ''
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        hydrateUser: (state) => {
            const json = localStorage.getItem('user')
            if (!json) return
            const record = JSON.parse(json)
            state.user = record.user
            state.token = record.token
        },
        logout: (state) => {
            state.user = null
            state.token = ''
        }
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            authService.endpoints.login.matchFulfilled,
            (state, { payload }) => {
                state.token = payload.token
                state.user = payload.user
                localStorage.setItem('user', JSON.stringify(payload))
            }
        )
    },
})

export const {logout, hydrateUser} = userSlice.actions


export default userSlice.reducer;