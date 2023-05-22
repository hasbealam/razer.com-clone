import {
  Box,
  Center,
  Text,
  VStack,
  Grid,
  Image,
  GridItem,
  Flex,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ProductPageSmallGrayText } from "./ProductPageTextDecoration";
import { ProductPageButton } from "./ProductPageTextDecoration";
import { ProductPageGrayText } from "./ProductPageTextDecoration";
export function ProductPageTextBox({ h, t }) {
  return (
    <Box bg="#111111">
      <VStack
        color="#44d62c"
        textAlign="center"
        pt="35" pb="45px"
        alignContent="center"
        w="70%"
        margin="auto"
      >
        <Text fontSize="4xl">{h}</Text>
        <ProductPageGrayText t={t} />
      </VStack>
    </Box>
  );
}

export function ProductPageCard({ img, h1, t }) {
  return (
    <GridItem
      color="white"
      bg="#111111"
      alignItems="center"
      borderBottom="1px solid #44d62c"
    >
      <Box bg="#1a1a1a">
        <Image src={img} w="100%" m="auto"></Image>
      </Box>
      <Box p="10px 0px 10px 10px">
        <Text fontSize={20}>{h1}</Text>
        <ProductPageSmallGrayText t={t} />
        <Link to="/laptops">
          <ProductPageButton />
        </Link>
      </Box>
    </GridItem>
  );
}
{/* <ProductPageCard img={""} 
h1={"DESKTOPS"} t={"Enthusia"} />;
<ProductPageTextBox h={"LAPTO"} t={""} />; */}
