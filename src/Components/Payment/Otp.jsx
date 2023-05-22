import React from "react";
import {
  Box,
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  HStack,
  PinInput,
  PinInputField,
  ModalFooter, Center
} from "@chakra-ui/react";
import { ArrowRightIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom"; 
function Otp(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);
  return (
    <div>
      <Link to="/successfulPayment">
        <Button
          mt={4}
          onClick={onOpen}
          rightIcon={<ArrowRightIcon />}
          bg="#44d62c"
          color="black"
          variant="solid"
        >
          Confirm Payment
        </Button>
      </Link>
      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg="black">
          <ModalHeader color={"white"}>Enter OTP</ModalHeader>
          <ModalCloseButton color="gray" />

          <ModalBody>
            <Center>
              <HStack>
                <PinInput focusBorderColor="rgb(69,214,43)" type="number">
                  <PinInputField color={"white"} />
                  <PinInputField color={"white"} />
                  <PinInputField color={"white"} />
                  <PinInputField color={"white"} />
                </PinInput>
              </HStack>
            </Center>
          </ModalBody>
          <Center>
            <ModalFooter>
              <Button
                mt={4}
                onClick={onOpen}
                rightIcon={<ArrowRightIcon />}
                colorScheme="green"
                variant="solid"
              >
                Submit OTP
              </Button>
            </ModalFooter>
          </Center>
        </ModalContent>
      </Modal>
    </div>
  );
}

export { Otp };
