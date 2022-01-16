import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {Order, OrderItem} from "../../Models/Order";
import {RootState} from "../index";

export const orderService = createApi({
    reducerPath: 'orderService',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000/orders',
        prepareHeaders: (headers, {getState}) => {
            const token = (getState() as RootState).user.token;
            if (token) {
                headers.set("authorization", `Bearer ${token}`);
            }
            return headers;
        }
    }),
    endpoints: (build) => ({
        getOrders: build.query<Order[], void>({
            query: () => ({
                url: `/get`,
            })
        }),
        createOrder: build.mutation<void, OrderItem[]>({
            query: (body) => ({
                url: `/add`,
                method: 'POST',
                body: body.map(({item, count}) => ({itemId: item.id, count}))
            })
        }),
    })
})

export const {useGetOrdersQuery, useCreateOrderMutation} = orderService