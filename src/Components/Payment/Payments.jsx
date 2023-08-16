import React from "react";
import { ArrowRightIcon } from '@chakra-ui/icons'
import { Otp } from "./Otp";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Input,
  Select,
  Radio,
  Flex,
  Text,
  Stack,
  RadioGroup,
  Divider,
  Table,
  Thead,
  Tbody,
  Button,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Center
} from "@chakra-ui/react";

function Payments(props) {
  const total = localStorage.getItem("total");
  const items = localStorage.getItem("iteems");
  return (
    <div
      style={{
        backgroundImage:
          "url(https://razerid-assets.razerzone.com/static/media/serpents-eye-v2-20220906.dae1e41f.jpg)",
        backgroundPosition: "center top -150px",
        height: "200vh", // move image 50px up from the center
      }}
    >
      {/* <Flex> */}
      <Flex justify={"center"}>
        <Box mt={"100px"} w={"500px"}>
          <Accordion defaultIndex={[0]} allowMultiple>
            <AccordionItem color="white" bg="rgb(69,214,43)">
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Adress
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel color="white" bg="black" pb={4}>
                <Input
                  focusBorderColor="rgb(69,214,43)"
                  type="text"
                  placeholder="Mobile No."
                />
                <Input
                  my={"20px"}
                  focusBorderColor="rgb(69,214,43)"
                  type="text"
                  placeholder="Adress Line 1"
                />
                <Input
                  focusBorderColor="rgb(69,214,43)"
                  type="text"
                  placeholder="Adress Line 2(optional)"
                />
                <Input
                  my={"20px"}
                  focusBorderColor="rgb(69,214,43)"
                  type="text"
                  placeholder="Apt, Building"
                />
                <Input
                  focusBorderColor="rgb(69,214,43)"
                  type="text"
                  placeholder="Town/city"
                />
                <Input
                  my={"20px"}
                  focusBorderColor="rgb(69,214,43)"
                  type="text"
                  placeholder="Pin Code"
                />
                <Input
                  // my={"px"}
                  focusBorderColor="rgb(69,214,43)"
                  type="text"
                  placeholder="Country"
                />
                {/* <Select placeholder="Select Country">
                  <option value="option1">US</option>
                  <option value="option2">India</option>
                  <option value="option3">China</option>
                  <option value="option3">Rusia</option>
                  <option value="option3">Japan</option>
                </Select> */}
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem color="white" bg="rgb(69,214,43)">
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Payment
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel color="white" bg="black" pb={4}>
                <Text mb={"-20px"}>Enter Debit / Credit / ATM card no.</Text>
                <Input
                  my={"20px"}
                  focusBorderColor="rgb(69,214,43)"
                  type="text"
                  placeholder="Enter card No."
                />
                <Flex gap={"20px"}>
                  <Input
                    focusBorderColor="rgb(69,214,43)"
                    type="month"
                    placeholder="Expiry Date"
                  />
                  <Input
                    focusBorderColor="rgb(69,214,43)"
                    type="password"
                    placeholder="CVV"
                  />
                </Flex>
                <RadioGroup mt={"20px"} defaultValue="2">
                  <Stack spacing={5} direction="column">
                    <Radio colorScheme="green" value="1">
                      Net banking
                    </Radio>
                    <Radio colorScheme="green" value="2">
                      UPI(Paytm, Phonepe, Googlepe)
                    </Radio>
                  </Stack>
                </RadioGroup>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
        <Box
          color={"white"}
          mt={"100px"}
          ml={"100px"}
          w="600px"
          h="450px"
          bg="black"
          borderRadius="lg"
          p="20px"
        >
          {/* <Text>Your Cart</Text>
          <Divider orientation="horizontal" /> */}
          <TableContainer w={"100%"}>
            <Table>
              <TableCaption></TableCaption>
              <Tbody>
                <Tr>
                  <Td>Your Cart</Td>
                  <Td></Td>
                </Tr>
                <Tr>
                  <Td>Total Items</Td>
                  <Td>{items}</Td>
                </Tr>
                <Tr>
                  <Td>Subtotal(Excludes local tax)</Td>
                  <Td>US${total}</Td>
                </Tr>
                <Tr>
                  <Td>Local Taxes</Td>
                  <Td>To be calculated</Td>
                </Tr>
                <Tr>
                  <Td>Shiping</Td>
                  <Td>US$5</Td>
                </Tr>
                <Tr>
                  <Td>Total</Td>
                  <Td>US${+total + +5}</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
          <Center mt="-20px">
            <Otp />
          </Center>
        </Box>
      </Flex>

      {/* </Flex> */}
    </div>
  );
}

export { Payments };
