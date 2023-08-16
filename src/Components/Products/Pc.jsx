import {
  Box,
  Grid,
  GridItem,
  Image,
  Text,
  ListItem,
  UnorderedList,
  Button,
  Flex,
  useToast,
  Heading,
  background,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Filter from "./Filter";
import { productAction } from "../../Redux/ProductData/productAction";
import { addToCart } from "../../Redux/ProductData/productAction";
import { Link } from "react-router-dom";

function Pc() {
  const [sort, setSort] = useState(null);
  const [filter, setFilter] = useState(null);
  const toast = useToast();

  const data = useSelector((state) => {
    return state.productReducer.data;
  });
  const cart = useSelector((state) => {
    return state.cartReducer.cart;
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productAction(sort, filter));
  }, [sort, filter]);

  return (
    <Box bg="#222">
      <Box bg="black" textAlign="center" p={10}>
        <Heading fontSize={20} color="white" mt={10}>
          PC
        </Heading>
        <Flex justifyContent="space-evenly" w="60%" m="auto" mt={5}>
          <Link>
            <Heading fontSize={12} color="#44d62c">
              LAPTOPS
            </Heading>
          </Link>
          <Link>
            <Heading fontSize={12} color="#999999">
              MONITORS
            </Heading>
          </Link>
          <Link>
            <Heading fontSize={12} color="#999999">
              DESKTOPS & CASES
            </Heading>
          </Link>
          <Link>
            <Heading fontSize={12} color="#999999">
              EGPUS
            </Heading>
          </Link>
          <Link>
            <Heading fontSize={12} color="#999999">
              ACCESSORIES
            </Heading>
          </Link>
          <Link>
            <Heading fontSize={12} color="#999999">
              ACCESSORIES
            </Heading>
          </Link>
          <Link>
            <Heading fontSize={12} color="#999999">
              COOLING
            </Heading>
          </Link>
        </Flex>
      </Box>

      <Flex justifyContent="center" mt="20px">
        <Box w="20%" h="500px" color="white" mr="10px">
          <Filter setSort={setSort} setFilter={setFilter} />
        </Box>
        <Grid w="70%" gridTemplateColumns="repeat(3,1fr)" gap="20px" ml="5%">
          {Array.isArray(data) && data.length > 0 &&
            data.map((e, index) => {
              return (
                <GridItem
                  key={index}
                  alignItems="center"
                  bg="#252525"
                  color="white"
                >
                  <Image src={e.img.img1} w="100%" m="auto"></Image>
                  <Box bg="black" p={5} textAlign="left">
                    <Text ml="-5px" fontSize={25}>
                      {e.title}
                    </Text>
                    <UnorderedList color="#999999" mt="20px" mb="20px">
                      <ListItem>{e.specifications.processor}</ListItem>
                      <ListItem>
                        {e.specifications.screen}&nbsp;inch Full HD
                      </ListItem>
                      <ListItem>{e.specifications.force}</ListItem>
                      <ListItem>{e.specifications.windows}</ListItem>
                      <ListItem>{e.specifications.force}</ListItem>
                    </UnorderedList>

                    <Link to={`/productDetails/${e.id}`}>View Details</Link>
                    <br></br>
                    <Text>US$&nbsp;{e.price} </Text>
                    <Text textDecor="line-through" color="#999999">
                      US$&nbsp;{e.cprice}{" "}
                    </Text>
                    <Button
                      bg="#44d62c"
                      mt="20px"
                      w="45%"
                      onClick={() => {
                        dispatch(addToCart(e));
                        toast({
                          title: "ADDED",
                          description: "Product Added To Cart",
                          status: "success",
                          duration: 9000,
                          isClosable: true,
                        });
                      }}
                    >
                      Add To Cart
                    </Button>
                  </Box>
                </GridItem>
              );
            })}
        </Grid>
      </Flex>
    </Box>
  );
}

export default Pc;
