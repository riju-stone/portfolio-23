import styled from "styled-components";
import { motion } from "framer-motion";

export const Nav = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: blobk;
  background: ${(props) => props.theme.darkTurqoise};
  color: #000;
  z-index: 95;
  overflow-x: hidden;
  overflow-y: hidden;
`;

export const NavHeader = styled.div`
  top: 72px;
  position: relative;
  h2 {
    color: ${(props) => props.theme.turqoise};
  }
`;

export const CloseNav = styled(motion.div)`
  button {
    transform-origin: center;
    border: none;
    outline: none;
    padding: 20px;
    background: none;
    outline: none;
    span {
      width: 28px;
      height: 6px;
      border-radius: 30px;
      display: block;
      background: ${(props) => props.theme.turqoise};
      margin: 8px;
    }
  }
`;

export const NavList = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  ul {
    padding: 0;
    li {
      list-style: none;
      font-size: 4.5rem;
      test-transform: uppercase;
      font-weight: 900;
      height: 96px;
      line-height: 96px;
      overflow: hidden;
      margin-bottom: 80px;
      a {
        color: ${(props) => props.theme.link};
        .link {
          position: relative;
          display: flex;
          align-items: center;
          .arrow {
            height: 76px;
            margin-right: 8px;
            margin-bottom: 10px;
            svg {
              width: 100px;
              path {
                fill: ${(props) => props.theme.link};
              }
            }
          }
        }
      }
    }
  }
`;

export const NavFooter = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 56px 0px;
  p {
    color: ${(props) => props.theme.link};
  }
  a {
    color: ${(props) => props.theme.link};
  }
`;

export const NavVideos = styled.div`
  position: absolute;
  top: 0;
  botton: 0;
  left: 28%;
  z-index: -10;
  height: 100%;
  width: 100%;
  background: #000;
  .reveal {
    width: 100%;
    background: ${(props) => props.theme.darkTurqoise};
    position: absolute;
    top: 0;
    bottom: 0;
    letf: 0;
  }
  .video {
    background: #000;
    position: absolute;
    height: 100%;
    margin: 0;
    z-index: -5;
    video {
      object-fit: cover;
      height: 100%;
      width: 100%;
    }
  }
`;