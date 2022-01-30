import styled, { css } from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 32px;
  position: relative;
  width: 70%;
  height: 100%;
  @media (max-width: 480px) {
    padding: 0 6px;
    width: 90%;
  }
  @media (min-width: 480px) and (max-width: 768px) {
    padding: 0 16px;
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
`;

export const Cursor = styled.div`
  position: fixed;
  top: 400px;
  left: 400px;
  width: 32px;
  height: 32px;
  background: ${(props) => props.theme.turqoise};
  border-radius: 100%;
  transform: translate(-50%, -50%);
  transition: all 0.1s ease-in-out;
  transition-property: width, height, border;
  will-change: width, height, transform, border;
  pointer-events: none;
  z-index: 999;

  &.hovered {
    background: transparent !important;
    width: 56px;
    height: 56px;
    border: 2px solid ${(props) => props.theme.turqoise};
  }

  &.pointer {
    background: transparent !important;
    width: 40px;
    height: 40px;
    border: 4px solid ${(props) => props.theme.text};
  }

  &.nav-open {
    background: ${(props) => props.theme.text};
  }

  &.locked {
    background: transparent !important;
    width: 40px;
    height: 40px;
    border: 4px solid ${(props) => props.theme.turqoise};
    top: ${(props) => props.theme.top} !important;
    left: ${(props) => props.theme.left} !important;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
