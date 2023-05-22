import React from "react";
import { css } from "@emotion/react";

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Divider,
  Icon,
  Center,
  Text,
} from "@chakra-ui/react";
import { VscAccount } from "react-icons/vsc";
import { FiShoppingCart } from "react-icons/fi";
import { SlDiamond } from "react-icons/sl";
import { BsBox, BsBoxArrowRight } from "react-icons/bs";
import { BsFillCartPlusFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutSucess } from "../../Redux/ProductData/productAction";
export function OnclickCart() {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const [borderColor, setBorderColor] = React.useState("#888");
  const [animationInterval, setAnimationInterval] = React.useState(null);
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => {
    return state.productReducer.isAuth;
  });

  React.useEffect(() => {
    if (!isOpen && animationInterval) {
      clearInterval(animationInterval);
      setAnimationInterval(null);
    }
  }, [isOpen]);
  const handleLogout = () => {
    dispatch(logoutSucess());
  };
  return (
    <>
      <Icon
        as={BsFillCartPlusFill}
        _hover={{ color: "white", cursor: "pointer" }}
        color="#888888"
        boxSize="6"
        ref={btnRef}
        onClick={onOpen}
      ></Icon>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent
          bg="#222"
          css={css`
            border: 2px solid ${borderColor};
            transition: border-color 1s linear;
          `}
        >
          <DrawerCloseButton color="#888" />
          <DrawerHeader>
            <Center>
              <Text color="#888" mt="20px">
                Dashboard
              </Text>
            </Center>
          </DrawerHeader>

          <DrawerBody>
            <Link to="/cart">
              <Button
                _hover={{ color: "rgb(69,214,43)" }}
                color="white"
                leftIcon={<FiShoppingCart boxSize={6} />}
                variant="liqued"
                onClick={onClose}
              >
                Cart
              </Button>
            </Link>
            <Divider color="#888" orientation="horizontal" />
            <Button
              _hover={{ color: "rgb(69,214,43)" }}
              color="white"
              leftIcon={<BsBox boxSize={6} />}
              variant="liqued"
              onClick={onClose}
            >
              Orders
            </Button>
            <Divider orientation="horizontal" />
            <Button
              _hover={{ color: "rgb(69,214,43)" }}
              color="white"
              leftIcon={<VscAccount boxSize={6} />}
              variant="liqued"
              onClick={onClose}
            >
              Account
            </Button>
            <Divider orientation="horizontal" />
            <Button
              _hover={{ color: "rgb(69,214,43)" }}
              color="white"
              leftIcon={<SlDiamond boxSize={6} />}
              variant="liqued"
              onClick={onClose}
            >
              RazerStore Rewars
            </Button>
            <Divider orientation="horizontal" />
            {isAuth ? (
              <Button
                _hover={{ color: "rgb(69,214,43)" }}
                color="white"
                leftIcon={<BsBoxArrowRight boxSize={6} />}
                variant="liqued"
                onClick={handleLogout}
              >
                Log out
              </Button>
            ) : (
              <Button
                _hover={{ color: "rgb(69,214,43)" }}
                color="white"
                leftIcon={<BsBoxArrowRight boxSize={6} />}
                variant="liqued"
                onClick={onClose}
              >
                <Link to={"/signin"}>Log in</Link>
              </Button>
            )}
          </DrawerBody>

          <DrawerFooter>
            {/* <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button> */}
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
