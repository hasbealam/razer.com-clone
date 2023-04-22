import React from 'react';
import{Box, Button, Text,} from "@chakra-ui/react"
import { ChevronRightIcon } from '@chakra-ui/icons'

function Header(props) {
    return (
        <div>
            <Box
        bg="#555555"
        h={{
          sm: "100px",
          md: "70px",
          lg: "65px",
          xl: "55px",
          "2xl": "44px",
        }}
        display={["block", "block", "block", "flex"]}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Text color={"white"}>
          Unleash a new age of technology with an arsenal of cutting-edge
          innovations that will keep you ahead of the game.
        </Text>
        <Button rightIcon={<ChevronRightIcon />} mt="-12px" _hover={{color:"rgb(69,214,43)"}} colorScheme="black" size="sm">
          Shop Now
        </Button>
      </Box>
        </div>
    );
}

export {Header};