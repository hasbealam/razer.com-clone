import { legacy_createStore,applyMiddleware,combineReducers} from "redux"
import { productReducer } from "./ProductData/productReducer";
import thunk from "redux-thunk";

const combineReducer =  combineReducers({
    productReducer,
})
export const store = legacy_createStore(combineReducer,applyMiddleware(thunk));
