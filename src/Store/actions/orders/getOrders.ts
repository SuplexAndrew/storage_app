import {Dispatch} from "redux";
import {OrderActionTypes, OrderAction} from "../../../Models/Order";
import Api from "../../../Api/Api";

export const getOrders = () => {
    return async (dispatch: Dispatch<OrderAction>) => {
        dispatch({type: OrderActionTypes.FETCH_ORDERS})
        try {
            const res = await Api.getOrders()
            dispatch({
                type: OrderActionTypes.FETCH_ORDERS_SUCCESS,
                payload: res
            })

        } catch (err: any) {
            dispatch({
                type: OrderActionTypes.FETCH_ORDERS_ERROR,
                payload: err
            })
        }
    }
}