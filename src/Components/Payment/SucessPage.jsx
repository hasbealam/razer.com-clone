import React from "react";
import { Heading, Container, Image, Text, Box } from "@chakra-ui/react";
import tictak from "..//../Images/PaymentPage/Tictak.png";

function SucessPage(props) {
  const total = localStorage.getItem("total");
  return (
    <div
      style={{
        backgroundImage:
          "url(https://razerid-assets.razerzone.com/static/media/serpents-eye-v2-20220906.dae1e41f.jpg)",
        backgroundPosition: "center top -150px",
        // move image 50px up from the center
      }}
    >
      <Box pt={"100px"} align={"center"}>
        <Box w={"70px"} mb="-50px">
          <Image py={"20px"} w={"100%"} src={tictak}></Image>
        </Box>
        <Box color={"white"} align={"center"} bg="#101010">
          <Box pt="25px">
            {/* <Box  w={"70px"}>
                 <Image py={"20px"} w={"100%"} src={tictak}></Image>
                 </Box> */}
            <Heading as="h4" size="md" pt="10px">
              Payment Sucessful
            </Heading>
            <Text color="#808080">Thank you for using Razer Gold.</Text>
            <Text color="#808080">
              Please keep this receipt for your own refrence. Here are the
              details of Your Rozer Gold Purchase.
            </Text>
          </Box>
          <Box w="65%" bg="#252525" borderRadius="lg">
            <Text pt={"20px"} ml={"20px"} textAlign={"start"}>
              TRANSACTION INFORMATION
            </Text>
            <Text ml={"20px"} textAlign={"start"} color="#808080" pb="20px">
              Payment Amount
            </Text>
            <Text mt={"-20px"} ml={"20px"} textAlign={"start"}>
              US${total}
            </Text>
            <Text ml={"20px"} textAlign={"start"} color="#808080" pb="20px">
              Payment Method
            </Text>
            <Text mt={"-20px"} ml={"20px"} textAlign={"start"} pb="20px">
              Credit Card
            </Text>
          </Box>
          <Box h="50px"></Box>
        </Box>
      </Box>
    </div>
  );
}

export { SucessPage };
