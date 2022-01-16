import {Item} from "../../Models/Item";
import {createSlice} from "@reduxjs/toolkit";
import {itemService} from "../services/itemService";

export interface ItemsState {
    items: Item[] | null
}

const initialState: ItemsState = {
    items: null
}

export const itemSlice = createSlice({
    name: 'item',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addMatcher(
            itemService.endpoints.getItems.matchFulfilled,
            (state, { payload }) => {
                state.items = payload
            }
        )
    },
})

export default itemSlice.reducer;