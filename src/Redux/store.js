import { legacy_createStore,applyMiddleware, combineReducers } from "redux"
import { productReducer } from "./ProductData/productReducer";
import { cartReducer } from "./ProductData/productReducer";
import thunk from "redux-thunk"

const rootReducer =  combineReducers({
    productReducer,
    cartReducer,
})
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

