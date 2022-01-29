import styled from "styled-components";
import { motion } from "framer-motion";

export const AboutSection = styled(motion.div)`
  padding: 0%;
  margin: 0%;
`;

export const AboutBanner = styled(motion.div)`
  margin: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  #title-container {
    overflow-y: hidden;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow-y: hidden;
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
      overflow-y: hidden;
      rect {
        fill: ${(props) => props.theme.background};
        height: 100vh;
        width: 100vw;
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
      overflow-y: hidden;
      position: absolute;
      bottom: 100px;
      left: 50px;
      font-family: "Monteserrat";
      font-weight: 600;
      font-size: 3rem;
      color: ${(props) => props.theme.turqoise};
    }
  }
  @media (max-width: 480px) {
    #title-container {
      #title {
        font-size: 4.2rem;
      }
      #sub-title {
        font-size: 1.2rem;
        bottom: 70px;
      }
    }
  }
`;

export const Marquee = styled.div`
  z-index: 50;
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: ${(props) => props.theme.background};
  p {
    text-transform: uppercase;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: ${(props) => props.theme.link};
    line-height: 0;
  }
  #upper {
    font-family: "Bungee Outline";
    font-weight: bolder;
    font-size: 18rem;
  }
  #lower {
    font-family: "Bungee Outline";
    font-weight: bolder;
    font-size: 15rem;
  }
  #author {
    margin: 10px 0px;
    font-family: "Hammersmith One";
    font-weight: bolder;
    font-size: 4rem;
  }
  @media (max-width: 480px) {
    #upper {
      font-size: 3rem;
    }
    #lower {
      font-size: 2.8rem;
    }
    #author {
      font-size: 1.6rem;
    }
  }
`;

export const AboutTimeline = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  z-index: 50;
  background-color: ${(props) => props.theme.background};
  display: flex;
`;
