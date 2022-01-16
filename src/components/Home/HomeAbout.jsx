import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

//styles
import { Container, Flex } from "../../styles/globalStyles";
import {
  HomeAboutSection,
  About,
  Services,
  AccordionHeader,
  AccordionIcon,
  AccordionContent,
} from "../../styles/homeStyles";
import { useGlobalStateContext } from "../../context/globalContext";

const accordionIds = [
  {
    id: 0,
    title: "Front-End",
    tech: [
      "HTML/CSS",
      "JavaScript",
      "React",
      "Next",
      "Tailwind",
      "Gsap/Framer-Motion",
    ],
  },
  {
    id: 1,
    title: "Back-End",
    tech: ["Node", "Go"],
  },
  {
    id: 2,
    title: "Database",
    tech: ["MySQL", "MongoDB", "Firebase"],
  },
  {
    id: 3,
    title: "App",
    tech: ["Electron", "Flutter"],
  },
  {
    id: 4,
    title: "Miscellaneous",
    tech: ["C++", "Java", "Python", "Tensorflow", "Blender"],
  },
  {
    id: 5,
    title: "Hobbies",
    tech: ["Painting", "Photography", "Gaming"],
  },
];

const HomeAbout = ({ onCursor }) => {
  const [expanded, setExpanded] = useState(null);
  const animation = useAnimation();
  const [aboutRef, inView] = useInView({
    triggerOnce: true,
    // Giving our scrollwheel additional 300px before executing animation
    rootMargin: "-300px",
  });

  useEffect(() => {
    if (inView) {
      animation.start("visible");
    }
  }, [animation, inView]);

  return (
    <HomeAboutSection>
      <Container>
        <Flex alignTop>
          <About
            ref={aboutRef}
            initial="hidden"
            animate={animation}
            variants={{
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] },
              },
              hidden: {
                opacity: 0,
                x: -90,
              },
            }}
          >
            <h2>
              - A Web and App Developer with an eye for details. Highly
              Organized and an obsessed perfectionist...
            </h2>
            <p>
              Everybody's got a story. And I don't stop until I've uncovered
              what makes yours worth telling. Whether it's working directly with
              you, an agency partner, or putting the finishing touches on
              something special, I'm ready to dig in and get my hands dirty...
            </p>
          </About>
          <Services
            ref={aboutRef}
            initial="hidden"
            animate={animation}
            variants={{
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] },
              },
              hidden: {
                opacity: 0,
                x: 90,
              },
            }}
          >
            <h3>Things I'm Good at</h3>
            {accordionIds.map((details, index) => (
              <Accordion
                key={index}
                details={details}
                expanded={expanded}
                setExpanded={setExpanded}
                onCursor={onCursor}
              />
            ))}
          </Services>
        </Flex>
      </Container>
    </HomeAboutSection>
  );
};

const Accordion = ({ details, expanded, setExpanded, onCursor }) => {
  const isOpen = details.id === expanded;
  const [hovered, setHovered] = useState(false);
  const { currentTheme } = useGlobalStateContext();
  return (
    <>
      <AccordionHeader
        onMouseEnter={() => onCursor("hovered")}
        onMouseLeave={() => onCursor()}
        onClick={() => setExpanded(isOpen ? false : details.id)}
        onHoverStart={() => setHovered(!hovered)}
        onHoverEnd={() => setHovered(!hovered)}
        whileHover={{
          color: currentTheme === "dark" ? "#fff" : "#000",
        }}
      >
        <AccordionIcon>
          <motion.span
            animate={{ rotate: isOpen || hovered ? 0 : 45, x: 3 }}
            transition={{ duration: 0.2, ease: [0.6, 0.05, -0.01, 0.9] }}
          ></motion.span>
          <motion.span
            animate={{ rotate: isOpen || hovered ? 0 : -45, x: -3 }}
            transition={{ duration: 0.2, ease: [0.6, 0.05, -0.01, 0.9] }}
          ></motion.span>
        </AccordionIcon>
        {details.title}
      </AccordionHeader>
      <AccordionContent
        key="content"
        animate={{ height: isOpen || hovered ? "100%" : "0" }}
        transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
      >
        {details.tech.map((tech, index) => (
          <span key={index}>{tech}</span>
        ))}
      </AccordionContent>
    </>
  );
};

export default HomeAbout;
