import styled from "styled-components";
import { motion } from "framer-motion";

export const HeaderNav = styled(motion.div)`
  position: absolute;
  z-index: 100;
  height: 0px;
  width: 100%;
  position: absolute;
  top: 72px;
  right: 0;
  left: 0;
  z-index: 90;
`;

export const Logo = styled.div`
  font-family: "Hammersmith One";
  a {
    font-size: 2.3rem;
    font-weight: bolder;
    color: ${(props) => props.theme.turqoise};
    user-select: none;
    text-decoration: none;
    cursor: none;
  }
  img {
    height: 25px;
    width: 25px;
  }
`;

export const Menu = styled(motion.div)`
  button {
    transform-origin: center;
    border: none;
    outline: none;
    padding: 20px;
    background: none;
    span {
      width: 28px;
      height: 6px;
      display: block;
      background: ${(props) => props.theme.turqoise};
      border-radius: 30px;
      margin: 8px;
    }
  }
`;
