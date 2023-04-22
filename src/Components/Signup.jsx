import React from "react";
import { useState, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { toast } from "react-toastify";
import {
  Box,
  Center,
  Heading,
  Text,
  Button,
  Stack,
  Divider,
  Input,
  Select,
  InputGroup,
  InputRightElement,
  Checkbox,
  Icon,
  HStack,
} from "@chakra-ui/react";
import { BsFacebook, BsTwitch } from "react-icons/bs";
import { AiFillGoogleCircle } from "react-icons/ai";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { MdLogin } from "react-icons/md";
import { useNavigate, Link } from "react-router-dom";

function Signup(props) {

  //input
  const [id, setId] = useState("");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  //eye button
  const [show, setShow] = React.useState(false); //eye button
  const handleClick = () => setShow(!show); //eye button
  const [captcha, setcaptcha] = React.useState(false); //captcha

  const onChange = () => {
    // captcha
    setcaptcha(true);
  };

  //validation

  const isValidated = () => {
    let isproceed = true;
    let errormessage = "Please enter the ";
    if (id === null || id === "") {
      isproceed = false;
      errormessage += " Username";
    }
    if (country === null || country === "") {
      isproceed = false;
      errormessage += " Country";
    }
    if (password === null || password === "") {
      isproceed = false;
      errormessage += " Password";
    }
    if (date === null || date === "") {
      isproceed = false;
      errormessage += " Birth Day";
    }
    if (email === null || email === "") {
      isproceed = false;
      errormessage += " Email";
    }
    

    if (!isproceed) {
      toast.warning(errormessage);
    } else {
      if (email.includes('@')) {
      } else {
        isproceed = false;
        toast.warning("Please enter the valid email");
      }
    }
    return isproceed;
  };

  /// handlesubmit

  const handleSubmit = (e) => {
    e.preventDefault();
    let userDataObj = { id, country, date, email, password };
    // console.log(userDataObj)
    if (isValidated()) {
      fetch("http//localhost:3000/user", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(userDataObj),
      })
        .then((res) => {
          toast.success("Sign up successfully");
          navigate("/signin");
        })
        .catch((err) => {
          toast.error("Failed :" + err.message);
        });
    }
  };

  return (
    <div
      style={{
        backgroundImage:
          "url(https://razerid-assets.razerzone.com/static/media/serpents-eye-v2-20220906.dae1e41f.jpg)",
        backgroundPosition: "center top -150px", // move image 50px up from the center
      }}
    >
      <Center>
        
        <Box border={"2px"} borderColor={"green"} mt="20px" w="412px" h="1390px" bg="#000000">
          <Heading
            ml="20px"
            my="30px"
            as={"h1"}
            fontWeight={"thin"}
            color={"white"}
            size="lg"
          >
            CREATE RAZER ID ACCOUNT
          </Heading>
          <Text ml="20px" mb="40px" color={"white"}>
            Razer ID is a unified account for all Razer services.
          </Text>
          <Stack ml="20px" mt="10px" mb="20px" direction="row" spacing={4}>
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
          <HStack m="auto" w="370px" my={8} >
          <Divider orientation='horizontal' />
            <Text color={"#73767B"}>or</Text>
            <Divider orientation='horizontal' />
          </HStack>
          <form>
            <Input
              value={id}
              onChange={(e) => setId(e.target.value)}
              width="375px"
              ml={"20px"}
              mb="20px"
              focusBorderColor="rgb(69,214,43)"
              color={"white"}
              placeholder="RAZER ID (YOUR GAMER NAME)"
            ></Input>
            <Select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              width="375px"
              ml={"20px"}
              mb="20px"
              focusBorderColor="rgb(69,214,43)"
              bg="black"
              color="gray"
              placeholder="Select Country"
            >
              <option color="white" value="afghanistan">
                Afghanistan
              </option>
              <option value="albania">Bangladesh</option>
              <option value="bahamas">Canada</option>
              <option value="bahrain">Denmark</option>
              <option value="cambodia">Cambodia</option>
              <option value="cameroon">Egipt</option>
              <option value="denmark">France</option>
              <option value="djibouti">Germani</option>
              <option value="ecuador">India</option>
              <option value="egypt">Pakistan</option>
              <option value="fiji">US</option>
              <option value="finland">England</option>
              <option value="gabon">Combodia</option>
              <option value="gambia">China</option>
              <option value="haiti">UAE</option>
              <option value="honduras">Brazil</option>
            </Select>
            <Input
              value={date}
              onChange={(e) => setDate(e.target.value)}
              mb="20px"
              width="375px"
              ml={"20px"}
              placeholder="Select Date and Time"
              size="md"
              type="date"
              color={"gray"}
              focusBorderColor="rgb(69,214,43)"
            />
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              mb="20px"
              width="375px"
              ml={"20px"}
              focusBorderColor="rgb(69,214,43)"
              color={"white"}
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
                placeholder="PASSWORD"
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
            <Heading
              ml="20px"
              mt={10}
              mb={4}
              as={"h3"}
              fontWeight={"light"}
              color={"white"}
              size="sm"
            >
              Sign up for Razer emails
            </Heading>
            <Stack ml="20px" color={"white"} spacing={5} direction="column">
              <Checkbox colorScheme="green">Razer.com</Checkbox>
              <Checkbox colorScheme="green">Razer Gold & Silver</Checkbox>
              <Checkbox colorScheme="green">
                Razer Cortex and Razer Game Deals
              </Checkbox>
              <Checkbox colorScheme="green">
                New Razer Product and Services Information
              </Checkbox>
            </Stack>
            <Heading
              ml="20px"
              mb={5}
              mt={8}
              as={"h3"}
              fontWeight={"light"}
              color={"white"}
              size="sm"
            >
              Terms and Conditions
            </Heading>
            <Text fontSize="12px" ml="20px" color={"white"}>
              Based on your consent, we will customize advertisements and
              recommendations that may match your interests.
            </Text>
            <br />
            <Text fontSize="12px" ml="20px" mt="-10px" color={"white"}>
              Razer respects your privacy thus your consent settings can be
              changed at any time on your Razer ID profile page.
            </Text>
            <p style={{ fontSize: "12px", color: "white", marginLeft: "20px" }}>
              Do you accept the
              <span style={{ color: "rgb(69,214,43)" }}>
                {" "}
                Terms of Service
              </span>{" "}
              and{" "}
              <span style={{ color: "rgb(69,214,43)" }}> Terms of Service</span>
              ?
            </p>
            <Box my={8}>
              <Center>
                {/* google captcha */}
                <ReCAPTCHA
                  sitekey="6LdecqQlAAAAAF5O-JC8ProsSC_nHykNvfTpWp2B"
                  onChange={onChange}
                />
              </Center>
            </Box>
            <Center>
              {captcha ? (
                <Button
                  onClick={handleSubmit}
                  colorScheme="green"
                  color="black"
                  px="100px"
                >
                  ACCEPT AND CREATE
                </Button>
              ) : (
                <Button isDisabled colorScheme="green" color="black" px="100px">
                  ACCEPT AND CREATE
                </Button>
              )}
            </Center>
            <Center>
              <Text color={"white"} my={8}>
                Already have an Account
              </Text>
            </Center>
            <Center>
              <Button
                _hover={{ color: "rgb(69,214,43)" }}
                color={"white"}
                leftIcon={<MdLogin sixe="12px" />}
                colorScheme="blue"
                variant="unstyled"
              >
                <Link to={"/signin"}>Log in</Link>
              </Button>
            </Center>
          </form>
        </Box>
      </Center>
    </div>
  );
}

export { Signup };
