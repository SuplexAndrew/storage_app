import {Reducer} from "react";
import {StorageState, StorageAction, StorageActionTypes} from "../../Models/Storage";

const InitialState: StorageState = {
    items: null,
    ordered: [],
    loading: false,
    error: null,
}

export const StorageReducer: Reducer<StorageState, StorageAction> = (state = InitialState, action: StorageAction) => {
    switch (action.type) {
        case StorageActionTypes.FETCH_STORAGE:
            return {...state, loading: true, error: null}
        case StorageActionTypes.FETCH_STORAGE_SUCCESS:
            return {...state, items: action.payload, loading: false, error: null}
        case StorageActionTypes.FETCH_STORAGE_ERROR:
            return {...state, loading: false, error: action.payload}
        case StorageActionTypes.ADD_ORDER_ITEM:
            console.log(action.payload)
            return {...state, ordered: [...state.ordered, action.payload]}
        case StorageActionTypes.CHANGE_ORDER_ITEM_COUNT:
            const itemIndex = state.ordered.indexOf(action.payload)
            state.ordered[itemIndex] = action.payload
            return {...state, ordered: [...state.ordered]}
        case StorageActionTypes.DELETE_ORDER_ITEM:
            return {
                ...state,
                ordered: [...state.ordered.splice(state.ordered.findIndex(({item}) => item === action.payload), 1)]
            }
        default:
            return state
    }
}