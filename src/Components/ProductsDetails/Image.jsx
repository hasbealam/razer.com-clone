

import React, { useEffect } from "react";
import { Flex, Box, Image, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
function ImageComp({ldata}) {
  const data = useSelector((state) => {
    return state.reducer.data;
  });
  const {id}=useParams()
  const imagarr = data.filter((ele, i) => {
    return ele.id == id;
  });
  const images = [];

  

  if (imagarr.length > 0) {
    images.push(imagarr[0].img.img1);
    images.push(imagarr[0].img.img2);
    images.push(imagarr[0].img.img3);
    images.push(imagarr[0].img.img4);
    images.push(imagarr[0].img.img5);
  }
  

  
  const [mainImage, setMainImage] = useState(
    imagarr.length > 0 && images[0] 
  );
  
  const handleClick = (image) => {
    setMainImage(image);
  };
  if(images.length >0){
    return (
      <Box>
        {
          imagarr.length > 0 &&
          <Box
          bgImage={images[0] }
          bgPosition="center"
          bgRepeat="no-repeat"
          bgSize="100%"
          textAlign="center"
          h="700px"
        >
  <Box mr={4} pt="50px">
            {imagarr.length > 0 &&
              images.map((image, index) => (
                <Box
                  pt="70px"
                  pl={4}
                  w={28}
                  h={24}
                  key={index}
                  mb={2}
                  cursor="pointer"
                  onClick={() => handleClick(image)}
                  borderColor="red"
                >
                  <Image
                    src={image}
                    w={24}
                    h={20}
                    border="1px"
                    borderColor="gray.200"
                  />
                  {/* CiDeliveryTruck */}
                </Box>
              ))}
          </Box>
        </Box>
        }
       
      </Box>
   
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
    
        
     
     
      );
  }else{
    <h2>not found</h2>
  }
  }
  

export default ImageComp;
