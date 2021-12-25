import {Dispatch} from "redux";
import {OrderActionTypes, OrderAction, OrderItem} from "../../../Models/Order";
import Api from "../../../Api/Api";
import {fetchItems} from '../items/fetchItems'
import {getOrders} from "./getOrders";

export const createItem = (orders: OrderItem[]) => {
    return async (dispatch: Dispatch<OrderAction>) => {
        try {
            await Api.createOrders(orders)
            fetchItems()
            getOrders()

        } catch (err: any) {
            dispatch({
                type: OrderActionTypes.FETCH_ORDERS_ERROR,
                payload: err
            })
        }
    }
}