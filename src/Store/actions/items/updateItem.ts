import {Dispatch} from "redux";
import {StorageActionTypes, StorageAction, ItemDto} from "../../../Models/Item";
import Api from "../../../Api/Api";
import {fetchItems} from "./fetchItems";

export const updateItem = (itemId: number, item: ItemDto) => {
    return async (dispatch: Dispatch<StorageAction>) => {
        try {
            await Api.updateItem(itemId, item)
            fetchItems()

        } catch (err: any) {
            dispatch({
                type: StorageActionTypes.FETCH_STORAGE_ERROR,
                payload: err
            })
        }
    }
}