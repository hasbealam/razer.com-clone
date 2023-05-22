import { VStack, Grid } from "@chakra-ui/react";
import {
  GridItem,
  Box,
  Image,
  Heading,
  Center,
  Text,
  Button,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
export function ProductPageGrayText({ t }) {
  return (
    <Text fontSize="s" color="#999">
      {t}
    </Text>
  );
}
export function ProductPageSmallGrayText({ t }) {
  return (
    <Text fontSize={15} color="#999" pt="5px" pb="10px">
      {t}
    </Text>
  );
}
export function ProductPageButton() {
  return (
    <Button
      color="#44d62c"
      variant="link"
      fontWeight="normal"
      fontSize={15}
      pr="20px"
    >
      Learn More
      <ChevronRightIcon color="#44d62c" pt="4px" boxSize={5} />
    </Button>
  );
}
