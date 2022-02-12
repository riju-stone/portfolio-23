import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// hooks
import { useIsMobile } from "../../hooks/useMediaQuery";

//styles
import { Container } from "../../styles/globalStyles";
import {
  AboutDetailsSection,
  Flex,
  About,
  Services,
  AccordionHeader,
  AccordionIcon,
  AccordionContent,
} from "../../styles/aboutStyles";
import { useGlobalStateContext } from "../../context/globalContext";

const accordionIds = [
  {
    id: 0,
    title: "Front-End",
    tech: ["HTML/CSS", "JavaScript", "React", "Tailwind", "Framer-Motion"],
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
    tech: ["C++", "Java", "Python", "Blender"],
  },
  {
    id: 5,
    title: "Hobbies",
    tech: ["Painting", "Photography", "Gaming"],
  },
];

const AboutDetails = () => {

  return (
    <AboutDetailsSection>
     
    </AboutDetailsSection>
  );
};

export default AboutDetails;
