import React from 'react';
import { Box,Text} from '@chakra-ui/react';
import Nav from './Nav';
import { useEffect } from 'react';
import ImageComp from './Image';
import Main from './main';
import Details from './Details';
import {handlegetData} from "..//../Redux/ProductDetails/action"
import {useDispatch,useSelector} from "react-redux";
function ProductsDetails() {
  
  const dispatch=useDispatch();
      useEffect(()=>{
        // const res1= fetch("http://localhost:3000/data")
        dispatch(handlegetData())
      },[])
    return (
        <Box bg="black" >
         <Nav/>
        
          <Main />
         <Details/>
        
        </Box>
    );
}

export default ProductsDetails;