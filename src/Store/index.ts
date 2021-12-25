import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {OrderReducer} from "./reducers/OrderReducer";
import {ItemReducer} from "./reducers/ItemReducer";
import {UserReducer} from "./reducers/UserReducer";
import thunk from "redux-thunk";

export const rootReducer = combineReducers({items: ItemReducer, orders: OrderReducer, user: UserReducer})
export type RootState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer,  composeWithDevTools(applyMiddleware(thunk)));