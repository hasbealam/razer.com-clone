import { Box,Grid,GridItem,Image,Text,ListItem,UnorderedList,Button,Flex,Center,Heading} from "@chakra-ui/react"
import { useEffect,useState } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import {ChevronRightIcon} from "@chakra-ui/icons"
import Filter from "./Filter"
import { productAction } from "../../Redux/ProductData/productAction"
import { addToCart } from "../../Redux/ProductData/productAction"
import { Link } from "react-router-dom"



function Pc() {
const [sort, setSort] = useState(null);
const [filter, setFilter] = useState(null);

const data = useSelector((state)=>{
    return state.productReducer.data;
})
const cart = useSelector((state)=>{
    return state.cartReducer.cart
})
const dispatch = useDispatch();
useEffect(()=>{
    dispatch(productAction(sort,filter));
},[sort,filter])
console.log(sort,filter)

    return (
        <Box bg="#222">
            <Center color="white" fontSize={15} bg="#999999" h={10} >Unleash a new age of technology with an arsenal of cutting-edge innovations that will keep you ahead of the game. Shop Now <ChevronRightIcon></ChevronRightIcon></Center>
            <Box bg="black" textAlign="center" p={10}>

                <Heading fontSize={20} color="white" mt={10}>PC</Heading>
                <Flex justifyContent="space-evenly" w="60%" m="auto" mt={5}>
                    <Link><Heading fontSize={12} color="#44d62c">LAPTOPS</Heading></Link>
                    <Link><Heading fontSize={12} color="#999999">MONITORS</Heading></Link>
                    <Link><Heading fontSize={12} color="#999999">DESKTOPS & CASES</Heading></Link>
                    <Link><Heading fontSize={12} color="#999999">EGPUS</Heading></Link>
                    <Link><Heading fontSize={12} color="#999999">ACCESSORIES</Heading></Link>
                    <Link><Heading fontSize={12} color="#999999">ACCESSORIES</Heading></Link>
                    <Link><Heading fontSize={12} color="#999999">COOLING</Heading></Link>
                </Flex>
            </Box>
            
            <Flex  justifyContent="center" mt="20px">
            <Box w="20%"  h="500px" textAlign="center"  color="white" mr="10px">
                
                <Filter setSort={setSort} setFilter={setFilter}/>
                
            </Box>
            <Grid w="70%"gridTemplateColumns="repeat(3,1fr)" gap="20px" ml="5%">
                {
                    data.map((e)=>{
                        return <GridItem alignItems="center" bg = "#252525" color="white" >
                            <Image src={e.img.img1} w="100%" m="auto"></Image>
                            <Box bg="black" p={5} textAlign="left">
                            <Text>{e.title}</Text>
                            <UnorderedList color="#999999">
                                <ListItem>{e.specifications.processor}</ListItem>
                                <ListItem>{e.specifications.screen}&nbsp;inch Full HD</ListItem>
                                <ListItem>{e.specifications.force}</ListItem>
                                <ListItem>{e.specifications.windows}</ListItem>
                                <ListItem>{e.specifications.force}</ListItem>
                            </UnorderedList>
                            <Link to="/productpage" style={{color:"#44d62c"}}>View Details <ChevronRightIcon></ChevronRightIcon></Link><br></br>
                            <Text>US$&nbsp;{e.price} </Text>
                            <Text textDecor="line-through" color="#999999">US$&nbsp;{e.cprice} </Text>
                            <Button bg="#44d62c" mt="20px" w="45%" onClick={()=>{
                                dispatch(addToCart(e))
                                console.log(cart);
                            }}>Add To Cart</Button>
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