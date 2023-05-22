import React from "react";
import {Link} from 'react-router-dom'
import {
  Box,
  Text,
  Flex,
  Wrap,
  WrapItem,
  Button,
  Image,
  useDisclosure,
} from "@chakra-ui/react";
import { SearchModal } from "./SearchModal";
import {OnclickCart} from "./OnclickCart"
import { Header } from "./Header";

function Navbar(props) {
  return (
    <div>
      <Box
        h={{
          sm: "120px",
          md: "100px",
          lg: "90px",
          xl: "3.75rem",
        }}
        bg={"black"}
        borderBottomColor="rgb(69,214,43)"
        borderBottomWidth="1px"
      >
        <Flex justifyContent={"center"} alignItems={"center"}>
          <Wrap pt={"17px"}>
            <WrapItem pr="60px">
              <Link to="./">
                <Box w="40px">
                  <Image
                    mt={-1}
                    w="100%"
                    src="https://upload.wikimedia.org/wikipedia/en/thumb/4/40/Razer_snake_logo.svg/1200px-Razer_snake_logo.svg.png"
                    alt="razer.com"
                    _hover={{ cursor: "pointer" }}
                  />
                </Box>
              </Link>
            </WrapItem>
            <WrapItem pr="60px">
              <Link to="./store">
                <Text
                  _hover={{ color: "white", cursor: "pointer" }}
                  color="#888888"
                >
                  Store
                </Text>
              </Link>
            </WrapItem>
            <WrapItem pr="60px">
              <Text
                _hover={{ color: "white", cursor: "pointer" }}
                color="#888888"
              >
                PC
              </Text>
            </WrapItem>
            <WrapItem pr="60px">
              <Text
                _hover={{ color: "white", cursor: "pointer" }}
                color="#888888"
              >
                Console
              </Text>
            </WrapItem>
            <WrapItem pr="60px">
              <Text
                _hover={{ color: "white", cursor: "pointer" }}
                color="#888888"
              >
                Mobile
              </Text>
            </WrapItem>
            <WrapItem pr="60px">
              <Text
                _hover={{ color: "white", cursor: "pointer" }}
                color="#888888"
              >
                LifeStyle
              </Text>
            </WrapItem>
            <WrapItem pr="60px">
              <Text
                _hover={{ color: "white", cursor: "pointer" }}
                color="#888888"
              >
                Services
              </Text>
            </WrapItem>
            <WrapItem pr="60px">
              <Text
                _hover={{ color: "white", cursor: "pointer" }}
                color="#888888"
              >
                Community
              </Text>
            </WrapItem>
            <WrapItem pr="60px">
              <Text
                _hover={{ color: "white", cursor: "pointer" }}
                color="#888888"
              >
                Support
              </Text>
            </WrapItem>
            <WrapItem pr="60px">
              <SearchModal />
            </WrapItem>
            <WrapItem pr="60px">
              <OnclickCart />
            </WrapItem>
          </Wrap>
        </Flex>
      </Box>
      <Header />
    </div>
  );
}

export { Navbar };


