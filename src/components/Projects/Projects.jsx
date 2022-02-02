import React from "react";
import { motion } from "framer-motion";

import Deck from "../CardDeck/Deck";

//styles
import { AboutSection, AboutBanner } from "../../styles/aboutStyles";
import { ProjectViewSection } from "../../styles/projectStyles";

//assets
import ProjectVideo1080p from "../../assets/videos/projects/projects1080p.mp4";

// hooks
import { useIsMobile } from "../../hooks/useMediaQuery";

import CardBG from "../../assets/images/bg.jpg";

const cards = [
  CardBG,
  CardBG,
  CardBG,
  CardBG,
  CardBG,
  CardBG,
  CardBG,
  CardBG,
  CardBG,
];

function Projects() {
  const isMobile = useIsMobile();
  return (
    <AboutSection>
      <AboutBanner>
        <div id="title-container">
          <motion.svg
            id="title"
            height="100%"
            width="100%"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <mask id="text-mask" x="0" y="0">
                <rect x="0" y="0" />
                <motion.text
                  x={isMobile ? "30px" : "50px"}
                  y="70%"
                  initial={{ y: 800 }}
                  animate={{
                    y: 0,
                  }}
                  transition={{
                    delay: 0.6,
                    duration: 1,
                    ease: [0.5, 0.05, -0.01, 0.9],
                  }}
                >
                  Projects
                </motion.text>
              </mask>
            </defs>
            <rect x="0" y="0" />
          </motion.svg>
          <motion.span
            id="sub-title"
            initial={{ y: 800 }}
            animate={{
              y: 0,
            }}
            transition={{
              delay: 0.8,
              duration: 1,
              ease: [0.5, 0.05, -0.01, 0.9],
            }}
          >
            Stuff I am proud of...
          </motion.span>
          <video autoPlay muted playsInline preload="True" loop>
            <source src={ProjectVideo1080p} type="video/mp4" />
          </video>
        </div>
      </AboutBanner>
      <ProjectViewSection>
        <Deck cards={cards} />
      </ProjectViewSection>
    </AboutSection>
  );
}

export default Projects;
