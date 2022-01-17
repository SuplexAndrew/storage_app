import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {User} from '../../Models/User'
import {baseUrl} from "./index";

export const authService = createApi({
    reducerPath: 'authService',
    baseQuery: fetchBaseQuery({baseUrl: `${baseUrl}/user`}),
    endpoints: (build) => ({
        login: build.mutation<{ user: User, token: string }, { login: string, password: string }>({
            query: (body) => ({
                url: `/login`,
                method: 'post',
                body
            })
        }),
        register: build.mutation<{ user: User, token: string }, { login: string, password: string }>({
            query: (body) => ({
                url: `/registration`,
                method: 'post',
                body
            })
        }),
    })
})

export const {useLoginMutation, useRegisterMutation} = authService