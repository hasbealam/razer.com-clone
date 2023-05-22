import { Grid,Flex,Box,useBreakpointValue } from '@chakra-ui/react';
import React from 'react';
import ImageComp from './Image';
import CardComp from './Crad';

function Main({ldata}) {
    const isSmallScreen = useBreakpointValue({ base: false, md: true });
    if (isSmallScreen) {
    return (
         <Flex>
               
    
           <Box w="70%" mt="-56px">
            <ImageComp ldata={ldata}/>
            </Box>
           
           <CardComp w="30%" ldata={ldata}/> 
         </Flex>
    );
    }else{
        return(
            <Grid>
              <Box w="100%" mt="-56px">
            <ImageComp ldata={ldata}/>
            </Box>
           
           <CardComp w="100%" ldata={ldata}/>  
            </Grid>
        )
    }
}

export default Main;