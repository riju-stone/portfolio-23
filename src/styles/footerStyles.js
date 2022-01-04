import styled, { css } from "styled-components";
// import { motion } from "framer-motion";

export const FooterNav = styled.div`
  height: 150px;
  margin-top: 120px;
`;

export const FooterContent = styled.div`
  color: ${(props) => props.theme.turqoise};
  font-family: "Montserrat", sans-serif;
  font-size: 1.2rem;
  font-weight: 600;
  line-height: 8px;
  flex: 1;
  ${(props) =>
    props.wider &&
    css`
      flex: 2;
    `}
`;

export const FooterSocial = styled.div`
  display: flex;
  a {
    position: relative;
    display: block;
    width: 25px;
    height: 25px;
    padding: 8px;
    color: ${(props) => props.theme.text};
  }
`;
