import { Box,Grid,GridItem,Image,Text,ListItem,UnorderedList,Link,Button, Select, Flex,Center,Heading} from "@chakra-ui/react"
import {ChevronRightIcon} from "@chakra-ui/icons"
import
function Pc() {



]

    return (
        <Box bg="#555555">
            <Center color="white" fontSize={15} bg="#999999" h={10} >Unleash a new age of technology with an arsenal of cutting-edge innovations that will keep you ahead of the game. Shop Now <ChevronRightIcon></ChevronRightIcon></Center>
            <Box bg="black" textAlign="center" p={10}>
                <Heading fontSize={20} color="white" mt={10}>PC</Heading>
                <Flex justifyContent="space-evenly" w="60%" m="auto" mt={5}>
                    <Heading fontSize={12} color="#44d62c">LAPTOPS</Heading>
                    <Heading fontSize={12} color="#999999">MONITORS</Heading>
                    <Heading fontSize={12} color="#999999">DESKTOPS & CASES</Heading>
                    <Heading fontSize={12} color="#999999">EGPUS</Heading>
                    <Heading fontSize={12} color="#999999">ACCESSORIES</Heading>
                    <Heading fontSize={12} color="#999999">ACCESSORIES</Heading>
                    <Heading fontSize={12} color="#999999">COOLING</Heading>
                </Flex>
            </Box>
            
            <Flex  justifyContent="space-evenly" mt="20px">
            <Box w="20%" position="fixed" mr="80%" h="200px" textAlign="center">
                <Heading fontSize={25} color="white">Screen Sizes</Heading>
                <Select placeholder='Filter By Screen Size'color="white" w="70%" m="auto" mt={10}>
                    <option value='13'style={{color:"black"}}>13 inch</option>
                    <option value='14'style={{color:"black"}}>14 inch</option>
                    <option value='15'style={{color:"black"}}>15 inch</option>
                    <option value='16'style={{color:"black"}}>16 inch</option>
                    <option value='17'style={{color:"black"}}>17 inch</option>
                </Select>
                <Heading fontSize={25} color="white" mt={10}>Price</Heading>
                <Select placeholder='Filter By Price'color="white" w="70%"m="auto" mt={10} >
                    <option value='asc'style={{color:"black"}}>Low To High</option>
                    <option value='dsc'style={{color:"black"}}>High To Low</option>
                </Select>

                <Heading fontSize={25} color="white" mt={10}>Colors</Heading>
                <Select placeholder='Filter By Color'color="white" w="70%" m="auto" mt={10} >
                    <option value='Gray'style={{color:"black"}}>Gray</option>
                    <option value='Black Murcury'style={{color:"black"}}>Black Murcury</option>
                    <option value='WhiteSmoke'style={{color:"black"}}>WhiteSmoke</option>
                    <option value='Black'style={{color:"black"}}>Black</option>
                    <option value='Blue'style={{color:"black"}}>Blue</option>
                    <option value='Green'style={{color:"black"}}>Green</option>
                </Select>

            </Box>
            <Grid w="70%"gridTemplateColumns="repeat(3,1fr)" gap="20px" ml="10%">
                {
                    data.map((e)=>{
                        return <GridItem alignItems="center" bg = "#252525" color="white">
                            <Image src={e.img.img1} w="70%" m="auto"></Image>
                            <Box bg="black" p={5}>
                            <Text>{e.title}</Text>
                            <UnorderedList color="#999999">
                                <ListItem>{e.specifications.processor}</ListItem>
                                <ListItem>{e.specifications.screen}&nbsp;inch Full HD</ListItem>
                                <ListItem>{e.specifications.force}</ListItem>
                                <ListItem>{e.specifications.windows}</ListItem>
                                <ListItem>{e.specifications.force}</ListItem>
                            </UnorderedList>
                            <Link color="#44d62c">View Details <ChevronRightIcon></ChevronRightIcon></Link><br></br>
                            <Text>{e.price} RS/-</Text>
                            <Text textDecor="line-through" color="#999999">{e.cprice} RS/-</Text>
                            <Button bg="#44d62c" mt="20px">Add To Cart</Button>
                            </Box>

                        </GridItem>
                    })
                }
            </Grid>

        </Flex>
        </Box>
    )
}

export default Pc