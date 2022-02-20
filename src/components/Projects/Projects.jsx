import React from "react";
import { motion } from "framer-motion";

//styles
import { ProjectViewSection } from "../../styles/projectStyles";

//assets
// hooks
import { useIsMobile } from "../../hooks/useMediaQuery";
import BreathingDotsScene from "./BreathingDotsScene";

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
    <ProjectViewSection id="projects">
      <BreathingDotsScene />
      <div className="title-container">
        <span className="title">Projects</span>
        <span className="sub-title">Just Gettin Started</span>
      </div>
    </ProjectViewSection>
  );
}

export default Projects;
