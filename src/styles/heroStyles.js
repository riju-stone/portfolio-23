import styled from "styled-components";
import { motion } from "framer-motion";

export const HeroSection = styled(motion.div)`
  margin: 0;
  padding: 0;
  position: absolute;
  height: 100%;
  width: 100%;
  top: 900px;
  display: flex;
  align-items: middle;
  justify-content: center;
  Canvas {
    height: 100%;
    width: 100%;
    z-index: 99;
  }
`;
