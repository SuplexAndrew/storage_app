import {Item} from "../../Models/Item";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Order, OrderItem} from "../../Models/Order";
import {orderService} from "../services/orderService";

export interface OrderState {
    orderedItems: OrderItem[],
    orders: Order[]
}

const initialState: OrderState = {
    orderedItems: [],
    orders: []
}

export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        addToOrder: (state, action: PayloadAction<Item>) => {
            const item = action.payload
            const existedItem = state.orderedItems.find(orderItem => orderItem.item.id === item.id)
            if (existedItem) {
                existedItem.count++
            } else {
                state.orderedItems.push({item, count: 1})

            }
        },
        changeOrderItemCount: (state, action: PayloadAction<{ changedItem:OrderItem, newCount:number }>) => {
            const {changedItem, newCount} = action.payload
            if (newCount < 0) return;
            const existedItem = state.orderedItems.find(orderItem => changedItem.item.id === orderItem.item.id)
            if (existedItem) {
                existedItem.count = newCount
            }
        },
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            orderService.endpoints.createOrder.matchFulfilled,
            (state ) => {
                state.orderedItems = []
            }
        )
    },
})

export const {addToOrder, changeOrderItemCount} = orderSlice.actions

export default orderSlice.reducer;