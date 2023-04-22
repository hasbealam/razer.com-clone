import { legacy_createStore,applyMiddleware,combineReducers, combineReducers } from "redux"
import { productReducer } from "./ProductData/ProductReducer";
import {thunk} from "redux-thunk"

const combineReducers =  combineReducers({
    productReducer,
})
export const store = legacy_createStore(combineReducers,applyMiddleware(thunk));
