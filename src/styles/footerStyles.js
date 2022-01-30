import styled, { css } from "styled-components";
// import { motion } from "framer-motion";

export const FooterNav = styled.div`
  height: 150px;
  margin-top: 120px;
  @media (max-width: 480px) {
    height: 50px;
    margin-top: 50px;
  }
  @media (min-width: 480px) and (max-width: 768px) {
    margin-top: 50px;
  }
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
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
    @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const FooterContent = styled.div`
  color: ${(props) => props.theme.turqoise};
  font-family: "Montserrat", sans-serif;
  font-size: 1.2rem;
  font-weight: 600;
  line-height: 8px;
  ${(props) =>
    props.wider &&
    css`
      flex: 2;
    `}
  @media (max-width: 480px) {
    p {
      display: none;
    }
  }
  @media (min-width: 480px) and(max-width: 768px) {
    word-wrap: break-word;
    margin: 0 20px;
  }
`;

export const FooterSocial = styled.div`
  display: flex;
  a {
    display: block;
    width: 25px;
    height: 25px;
    padding: 8px;
    color: ${(props) => props.theme.text};
  }
`;
