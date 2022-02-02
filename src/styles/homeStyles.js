import styled, { css } from "styled-components";
import { motion } from "framer-motion";

//home banner styles
export const Banner = styled.div`
  background: ${(props) => props.theme.background};
  height: 100vh;
  width: 100vw;
  position: relative;
`;

export const BannerTitle = styled(motion.h1)`
  position: absolute;
  bottom: 0;
  left: -18px;
  color: ${(props) => props.theme.turqoise};
  pointer-events: none;
  padding: 40px 80px;
  overflow: hidden;
  @media (max-width: 480px) {
    padding: 20px 40px;
    margin-bottom: 100px;
  }
  @media (min-width: 480px) and (max-width: 768px) {
    padding: 20px 60px;
    margin-bottom: 100px;
  }
`;

export const Headline = styled(motion.span)`
  display: flex;
  letter-spacing: 10px;
  inset: 0;
  font-family: "Hammersmith One";
  font-size: 12rem;
  font-weight: 900;
  line-height: 1;
  @media (max-width: 480px) {
    font-size: 3.2rem;
    letter-spacing: 2px;
  }
  @media (min-width: 480px) and (max-width: 768px) {
    font-size: 6rem;
  }
`;

//home content styles
export const HomeContentSection = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 480px) {
    height: 80vh;
  }
`;

export const WaveSceneSection = styled(motion.div)`
  margin: 0;
  padding: 0;
  top: 100%;
  position: absolute;
  height: 100%;
  width: 100vw;
  display: flex;
  align-items: middle;
  justify-content: center;
  Canvas {
    height: 100%;
    width: 100%;
    z-index: 0;
  }
  @media (max-width: 480px) {
    margin-left: 50px;
    top: 85%;
  }
`;

export const Content = styled(motion.div)`
  width: 60%;
  font-family: "Hammersmith One", sans-serif;
  font-size: 4.5rem;
  font-weight: 600;
  margin-left: 20%;
  margin-top: 20%;
  color: ${(props) => props.theme.link};
  @media (max-width: 480px) {
    font-size: 2.2rem;
    margin-top: 40%;
    margin-left: 20px;
  }
  @media (min-width: 480px) and (max-width: 768px) {
    font-size: 3.5rem;
    margin-top: 50%;
    margin-left: 40px;
  }
`;

//home about styles
export const HomeAboutSection = styled.div`
  margin-top: 150px;
  width: 100vw;
  @media (max-width: 480px) {
    margin-top: 0;
  }
  @media (min-width: 480px) and (max-width: 768px) {
    margin-top: 0;
  }
`;

export const Flex = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  ${(props) =>
    props.spaceBetween &&
    css`
      justify-content: space-between;
    `}

  ${(props) =>
    props.flexEnd &&
    css`
      justify-content: flex-end;
    `}

    ${(props) =>
    props.alignTop &&
    css`
      align-items: flex-start;
    `}

    ${(props) =>
    props.noHeight &&
    css`
      height: 0;
    `}

    @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const About = styled(motion.div)`
  width: 100%;
  h2 {
    font-family: "Hammersmith One";
    width: 60%;
    font-size: 2.3rem;
    font-weight: 400;
    margin-left: 124px;
    color: ${(props) => props.theme.text};
  }
  p {
    font-family: "Monteserrat";
    max-width: 440px;
    font-size: 1.2rem;
    line-height: 1.6rem;
    margin-left: 124px;
    color: ${(props) => props.theme.text};
  }
  @media (max-width: 480px) {
    h2 {
      font-size: 1.8rem;
      margin-left: 0;
      width: 100%;
    }
    p {
      font-size: 1rem;
      margin-left: 0;
      width: 100%;
    }
  }
  @media (min-width: 480px) and (max-width: 768px) {
    h2 {
      font-size: 2rem;
      margin-left: 0;
      width: 90%;
    }
    p {
      font-size: 1.2rem;
      margin-left: 0;
      width: 90%;
    }
  }
`;

export const Services = styled(motion.div)`
  font-family: "Hammersmith One", sans-serif;
  font-size: 2rem;
  color: ${(props) => props.theme.link};
  @media (max-width: 480px) {
    h3 {
      font-size: 1.8rem;
    }
  }
  @media (min-width: 480px) and (max-width: 768px) {
    h3 {
      font-size: 2rem;
    }
  }
`;

export const AccordionHeader = styled(motion.div)`
  width: 100%;
  color: ${(props) => props.theme.turqoise};
  height: 32px;
  display: flex;
  align-items: center;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 1.5rem;
  margin: 8px 0;
  @media (max-width: 480px) {
    font-size: 1.2rem;
    height: 24px;
  }
  @media (min-width: 480px) and (max-width: 768px) {
    font-size: 1.4rem;
    height: 26px;
  }
`;

export const AccordionIcon = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  margin-right: 8px;
  span {
    width: 16px;
    height: 4px;
    background: ${(props) => props.theme.turqoise};
    transition: 0.1s ease-in-out;
  }
`;

export const AccordionContent = styled(motion.div)`
  overflow: hidden;
  padding-left: 40px;
  font-family: "Montserrat", sans-serif;
  span {
    width: 100%;
    margin: 8px 0;
    font-size: 1rem;
    color: ${(props) => props.theme.turqoise};
    display: block;
    font-weight: 400;
  }
  @media (max-width: 480px) {
    margin: 4px 0;
  }
  @media (min-width: 480px) and (max-width: 768px) {
    margin: 4px 0;
  }
`;
