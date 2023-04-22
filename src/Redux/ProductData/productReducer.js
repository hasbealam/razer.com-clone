const initial = {
    data : []
}

export const productReducer=(state=initial,action)=>{
    if(action.type==="data") {
        return {...state,data:data}
    }
    return state; 
}