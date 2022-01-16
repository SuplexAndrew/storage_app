import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {itemService} from "./services/itemService";
import {orderService} from "./services/orderService";
import {authService} from "./services/authService";
import {userSlice} from "./slices/userSlice";
import {itemSlice} from "./slices/itemSlice";
import {orderSlice} from "./slices/orderSlice";
import {useDispatch} from "react-redux";

export const store = configureStore({
    reducer: combineReducers({
        [userSlice.name]: userSlice.reducer,
        [itemSlice.name]: itemSlice.reducer,
        [orderSlice.name]: orderSlice.reducer,
        [itemService.reducerPath]: itemService.reducer,
        [orderService.reducerPath]: orderService.reducer,
        [authService.reducerPath]: authService.reducer,
    }),
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(itemService.middleware, orderService.middleware, authService.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()