import styled from "styled-components";
import { motion } from "framer-motion";

export const LoaderSection = styled(motion.div)`
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: ${(props) => props.theme.background};
  div {
    font-family: "Bungee Outline";
    font-size: 3.5rem;
    font-weight: bolder;
    color: ${(props) => props.theme.link};
    @media (max-width: 480px) {
      font-size: 1.6rem;
    }
  }
`;

export const CoffeeAnimWrapper = styled(motion.div)`
  margin-bottom: 5rem;
  .tea {
    --secondary: ${(props) => props.theme.turqoise};
    transform: scale(4);
    @media (max-width: 480px) {
      transform: scale(2);
    }
  }
  .tea #teabag {
    transform-origin: top center;
    transform: rotate(3deg);
    animation: swing 2s infinite;
  }
  .tea #steamL {
    stroke-dasharray: 13;
    stroke-dashoffset: 13;
    animation: steamLarge 2s infinite;
  }
  .tea #steamR {
    stroke-dasharray: 9;
    stroke-dashoffset: 9;
    animation: steamSmall 2s infinite;
  }
  @-moz-keyframes swing {
    50% {
      transform: rotate(-3deg);
    }
  }
  @-webkit-keyframes swing {
    50% {
      transform: rotate(-3deg);
    }
  }
  @-o-keyframes swing {
    50% {
      transform: rotate(-3deg);
    }
  }
  @keyframes swing {
    50% {
      transform: rotate(-3deg);
    }
  }
  @-moz-keyframes steamLarge {
    0% {
      stroke-dashoffset: 13;
      opacity: 0.6;
    }
    100% {
      stroke-dashoffset: 39;
      opacity: 0;
    }
  }
  @-webkit-keyframes steamLarge {
    0% {
      stroke-dashoffset: 13;
      opacity: 0.6;
    }
    100% {
      stroke-dashoffset: 39;
      opacity: 0;
    }
  }
  @-o-keyframes steamLarge {
    0% {
      stroke-dashoffset: 13;
      opacity: 0.6;
    }
    100% {
      stroke-dashoffset: 39;
      opacity: 0;
    }
  }
  @keyframes steamLarge {
    0% {
      stroke-dashoffset: 13;
      opacity: 0.6;
    }
    100% {
      stroke-dashoffset: 39;
      opacity: 0;
    }
  }
  @-moz-keyframes steamSmall {
    10% {
      stroke-dashoffset: 9;
      opacity: 0.6;
    }
    80% {
      stroke-dashoffset: 27;
      opacity: 0;
    }
    100% {
      stroke-dashoffset: 27;
      opacity: 0;
    }
  }
  @-webkit-keyframes steamSmall {
    10% {
      stroke-dashoffset: 9;
      opacity: 0.6;
    }
    80% {
      stroke-dashoffset: 27;
      opacity: 0;
    }
    100% {
      stroke-dashoffset: 27;
      opacity: 0;
    }
  }
  @-o-keyframes steamSmall {
    10% {
      stroke-dashoffset: 9;
      opacity: 0.6;
    }
    80% {
      stroke-dashoffset: 27;
      opacity: 0;
    }
    100% {
      stroke-dashoffset: 27;
      opacity: 0;
    }
  }
  @keyframes steamSmall {
    10% {
      stroke-dashoffset: 9;
      opacity: 0.6;
    }
    80% {
      stroke-dashoffset: 27;
      opacity: 0;
    }
    100% {
      stroke-dashoffset: 27;
      opacity: 0;
    }
  }
`;
