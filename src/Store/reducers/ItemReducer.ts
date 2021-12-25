import {Reducer} from "react";
import {StorageState, StorageAction, StorageActionTypes} from "../../Models/Item";

const InitialState: StorageState = {
    items: null,
    loading: false,
    error: null,
}

export const ItemReducer: Reducer<StorageState, StorageAction> = (state = InitialState, action: StorageAction) => {
    switch (action.type) {
        case StorageActionTypes.FETCH_STORAGE:
            return {...state, loading: true, error: null}
        case StorageActionTypes.FETCH_STORAGE_SUCCESS:
            return {...state, items: action.payload, loading: false, error: null}
        case StorageActionTypes.FETCH_STORAGE_ERROR:
            return {...state, loading: false, error: action.payload}
        default:
            return state
    }
}