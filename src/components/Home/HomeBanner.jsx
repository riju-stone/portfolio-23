import React from "react";
import { Banner, BannerTitle, Headline } from "../../styles/homeStyles";
// import useWindowSize from "../../hooks/windowSize";
// import { useGlobalStateContext } from "../../context/globalContext";

const HomeBanner = ({ onCursor }) => {
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
    <Banner onMouseLeave={onCursor} onMouseEnter={() => onCursor("hovered")}>
      <BannerTitle variants={parent} initial="initial" animate="animate">
        <Headline variants={child}>Arighna</Headline>
        <Headline variants={child}>Chakraborty</Headline>
      </BannerTitle>
    </Banner>
  );
};

export default HomeBanner;
