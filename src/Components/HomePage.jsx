import {
  Grid,
  GridItem,
  Box,
  Image,
  Heading,
  Center,
  Text,
} from "@chakra-ui/react";

export function HomePage() {
  return (
    <Grid>
      <GridItem height="100vh" bg="green">
        {/* <Center> */}
        <Box position="relative" bg="blue">
          <Image
            src="https://assets3.razerzone.com/0EepezVe-6FlUi6JwYLqLbQvqfU=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh3a%2Fha8%2F9502272946206%2F230330-stream-controller-x-1500x1000-1.jpg"
            alt="Dan Abramov"
            position="absolute"
            height="700px"
          />
          <Box position="absolute" color="white">
            <Box width="1446px">
              <Center>
                <Heading as="h2" size="2xl" pb="10px">
                  RAZER STREAM CONTROLLER X
                </Heading>
              </Center>
              <Center>
                <Heading as="h3" size="lg">
                  INSTANT CONTROL. INFINITE CREATIVITY.
                </Heading>
              </Center>
              <Center>
                <Text fontSize="xl" pr="20px">Learn More </Text>
                <Text fontSize="xl">Buy </Text>
              </Center>
            </Box>
            {/* </Center> */}
          </Box>
        </Box>
        {/* </Center> */}
      </GridItem>
    </Grid>
  );
}
