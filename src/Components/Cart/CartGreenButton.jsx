import { Button } from "@chakra-ui/react";

export function CartGreenButton({ t, w, onClick }) {
  return (
    <Button bg="#44d62c" color="black" size="md" w={w} onClick={onClick}>
      {t}
    </Button>
  );
}
