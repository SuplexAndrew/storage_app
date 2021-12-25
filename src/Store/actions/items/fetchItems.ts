import {Dispatch} from "redux";
import {StorageActionTypes, StorageAction} from "../../../Models/Item";
import Api from "../../../Api/Api";

export const fetchItems = () => {
    return async (dispatch: Dispatch<StorageAction>) => {
        dispatch({type: StorageActionTypes.FETCH_STORAGE, payload: 'jwt'})
        try {
            const res = await Api.getItems()
            dispatch({
                type: StorageActionTypes.FETCH_STORAGE_SUCCESS,
                payload: res
            })

        } catch (err: any) {
            dispatch({
                type: StorageActionTypes.FETCH_STORAGE_ERROR,
                payload: err
            })
        }
    }
}