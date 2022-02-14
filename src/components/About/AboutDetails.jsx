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
      left: "10%",
      top: "-5%",
      zIndex: "2",
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
      zIndex: "2",
    },
  },
  {
    skillName: "SQL",
    style: {
      right: "10%",
      top: "-20%",
      zIndex: "2",
    },
  },
  {
    skillName: "HTML",
    style: {
      right: "30%",
      top: "-40%",
      zIndex: "2",
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
      zIndex: "2",
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

const Skills = ({ skillName, style, id }) => {
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
    <motion.p
      className={`skill ${id}`}
      ref={ref}
      className="skill"
      style={{ ...style, y: y }}
    >
      {skillName}
    </motion.p>
  );
};

const AboutDetails = () => {
  return (
    <AboutDetailsSection>
      <motion.p
        initial={{ y: -40 }}
        animate={{ y: 40 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="skill-title"
      >
        Skills
      </motion.p>
      {skills.map((skill, index) => (
        <Skills
          skillName={skill.skillName}
          key={index}
          style={skill.style}
          id={index}
        />
      ))}
    </AboutDetailsSection>
  );
};

export default AboutDetails;
