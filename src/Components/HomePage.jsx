import { Grid } from "@chakra-ui/react";
import { HomePageBanner } from "./HomePageBanner";
import { HomePageCard } from "./HomePageCard";
import image1 from "../Images/1.jpg";
import image2 from "../Images/2.jpg";
import image3 from "../Images/3.jpg";
import image4 from "../Images/4.jpg";
import image5 from "../Images/5.jpg";
import image6 from "../Images/6.jpg";
import image7 from "../Images/7.jpg";
import image8 from "../Images/8.jpg";
import image9 from "../Images/9.jpg";

export function HomePage() {
  const homePageBannersData = [
    {
      heading1: "NEW RAZER BLADE 16",
      heading2: "BIGGER. BETTER. STILL THE BEST.",
      button1: "Learn More",
      button2: "Buy",
      image: image1,
    },
    {
      heading1: "RAZER DEATHADDER V3 PRO FAKER EDITION",
      heading2: "FOR THE PRO",
      button1: "Learn More",
      button2: "Buy",
      image: image2,
    },
    {
      heading1: "NEW RAZER BLADE 18",
      heading2: "THE ULTIMATE DESKTOP REPLACEMENT",
      button1: "Learn More",
      button2: "Buy",
      image: image3,
    },
  ];
  const homePageCardData = [
    {
      heading1: "RAZER ORNATA V3 TENKEYLESS",
      heading2: "SLIM. CLICKY. ERGONOMIC.",
      button1: "Learn More",
      button2: "Buy",
      image: image4,
    },
    {
      heading1: "UNLEASH A NEW AGE OF TECHNOLOGY",
      heading2: "EXPERIENCE THE REVOLUTION",
      button1: "Shop Now",
      image: image5,
    },
    {
      heading1: "RAZER ENKI PRO",
      heading2: "AUTOMOBILI LAMBORGHINI EDITION",
      button1: "Learn More",
      button2: "Buy",
      image: image6,
    },
    {
      heading1: "NEW RAZER BLADE 15",
      heading2: "PORTABLE. POWERFUL. PERFECTION",
      button1: "Learn More",
      button2: "Shop All Models",
      image: image7,
    },

    {
      heading1: "RAZER EDGE",
      heading2: "THE ULTIMATE ANDROID GAMING HANDHELD",
      button1: "Learn More",
      button2: "Buy",
      image: image8,
    },
    {
      heading1: "RAZER STREAM CONTROLLER X",
      heading2: "INSTANT CONTROL. INFINITE CREATIVITY.",
      button1: "Learn More",
      button2: "Buy",
      image: image9,
    },
  ];
  return (
    <Grid bg="#222" gap={3}>
      <Grid gap={3}>
        {homePageBannersData.map((info, index) => {
          return <HomePageBanner info={info} key={index} p="10px" />;
        })}
      </Grid>
      <Grid templateColumns="repeat(2, 1fr)" gap={3}>
        {homePageCardData.map((info, index) => {
          return <HomePageCard info={info} key={index} />;
        })}
      </Grid>
    </Grid>
  );
}
