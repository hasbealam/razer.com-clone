import { legacy_createStore,applyMiddleware, combineReducers } from "redux"
import { productReducer } from "./ProductData/productReducer";
import thunk from "redux-thunk"
import { reducer } from "./ProductDetails/reducer";
const rootReducer =  combineReducers({
    productReducer,
    reducer
})
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

