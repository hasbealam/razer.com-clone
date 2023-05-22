import React from "react";
import { Box, Button, Text, Flex, Highlight } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

function Header(props) {
  return (
    <div>
      <Box
        bg="#555555"
        // h={{
        //   sm: "100px",
        //   md: "70px",
        //   lg: "65px",
        //   xl: "55px",
        //   "2xl": "44px",
        // }}
        p="10px 20px"
        // display={["block", "block", "block", "flex"]}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Flex justify="center" align="center">
          <Text color={"white"} align="center">
            Unleash a new age of technology with an arsenal of cutting-edge
            innovations that will keep you ahead of the game.
            <span
              style={{
                marginLeft: "5px",
                hover: { color: "rgb(69,214,43)" },
                color: "white",
                cursor: "pointer",
              }}
            >
              Shop Now <ChevronRightIcon />
            </span>
          </Text>

          {/* <Button
            rightIcon={<ChevronRightIcon />}
            _hover={{ color: "rgb(69,214,43)" }}
            colorScheme="black"
            size="sm"
          >
            Shop Now
          </Button> */}
        </Flex>
      </Box>
    </div>
  );
}

export { Header };
