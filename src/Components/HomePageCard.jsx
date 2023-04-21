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
export function HomePageCard({ info }) {
  return (
    <GridItem height={{ base: "70vh", md: "70vh", lg: "80vh" }} width="100%">
      <Box zIndex={1} position="relative">
        <Image
          src={info.image}
          position="absolute"
          width="100%"
          objectFit="cover"
          objectPosition="center top"
          height={{ base: "70vh", md: "70vh", lg: "80vh" }}
        />
        <Box zIndex={2} position="relative" color="white" pt="50px">
          <Box width="100%">
            <Heading as="h2" size="xl" pb="5px" align="center">
              {info.heading1}
            </Heading>
            <Text fontSize="xl" pb="5px" align="center">
              {info.heading2}
            </Text>
            <Center>
              <Button
                colorScheme="white"
                variant="link"
                fontWeight="normal"
                fontSize="lg"
                pr="20px"
              >
                {info.button1}
                <ChevronRightIcon color="green" pt="4px" boxSize={6} />
              </Button>
              {info.button2 ? (
                <Button
                  colorScheme="white"
                  variant="link"
                  fontWeight="normal"
                  fontSize="lg"
                >
                  {info.button2}
                  <ChevronRightIcon color="green" pt="4px" boxSize={6} />
                </Button>
              ) : null}
            </Center>
          </Box>
        </Box>
      </Box>
    </GridItem>
  );
}
