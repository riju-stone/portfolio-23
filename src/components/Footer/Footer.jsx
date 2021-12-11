import React, { useRef } from "react";
import { BsInstagram, BsTwitter, BsGithub } from "react-icons/bs";
import useElementPosition from "../../hooks/elemPos";
//styles
import {
  FooterNav,
  FooterContent,
  FooterSocial,
} from "../../styles/footerStyles";
import { Container, Flex } from "../../styles/globalStyles";

const Footer = ({ onCursor, setFooterPosition }) => {
  const instaLink = useRef(null);
  const instaPosition = useElementPosition(instaLink);

  const twitterLink = useRef(null);
  const twitterPosition = useElementPosition(twitterLink);

  const gitLink = useRef(null);
  const gitPosition = useElementPosition(gitLink);

  const onLinkHover = (x) => {
    onCursor("locked");
    setFooterPosition({ x: x });
  };

  return (
    <FooterNav>
      <Container>
        <Flex spaceBetween>
          <FooterContent>
            <p>+91 9163411820</p>
            <p>riju23chakra@gmail.com</p>
          </FooterContent>
          <FooterContent wider>
            <p>36 Motilal Roy Lane,</p>
            <p>Bhadrakali, Hooghly - 712232</p>
            <p>Kolkata, West Bengal, IN</p>
          </FooterContent>
          <FooterSocial>
            <a
              ref={instaLink}
              href="https://www.instagram.com/epash_opash_dhopash/"
              target="_blank"
              onMouseEnter={() => onLinkHover(instaPosition.x)}
              onMouseLeave={() => onCursor()}
              rel="noreferrer"
            >
              <BsInstagram size={{ height: "20px" }} />
            </a>
            <a
              ref={twitterLink}
              href="https://twitter.com/RijuStone"
              target="_blank"
              onMouseEnter={() => onLinkHover(twitterPosition.x)}
              onMouseLeave={() => onCursor()}
              rel="noreferrer"
            >
              <BsTwitter size={{ height: "20px" }} />
            </a>
            <a
              ref={gitLink}
              target="_blank"
              href="https://github.com/riju-stone"
              onMouseEnter={() => onLinkHover(gitPosition.x)}
              onMouseLeave={() => onCursor()}
              rel="noreferrer"
            >
              <BsGithub size={{ height: "20px" }} />
            </a>
          </FooterSocial>
        </Flex>
      </Container>
    </FooterNav>
  );
};

export default Footer;