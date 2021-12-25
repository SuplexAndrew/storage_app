import {Item} from "./Item";

export interface OrderItem {
    item: Item,
    count: number
}

export interface OrderState {
    ordered: OrderItem[]
    loading: boolean
    error: null | string
}

export enum OrderActionTypes {
    FETCH_ORDERS = 'FETCH_ORDERS',
    FETCH_ORDERS_ERROR = 'FETCH_ORDERS_ERROR',
    FETCH_ORDERS_SUCCESS = 'FETCH_ORDERS_SUCCESS',
    ADD_ORDER_ITEM = 'ADD_ORDER_ITEM',
    CHANGE_ORDER_ITEM_COUNT = 'CHANGE_ORDER_ITEM_COUNT',
    DELETE_ORDER_ITEM = 'DELETE_ORDER_ITEM',
}

interface FetchOrdersAction {
    type: OrderActionTypes.FETCH_ORDERS;
}

interface FetchOrdersErrorAction {
    type: OrderActionTypes.FETCH_ORDERS_ERROR;
    payload: null | string;
}

interface FetchOrdersSuccessAction {
    type: OrderActionTypes.FETCH_ORDERS_SUCCESS;
    payload: any
}

interface AddOrderItemAction {
    type: OrderActionTypes.ADD_ORDER_ITEM;
    payload: OrderItem;
}

interface ChangeOrderItemCountAction {
    type: OrderActionTypes.CHANGE_ORDER_ITEM_COUNT;
    payload: OrderItem
}

interface DeleteOrderItemAction {
    type: OrderActionTypes.DELETE_ORDER_ITEM;
    payload: Item
}

export type OrderAction =
    FetchOrdersAction
    | FetchOrdersErrorAction
    | FetchOrdersSuccessAction
    | AddOrderItemAction
    | ChangeOrderItemCountAction
    | DeleteOrderItemAction