import styled, { css } from "styled-components";
// import { motion } from "framer-motion";

export const FooterNav = styled.div`
  height: 150px;
  margin-top: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .madeby {
    padding: 2rem 0;
    font-size: 1.2rem;
    font-weight: bold;
    color: ${(props) => props.theme.text};
    svg {
      height: 20px;
      width: 20px;
      stroke-width: 2.5px;
    }
  }
  @media (max-width: 480px) {
    height: 50px;
    margin-top: 50px;
    .madeby {
      padding: 1rem 0;
      font-size: 0.8rem;
      svg {
        height: 14px;
        width: 14px;
        padding-top: 10px;
      }
    }
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
    /* margin: 0 20px; */
    font-size: 1rem;
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
