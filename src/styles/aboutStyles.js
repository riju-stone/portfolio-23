import styled from "styled-components";
import { motion } from "framer-motion";

export const AboutSection = styled(motion.div)``;

export const AboutBanner = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  #title-container {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    #title {
      font-family: "Hammersmith One";
      position: absolute;
      top: 0;
      left: 0;
      fill: ${(props) => props.theme.text};
      font-size: 16rem;
      font-weight: bolder;
      height: 100%;
      width: 100%;
      rect {
        fill: ${(props) => props.theme.background};
        height: 100%;
        width: 100%;
        mask: url(#text-mask);
      }
    }
    video {
      position: fixed;
      object-fit: cover;
      height: 100vh;
      width: 100vw;
      z-index: -99;
    }
    #sub-title {
      position: absolute;
      bottom: 100px;
      left: 50px;
      font-family: "Monteserrat";
      font-weight: 600;
      font-size: 3rem;
      color: ${(props) => props.theme.turqoise};
    }
  }
`;

export const AboutTimeline = styled(motion.div)`
  height: 200vh;
  z-index: 50;
  background-color: ${(props) => props.theme.background};
  display: flex;
`;
