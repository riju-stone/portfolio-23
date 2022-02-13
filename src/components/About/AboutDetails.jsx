import React, { useState, useRef, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import { useAnimation, useViewportScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";

// hooks
import { useIsMobile } from "../../hooks/useMediaQuery";

//styles
import { AboutDetailsSection } from "../../styles/aboutStyles";

const skills = [
  {
    skillName: "React",
    style: {
      left: "5%",
      top: "-5%",
    },
  },
  {
    skillName: "Javascript",
    style: {
      left: "60%",
      top: "10%",
    },
  },
  {
    skillName: "Go",
    style: {
      left: "10%",
      top: "15%",
    },
  },
  {
    skillName: "Node",
    style: {
      right: "10%",
      top: "5%",
    },
  },
  {
    skillName: "Python",
    style: {
      left: "10%",
      top: "-5%",
    },
  },
  {
    skillName: "SQL",
    style: {
      right: "10%",
      top: "-20%",
    },
  },
  {
    skillName: "HTML",
    style: {
      right: "30%",
      top: "-40%",
    },
  },
  {
    skillName: "CSS",
    style: {
      right: "55%",
      top: "-32%",
    },
  },
  {
    skillName: "Git",
    style: {
      top: "-10%",
      right: "5%",
    },
  },
  {
    skillName: "Docker",
    style: {
      top: "-30%",
      right: "12%",
    },
  },
  // "Tailwind",
  // "Framer-Motion",
  // "Node",
  // "Go",
  // "MySQL",
  // "MongoDB",
  // "Firebase",
  // "C++",
  // "Java",
  // "Python",
  // "Painting",
  // "Photography",
  // "Gaming",
];

const Skills = ({ skillName, style }) => {
  const [elementTop, setElementTop] = useState(0);
  const ref = useRef(null);
  const { scrollY } = useViewportScroll();

  const y = useTransform(scrollY, [elementTop, elementTop + 8], [0, -2], {
    clamp: false,
  });

  useLayoutEffect(() => {
    const element = ref.current;
    setElementTop(element.offsetTop);
  }, [ref]);

  return (
    <motion.p ref={ref} className="skill" style={{ ...style, y: y }}>
      {skillName}
    </motion.p>
  );
};

const AboutDetails = () => {
  return (
    <AboutDetailsSection>
      <p className="skill-title">Skills</p>
      {skills.map((skill, index) => (
        <Skills skillName={skill.skillName} key={index} style={skill.style} />
      ))}
    </AboutDetailsSection>
  );
};

export default AboutDetails;
