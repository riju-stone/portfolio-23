import { motion } from "framer-motion";
import styled from "styled-components";

export const ProjectViewSection = styled.div`
  padding: 0;
  margin: 0;
  height: 100vh;
  width: 100vw;
  color: ${(props) => props.theme.text};
  font-family: "Space Grotesk";
  font-size: 9rem;
  font-weight: bolder;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  /* canvas {
    position: absolute;
    height: 100vh;
  } */
  .title-container {
    display: flex;
    flex-direction: column;
  }
  .title {
    color: ${(props) => props.theme.text};
    font-size: 12rem;
    font-weight: bolder;
    font-family: "Hammersmith One";
    text-transform: uppercase;
  }
  .sub-title {
    color: ${(props) => props.theme.link};
    font-size: 4rem;
    font-family: "Space Grotesk";
  }
  @media (max-width: 480px) {
    flex-direction: column;
    justify-content: center;
    .title {
      font-size: 4.5rem;
    }
    .sub-title {
      font-size: 1.5rem;
    }
  }
`;

export const ProjectTitle = styled(motion.div)`
  font-size: 5rem;
  font-family: "Monoton";
  margin-top: 20px;
  font-weight: 400;
  color: ${(props) => props.theme.turqoise};
  @media (max-width: 480px) {
    font-size: 1.6rem;
  }
`;
