import {
  GridItem,
  Box,
  Image,
  Heading,
  Center,
  Text,
  Button,
} from "@chakra-ui/react";

export function HomePageCard({ info }) {
  return (
    <GridItem height="90vh" width="100%">
      <Box zIndex={1} position="relative">
        <Image
          src={info.image}
          position="absolute"
          width="100%"
          objectFit="cover"
          objectPosition="center top"
          height="90vh"
        />
        <Box zIndex={2} position="relative" color="white" pt="50px">
          <Box width="100%">
            <Center>
              <Heading as="h2" size="xl" pb="5px">
                {info.heading1}
              </Heading>
            </Center>
            <Center>
              <Text fontSize="xl" pb="5px">
                {info.heading2}
              </Text>
            </Center>
            <Center>
              <Button
                colorScheme="white"
                variant="link"
                fontWeight="normal"
                fontSize="xl"
                pr="20px"
              >
                {info.button1}
              </Button>
              {info.button2 ? (
                <Button
                  colorScheme="white"
                  variant="link"
                  fontWeight="normal"
                  fontSize="xl"
                >
                  {info.button2}
                </Button>
              ) : null}
            </Center>
          </Box>
        </Box>
      </Box>
    </GridItem>
  );
}
