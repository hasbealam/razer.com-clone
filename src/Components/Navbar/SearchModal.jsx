import React from "react";
import { Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody,
Flex, Icon, Input, useDisclosure
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { css } from '@emotion/react';

export function SearchModal() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const initialRef = React.useRef(null);
    const finalRef = React.useRef(null);

    const [borderColor, setBorderColor] = React.useState("#888")
  const [animationInterval, setAnimationInterval] = React.useState(null)

  // Start the border color animation on drawer open
  React.useEffect(() => {
    if (isOpen) {
      const interval = setInterval(() => {
        setBorderColor(prevColor => {
          const colors = ["#bfcc06", "#079119", "#91070c", "#0c0791"]
          const currentIndex = colors.indexOf(prevColor)
          const nextIndex = (currentIndex + 1) % colors.length
          return colors[nextIndex]
        })
      }, 1000)
      setAnimationInterval(interval)
    }
  }, [isOpen])

  // Stop the border color animation on drawer close
  React.useEffect(() => {
    if (!isOpen && animationInterval) {
      clearInterval(animationInterval)
      setAnimationInterval(null)
    }
  }, [isOpen])
  
    return (
      <>

<Icon
                _hover={{ color: "white", cursor: "pointer" }}
                color="#888888"
                boxSize="6"
                as={SearchIcon}
                onClick={onOpen}
              />

        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent css={css`
            border: 2px solid ${borderColor};
            transition: border-color 1s linear;
          `}>
            <ModalCloseButton  color="white" mt="15px" />
            <ModalBody pb={6} bg="#222222">
              <Flex>
                <Icon color="white" as={SearchIcon} mt="18px" mr="20px" />
                <Input
                  mt="15px"
                  variant="unstyled"
                  placeholder="Search razer.com"
                  color="white"
                />
              </Flex>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    );
  }