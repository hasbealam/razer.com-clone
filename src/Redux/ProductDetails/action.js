 import { GET_DATA } from "./actionType";
 import axios from "axios";
 const handlegetData=()=>{
    return(dispatch)=>{
        axios.get("http://localhost:3004/data").then((res)=>{
             console.log(res.data);
            dispatch({
              type:GET_DATA,
              payload:res.data
            })
          })
    }
 }
// const postData=(data)=>{
//   return(dispatch)=>{
//     axios.post("http://localhost:3004/cart",data).then((res)=>{

//     })
//   }
// }


 const addToCart=(object)=>{
    return(dispatch)=>{
        // console.log(object);
        axios.post(`http://localhost:3004/cart`,object).then((res)=>{
            // console.log(object)
        })
        axios.get(`http://localhost:3004/cart`).then((res)=>{
            console.log(res);
        })
    }
}
 export {handlegetData,addToCart};