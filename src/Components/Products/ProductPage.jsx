import {
  Box,
  Center,
  Text,
  VStack,
  Grid,
  Image,
  GridItem,
  Flex,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { ProductPageCard, ProductPageTextBox } from "./ProductPageTextBox";
import { ProductPageSmallGrayText } from "./ProductPageTextDecoration";
import { ProductPageButton } from "./ProductPageTextDecoration";
function ProductPage() {
  return (
    <Box bg="#222" fontSize={20}>
      <ProductPageTextBox
        h={"LAPTOPS & DESKTOPS"}
        t={
          "From cutting-edge gaming and creator laptops to high-end components for your dream PC build, Razer systems are meticulously crafted to provide the ultimate performance for work and play. Supported by our diverse collection of gamer accessories and PC peripherals, we’ve got you covered when it comes to your unique gaming or office desktop needs."
        }
      />
      <Grid
        p={5}
        gridTemplateColumns="repeat(3,1fr)"
        gap="20px"
        w="80%"
        m="auto"
        textAlign="left"
      >
        <ProductPageCard
          img={
            "https://assets2.razerzone.com/images/pnx.assets/381e915d58d2b9759725c30a9f2c3a0f/razer-blade-16-2023-laptop-500x500.jpg"
          }
          h1={"LAPTOPS"}
          t={"Sleek high-performance gaming laptops"}
        />
        <ProductPageCard
          img={
            "https://assets2.razerzone.com/images/pnx.assets/381e915d58d2b9759725c30a9f2c3a0f/desktops-components-category--500x500.jpg"
          }
          h1={"DESKTOPS & COMPONENTS"}
          t={"Enthusiasts and designed for performance"}
        />

        <ProductPageCard
          img={
            "https://assets2.razerzone.com/images/pnx.assets/381e915d58d2b9759725c30a9f2c3a0f/accessories-category-500x500.jpg"
          }
          h1={"ACCESSORIES"}
          t={"Crafting the perfect gaming experience"}
        />
      </Grid>
      <ProductPageTextBox
        h={"PC & LAPTOP PERIPHERALS"}
        t={
          "The most powerful rigs mean nothing without the best gear to match. Gain a competitive edge with PC and laptop peripherals armed with our latest technology. From award-winning mice and keyboards to industry-leading headsets and monitors, deck out your setup with our comprehensive selection of peripherals for gaming and work."
        }
      />
      <Grid
        p={5}
        gridTemplateColumns="repeat(3,1fr)"
        gap="20px"
        w="80%"
        m="auto"
        textAlign="left"
      >
        <ProductPageCard
          img={
            "https://assets2.razerzone.com/images/pnx.assets/8127df0df8433ada296a732b23f3b9b4/mice-category-500x500.jpg"
          }
          h1={"MICE"}
          t={"Pixel-perfect precision for any hand size"}
        />
        <ProductPageCard
          img={
            "https://assets2.razerzone.com/images/pnx.assets/8127df0df8433ada296a732b23f3b9b4/mousemats-category-500x500.jpg"
          }
          h1={"MOUSE MATS"}
          t={"Soft and hybrid designs to enhance your control"}
        />
        <ProductPageCard
          img={
            "https://assets2.razerzone.com/images/pnx.assets/8127df0df8433ada296a732b23f3b9b4/keyboards-category-500x500.jpg"
          }
          h1={"KEYBOARDS"}
          t={"Optical, mechanical, and every type in between"}
        />
        <ProductPageCard
          img={
            "https://assets2.razerzone.com/images/pnx.assets/8127df0df8433ada296a732b23f3b9b4/headsets-category-500x500.jpg"
          }
          h1={"HEADSETS"}
          t={"Tuned for gaming and a perfect mix"}
        />
        <ProductPageCard
          img={
            "https://assets2.razerzone.com/images/pnx.assets/8127df0df8433ada296a732b23f3b9b4/speakers-category-500x500.jpg"
          }
          h1={"SPEAKERS"}
          t={"Set the soundstage for full-range immersion"}
        />
        <ProductPageCard
          img={
            "https://assets2.razerzone.com/images/pnx.assets/8127df0df8433ada296a732b23f3b9b4/chairs-category-500x500.jpg"
          }
          h1={"CHAIRS"}
          t={"Perfecting the science of comfort and support"}
        />
      </Grid>
      <ProductPageTextBox
        h={"CONTENT CREATION & STREAMING"}
        t={
          "Producing quality content requires quality hardware. From high-fidelity webcams to professional-grade microphones, deliver the best possible streaming experience with our range of content creation gear. Whether you're streaming from your gaming desktop or laptop, we’ve got everything you need to create content that stands out from the rest."
        }
      />
      <Grid
        p={5}
        gridTemplateColumns="repeat(3,1fr)"
        gap="20px"
        w="80%"
        m="auto"
        textAlign="left"
      >
        <ProductPageCard
          img={
            "https://assets2.razerzone.com/images/pnx.assets/6db17f7284da185264c3018f26bef57a/webcams-category-500x500.jpg"
          }
          h1={"WEBCAMS"}
          t={"Stunning visual fidelity for streaming"}
        />
        <ProductPageCard
          img={
            "https://assets2.razerzone.com/images/pnx.assets/6db17f7284da185264c3018f26bef57a/microphones-category-500x500.jpg"
          }
          h1={"MICROPHONES"}
          t={"Engineered for crystal-clear voice pickup"}
        />
        <ProductPageCard
          img={
            "https://assets2.razerzone.com/images/pnx.assets/6db17f7284da185264c3018f26bef57a/capturecard&others-category-500x500.jpg"
          }
          h1={"CAPTURE CARD & OTHERS"}
          t={"For a professional streaming advantage"}
        />
      </Grid>
      <ProductPageTextBox
        h={"SOFTWARE"}
        t={
          "From customizing keybinds and Chroma effects to optimizing audio and game performance, Razer's software platforms are designed to enhance your gaming and productivity. Seamlessly integrated with our extensive collection of gamer accessories and PC peripherals, get the most out of our devices and create a single ecosystem for your gaming or office desktop."
        }
      />
      <Grid
        p={4}
        gridTemplateColumns="repeat(3,1fr)"
        gap="20px"
        w="80%"
        m="auto"
        textAlign="left"
        alignItems="center"
      >
        <ProductPageCard
          img={
            "https://assets2.razerzone.com/images/pnx.assets/cf07588e1e08bf7767da32b1181bc4bf/razer-axon-category-500x500.jpg"
          }
          h1={"RAZER AXON"}
          t={
            "Bring your desktop to life with high-quality wallpapers that sync with your Razer Chroma™ RGB ecosystem."
          }
        />
        <ProductPageCard
          img={
            "https://assets2.razerzone.com/images/pnx.assets/cf07588e1e08bf7767da32b1181bc4bf/razer-chroma-rgb-category-500x500.jpg"
          }
          h1={"RAZER CHROMA™ RGB"}
          t={
            "Experience full RGB customization the world’s largest lighting ecosystem that supports hundreds of games."
          }
        />
        <ProductPageCard
          img={
            "https://assets2.razerzone.com/images/pnx.assets/cf07588e1e08bf7767da32b1181bc4bf/razer-cortex-category-500x500.jpg"
          }
          h1={"RAZER CORTEX"}
          t={
            "From boosting system performance to discovering gaming deals, enhance your play with one powerful platform."
          }
        />
      </Grid>
      <Grid
        p={5}
        gridTemplateColumns="repeat(4,1fr)"
        gap="20px"
        w="80%"
        m="auto"
        textAlign="left"
      >
        <ProductPageCard
          img={
            "https://assets2.razerzone.com/images/pnx.assets/cf07588e1e08bf7767da32b1181bc4bf/razer-synapse-category-500x500.jpg"
          }
          h1={"RAZER SYNAPSE"}
          t={
            "Maximize your unfair advantage with Razer Synapse 3, the unified cloud-based hardware configuration tool that takes your Razer devices to the next level. "
          }
        />
        <ProductPageCard
          img={
            "https://assets2.razerzone.com/images/pnx.assets/cf07588e1e08bf7767da32b1181bc4bf/thx-spatial-audio-category-500x500.jpg"
          }
          h1={"THX SPATIAL AUDIO"}
          t={
            "Unlock full customization with a surround sound application featuring more extensive audio calibration and custom-tuned game profiles.Best quality products."
          }
        />
        <ProductPageCard
          img={
            "https://assets2.razerzone.com/images/pnx.assets/cf07588e1e08bf7767da32b1181bc4bf/71-surround-sound-category-500x500.jpg"
          }
          h1={"7.1 SURROUND SOUND"}
          t={
            "Experience accurate positional sound for the competitive advantage.The bets version of your capability will come.Best quality is here.Explore by clicking below."
          }
        />
        <ProductPageCard
          img={
            "https://assets2.razerzone.com/images/pnx.assets/cf07588e1e08bf7767da32b1181bc4bf/streamer-companion-app-category-500x500.jpg"
          }
          h1={"STREAMER COMPANION"}
          t={
            "Put on a show for your stream by customizing how your Seiren Emote or Emote display reacts to your audience.Explore more."
          }
        />
      </Grid>
      {/* <Box color="white" height="700px" textAlign="left">
        <Image
          src="https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
          w="100%"
          h="700px"
        ></Image>
        <Text
          fontSize={30}
          marginTop="-400px"
          marginLeft="100px"
          color="#44d62c"
        >
          PLAYTIME. ANYTIME
        </Text>
        <Text fontSize={20} marginLeft="100px" color="whitesmoke">
          Play the latest games with graphics that rival reality.<br></br>
          DirectX 12 enables breathtaking, immersive graphics at high frame
          rates*.
        </Text>
        <Flex w="280px" h="70px" bg="blue" marginLeft="100px" gap="20px">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSRrFSl-AkNSntbZ31pcDeDU-V08Ih0JXorA&usqp=CAU"
            w="40px"
            h="40px"
          ></Image>{" "}
          Get to know More Windows 11{" "}
        </Flex>
        <Text fontSize={15} marginLeft="100px" color="whitesmoke">
          *DirectX 12 Ultimate available with supported games, graphics chips,
          and<br></br> requires the latest Windows 11 update with updated
          hardware drivers.
        </Text>
      </Box> */}
      <GridItem >
        <Box >
          <Image
            src={
              "https://assets2.razerzone.com/images/pnx.assets/d20a9f320f5d60e2b92043b7d4cc2f7a/ms-audio-banner-desktop.jpg"
            }
            width="150%"
            objectFit="cover"
            pb="20px"
            // objectPosition="center center"
            // height={{ base: "70vh", md: "70vh", lg: "100vh" }}
          />
          {/* <Box  color="white" pt="50px">
            <Box width="100%"></Box>
          </Box> */}
        </Box>
      </GridItem>
    </Box>
  );
}

export default ProductPage;
