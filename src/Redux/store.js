import { legacy_createStore,applyMiddleware, combineReducers } from "redux"
import { productReducer, cartReducer } from "./ProductData/productReducer";
import thunk from "redux-thunk"
import { reducer } from "./ProductDetails/reducer";
import logger from 'redux-logger'

const rootReducer =  combineReducers({
    productReducer,
    cartReducer,
    reducer
})
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk, logger));

