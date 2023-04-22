import React from "react";
import { Navbar } from "./Navbar";
import { useState } from "react";
import {
  Box,
  Center,
  Heading,
  Text,
  Button,
  Stack,
  Input,
  InputGroup,
  InputRightElement,
  Icon,
  HStack,
  Divider
} from "@chakra-ui/react";
import { BsFacebook, BsTwitch } from "react-icons/bs";
import { AiFillGoogleCircle } from "react-icons/ai";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { SiAccenture } from "react-icons/si";
import { toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";

function Signin(props) {
  //eye button
  const [show, setShow] = React.useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const proceedLogin = (e) => {
    e.preventDefault();
    if (validation()) {
      fetch("http://localhost:3000/users/").then((res) => {
        return res.json()
      }).then((response) => {
        console.log(response.country);
        if(Object.keys(response.response).length===0){
          toast.error("Please enter valid email & password");
        } else{
          if(response.password === password){
            toast.success("Login Sucessful")
             navigate("/")
          }else{
            toast.error("Please enter valid Credentials");
          }
        }
      }).catch((err)=> {
        toast.error("Login failed due to :"+err.message);
      })
    }
  };
//validation
  const validation = () => {
    let result = true;
    let errormessage = "Please enter your ";
    if (email === null || email === "") {
      result = false;
      errormessage += " Email";
    }
    if (password === null || password === "") {
      result = false;
      errormessage += " Password";
    }
    if (!result) {
      toast.warning(errormessage);
    } else {
      if (email.includes("@")) {
      } else {
        result = false;
        toast.warning("Please enter the valid Email");
      }
    }
    return result;
  };

  const handleClick = () => setShow(!show); //eye

  return (
    <div
      style={{
        backgroundImage:
          "url(https://razerid-assets.razerzone.com/static/media/serpents-eye-v2-20220906.dae1e41f.jpg)",
        backgroundPosition: "center top -150px",
        height: "100vh", // move image 50px up from the center
      }}
    >
      <Center>
        <Box border={"2px"} borderColor={"green"} mt="20px" w="412px" h="560px" bg="#000000">
          <Heading
            ml="20px"
            my="30px"
            as={"h1"}
            fontWeight={"thin"}
            color={"white"}
            size="lg"
          >
            RAZER ID LOGIN
          </Heading>
          <form>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              mb="20px"
              width="375px"
              ml={"20px"}
              isRequired="true"
              focusBorderColor="rgb(69,214,43)"
              color={"white"}
              type="email"
              placeholder="EMAIL ADRESS"
            ></Input>
            <InputGroup size="md">
              <Input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                width="375px"
                ml={"20px"}
                color={"white"}
                focusBorderColor="rgb(69,214,43)"
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="Enter password"
              />
              <InputRightElement width="4.5rem">
                <Button
                  colorScheme="liquid"
                  h="1.75rem"
                  size="sm"
                  onClick={handleClick}
                >
                  {show ? (
                    <Icon boxSize={7} as={FiEye}></Icon>
                  ) : (
                    <Icon boxSize={7} as={FiEyeOff}></Icon>
                  )}
                </Button>
              </InputRightElement>
            </InputGroup>
            <Text
              _hover={{ color: "green" }}
              cursor={"pointer"}
              mt={2}
              mr={5}
              mb={8}
              textAlign={"right"}
              text
              fontWeight={"light"}
              color={"white"}
            >
              Forgot Password
            </Text>

            <Center>
              <Button
                onClick={proceedLogin}
                colorScheme="green"
                color="black"
                px="160px"
              >
                LOG IN
              </Button>
            </Center>
            <Center>
              <Text color={"white"} fontSize={"13px"} mb="20px" mt={8}>
                Don't have an account yet?
              </Text>
            </Center>
            <Center>
              <Button
                _hover={{ color: "rgb(69,214,43)" }}
                color={"white"}
                rightIcon={<SiAccenture sixe="12px" />}
                colorScheme="blue"
                variant="unstyled"
              >
                <Link to={"/signup"}>Create Razer ID</Link>
              </Button>
            </Center>
            <HStack m="auto" w="380px" my={4} >
          <Divider orientation='horizontal' />
            <Text color={"#73767B"}>or</Text>
            <Divider orientation='horizontal' />
          </HStack>
            <Stack ml="20px" mt="10px" mb="50px" direction="row" spacing={4}>
              <Button
                px="45px"
                leftIcon={<BsFacebook boxSize="30" />}
                colorScheme="facebook"
                variant="solid"
                aria-label="Facebook"
              ></Button>
              <Button
                px="45px"
                leftIcon={<AiFillGoogleCircle boxSize="30" />}
                colorScheme="gray"
                variant="solid"
                aria-label="Google"
              ></Button>
              <Button
                px="45px"
                leftIcon={<BsTwitch boxSize="30" />}
                colorScheme="purple"
                variant="solid"
                title="Twitch"
              ></Button>
            </Stack>
          </form>
        </Box>
      </Center>
    </div>
  );
}

export { Signin };
