import React from "react";
import { motion } from "framer-motion";

//styles
import { AboutSection, AboutBannerSection } from "../../styles/aboutStyles";
import { ProjectViewSection } from "../../styles/projectStyles";

//assets
import ProjectVideo1080p from "../../assets/videos/projects/projects1080p.mp4";

// hooks
import { useIsMobile } from "../../hooks/useMediaQuery";

// const cards = [
//   {
//     logo: APIImg,
//     title: "Go Rest API",
//     summary: "A REST API built with Golang",
//     linkType: "github",
//     link: "https://github.com/riju-stone/go-rest",
//   },
//   {
//     logo: ChessImg,
//     title: "Chess",
//     summary: "A simple chess app built with Electron",
//     linkType: "github",
//     link: "https://github.com/riju-stone/chess",
//   },
//   {
//     logo: CovidImg,
//     title: "Covi Check",
//     summary:
//       "A simple Covid-19 prediction tracker built with React for the John Hopkins University Hackathon",
//     linkType: "github",
//     link: "https://github.com/riju-stone/covi-check",
//   },
//   {
//     logo: NotesImg,
//     title: "Dictator",
//     summary: "A simple note app built with React",
//     linkType: "github",
//     link: "https://github.com/riju-stone/dictator",
//   },
//   {
//     logo: BotImg,
//     title: "Chatbot",
//     summary: "A chatbot based on Transformer architecture",
//     linkType: "github",
//     link: "https://github.com/riju-stone/chatbot",
//   },
//   {
//     logo: APIImg,
//     title: "Nincompoop",
//     summary: "Internship Project",
//     linkType: "web",
//     link: "https://nincompoop.vercel.app",
//   },
//   {
//     logo: APIImg,
//     title: "Skill Academia",
//     summary: "E-learning app build with flutter and firebase",
//     linkType: "app",
//     link: "https://play.google.com/store/apps/details?id=com.skillacademia.skillacademia",
//   },
// ];

function Projects({ onCursor }) {
  const isMobile = useIsMobile();
  return (
    <AboutSection>
      <AboutBannerSection
        onMouseLeave={onCursor}
        onMouseEnter={() => onCursor("hovered")}
      >
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
      </AboutBannerSection>
      <ProjectViewSection></ProjectViewSection>
    </AboutSection>
  );
}

export default Projects;
