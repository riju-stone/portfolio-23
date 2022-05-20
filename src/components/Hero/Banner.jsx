import React from "react";
import {
  HeroBannerSection,
  BannerTitle,
  Headline,
} from "../../styles/heroStyles";
// import useWindowSize from "../../hooks/windowSize";
// import { useGlobalStateContext } from "../../context/globalContext";
import BlobScene from "./Blob";
const Banner = ({ onCursor }) => {
  const parent = {
    initial: { y: 800 },
    animate: {
      y: 0,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const child = {
    initial: { y: 800 },
    animate: {
      y: 0,
      transition: {
        duration: 1,
        ease: [0.5, 0.05, -0.01, 0.9],
      },
    },
  };
  return (
    <HeroBannerSection
      onMouseLeave={onCursor}
      onMouseEnter={() => onCursor("hovered")}
    >
      <BannerTitle variants={parent} initial="initial" animate="animate">
        <Headline variants={child}>Arighna</Headline>
        <Headline variants={child}>Chakraborty</Headline>
      </BannerTitle>
      {/* <BlobScene /> */}
    </HeroBannerSection>
  );
};

export default Banner;
