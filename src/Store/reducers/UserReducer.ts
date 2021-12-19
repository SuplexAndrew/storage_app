import {Reducer} from "react";
import {User, UserAction, UserActionTypes, UserState} from "../../Models/User";

const InitialState: UserState = {
    user: {id: 1, login: '123', role: 1},
    loading: false,
    error: null,
}

export const UserReducer:Reducer<UserState, UserAction> = (state = InitialState, action: UserAction) => {
    switch (action.type) {
        case UserActionTypes.LOGIN_USER:
            return {loading: true, error: null, user: state.user}
        case UserActionTypes.LOGIN_ERROR:
            return {loading: false, error: action.payload, user: null}
        case UserActionTypes.LOGIN_SUCCESS:
            return {loading: false, error: null, user: action.payload as User}
        case UserActionTypes.LOGOUT_USER:
            return {loading: false, error: null, user: null}
        default:
            return state
    }
}