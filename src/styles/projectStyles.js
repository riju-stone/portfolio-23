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
  justify-content: center;
  align-items: center;
  canvas {
    position: absolute;
    height: 100vh;
  }
  .title-container {
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 60px;
  }
  .title {
    color: ${(props) => props.theme.text};
    font-size: 9rem;
    font-weight: bolder;
    font-family: "Hammersmith One";
    text-transform: uppercase;
  }
  .sub-title {
    color: ${(props) => props.theme.link};
    font-size: 3rem;
    font-family: "Space Grotesk";
  }
`;
