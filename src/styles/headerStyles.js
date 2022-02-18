import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const HeaderNav = styled(motion.div)`
  width: 100%;
  position: absolute;
  top: 72px;
  right: 0;
  left: 0;
  @media (max-width: 480px) {
    top: 50px;
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  position: relative;
  width: 70%;
  height: 100%;
  @media (max-width: 480px) {
    width: 90%;
  }
  @media (min-width: 480px) and (max-width: 768px) {
    width: 88%;
  }
  ${(props) =>
    props.fluid &&
    css`
      padding: 0;
      margin: 0;
      max-width: 100%;
    `}
`;

export const Flex = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  ${(props) =>
    props.spaceBetween &&
    css`
      justify-content: space-between;
    `}

  ${(props) =>
    props.flexEnd &&
    css`
      justify-content: flex-end;
    `}

    ${(props) =>
    props.alignTop &&
    css`
      align-items: flex-start;
    `}

    ${(props) =>
    props.noHeight &&
    css`
      height: 0;
    `}
`;

export const Logo = styled.div`
  position: fixed;
  left: 10%;
  font-family: "Hammersmith One";
  z-index: 70;
  a {
    font-size: 2.3rem;
    font-weight: bolder;
    color: ${(props) => props.theme.turqoise};
    user-select: none;
    text-decoration: none;
    cursor: none;
  }
  svg {
    height: 25px;
    width: 25px;
    transition: all 0.3s ease-in-out;
  }
  @media (max-width: 480px) {
    a {
      font-size: 1.8rem;
    }
    svg {
      height: 20px;
      width: 20px;
    }
  }
`;

export const Menu = styled(motion.button)`
  position: fixed;
  right: 10%;
  z-index: 90;
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
  @media (max-width: 480px) {
    padding: 5px;
    span {
      height: 4px;
      width: 22px;
    }
  }
`;
