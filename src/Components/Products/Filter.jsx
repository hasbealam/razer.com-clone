import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Heading,
  Checkbox,
} from "@chakra-ui/react";

function Filter({ setSort, setFilter }) {
  return (
    <div>
      <Accordion allowToggle>
        <AccordionItem p="50px">
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              <Heading fontSize={25}>SCREEN SIZES</Heading>
            </Box>
            <AccordionIcon color="#44d62c" />
          </AccordionButton>

          <AccordionPanel>
            <Box textAlign="left">
              <Box>
                <Checkbox
                  defaultunChecked
                  value="13"
                  onChange={(e) => {
                    setFilter(e.target.value);
                  }}
                >
                  13 inch
                </Checkbox>
              </Box>
              <Box>
                <Checkbox
                  defaultunChecked
                  value="14"
                  onChange={(e) => {
                    setFilter(e.target.value);
                  }}
                >
                  14 inch
                </Checkbox>
              </Box>
              <Box>
                <Checkbox
                  defaultunChecked
                  value="15"
                  onChange={(e) => {
                    setFilter(e.target.value);
                  }}
                >
                  15 inch
                </Checkbox>
              </Box>
              <Box>
                <Checkbox
                  defaultunChecked
                  value="16"
                  onChange={(e) => {
                    setFilter(e.target.value);
                  }}
                >
                  16 inch
                </Checkbox>
              </Box>
              <Box>
                <Checkbox
                  defaultunChecked
                  value="17"
                  onChange={(e) => {
                    setFilter(e.target.value);
                  }}
                >
                  17 inch
                </Checkbox>
              </Box>
            </Box>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem p="50px">
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              <Heading fontSize={25}>PRICE</Heading>
            </Box>
            <AccordionIcon color="#44d62c" />
          </AccordionButton>

          <AccordionPanel>
            <Box textAlign="left">
              <Box>
                <Checkbox
                  defaultunChecked
                  value="asc"
                  onChange={(e) => {
                    setSort(e.target.value);
                  }}
                >
                  LOW YO HIGH
                </Checkbox>
              </Box>
              <Box>
                <Checkbox
                  defaultunChecked
                  value="desc"
                  onChange={(e) => {
                    setSort(e.target.value);
                  }}
                >
                  HIGH TO LOW
                </Checkbox>
              </Box>
            </Box>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem p="50px">
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              <Heading fontSize={25}>COLOR</Heading>
            </Box>
            <AccordionIcon color="#44d62c" />
          </AccordionButton>

          <AccordionPanel>
            <Box textAlign="left">
              <Box>
                <Checkbox
                  defaultunChecked
                  value="black"
                  onChange={(e) => {
                    setFilter(e.target.value);
                  }}
                >
                  BLACK
                </Checkbox>
              </Box>
              <Box>
                <Checkbox
                  defaultunChecked
                  value="green"
                  onChange={(e) => {
                    setFilter(e.target.value);
                  }}
                >
                  GREEN
                </Checkbox>
              </Box>
              <Box>
                <Checkbox
                  defaultunChecked
                  value="whitesmoke"
                  onChange={(e) => {
                    setFilter(e.target.value);
                  }}
                >
                  WHITESMOKE
                </Checkbox>
              </Box>
              <Box>
                <Checkbox
                  defaultunChecked
                  value="gray"
                  onChange={(e) => {
                    setFilter(e.target.value);
                  }}
                >
                  GRAY
                </Checkbox>
              </Box>
            </Box>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem p="50px">
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              <Heading fontSize={25}>SCREEN TYPE</Heading>
            </Box>
            <AccordionIcon color="#44d62c" />
          </AccordionButton>

          <AccordionPanel>
            <Box textAlign="left">
              <Box>
                <Checkbox defaultunChecked>QHD(1)</Checkbox>
              </Box>
              <Box>
                <Checkbox defaultunChecked>FULL HD(20)</Checkbox>
              </Box>
              <Box>
                <Checkbox defaultunChecked>OLED 4K TOUCH</Checkbox>
              </Box>
              <Box>
                <Checkbox defaultunChecked>QHD OLED(6)</Checkbox>
              </Box>
            </Box>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem p="50px">
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              <Heading fontSize={25}>REFRESH RATE</Heading>
            </Box>
            <AccordionIcon color="#44d62c" />
          </AccordionButton>

          <AccordionPanel pb={4}>
            <Box textAlign="left">
              <Box>
                <Checkbox defaultunChecked>240 Hz(1)</Checkbox>
              </Box>
              <Box>
                <Checkbox defaultunChecked>360 Hz(1)</Checkbox>
              </Box>
              <Box>
                <Checkbox defaultunChecked>60 Hz(1)</Checkbox>
              </Box>
            </Box>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default Filter;
