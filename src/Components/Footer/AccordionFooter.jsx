import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box,
  HStack,
  Divider,
  Flex,
} from "@chakra-ui/react";
import { CloseIcon, AddIcon } from "@chakra-ui/icons";
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

export function AccordionFooter() {
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
    <Box bg="black" color="#999">
      <Box>
        <Accordion allowToggle>
          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      <FooterWhiteHeading text={"Shop"} />
                    </Box>
                    {isExpanded ? (
                      <CloseIcon fontSize="10px" />
                    ) : (
                      <AddIcon fontSize="12px" />
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  {footerLinks.Shop.map((text) => {
                    return <FooterLinkText text={text} />;
                  })}
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      <FooterWhiteHeading text={"Explore"} />
                    </Box>
                    {isExpanded ? (
                      <CloseIcon fontSize="10px" />
                    ) : (
                      <AddIcon fontSize="12px" />
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  {footerLinks.Explore.map((text) => {
                    return <FooterLinkText text={text} />;
                  })}
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      <FooterWhiteHeading text={"Support"} />
                    </Box>
                    {isExpanded ? (
                      <CloseIcon fontSize="10px" />
                    ) : (
                      <AddIcon fontSize="12px" />
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  {footerLinks.Support.map((text) => {
                    return <FooterLinkText text={text} />;
                  })}
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      <FooterWhiteHeading text={"Company"} />
                    </Box>
                    {isExpanded ? (
                      <CloseIcon fontSize="10px" />
                    ) : (
                      <AddIcon fontSize="12px" />
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  {footerLinks.Company.map((text) => {
                    return <FooterLinkText text={text} />;
                  })}
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        </Accordion>
      </Box>
      <Flex justify="center" pt="25px" pb="18px">
        <HStack>
          <FooterGrayText
            text={"Copyright © 2023 Razer Inc. All rights reserved."}
          />
          <FooterLinkText text={"Site Map"} />
          <FooterGrayText text={"|"} />
          <FooterLinkText text={"Legal Terms "} />
          <FooterGrayText text={"|"} />
          <FooterLinkText text={"Privacy Policy"} />
          <FooterGrayText text={"|"} />
          <FooterLinkText text={"Cookie Settings"} />
        </HStack>
      </Flex>
      <Divider />
      <Flex justify="center" pt="25px" pb="5px">
        <HStack>
          <FooterWhiteHeading text={"United States"} />
          <FooterWhiteHeading text={"|"} />
          <FooterLinkText text={"Change Location >"} />
        </HStack>
      </Flex>
      <Flex justify="center">
        <HStack pb="50px">
          <FooterGreenText text={"FOR GAMERS. BY GAMERS.™"} />
          <SocialMediaButtons
            icon={facebookIcon}
            iconName={"facebook_icon"}
            label={"Facebook"}
          />
          <SocialMediaButtons
            icon={instagramIcon}
            iconName={"instagram_icon"}
            label={"Instagram"}
          />
          <SocialMediaButtons
            icon={twitterIcon}
            iconName={"twitter_icon"}
            label={"Twitter"}
          />
        </HStack>
      </Flex>
      <Divider />
    </Box>
  );
}
