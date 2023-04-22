import { Text } from "@chakra-ui/react";

export function FooterWhiteHeading({ text }) {
  return (
    <Text
      fontSize="xs"
      _hover={{ cursor: "context-menu" }}
      color="white"
      pb="10px"
    >
      {text}
    </Text>
  );
}

export function FooterLinkText({ text }) {
  return (
    <Text
      _hover={{
        textDecoration: "underline",
        color: "white",
        cursor: "pointer",
      }}
      fontSize="xs"
      color="#999"
      pb="10px"
    >
      {text}
    </Text>
  );
}

export function FooterGreenText({ text }) {
  return (
    <Text fontSize={{base: "xs", md:"s", lg:"lg"}} color="#44d62c" pb="2px">
      {text}
    </Text>
  );
}

export function FooterGrayText({ text }) {
  return (
    <Text fontSize="xs" color="#999" pb="10px">
      {text}
    </Text>
  );
}
