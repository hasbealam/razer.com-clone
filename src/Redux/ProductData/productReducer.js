const initial = {
    data : []
}

export const productReducer=(state=initial,action)=>{
    if(action.type==="data") {
        return {...state,data:action.payload}
    }
    return state; 
}