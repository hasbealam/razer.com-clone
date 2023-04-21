// import {
//   Accordion,
//   AccordionItem,
//   AccordionButton,
//   AccordionPanel,
//   Box,
// } from "@chakra-ui/react";
// import { CloseIcon, AddIcon } from "@chakra-ui/icons";
// export function Footer() {
//   return (
//     <Box bg="black">
//       <Accordion allowToggle>
//         <AccordionItem>
//           {({ isExpanded }) => (
//             <>
//               <h2>
//                 <AccordionButton>
//                   <Box as="span" flex="1" textAlign="left">
//                     Section 2 title
//                   </Box>
//                   {isExpanded ? (
//                     <CloseIcon fontSize="10px" />
//                   ) : (
//                     <AddIcon fontSize="12px" />
//                   )}
//                 </AccordionButton>
//               </h2>
//               <AccordionPanel pb={4}>
//                 <p>one!</p>
//                 <p>one!</p>
//                 <p>one!</p>
//                 <p>one!</p>
//                 <p>one!</p>
//               </AccordionPanel>
//             </>
//           )}
//         </AccordionItem>
//         <AccordionItem>
//           {({ isExpanded }) => (
//             <>
//               <h2>
//                 <AccordionButton>
//                   <Box as="span" flex="1" textAlign="left">
//                     Section 2 title
//                   </Box>
//                   {isExpanded ? (
//                     <CloseIcon fontSize="10px" />
//                   ) : (
//                     <AddIcon fontSize="12px" />
//                   )}
//                 </AccordionButton>
//               </h2>
//               <AccordionPanel pb={4}>
//                 <p>one!</p>
//                 <p>one!</p>
//                 <p>one!</p>
//                 <p>one!</p>
//                 <p>one!</p>
//               </AccordionPanel>
//             </>
//           )}
//         </AccordionItem>
//       </Accordion>
//     </Box>
//   );
// }
import {
  Box,
  Grid,
  GridItem,
  Button,
  VStack,
  Text,
  textDecoration,
  HStack,
  Flex
} from "@chakra-ui/react";
import { color } from "framer-motion";
import {
  FooterWhiteHeading,
  FooterLinkText,
  FooterGreenText,
} from "./FooterTextsDecorations";
import { SocialMediaButtons } from "./SocialMediaButtons";
import twitterIcon from "../../Images/Social_Media_Icons/twitter.svg";
import instagramIcon from "../../Images/Social_Media_Icons/instagram.svg";
import facebookIcon from "../../Images/Social_Media_Icons/facebook.svg";

export function Footer() {
  const footerLinks = {
    Shop: [
      "RazerStores",
      "RazerCafe",
      "Store Locator",
      "Purchase Programs",
      "Education",
      "Exclusives",
      "RazerStore Rewards",
      "Newsletter",
    ],

    Explore: ["Technology", "Chroma RGB", "Concepts", "Esports", "Collabs"],
    Support: [
      "Get Help",
      "Registration & Warranty",
      "RazerStore Support",
      "RazerCare",
      "Manage Razer ID",
      "Support Videos",
      "Accessibility Statement",
    ],

    Company: ["About Us", "Careers", "Press Room", "zVentures", "Contact Us"],
  };
  return (
    <Box bg="black" p="10px" display="flex">
      <Box w="85%" margin="auto" p="10px">
        <Grid templateColumns="repeat(5, 1fr)">
          <GridItem>
            <FooterWhiteHeading text={"Shop"} />
            {footerLinks.Shop.map((text) => {
              return <FooterLinkText text={text} />;
            })}
          </GridItem>
          <GridItem>
            <FooterWhiteHeading text={"Explore"} />
            {footerLinks.Explore.map((text) => {
              return <FooterLinkText text={text} />;
            })}
          </GridItem>
          <GridItem>
            <FooterWhiteHeading text={"Support"} />
            {footerLinks.Support.map((text) => {
              return <FooterLinkText text={text} />;
            })}
          </GridItem>
          <GridItem>
            <FooterWhiteHeading text={"Company"} />
            {footerLinks.Company.map((text) => {
              return <FooterLinkText text={text} />;
            })}
          </GridItem>
          <GridItem>
            <Box align="right">
              <FooterGreenText text={"FOR GAMERS. BY GAMERS.™"} />
            </Box>
            <Flex justify="right" gap="2">
              <Box>
                <SocialMediaButtons
                  icon={facebookIcon}
                  iconName={"facebook_icon"}
                  label={"Facebook"}
                />
              </Box>
              <Box>
                <SocialMediaButtons
                  icon={instagramIcon}
                  iconName={"instagram_icon"}
                  label={"Instagram"}
                />
              </Box>
              <Box>
                <SocialMediaButtons
                  icon={twitterIcon}
                  iconName={"twitter_icon"}
                  label={"Twitter"}
                />
              </Box>
            </Flex>
          </GridItem>
        </Grid>
      </Box>
      <Box>
        <Box bg="red"></Box>
      </Box>
    </Box>
  );
}
