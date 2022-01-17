import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {Item, ItemDto} from "../../Models/Item";
import {RootState} from "../index";
import {baseUrl} from "./index";

export const itemService = createApi({
    reducerPath: 'itemService',
    baseQuery: fetchBaseQuery({
        baseUrl: `${baseUrl}/items`,
        prepareHeaders: (headers, {getState}) => {
            const token = (getState() as RootState).user.token;
            if (token) {
                headers.set("authorization", `Bearer ${token}`);
            }
            return headers;
        }
    }),
    tagTypes: ['Item'],
    endpoints: (build) => ({
        getItems: build.query<Item[], void>({
            query: () => ({
                url: `/get`,
                providesTags: ['Item']
            })
        }),
        createItem: build.mutation<Item[], ItemDto>({
            query: (body) => ({
                url: `/add`,
                method: 'POST',
                body,
                invalidatesTags: ['Item']
            })
        }),
        updateItem: build.mutation<Item[], Item>({
            query: (body) => ({
                url: `/update`,
                method: 'POST',
                body,
                invalidatesTags: ['Item']
            })
        }),
        deleteItem: build.mutation<Item[], number>({
            query: (itemId) => ({
                url: `/delete/${itemId}`,
                method: 'DELETE',
                invalidatesTags: ['Item']
            })
        }),
    })
})

export const {useGetItemsQuery, useCreateItemMutation, useUpdateItemMutation, useDeleteItemMutation} = itemService