import React from "react";
import { Divider, Icon, List } from "@chakra-ui/react";
import { CiDeliveryTruck } from "react-icons/ci";
import {
  Flex,
  Box,
  Center,
  Spacer,
  Text,
  Heading,
  UnorderedList,
  ListItem,
  Image,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { addToCart } from "..//../Redux/ProductDetails/action";
function CardComp() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState("");
  const { id } = useParams();
  const handleModelOpen = () => {
    setIsModalOpen(true);
  };
  const dispatch = useDispatch();
  const SERVER_URL = process.env.REACT_APP_URL;

  useEffect(() => {
    const getData = () => {
      axios.get(`${SERVER_URL}data/${id}`).then((res) => {
        setData(res.data);
      });
    };
    getData();
  }, []);
  const handleCard = () => {
    dispatch(addToCart(data));
  };

  if (data != "") {
    return (
      <Box
        mt="56px"
        bg="black"
        w={{ base: "100%", md: "70%", lg: "30%" }}
        px="30px"
      >
        <Box mt="30px">
          <Text color="#44B10B" fontSize="21px" fontWeight="12px" align="left">
            {data.title}
          </Text>
          <Text color="white" fontSize="14px" align="left">
            Customizable Wireless Gaming Mouse with RGB Lighting
          </Text>
          <Text color="White" fontSize="21px" fontWeight="12px" align="left">
            US${data.price}
          </Text>
          <UnorderedList color="#888" align="left">
            <ListItem color="#888">{data.specifications.processor}</ListItem>
            <ListItem color="#888">{data.specifications.windows}</ListItem>
            <ListItem color="#888">{data.specifications.screen}inch</ListItem>
          </UnorderedList>

          <Box align="left" pt="20px">
            <Flex>
              <Image src="https://www.razer.com/assets/images/icons/shipping_icon.svg" />
              <Text pl="5px" color="white">
                Order now, delivered by:
              </Text>
            </Flex>
            <List>
              <ListItem color="#888">Apr 25 - Apr 27 — US$20.00</ListItem>
              <ListItem color="#888">Apr 27 - May 01 — US$10.00</ListItem>
            </List>

            <Button variant="link" color="#44B10B" onClick={onOpen}>
              View Delivery Options
            </Button>
            <Modal isOpen={isOpen} onClose={onClose} size="xl">
              <ModalOverlay />
              <ModalContent bg="#252525">
                <ModalHeader
                  align="center"
                  color="white"
                  py="25px"
                  fontSize="2xl"
                >
                  Delivery Options
                </ModalHeader>
                <ModalCloseButton color="white" />
                <ModalBody align="center">
                  <Text color="white" pb="15px">
                    {data.title}
                  </Text>
                  <Box pb="20px">
                    <Text color="white">Express Shipping</Text>
                    <Text color="#888">Apr 25 - Apr 27</Text>
                    <Text color="white">US$20.00</Text>
                  </Box>
                  <Divider borderWidth="0.5px" />
                  <Box pb="20px" pt="10px">
                    <Text color="white">Standard Shipping</Text>
                    <Text color="#888">Apr 27 - May 01</Text>
                    <Text color="white">US$10.00</Text>
                  </Box>
                </ModalBody>
              </ModalContent>
            </Modal>
          </Box>
          <Box align="left" pt="20px" pb="10px">
            <Flex>
              <Image src="https://www.razer.com/assets/images/icons/icon-store.svg" />
              <Text pl="5px" color="white">
                Pickup at RazerStore:
              </Text>
            </Flex>
            <List>
              <ListItem color="#888">
                Available stocks in 11 RazerStores
              </ListItem>
            </List>
            {/* //Second */}
            <Button
              variant="link"
              color="#44B10B"
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              onClick={handleModelOpen}
            >
              View RazerStore Locations
            </Button>
            <Modal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              size="xl"
            >
              <ModalOverlay />
              <ModalContent bg="#252525">
                <ModalHeader
                  align="center"
                  color="white"
                  pt="25px"
                  pb="5px"
                  fontSize="2xl"
                >
                  RazerStore Locations
                </ModalHeader>
                <Text color="white" align="center" pb="20px">
                  for Razer Basilisk V3 X HyperSpeed
                </Text>
                <ModalCloseButton color="white" />
                <ModalBody align="center">
                  <Text color="white">From Today*, Apr 20</Text>
                  <Text color="#888">
                    *Order must be collected within 14 days
                  </Text>
                  <Text color="#888" pb="15px">
                    No delivery charge for pickup
                  </Text>
                  <Flex pb="20px" justifyContent="space-evenly">
                    <Button
                      variant="link"
                      color="#44B10B"
                      alignItems="flex-start"
                    >
                      RAZERSTORE AUSTIN
                    </Button>
                    <Box>
                      <Text color="white">11410 Century Oaks Terrace</Text>
                      <Text color="#888">
                        {" "}
                        Suite 125, H08, Austin, TX 78758
                      </Text>
                    </Box>
                  </Flex>
                  <Divider />
                  <Flex py="20px" justifyContent="space-evenly">
                    <Button
                      variant="link"
                      color="#44B10B"
                      alignItems="flex-start"
                    >
                      RAZERSTORE KING OF PRUSSIA
                    </Button>
                    <Box>
                      <Text color="white">160 North Gulph Road</Text>
                      <Text color="#888">
                        Suite 2352, King of Prussia, PA 19406
                      </Text>
                    </Box>
                  </Flex>
                  <Divider />
                  <Flex py="20px" justifyContent="space-evenly">
                    <Button
                      variant="link"
                      color="#44B10B"
                      alignItems="flex-start"
                    >
                      RAZERSTORE LAS VEGAS
                    </Button>
                    <Box>
                      <Text color="white">The Linq Promenade 3545 S</Text>
                      <Text color="#888">
                        Las Vegas Blvd L-27, Las Vegas, NV 89109
                      </Text>
                    </Box>
                  </Flex>
                  <Divider />

                  <Flex py="20px" justifyContent="space-evenly">
                    <Button
                      variant="link"
                      color="#44B10B"
                      alignItems="flex-start"
                    >
                      RAZERSTORE LOS ANGELES
                    </Button>
                    <Box>
                      <Text color="white">10250 Santa Monica Blvd</Text>
                      <Text color="#888">
                        #2460 Level 2, Los Angeles, CA 90067
                      </Text>
                    </Box>
                  </Flex>
                  <Divider />

                  <Flex pb="10px" py="20px" justifyContent="space-evenly">
                    <Button
                      variant="link"
                      color="#44B10B"
                      alignItems="flex-start"
                    >
                      RAZERSTORE MIAMI
                    </Button>
                    <Box>
                      <Text color="white">7535 North Kendall Drive</Text>
                      <Text color="#888">Suite 1510A, Miami, FL 33156</Text>
                    </Box>
                  </Flex>
                </ModalBody>
              </ModalContent>
            </Modal>
          </Box>
          <Button bg="#44B10B" w="100%" onClick={handleCard}>
            ADD TO CART
          </Button>
        </Box>
      </Box>
    );
  } else {
    return <h2>not found</h2>;
  }
}

export default CardComp;
