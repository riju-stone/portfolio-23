import { motion } from "framer-motion";
import styled from "styled-components";

export const ProjectViewSection = styled.div`
  padding: 0;
  margin: 0;
  height: 100vh;
  overflow: hidden;
  background-color: ${(props) => props.theme.background};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const CardsWrapper = styled(motion.div)`
  position: absolute;
  width: 100vw;
  height: 100vh;
  will-change: transform;
  display: flex;
  align-items: center;
  justify-content: center;
  .info {
    position: absolute;
    right: 50px;
    bottom: 50px;
    font-family: "Bungee Outline";
    color: ${(props) => props.theme.link};
    font-weight: 600;
    font-size: 2rem;
    text-align: right;
  }
  @media (max-width: 480px) {
    .info {
      font-size: 1rem;
    }
  }
`;

export const Cards = styled(motion.div)`
  position: absolute;
  background-color: white;
  background-size: auto 85%;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  width: 35vw;
  height: 80vh;
  will-change: transform;
  border-radius: 10px;
  pointer-events: all;
  box-shadow: 0px 5px 14px #152b39;

  @media (max-width: 480px) {
    height: 60%;
    width: 60%;
  }
`;
