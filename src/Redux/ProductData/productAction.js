import axios from "axios";

export const productAction= (sort,filter)=>{
    let url =
    "http://localhost:3004/data?"; 
  if (sort) {
    url += `&sort=price&order=${sort}`;
  }
  if (filter) {
    url += `&filter=${filter}`;
  }

    return (dispatch)=>{
         axios.get(url).then((res)=>{
            console.log(res.data);
            dispatch({type:"data",payload:res.data})
    }).catch((err)=>{
        console.log(err);
    })
    }
}

export const addToCart=(object)=>{
    return(dispatch)=>{
        // console.log(object);
        axios.post(`http://localhost:3004/cart`,object).then((res)=>{
            // console.log(object)
        })
        axios.get(`http://localhost:3004/cart`).then((res)=>{
            // console.log(res.data);
            dispatch({type:"cart",payload:res.data})
        })
    }
}