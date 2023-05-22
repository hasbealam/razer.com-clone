import { Box, Grid, GridItem, HStack, Flex, Divider } from "@chakra-ui/react";
import {
  FooterWhiteHeading,
  FooterLinkText,
  FooterGreenText,
  FooterGrayText,
} from "./FooterTextsDecorations";
import { SocialMediaButtons } from "./SocialMediaButtons";
import twitterIcon from "../../Images/SocialMediaImages/twitter.svg";
import instagramIcon from "../../Images/SocialMediaImages/instagram.svg";
import facebookIcon from "../../Images/SocialMediaImages/facebook.svg";

export function GridFooterLayout() {
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
    <Box bg="black">
      <Box w="80%" margin="auto">
        <Box>
          <Grid templateColumns="repeat(5, 1fr)" p="20px 0px">
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
        <Divider />
        <Flex p="20px 0px" justify="space-between">
          <Box display={{ base: "block", md: "block", lg: "flex" }}>
            <Box mr="50px">
              <FooterGrayText
                text={"Copyright © 2023 Razer Inc. All rights reserved."}
              />
            </Box>
            <HStack>
              <FooterLinkText text={"Site Map"} />
              <FooterGrayText text={"|"} />
              <FooterLinkText text={"Legal Terms "} />
              <FooterGrayText text={"|"} />
              <FooterLinkText text={"Privacy Policy"} />
              <FooterGrayText text={"|"} />
              <FooterLinkText text={"Cookie Settings"} />
            </HStack>
          </Box>
          <Box>
            <HStack>
              <FooterWhiteHeading text={"United States"} />
              <FooterWhiteHeading text={"|"} />
              <FooterLinkText text={"Change Location >"} />
            </HStack>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
