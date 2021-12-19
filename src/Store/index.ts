import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {StorageReducer} from "./reducers/StorageReducer";
import {UserReducer} from "./reducers/UserReducer";
import thunk from "redux-thunk";

export const rootReducer = combineReducers({storage: StorageReducer, user: UserReducer})
export type RootState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer,  composeWithDevTools(applyMiddleware(thunk)));