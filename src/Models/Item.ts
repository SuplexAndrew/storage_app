export interface Item {
    id: number
    name: string
    price: number
    countOnStorage: number
    createdAt?: Date
    updatedAt?: Date
}

export interface ItemDto {
    name: string
    price: number
    countOnStorage: number
}

export interface StorageState {
    items: Item[] | null | undefined
    loading: boolean
    error: null | string
}

export enum StorageActionTypes {
    FETCH_STORAGE = 'FETCH_STORAGE',
    FETCH_STORAGE_ERROR = 'FETCH_STORAGE_ERROR',
    FETCH_STORAGE_SUCCESS = 'FETCH_STORAGE_SUCCESS',

    ADD_STORAGE_ITEM_SUCCESS = 'ADD_STORAGE_ITEM_SUCCESS',
    UPDATE_STORAGE_ITEM_SUCCESS = 'UPDATE_STORAGE_ITEM_SUCCESS',
    DELETE_STORAGE_ITEM_SUCCESS = 'DELETE_STORAGE_ITEM_SUCCESS',
}

interface FetchStorageAction {
    type: StorageActionTypes.FETCH_STORAGE;
}

interface FetchStorageErrorAction {
    type: StorageActionTypes.FETCH_STORAGE_ERROR;
    payload: null | string;
}

interface FetchStorageSuccessAction {
    type: StorageActionTypes.FETCH_STORAGE_SUCCESS;
    payload: any
}

interface AddItemAction {
    type: StorageActionTypes.ADD_STORAGE_ITEM_SUCCESS;
    payload: Item
}

interface UpdateItemAction {
    type: StorageActionTypes.UPDATE_STORAGE_ITEM_SUCCESS;
    payload: Item
}

interface DeleteItemAction {
    type: StorageActionTypes.DELETE_STORAGE_ITEM_SUCCESS;
    payload: number
}

export type StorageAction =
    FetchStorageAction
    | FetchStorageErrorAction
    | FetchStorageSuccessAction
    | AddItemAction
    | UpdateItemAction
    | DeleteItemAction