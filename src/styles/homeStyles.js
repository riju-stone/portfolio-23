import styled from "styled-components";
import { motion } from "framer-motion";

export const Banner = styled.div`
  background: ${(props) => props.theme.background};
  height: 100vh;
  width: 100%;
  position: relative;
`;

export const Video = styled.div`
  height: 100%;
  width: 100%;
  video {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
`;

export const Canvas = styled.canvas`
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  height: 100%;
`;

export const BannerTitle = styled(motion.h1)`
  position: absolute;
  bottom: 0;
  left: -18px;
  color: ${(props) => props.theme.text};
  pointer-events: none;
  padding: 40px 80px;
`;

export const Headline = styled(motion.span)`
  display: block;
  font-size: 12rem;
  font-weight: 900;
  line-height: 1;
`;
