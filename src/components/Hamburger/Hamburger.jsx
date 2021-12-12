import React, { useState } from "react";
// import useElementPosition from "../../hooks/elemPos";
import { AnimatePresence, motion } from "framer-motion";
//styles
import { Container, Flex } from "../../styles/globalStyles";
import {
  Nav,
  NavHeader,
  CloseNav,
  NavList,
  NavFooter,
  NavVideos,
  FooterSocial,
} from "../../styles/hamburgerStyles";
import { FooterContent } from "../../styles/footerStyles";
import { BsInstagram, BsTwitter, BsGithub } from "react-icons/bs";

//videos
import AboutVideo from "../../assets/videos/about.mp4";
import ProjectVideo from "../../assets/videos/projects.mp4";
import ContactVideo from "../../assets/videos/contact.mp4";

const navRoutes = [
  {
    id: 0,
    title: "I'm an Open Book",
    path: "/about",
    video: <source src={AboutVideo} type="video/mp4" />,
  },
  {
    id: 1,
    title: "I did some cool stuff",
    path: "/projects",
    video: <source src={ProjectVideo} type="video/mp4" />,
  },
  {
    id: 2,
    title: "Impressed right ? Let's talk",
    path: "/contact",
    video: <source src={ContactVideo} type="video/mp4" />,
  },
];

const Hamburger = ({
  toggleMenu,
  setToggleMenu,
  onCursor,
  setFooterPosition,
}) => {
  const [revealVideo, setRevealVideo] = useState({
    show: false,
    video: <source src={AboutVideo} type="video/mp4" />,
    key: "0",
  });

  // const onLinkHover = (x) => {
  //   onCursor("locked");
  //   setFooterPosition({ x: x });
  // };

  // const instaNavLink = useRef(null);
  // const twitterNavLink = useRef(null);
  // const gitNavLink = useRef(null);

  // const instaNavPosition = useElementPosition(instaNavLink);
  // const twitterNavPosition = useElementPosition(twitterNavLink);
  // const gitNavPosition = useElementPosition(gitNavLink);

  return (
    <>
      <AnimatePresence>
        {toggleMenu && (
          <Nav
            initial={{ x: "100%" }}
            exit={{ x: "100%" }}
            animate={{ x: toggleMenu ? "0%" : "100%" }}
            transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
          >
            <Container>
              <NavHeader>
                <Flex spaceBetween noHeight>
                  <h2>Menu</h2>
                  <CloseNav
                    onClick={() => setToggleMenu(!toggleMenu)}
                    onMouseEnter={() => onCursor("pointer")}
                    onMouseLeave={onCursor}
                  >
                    <button>
                      <motion.span
                        animate={{ rotate: 45, y: 7 }}
                        transition={{
                          duration: 0.2,
                          ease: [0.6, 0.05, -0.01, 0.9],
                        }}
                      ></motion.span>
                      <motion.span
                        animate={{ rotate: -45, y: -7 }}
                        transition={{
                          duration: 0.2,
                          ease: [0.6, 0.05, -0.01, 0.9],
                        }}
                      ></motion.span>
                    </button>
                  </CloseNav>
                </Flex>
              </NavHeader>
              <NavList>
                <ul>
                  {navRoutes.map((route) => (
                    <motion.li
                      key={route.id}
                      onHoverStart={() => {
                        onCursor("pointer");
                        setRevealVideo({
                          show: true,
                          video: route.video,
                          key: route.id,
                        });
                      }}
                      onHoverEnd={() => {
                        setRevealVideo({
                          show: false,
                          video: route.video,
                          key: route.id,
                        });
                        onCursor();
                      }}
                    >
                      <a href={`/${route.path}`}>
                        <motion.div
                          className="link"
                          initial={{ x: -108 }}
                          whileHover={{ x: -10 }}
                          transition={{
                            duration: 0.8,
                            ease: [0.6, 0.05, -0.01, 0.9],
                          }}
                        >
                          <span className="arrow">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 101 57"
                            >
                              <path
                                d="M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z"
                                fill="#000"
                                fillRule="evenodd"
                              ></path>
                            </svg>
                          </span>
                          {route.title}
                        </motion.div>
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </NavList>
              <NavFooter>
                <Flex spaceBetween>
                  <FooterContent>
                    <p>+91 9163411820</p>
                    <p>riju23chakra@gmail.com</p>
                  </FooterContent>
                  <FooterContent wider>
                    <p>Kolkata, West Bengal, IN</p>
                  </FooterContent>
                  <FooterSocial>
                    <a
                      // ref={instaNavLink}
                      onMouseEnter={() => onCursor("pointer")}
                      onMouseLeave={() => onCursor()}
                      href="https://www.instagram.com/epash_opash_dhopash/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <BsInstagram size={{ height: "20px" }} />
                    </a>
                    <a
                      // ref={twitterNavLink}
                      onMouseEnter={() => onCursor("pointer")}
                      onMouseLeave={() => onCursor()}
                      href="https://twitter.com/RijuStone"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <BsTwitter size={{ height: "20px" }} />
                    </a>
                    <a
                      // ref={gitNavLink}
                      onMouseEnter={() => onCursor("pointer")}
                      onMouseLeave={() => onCursor()}
                      target="_blank"
                      href="https://github.com/riju-stone"
                      rel="noreferrer"
                    >
                      <BsGithub size={{ height: "20px" }} />
                    </a>
                  </FooterSocial>
                </Flex>
              </NavFooter>
              <NavVideos>
                <motion.div
                  animate={{ width: revealVideo.show ? 0 : "100%" }}
                  transition={{ duration: 1 }}
                  className="reveal"
                ></motion.div>
                <div className="video">
                  <AnimatePresence initial={false} exitBeforeEnter>
                    <motion.video
                      key={revealVideo.key}
                      initial={{ opacity: 0 }}
                      exit={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.2, ease: "easeIn" }}
                      loop
                      autoPlay
                    >
                      {revealVideo.video}
                    </motion.video>
                  </AnimatePresence>
                </div>
              </NavVideos>
            </Container>
          </Nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default Hamburger;
