import React from "react";
import { Navbar } from "./Navbar";
import ReCAPTCHA from "react-google-recaptcha";
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
  Flex,
  Icon,
} from "@chakra-ui/react";
import { BsFacebook, BsTwitch } from "react-icons/bs";
import { AiFillGoogleCircle } from "react-icons/ai";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { MdLogin } from "react-icons/md";

function Signup(props) {
  //eye button
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  //captcha

  const onChange = () => {};

  return (
    <div
      style={{
        backgroundImage:
          "url(https://razerid-assets.razerzone.com/static/media/serpents-eye-v2-20220906.dae1e41f.jpg)",
        backgroundPosition: "center top -150px", // move image 50px up from the center
      }}
    >
      <Center>
        <Box mt="20px" w="412px" h="1390px" bg="#000000">
          <Heading ml="20px" my="30px" as={"h1"} fontWeight={"thin"} color={"white"} size="lg">
            CREATE RAZER ID ACCOUNT
          </Heading>
          <Text ml="20px" mb="40px" color={"white"}>
            Razer ID is a unified account for all Razer services.
          </Text>
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
          <Stack w="375px" m="auto" direction="row" spacing={2}>
            <Divider  orientation="horizontal" />
            <Text color={"#73767B"}>or</Text>
            <Divider orientation="horizontal" />
          </Stack>
          <form >
            <Input
            width="375px"
            ml={"20px"}
            mt={8}
            mb="20px"
              isRequired="true"
              focusBorderColor="rgb(69,214,43)"
              color={"white"}
              placeholder="RAZER ID (YOUR GAMER NAME)"
            ></Input>
            <Select
            width="375px"
            ml={"20px"}
            mb="20px"
              focusBorderColor="rgb(69,214,43)"
              bg="black"
              color="grey"
              placeholder="Select Country"
            >
              <option value="afghanistan">Afghanistan</option>
              <option value="albania">Albania</option>
              <option value="bahamas">Bahamas</option>
              <option value="bahrain">Bahrain</option>
              <option value="cambodia">Cambodia</option>
              <option value="cameroon">Cameroon</option>
              <option value="denmark">Denmark</option>
              <option value="djibouti">Djibouti</option>
              <option value="ecuador">Ecuador</option>
              <option value="egypt">Egypt</option>
              <option value="fiji">Fiji</option>
              <option value="finland">Finland</option>
              <option value="gabon">Gabon</option>
              <option value="gambia">Gambia</option>
              <option value="haiti">Haiti</option>
              <option value="honduras">Honduras</option>
              <option value="iceland">Iceland</option>
              <option value="india">India</option>
              <option value="jamaica">Jamaica</option>
              <option value="japan">Japan</option>
              <option value="kazakhstan">Kazakhstan</option>
              <option value="kenya">Kenya</option>
              <option value="laos">Laos</option>
              <option value="latvia">Latvia</option>
              <option value="madagascar">Madagascar</option>
              <option value="malawi">Malawi</option>
              <option value="namibia">Namibia</option>
              <option value="nepal">Nepal</option>
              <option value="oman">Oman</option>
              <option value="pakistan">Pakistan</option>
              <option value="palau">Palau</option>
              <option value="panama">Panama</option>
              <option value="qatar">Qatar</option>
              <option value="romania">Romania</option>
              <option value="russia">Russia</option>
              <option value="rwanda">Rwanda</option>
              <option value="samoa">Samoa</option>
              <option value="san marino">San Marino</option>
              <option value="TH">Thailand</option>
              <option value="TR">Turkey</option>
              <option value="UA">Ukraine</option>
              <option value="UG">Uganda</option>
              <option value="VE">Venezuela</option>
              <option value="VN">Vietnam</option>
              <option value="WS">Samoa</option>
              <option value="WF">Wallis and Futuna</option>
              <option value="XK">Kosovo</option>
              <option value="XS">Somaliland</option>
              <option value="YE">Yemen</option>
              <option value="YT">Mayotte</option>
              <option value="ZM">Zambia</option>
              <option value="ZW">Zimbabwe</option>
            </Select>
            <Input
            mb="20px"
             width="375px"
             ml={"20px"}
              placeholder="Select Date and Time"
              size="md"
              type="datetime-local"
              color={"gray"}
              isRequired="true"
              focusBorderColor="rgb(69,214,43)"
            />
            <Input
            mb="20px"
            width="375px"
            ml={"20px"}
              isRequired="true"
              focusBorderColor="rgb(69,214,43)"
              color={"white"}
              placeholder="EMAIL ADRESS"
            ></Input>
            <InputGroup size="md">
              <Input
              width="375px"
              ml={"20px"}
                color={"white"}
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
            <Heading ml="20px" mt={10} mb={4} as={"h3"} fontWeight={"light"} color={"white"} size="sm">
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
            <Heading ml="20px" mb={5} mt={8} as={"h3"} fontWeight={"light"} color={"white"} size="sm">
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
            <Flex fontSize="12px" mt={8} ml="20px" color={"white"}>
              <Text>Do you accept the</Text>
              <Text color={"rgb(69,214,43)"}>Terms of Service</Text>
              <Text>and</Text>
              <Text color={"rgb(69,214,43)"}>Privacy Policy</Text>
              <Text>?</Text>
            </Flex>
            <Box my={8} >
                <Center >
                {/* google captcha */}
              <ReCAPTCHA
                sitekey="6LdecqQlAAAAAF5O-JC8ProsSC_nHykNvfTpWp2B"
                onChange={onChange}
              />
              </Center>
            </Box>
            <Center>
            <Button colorScheme='green' color="black" px="100px">ACCEPT AND CREATE</Button>
            </Center>
            <Center>
            <Text color={"white"} my={8}>Already have an Account</Text>
            </Center>
            <Center>
            <Button _hover={{ color: "rgb(69,214,43)" }} color={"white"} leftIcon={<MdLogin sixe="12px" />} colorScheme="blue" variant="unstyled">
              Log in
            </Button>
            </Center>
          </form>
        </Box>
      </Center>
    </div>
  );
}

export { Signup };
