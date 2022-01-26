import styled from "styled-components";
import { motion } from "framer-motion";

export const LoaderSection = styled(motion.div)`
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.background};
  div {
    font-family: "Bungee Outline";
    font-size: 4rem;
    font-weight: bolder;
    color: ${(props) => props.theme.link};
  }
`;
