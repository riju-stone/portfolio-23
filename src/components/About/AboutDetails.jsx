import React, { useState, useRef, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import { useViewportScroll, useTransform, useSpring } from "framer-motion";

//styles
import { AboutDetailsSection } from "../../styles/aboutStyles";

const skills = [
  {
    skillName: "React",
    style: {
      left: "10%",
      marginTop: "-250px",
    },
  },
  {
    skillName: "Javascript",
    style: {
      left: "8%",
      marginTop: "130px",
    },
  },
  {
    skillName: "Go",
    style: {
      left: "20%",
      zIndex: "2",
      marginTop: "-50px",
    },
  },
  {
    skillName: "Node",
    style: {
      left: "30%",
      marginTop: "200px",
    },
  },
  {
    skillName: "Python",
    style: {
      right: "60%",
      zIndex: "2",
      marginTop: "80px",
    },
  },
  {
    skillName: "SQL",
    style: {
      right: "35%",
      marginTop: "-60px",
      zIndex: "2",
    },
  },
  {
    skillName: "Electron",
    style: {
      right: "10%",
      marginTop: "-200px",
    },
  },
  {
    skillName: "Flutter",
    style: {
      right: "35%",
      marginTop: "-320px",
      zIndex: "2",
    },
  },
  {
    skillName: "TailwindCSS",
    style: {
      left: "40%",
      marginTop: "-180px",
      zIndex: "2",
    },
  },
  // {
  //   skillName: "Framer-Motion",
  //   style: {
  //     left: "25%",
  //     marginTop: "-200px",
  //     zIndex: "0",
  //   },
  // },
  {
    skillName: "Mongo-DB",
    style: {
      right: "40%",
      zIndex: "2",
    },
  },
  {
    skillName: "C++",
    style: {
      right: "18%",
      marginTop: "200px",
    },
  },
  {
    skillName: "Java",
    style: {
      right: "12%",
      marginTop: "100px",
    },
  },
];

const Skills = ({ skillName, style, id, start, onCursor }) => {
  const ref = useRef(null);
  const { scrollY } = useViewportScroll();

  const transform = useTransform(scrollY, [start, start + 1], [0, -0.01 * id], {
    clamp: false,
  });
  const physics = { damping: 15, mass: 0.27, stiffness: 50 };
  const y = useSpring(transform, physics);

  return (
    <motion.p
      className={`skill ${id}`}
      ref={ref}
      style={{ ...style, y: y }}
      onMouseLeave={onCursor}
      onMouseEnter={() => onCursor("hovered")}
    >
      {skillName}
    </motion.p>
  );
};

const AboutDetails = ({ onCursor }) => {
  const [elementTop, setElementTop] = useState(null);
  const skillRef = useRef(null);

  useLayoutEffect(() => {
    const element = skillRef.current;
    setElementTop(element.offsetTop);
  }, [skillRef]);

  return (
    <AboutDetailsSection>
      <motion.p
        ref={skillRef}
        // initial={{ y: -40 }}
        // animate={{ y: 40 }}
        // transition={{
        //   duration: 2,
        //   repeat: Infinity,
        //   repeatType: "reverse",
        // }}
        className="skill-title"
      >
        Skills
      </motion.p>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <Skills
            onCursor={onCursor}
            start={elementTop}
            skillName={skill.skillName}
            key={index}
            style={skill.style}
            id={index}
          />
        ))}
      </div>
    </AboutDetailsSection>
  );
};

export default AboutDetails;
