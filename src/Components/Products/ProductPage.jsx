import { Box,Center,Text,VStack,Grid,Image,GridItem,Link,Flex} from "@chakra-ui/react"
import {ChevronRightIcon} from "@chakra-ui/icons"

function ProductPage() {
   
    return <Box bg="#555555">
        <Center color="white" fontSize={15} bg="#999999" h={10} >Unleash a new age of technology with an arsenal of cutting-edge innovations that will keep you ahead of the game. Shop Now <ChevronRightIcon></ChevronRightIcon></Center>
        <VStack color="#44d62c" bg="#252525" textAlign="center" h={200} alignContent="center">
            <Text fontSize={30} >LAPTOPS & DESKTOPS</Text>
            <Text w="58%" p={5} textAlign="center">From cutting-edge gaming and creator laptops to high-end components for your dream PC build, Razer systems are meticulously crafted to provide the ultimate performance for work and play. Supported by our diverse collection of gamer accessories and PC peripherals, we’ve got you covered when it comes to your unique gaming or office desktop needs.</Text>
        </VStack>
        <Grid  p={5} gridTemplateColumns="repeat(3,1fr)" gap="20px" w="80%" m="auto">
           <GridItem color="white" bg="#252525" pb={5}>
            <Box bg="#252525"><Image src="https://assets2.razerzone.com/images/pnx.assets/381e915d58d2b9759725c30a9f2c3a0f/razer-blade-16-2023-laptop-500x500.jpg" w="100%" m="auto"></Image></Box>
            <Text fontSize={20} p={2}>LAPTOPS</Text>
            <Text p={2}>Sleek high-performance gaming laptops</Text>
            <Link color="#44d62c" p={2}>Learn More <ChevronRightIcon></ChevronRightIcon></Link>
           </GridItem>

           <GridItem color="white" bg = "#252525" pb={5}>
            <Box bg="#252525"><Image src="https://assets2.razerzone.com/images/pnx.assets/381e915d58d2b9759725c30a9f2c3a0f/desktops-components-category--500x500.jpg" w="100%" m="auto"></Image></Box>
            <Text fontSize={20} p={2}>DESKTOPS & COMPONENTS</Text>
            <Text p={2}>Enthusiasts and designed for performance</Text>
            <Link color="#44d62c" p={2}>Learn More <ChevronRightIcon></ChevronRightIcon></Link>
           </GridItem>

           <GridItem color="white" bg = "#252525" pb={5}>
            <Box bg="#252525"><Image src="https://assets2.razerzone.com/images/pnx.assets/381e915d58d2b9759725c30a9f2c3a0f/accessories-category-500x500.jpg" w="100%" m="auto"></Image></Box>
            <Text fontSize={20} p={2}>ACCESSORIES</Text>
            <Text p={2}>Crafting the perfect gaming experience</Text>
            <Link color="#44d62c" p={2}>Learn More <ChevronRightIcon></ChevronRightIcon></Link>
           </GridItem>

        </Grid>

        <VStack color="#44d62c" bg="#252525" textAlign="center" h={200} alignContent="center">
            <Text fontSize={30} >PC & LAPTOP PERIPHERALS</Text>
            <Text w="58%" p={5} textAlign="center" fontSize={18}>The most powerful rigs mean nothing without the best gear to match. Gain a competitive edge with PC and laptop peripherals armed with our latest technology. From award-winning mice and keyboards to industry-leading headsets and monitors, deck out your setup with our comprehensive selection of peripherals for gaming and work.</Text>
        </VStack>


        <Grid  p={5} gridTemplateColumns="repeat(3,1fr)" gap="20px" w="80%" m="auto">
           <GridItem color="white" bg="#252525" alignItems="center" pb={5}>
            <Box bg="#252525"><Image src="https://assets2.razerzone.com/images/pnx.assets/8127df0df8433ada296a732b23f3b9b4/mice-category-500x500.jpg" w="100%" m="auto"></Image></Box>
            <Text fontSize={20} p={2}>MICE</Text>
            <Text p={2}>Pixel-perfect precision for any hand size</Text>
            <Link color="#44d62c" p={2}>Learn More <ChevronRightIcon></ChevronRightIcon></Link>
           </GridItem>

           <GridItem color="white" bg = "#252525" alignItems="center" pb={5}>
            <Box bg="#252525"><Image src="https://assets2.razerzone.com/images/pnx.assets/8127df0df8433ada296a732b23f3b9b4/mousemats-category-500x500.jpg" w="100%" m="auto"></Image></Box>
            <Text fontSize={20} p={2}>MOUSE MATS</Text>
            <Text p={2}>Soft and hybrid designs to enhance your control</Text>
            <Link color="#44d62c" p={2}>Learn More <ChevronRightIcon></ChevronRightIcon></Link>
           </GridItem>

           <GridItem color="white" bg = "#252525" alignItems="center" pb={5}>
            <Box bg="#252525"><Image src="https://assets2.razerzone.com/images/pnx.assets/8127df0df8433ada296a732b23f3b9b4/keyboards-category-500x500.jpg" w="100%" m="auto"></Image></Box>
            <Text fontSize={20} p={2}>KEYBOARDS</Text>
            <Text p={2}>Optical, mechanical, and every type in between</Text>
            <Link color="#44d62c" p={2}>Learn More <ChevronRightIcon></ChevronRightIcon></Link>
           </GridItem>

           <GridItem color="white" bg="#252525" alignItems="center" pb={5}>
            <Box bg="#252525"><Image src="https://assets2.razerzone.com/images/pnx.assets/8127df0df8433ada296a732b23f3b9b4/headsets-category-500x500.jpg" w="100%" m="auto"></Image></Box>
            <Text fontSize={20} p={2}>HEADSETS</Text>
            <Text p={2}>Tuned for gaming and a perfect mix</Text>
            <Link color="#44d62c" p={2}>Learn More <ChevronRightIcon></ChevronRightIcon></Link>
           </GridItem>

           <GridItem color="white" bg = "#252525" alignItems="center" pb={5}>
            <Box bg="#252525"><Image src="https://assets2.razerzone.com/images/pnx.assets/8127df0df8433ada296a732b23f3b9b4/speakers-category-500x500.jpg" w="100%" m="auto"></Image></Box>
            <Text fontSize={20} p={2}>SPEAKERS</Text>
            <Text p={2}>Set the soundstage for full-range immersion</Text>
            <Link color="#44d62c" p={2}>Learn More <ChevronRightIcon></ChevronRightIcon></Link>
           </GridItem>

           <GridItem color="white" bg = "#252525" alignItems="center" pb={5}>
            <Box bg="#252525"><Image src="https://assets2.razerzone.com/images/pnx.assets/8127df0df8433ada296a732b23f3b9b4/chairs-category-500x500.jpg" w="100%" m="auto"></Image></Box>
            <Text fontSize={20} p={2}>CHAIRS</Text>
            <Text p={2}>Perfecting the science of comfort and support</Text>
            <Link color="#44d62c" p={2}>Learn More <ChevronRightIcon></ChevronRightIcon></Link>

           </GridItem>

        </Grid>
        
        <Box color="white" height="850px">  
            <Image src="https://images.unsplash.com/photo-1623934199716-dc28818a6ec7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80" w="100%"></Image>
            <Text fontSize={30} marginTop="-800px" marginLeft="100px">COMPLETE YOUR SETUP</Text>
            <Text fontSize={20} marginLeft="150px">Best Gaming Laptops</Text>
            <Link color="#44d62c" p={2} marginLeft="142px">Learn More <ChevronRightIcon></ChevronRightIcon></Link>
        </Box>

        
        <VStack color="#44d62c" bg="#1a1a1a" textAlign="center" h={250} alignContent="center" p={5}> 
            <Text fontSize={30} >CONTENT CREATION & STREAMING</Text>
            <Text w="58%" p={5} textAlign="center" fontSize={18}>Producing quality content requires quality hardware. From high-fidelity webcams to professional-grade microphones, deliver the best possible streaming experience with our range of content creation gear. Whether you're streaming from your gaming desktop or laptop, we’ve got everything you need to create content that stands out from the rest.</Text>
        </VStack>
        
        <Grid  p={5} gridTemplateColumns="repeat(3,1fr)" gap="20px" w="80%" m="auto">
           <GridItem color="white" bg="#252525" pb={5}>
            <Box bg="#252525"><Image src="https://assets2.razerzone.com/images/pnx.assets/6db17f7284da185264c3018f26bef57a/webcams-category-500x500.jpg" w="100%" m="auto"></Image></Box>
            <Text fontSize={20} p={2}>WEBCAMS</Text>
            <Text p={2}>Stunning visual fidelity for streaming</Text>
            <Link color="#44d62c" p={2}>Learn More <ChevronRightIcon></ChevronRightIcon></Link>
           </GridItem>

           <GridItem color="white" bg = "#252525" pb={5}>
            <Box bg="#252525"><Image src="https://assets2.razerzone.com/images/pnx.assets/6db17f7284da185264c3018f26bef57a/microphones-category-500x500.jpg" w="100%" m="auto"></Image></Box>
            <Text fontSize={20} p={2}>MICROPHONES</Text>
            <Text p={2}>Engineered for crystal-clear voice pickup</Text>
            <Link color="#44d62c" p={2}>Learn More <ChevronRightIcon></ChevronRightIcon></Link>
           </GridItem>

           <GridItem color="white" bg = "#252525" pb={5}>
            <Box bg="#252525"><Image src="https://assets2.razerzone.com/images/pnx.assets/6db17f7284da185264c3018f26bef57a/capturecard&others-category-500x500.jpg" w="100%" m="auto"></Image></Box>
            <Text fontSize={20} p={2}>CAPTURE CARD & OTHERS</Text>
            <Text p={2}>For a professional streaming advantage</Text>
            <Link color="#44d62c" p={2}>Learn More <ChevronRightIcon></ChevronRightIcon></Link>
           </GridItem>
        </Grid>

        <VStack color="#44d62c" bg="#1a1a1a" textAlign="center" h={250} alignContent="center" p={5}> 
            <Text fontSize={30} >SOFTWARE</Text>
            <Text w="58%" p={5} textAlign="center" fontSize={18}>From customizing keybinds and Chroma effects to optimizing audio and game performance, Razer's software platforms are designed to enhance your gaming and productivity. Seamlessly integrated with our extensive collection of gamer accessories and PC peripherals, get the most out of our devices and create a single ecosystem for your gaming or office desktop.</Text>
        </VStack>

        <Grid  p={5} gridTemplateColumns="repeat(3,1fr)" gap="20px" w="80%" m="auto">
            <Box color="white" bg = "#252525" pb="20px" w="100%" h="560px" alignItems="center">
                <Box bg="#252525"><Image src="https://assets2.razerzone.com/images/pnx.assets/cf07588e1e08bf7767da32b1181bc4bf/razer-axon-category-500x500.jpg" w="100%" m="auto"></Image></Box>
                <Text fontSize={20} p={2}>RAZER AXON</Text>
                <Text p={2}>Bring your desktop to life with high-quality wallpapers that sync with your Razer Chroma™ RGB ecosystem.</Text>
                <Link color="#44d62c" p={2}>Learn More <ChevronRightIcon></ChevronRightIcon></Link>
            </Box>

            <Box color="white" bg = "#252525" pb="20px" w="100%" h="560px" alignItems="center">
                <Box bg="#252525"><Image src="https://assets2.razerzone.com/images/pnx.assets/cf07588e1e08bf7767da32b1181bc4bf/razer-chroma-rgb-category-500x500.jpg" w="100%" m="auto"></Image></Box>
                <Text fontSize={20} p={2}>RAZER CHROMA™ RGB</Text>
                <Text p={2}>Experience full RGB customization the world’s largest lighting ecosystem that supports hundreds of games and thousands of devices.</Text>
                <Link color="#44d62c" p={2}>Learn More <ChevronRightIcon></ChevronRightIcon></Link>
            </Box>

            <Box color="white" bg = "#252525" pb="20px" w="100%" h="560px" alignItems="center">
                <Box bg="#252525"><Image src="https://assets2.razerzone.com/images/pnx.assets/cf07588e1e08bf7767da32b1181bc4bf/razer-cortex-category-500x500.jpg" w="100%" m="auto"></Image></Box>
                <Text fontSize={20} p={2}>RAZER CORTEX</Text>
                <Text p={2}>From boosting system performance to discovering gaming deals, enhance your play with one powerful platform.</Text>
                <Link color="#44d62c" p={2}>Learn More <ChevronRightIcon></ChevronRightIcon></Link>
            </Box>
        </Grid>
        <Grid  p={5} gridTemplateColumns="repeat(4,1fr)" gap="20px" w="80%" m="auto">
           <GridItem color="white" bg="#252525" pb={5} w="100%">
            <Box bg="#252525"><Image src="https://assets2.razerzone.com/images/pnx.assets/cf07588e1e08bf7767da32b1181bc4bf/razer-synapse-category-500x500.jpg" w="100%" m="auto"></Image></Box>
            <Text fontSize={20} p={2}>RAZER SYNAPSE</Text>
            <Text p={2}>Maximize your unfair advantage with Razer Synapse 3, the unified cloud-based hardware configuration tool that takes your Razer devices to the next level. </Text>
            <Link color="#44d62c" p={2}>Learn More <ChevronRightIcon></ChevronRightIcon></Link>
           </GridItem>

           <GridItem color="white" bg = "#252525" pb={5} w="100%">
            <Box bg="#252525"><Image src="https://assets2.razerzone.com/images/pnx.assets/cf07588e1e08bf7767da32b1181bc4bf/thx-spatial-audio-category-500x500.jpg" w="100%" m="auto"></Image></Box>
            <Text fontSize={20} p={2}>THX SPATIAL AUDIO</Text>
            <Text p={2}>Unlock full customization with a surround sound application featuring more extensive audio calibration and custom-tuned game profiles.Best quality products.</Text>
            <Link color="#44d62c" p={2}>Learn More <ChevronRightIcon></ChevronRightIcon></Link>
           </GridItem>

           <GridItem color="white" bg = "#252525" pb={5} w="100%">
            <Box bg="#252525"><Image src="https://assets2.razerzone.com/images/pnx.assets/cf07588e1e08bf7767da32b1181bc4bf/71-surround-sound-category-500x500.jpg" w="100%" m="auto"></Image></Box>
            <Text fontSize={20} p={2}>7.1 SURROUND SOUND</Text>
            <Text p={2}>Experience accurate positional sound for the competitive advantage.The bets version of your capability will come.Best quality is here.Explore by clicking below.</Text>
            <Link color="#44d62c" p={2} >Learn More <ChevronRightIcon></ChevronRightIcon></Link>
           </GridItem>

           <GridItem color="white" bg = "#252525" pb={5} w="100%">
            <Box bg="#252525"><Image src="https://assets2.razerzone.com/images/pnx.assets/cf07588e1e08bf7767da32b1181bc4bf/streamer-companion-app-category-500x500.jpg" w="100%" m="auto"></Image></Box>
            <Text fontSize={20} p={2}>STREAMER COMPANION APP</Text>
            <Text p={2}>Put on a show for your stream by customizing how your Seiren Emote or Emote display reacts to your audience.Explore by clicking below and learn more.</Text>
            <Link color="#44d62c" p={2}>Learn More <ChevronRightIcon></ChevronRightIcon></Link>
           </GridItem>
        </Grid>

        <Box color="white" height="600px">  
            <Image src="https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" w="100%" h="600px"></Image>
            <Text fontSize={30} marginTop="-300px" marginLeft="100px" color="#44d62c">PLAYTIME. ANYTIME</Text>
            <Text fontSize={20} marginLeft="100px" color="whitesmoke">Play the latest games with graphics that rival reality.<br></br>DirectX 12 enables breathtaking, immersive graphics at high frame rates*.</Text>
            <Flex w = "280px" h="70px" bg="blue" marginLeft="100px" gap="20px"><Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSRrFSl-AkNSntbZ31pcDeDU-V08Ih0JXorA&usqp=CAU" w="40px" h="40px"></Image> Get to know More Windows 11 </Flex>
            <Text fontSize={15} marginLeft="100px" color="whitesmoke">*DirectX 12 Ultimate available with supported games, graphics chips, and<br></br> requires the latest Windows 11 update with updated hardware drivers.</Text>
        </Box>
    
    </Box>
}



export default ProductPage;