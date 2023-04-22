<<<<<<< HEAD
import { legacy_createStore,applyMiddleware,combineReducers} from "redux"
import { productReducer } from "./ProductData/productReducer";
import thunk from "redux-thunk";

const combineReducer =  combineReducers({
    productReducer,
})
export const store = legacy_createStore(combineReducer,applyMiddleware(thunk));
=======
import { legacy_createStore,applyMiddleware, combineReducers } from "redux"
import { productReducer } from "./ProductData/productReducer";
import thunk from "redux-thunk"

const rootReducer =  combineReducers({
    productReducer,
})
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

>>>>>>> 287f9277a1811edb51f688068817cd6f1460bed7
