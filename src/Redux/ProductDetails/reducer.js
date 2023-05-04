import { GET_DATA } from "./actionType";
const intial={
    data:[]
}
const reducer=(state=intial,action)=>{
    if(action.type=== GET_DATA){
        return{
            ...state,
            data:action.payload
        }
    }
    return state; 
}

export {reducer};