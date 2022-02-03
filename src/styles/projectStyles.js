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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 35vw;
  height: 80vh;
  will-change: transform;
  border-radius: 10px;
  pointer-events: all;
  box-shadow: 0px 5px 14px #152b39;

  img {
    height: 50%;
    width: auto;
    user-select: none;
    -webkit-user-drag: none;
  }

  h1 {
    font-family: "Hammersmith One";
    font-size: 2.5rem;
    color: ${(props) => props.theme.darkTurqoise};
  }

  p {
    font-family: "Monteserrat";
    width: 65%;
  }

  a {
    margin-top: 20px;
    cursor: none;
    text-decoration: none;
    font-size: 1.6rem;
    color: ${(props) => props.theme.link};
    svg {
      stroke-width: 2px;
      cursor: none;
    }
  }

  @media (max-width: 480px) {
    height: 60%;
    width: 60%;
    img {
      height: 30%;
      width: auto;
    }
    h1 {
      font-size: 1.8rem;
    }
    p {
      font-size: 0.8rem;
    }
    a {
      font-size: 1.6rem;
    }
  }
`;
