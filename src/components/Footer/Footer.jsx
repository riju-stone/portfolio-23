import React, { useRef } from "react";
import { BsInstagram, BsTwitter, BsGithub } from "react-icons/bs";
import useElementPosition from "../../hooks/useElemPos";
//styles
import {
  Flex,
  FooterNav,
  FooterContent,
  FooterSocial,
} from "../../styles/footerStyles";
import { Container } from "../../styles/globalStyles";

import { Heart, Computer } from "iconoir-react";

//hooks
import {
  useIsMobile,
  useIsSmallTablet,
  useIsLargeTablet,
} from "../../hooks/useMediaQuery";

const Footer = ({ onCursor }) => {
  const isMobile = useIsMobile();
  const isSmallTablet = useIsSmallTablet();
  const isLargeTablet = useIsLargeTablet();
  return (
    <FooterNav>
      <Container>
        <Flex spaceBetween>
          <FooterContent wider>
            <p>+91 9163411820</p>
            <p>riju23chakra@gmail.com</p>
          </FooterContent>
          <FooterContent wider>
            <p>Kolkata, IN</p>
          </FooterContent>
          <FooterSocial>
            <a
              href="https://www.instagram.com/riju_stone/"
              target="_blank"
              onMouseEnter={() => onCursor("pointer")}
              onMouseLeave={() => onCursor()}
              rel="noreferrer"
            >
              <BsInstagram
                size={{ height: "20px" }}
                style={{ cursor: "none" }}
              />
            </a>
            <a
              href="https://twitter.com/RijuStone"
              target="_blank"
              onMouseEnter={() => onCursor("pointer")}
              onMouseLeave={() => onCursor()}
              rel="noreferrer"
            >
              <BsTwitter size={{ height: "20px" }} style={{ cursor: "none" }} />
            </a>
            <a
              target="_blank"
              href="https://github.com/riju-stone"
              onMouseEnter={() => onCursor("pointer")}
              onMouseLeave={() => onCursor()}
              rel="noreferrer"
            >
              <BsGithub size={{ height: "20px" }} style={{ cursor: "none" }} />
            </a>
          </FooterSocial>
        </Flex>
      </Container>
      <div className="madeby">
        {isMobile || isSmallTablet || isLargeTablet ? (
          <>
            Best viewed on a <Computer />
          </>
        ) : (
          <>
            Made with <Heart /> by Arighna Chakraborty
          </>
        )}
      </div>
    </FooterNav>
  );
};

export default Footer;
