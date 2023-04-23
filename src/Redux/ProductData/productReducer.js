const initial = {
    data : []
}
const initialcart = {
    cart : []
}

export const productReducer=(state=initial,action)=>{
    if(action.type==="data") {
        return {...state,data:action.payload}
    }
    return state; 
}

export const cartReducer = (state=initialcart,action)=>{
    if(action.type==="cart") {
        return {...state,cart:action.payload}
    }
    return state;
} 
