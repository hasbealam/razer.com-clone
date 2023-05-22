import { Text, Heading } from "@chakra-ui/react";

export function CartBigWhiteText({ t }) {
  return (
    <Text fontSize="2xl">
      {t}
    </Text>
  );
}

export function CartWhiteHeading({ t }) {
  return (
    <Heading as="h3" size="lg" color="white">
      {t}
    </Heading>
  );
}

export function CartGrayText({ t }) {
  return (
    <Text fontSize="s" color="#999">
      {t}
    </Text>
  );
}

export function CartGreenLinkText({ t }) {
  return (
    <Text
      _hover={{
        color: "#44d62c",
        cursor: "pointer",
      }}
      textDecoration="underline"
      fontSize="s"
      color="white"
    >
      {t}
    </Text>
  );
}

export function CartWhiteSmallText({ t }) {
  return (
    <Text fontSize="s" color="white">
      {t}
    </Text>
  );
}

export function CartBlueLinkText({ t }) {
  return (
    <Text
      _hover={{
        cursor: "pointer",
        textDecoration: "underline",
      }}
      fontSize="s"
      color="#25a7d0"
    >
      {t}
    </Text>
  );
}
