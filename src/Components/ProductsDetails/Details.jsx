import {
  Box,
  Heading,
  Text,
  Flex,
  Spacer,
  Divider,
  UnorderedList,
  ListItem,
  Collapse,
  Button,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import React from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { useParams } from "react-router";
function Details() {
  const [show, setShow] = useState(false);
  const [data, setData] = useState("");
  const SERVER_URL = process.env.REACT_APP_URL;

  const { id } = useParams();
  useEffect(() => {
    const getData = () => {
      axios.get(`${SERVER_URL}data/${id}`).then((res) => {
        setData(res.data);
      });
    };
    getData();
  }, []);
  const handleToggle = () => setShow(!show);
  if (data != "") {
    return (
      <Box bg="#252525">
        <Box px="70px" pt="40px" align="left">
          <Text
            color="white"
            fontSize="21px"
            fontWeight="12px"
            align="left"
            pb="40px"
          >
            TECH SPECS
          </Text>
          <Box pb="15px">
            <Flex w="50%" pb="15px">
              <Text color="white" fontWeight="bold">
                FORM FACTOR
              </Text>

              <Text color="#888" pl="230px">
                Right-handed
              </Text>
            </Flex>
            <Divider borderWidth="1px" />
          </Box>

          <Box pb="15px">
            <Flex w="50%" pb="15px">
              <Text color="white" fontWeight="bold">
                PROCESSOR
              </Text>

              <UnorderedList color="#888" align="left" pl="230px">
                <ListItem color="#888">
                  {data.specifications.processor}
                </ListItem>
                <ListItem color="#888">{data.specifications.windows}</ListItem>
              </UnorderedList>
            </Flex>
            <Divider borderWidth="1px" />
          </Box>

          <Box pb="15px">
            <Flex w="50%" pb="15px">
              <Text color="white" fontWeight="bold">
                BATTERY LIFE
              </Text>

              <UnorderedList color="#888" align="left" pl="247px">
                <ListItem color="#888">Up to 8 hours (HyperSpeed)</ListItem>
                <ListItem color="#888">Up to 10 hours (normal)</ListItem>
              </UnorderedList>
            </Flex>
            <Divider borderWidth="1px" />
          </Box>

          <Collapse startingHeight={20} in={show}>
            <Box pb="15px">
              <Flex w="50%" pb="15px">
                <Text color="white" fontWeight="bold">
                  RGB LIGHTING
                </Text>

                <Text color="#888" pl="220px">
                  Razer Chroma™ RGB
                </Text>
              </Flex>
              <Divider borderWidth="0.7px" />
            </Box>

            <Box pb="15px">
              <Flex w="50%" pb="15px">
                <Text color="white" fontWeight="bold">
                  FORCE
                </Text>

                <Text color="#888" pl="270px">
                  {data.specifications.force}
                </Text>
              </Flex>
              <Divider borderWidth="0.7px" />
            </Box>

            <Box pb="15px">
              <Flex w="50%" pb="15px">
                <Text color="white" fontWeight="bold">
                  STORAGE
                </Text>

                <Text color="#888" pl="150px">
                  {data.specifications.storage}
                </Text>
              </Flex>
              <Divider borderWidth="0.7px" />
            </Box>

            <Box pb="15px">
              <Flex w="50%" pb="15px">
                <Text color="white" fontWeight="bold">
                  COLOR
                </Text>

                <Text color="#888" pl="200px">
                  {data.color}
                </Text>
              </Flex>
              <Divider borderWidth="0.7px" />
            </Box>

            <Box pb="15px">
              <Flex w="50%" pb="15px">
                <Text color="white" fontWeight="bold">
                  BOX CONTENTS
                </Text>

                <UnorderedList color="#888" align="left" pl="230px">
                  <ListItem color="#888">{data.title}</ListItem>
                  <ListItem color="#888">Wireless USB dongle</ListItem>
                  <ListItem color="#888"> 1 unit Charger</ListItem>
                  <ListItem color="#888">1x Laptop</ListItem>
                </UnorderedList>
              </Flex>
              <Divider borderWidth="1px" />
            </Box>
          </Collapse>
          <Button
            size="sm"
            onClick={handleToggle}
            mt="1rem"
            variant="link"
            pl="520px"
            pb="10px"
          >
            Show {show ? "Less" : "More"}
          </Button>
        </Box>

        <Box h="50px" bg="black"></Box>
      </Box>
    );
  } else {
    return <h2>not found</h2>;
  }
}

export default Details;
