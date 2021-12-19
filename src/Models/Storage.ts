export interface Item {
    id: number
    name: string
    price: number
    countOnStorage: number,
    createdAt?: Date,
    updatedAt?: Date
}

export interface OrderItem {
    item:Item,
    count:number
}

export interface StorageState {
    items: Item[] | null | undefined
    ordered: OrderItem[]
    loading: boolean
    error: null | string
}

export enum StorageActionTypes {
    FETCH_STORAGE = 'FETCH_STORAGE',
    FETCH_STORAGE_ERROR = 'FETCH_STORAGE_ERROR',
    FETCH_STORAGE_SUCCESS = 'FETCH_STORAGE_SUCCESS',

    ADD_ORDER_ITEM = 'ADD_ORDER_ITEM',
    CHANGE_ORDER_ITEM_COUNT = 'CHANGE_ORDER_ITEM_COUNT',
    DELETE_ORDER_ITEM = 'DELETE_ORDER_ITEM',

    ADD_STORAGE_ITEM_SUCCESS = 'ADD_STORAGE_ITEM_SUCCESS',
    UPDATE_STORAGE_ITEM_SUCCESS = 'UPDATE_STORAGE_ITEM_SUCCESS',
    DELETE_STORAGE_ITEM_SUCCESS = 'DELETE_STORAGE_ITEM_SUCCESS',
}

interface FetchStorageAction {
    type: StorageActionTypes.FETCH_STORAGE;
    payload: string
}

interface FetchStorageErrorAction {
    type: StorageActionTypes.FETCH_STORAGE_ERROR;
    payload: null | string;
}

interface FetchStorageSuccessAction {
    type: StorageActionTypes.FETCH_STORAGE_SUCCESS;
    payload: any
}

interface FetchStorageAction {
    type: StorageActionTypes.FETCH_STORAGE;
    payload: string
}

interface AddOrderItemAction {
    type: StorageActionTypes.ADD_ORDER_ITEM;
    payload: OrderItem;
}

interface ChangeOrderItemCountAction {
    type: StorageActionTypes.CHANGE_ORDER_ITEM_COUNT;
    payload: OrderItem
}

interface DeleteOrderItemAction {
    type: StorageActionTypes.DELETE_ORDER_ITEM;
    payload: Item
}

interface AddStorageItemAction {
    type: StorageActionTypes.UPDATE_STORAGE_ITEM_SUCCESS;
    payload: Item
}

interface UpdateStorageItemAction {
    type: StorageActionTypes.UPDATE_STORAGE_ITEM_SUCCESS;
    payload: Item
}

interface DeleteStorageItemAction {
    type: StorageActionTypes.DELETE_STORAGE_ITEM_SUCCESS;
    payload: number
}

export type StorageAction =
    FetchStorageAction
    | FetchStorageErrorAction
    | FetchStorageSuccessAction
    | AddOrderItemAction
    | ChangeOrderItemCountAction
    | DeleteOrderItemAction
    | AddStorageItemAction
    | UpdateStorageItemAction
    | DeleteStorageItemAction