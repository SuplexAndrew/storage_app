import {Dispatch} from "redux";
import {LoginDto, UserAction, UserActionTypes} from "../../../Models/User";
import Api from "../../../Api/Api";

export const Login = (data: LoginDto) => {
    return async (dispatch: Dispatch<UserAction>) => {
        dispatch({type: UserActionTypes.LOGIN_USER, payload: data})
        try {
            const res = await Api.login(data)

            dispatch({
                type: UserActionTypes.LOGIN_SUCCESS,
                payload: res
            })

        } catch (err: any) {
            dispatch({
                type: UserActionTypes.LOGIN_ERROR,
                payload: err
            })
        }
    }
}