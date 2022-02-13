import styled from "styled-components";
import { motion } from "framer-motion";

export const Nav = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
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
  @media (max-width: 480px) {
    top: 50px;
  }
`;

export const CloseNav = styled(motion.div)`
  button {
    cursor: none;
    transform-origin: center;
    border: none;
    outline: none;
    padding: 20px;
    background: none;
    outline: none;
    span {
      cursor: none;
      width: 28px;
      height: 6px;
      border-radius: 30px;
      display: block;
      background: ${(props) => props.theme.turqoise};
      margin: 8px;
    }
    @media (max-width: 480px) {
      padding: 30px;
      span {
        height: 4px;
        width: 24px;
      }
    }
  }
`;

export const NavList = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  font-family: "Hammersmith One", sans-serif;
  ul {
    padding: 0;
    li {
      list-style: none;
      font-size: 6rem;
      font-weight: 900;
      height: 120px;
      line-height: 120px;
      overflow: hidden;
      margin-bottom: 50px;
      a,
      Link {
        text-decoration: none;
        cursor: none;
        color: ${(props) => props.theme.link};
        .link {
          position: relative;
          display: flex;
          align-items: center;
          .arrow {
            height: 76px;
            margin-right: 8px;
            margin-bottom: 50px;
            svg {
              height: auto;
              width: 108px;
              path {
                fill: ${(props) => props.theme.link};
              }
            }
          }
        }
      }
    }
  }
  @media (max-width: 480px) {
    ul {
      li {
        line-height: normal;
        font-size: 2rem;
        margin-top: 0;
        margin-bottom: 10px;
        height: 80px;
        Link {
          .arrow {
            display: none;
          }
        }
      }
    }
  }
  @media (min-width: 480px) and (max-width: 768px) {
    ul {
      li {
        font-size: 5.5rem;
        Link {
          .arrow {
            display: none;
          }
        }
      }
    }
  }
`;

export const NavFooter = styled.div`
  font-family: "Monteserrat";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 45px 0px;
  p {
    color: ${(props) => props.theme.link};
  }
  a {
    cursor: none;
    color: ${(props) => props.theme.link};
  }
  @media (max-width: 480px) {
    padding: 20px 0px;
  }
  @media (min-width: 480px) and (max-width: 768px) {
    padding: 20px 0px;
  }
`;

export const NavVideos = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 28%;
  z-index: -1;
  height: 100%;
  width: 100%;
  background: #000;
  .reveal {
    width: 100%;
    background: ${(props) => props.theme.darkTurqoise};
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
  }
  .video {
    background: #000;
    position: absolute;
    height: 100%;
    margin: 0;
    z-index: -1;
    video {
      object-fit: cover;
      height: 100%;
      width: 100%;
    }
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const FooterSocial = styled.div`
  display: flex;
  a {
    cursor: none;
    font-family: "Montserrat", sans-serif;
    position: relative;
    display: block;
    width: 25px;
    height: 25px;
    padding: 8px;
    color: ${(props) => props.theme.link};
  }
`;
