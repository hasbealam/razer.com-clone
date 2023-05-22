import { Box,Text,Flex,Button } from '@chakra-ui/react';
import React from 'react';

function Nav(props) {
    return (
        
          <Box bg="#101010" h="56px"  justifyContent="space-between" w="100%"  >
         <Flex justifyContent="space-between" pt="19px">
            <Text color="white" fontSize="15px">RAZER BASILISK V3 X HYPERSPEED</Text>
            <Flex justify="space-between">
                
                <Button variant='link' p size="sm" fontSize="14px" color="#888">Overview</Button>
                <Button variant='link' pr="50px" size="sm" fontSize="14px" color="#888">Tech Specs</Button>
            </Flex>
         </Flex>
        </Box>
        
        
    );
}

export default Nav;