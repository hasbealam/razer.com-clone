import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  Divider,
  Icon,
  VStack,
  Text,
  Box,
  Image,
  DrawerCloseButton,
  Flex,
} from "@chakra-ui/react";
import { Header } from "./Header";
import { HamburgerIcon } from "@chakra-ui/icons";
import { HmBurgerSearch } from "./HmBurgerSearch";
import { OnclickCart } from "./OnclickCart";

export function HamBurger() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = React.useState("left");

  return (
    <div style={{ backgroundColor: "black" }}>
      <Flex justify="space-between">
        <Icon
          _hover={{ color: "rgb(69,214,43)", cursor: "pointer" }}
          ml={"20px"}
          color={"white"}
          boxSize="10"
          as={HamburgerIcon}
          colorScheme="blue"
          onClick={onOpen}
        ></Icon>
        <Box align="right" pt="5px" pr="20px">
          <OnclickCart />
        </Box>
      </Flex>

      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent bg={"#000000"}>
          <DrawerHeader borderBottomWidth="1px">
            <Box w="40px">
              <DrawerCloseButton mt={"15px"} boxSize="20px" color={"gray"} />
              <Image
                mt={-1}
                w="100%"
                src="https://upload.wikimedia.org/wikipedia/en/thumb/4/40/Razer_snake_logo.svg/1200px-Razer_snake_logo.svg.png"
                alt="razer.com"
                _hover={{ cursor: "pointer" }}
              />
            </Box>
          </DrawerHeader>
          <DrawerBody>
            <HmBurgerSearch />
            <VStack>
              <Divider orientation="horizontal" />
              <Text
                _hover={{ color: "rgb(69,214,43)", cursor: "pointer" }}
                fontSize="20px"
                color="white"
              >
                Store
              </Text>
              <Divider orientation="horizontal" />
              <Text
                _hover={{ color: "rgb(69,214,43)", cursor: "pointer" }}
                fontSize="20px"
                color="white"
              >
                PC
              </Text>
              <Divider orientation="horizontal" />
              <Text
                _hover={{ color: "rgb(69,214,43)", cursor: "pointer" }}
                fontSize="20px"
                color="white"
              >
                Console
              </Text>
              <Divider orientation="horizontal" />
              <Text
                _hover={{ color: "rgb(69,214,43)", cursor: "pointer" }}
                fontSize="20px"
                color="white"
              >
                Mobile
              </Text>
              <Divider orientation="horizontal" />
              <Text
                _hover={{ color: "rgb(69,214,43)", cursor: "pointer" }}
                fontSize="20px"
                color="white"
              >
                Lifestyle
              </Text>
              <Divider orientation="horizontal" />
              <Text
                _hover={{ color: "rgb(69,214,43)", cursor: "pointer" }}
                fontSize="20px"
                color="white"
              >
                Services
              </Text>
              <Divider orientation="horizontal" />
              <Text
                _hover={{ color: "rgb(69,214,43)", cursor: "pointer" }}
                fontSize="20px"
                color="white"
              >
                Community
              </Text>
              <Divider orientation="horizontal" />
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <Header />
    </div>
  );
}
