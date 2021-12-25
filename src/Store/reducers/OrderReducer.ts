import {Reducer} from "react";
import {OrderAction, OrderActionTypes, OrderState} from "../../Models/Order";

const InitialState: OrderState = {
    ordered: [],
    loading: false,
    error: null,
}

export const OrderReducer: Reducer<OrderState, OrderAction> = (state = InitialState, action: OrderAction) => {
    switch (action.type) {
        case OrderActionTypes.ADD_ORDER_ITEM:
            console.log(action.payload)
            const addedItemIndex = state.ordered.findIndex(({item}) => item === action.payload.item)
            if (addedItemIndex === -1) {
                return {
                    ...state,
                    ordered: [...state.ordered, action.payload]
                }
            } else {
                state.ordered[addedItemIndex].count++
                return {...state, ordered: [...state.ordered]}
            }
        case OrderActionTypes.CHANGE_ORDER_ITEM_COUNT:
            const itemIndex = state.ordered.findIndex(({item}) => item === action.payload.item)
            state.ordered[itemIndex] = action.payload
            console.log(action.payload)
            return {...state, ordered: [...state.ordered]}
        case OrderActionTypes.DELETE_ORDER_ITEM:
            return {
                ...state,
                ordered: [...state.ordered.splice(state.ordered.findIndex(({item}) => item === action.payload), 1)]
            }
        default:
            return state
    }
}