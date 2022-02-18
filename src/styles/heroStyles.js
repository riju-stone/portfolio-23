import styled from "styled-components";
import { motion } from "framer-motion";

//home banner styles
export const HeroBannerSection = styled.div`
  background: ${(props) => props.theme.background};
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
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
  inset: 0;
  font-family: "Hammersmith One";
  font-size: 12rem;
  letter-spacing: 2px;
  font-weight: bolder;
  line-height: 1;
  @media (max-width: 480px) {
    font-size: 3.2rem;
    letter-spacing: 2px;
  }
  @media (min-width: 480px) and (max-width: 768px) {
    font-size: 6rem;
  }
`;
