import {
  Box,
  Text,
  Flex,
  Image,
  ListItem,
  UnorderedList,
  IconButton,
  Divider,
  Input,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  useToast,
  Button,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { CartGreenButton } from "./CartGreenButton";
import { useDispatch } from "react-redux";
import {
  CartBigWhiteText,
  CartWhiteHeading,
  CartGrayText,
  CartGreenLinkText,
  CartWhiteSmallText,
  CartBlueLinkText,
} from "./CartTextDecoration";
import { useSelector } from "react-redux";
export function CartProductCard({ item }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => {
    return state.cartReducer.cart;
  });

  const handleQuantity = (payload) => {
    const updatedCart = cartItems.map((product) => {
      return product.id == item.id
        ? { ...product, quantity: +product.quantity + payload }
        : product;
    });
    dispatch({ type: "cart", payload: updatedCart });
  };
  return (
    <Flex justify="space-between" p="20px 0px">
      <Flex width="60%">
        <Box mr="30px">
          <Image w="100px" src={item.img.img1} />
        </Box>
        <Box>
          <CartBigWhiteText t={item.title} />
          <UnorderedList>
            <ListItem>
              <CartGrayText t={item.specifications.force} />
            </ListItem>
            <ListItem>
              <CartGrayText t={item.specifications.processor} />
            </ListItem>
            <ListItem>
              <CartGrayText t={item.specifications.storage} />
            </ListItem>
          </UnorderedList>
        </Box>
      </Flex>
      <Flex w="30%" justify="space-between">
        <Flex>
          <Box>
            <IconButton
              variant="outline"
              colorScheme="black"
              icon={<AddIcon />}
              size="xs"
              onClick={() => {
                handleQuantity(1);
              }}
              isDisabled={item.quantity >= 5}
            />
          </Box>
          <Box w="40px" align="center">
            <Text>{item.quantity}</Text>
          </Box>
          <Box>
            <IconButton
              variant="outline"
              colorScheme="black"
              icon={<MinusIcon />}
              size="xs"
              onClick={() => {
                handleQuantity(-1);
              }}
              isDisabled={item.quantity <= 1}
            />
          </Box>
        </Flex>
        <Box>
          <CartBigWhiteText t={`US$${item.cprice}`} />
        </Box>
      </Flex>
    </Flex>
  );
}
