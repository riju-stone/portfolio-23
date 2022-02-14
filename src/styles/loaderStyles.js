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
  text-align: center;
  background-color: ${(props) => props.theme.background};
`;
