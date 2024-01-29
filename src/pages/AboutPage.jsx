import React from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import Transition from "../components/transition/Transition";

import styles from "../components/about/AboutSection.module.scss";

const aboutSectionAnimation = {
  show: {
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.4
    }
  }
};

const titleWordAnimation = {
  hidden: {
    y: 100
  },
  show: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 1
    }
  }
};

const AboutPage = () => {
  const theme = useSelector((state) => state.theme.currentTheme);
  const disabledTextStyle = theme == "dark" ? "text-darkdisabled" : "text-lightdisabled";

  return (
    <Transition>
      <motion.section
        className={styles.aboutContainer}
        variants={aboutSectionAnimation}
        initial="hidden"
        animate="show"
      >
        <div className={styles.aboutTitle + " " + disabledTextStyle}>
          <motion.div className="overflow-hidden h-[70px]">
            <motion.div variants={titleWordAnimation}>Still</motion.div>
          </motion.div>
          <motion.div className="overflow-hidden h-[70px]">
            <motion.div variants={titleWordAnimation}>Figuring</motion.div>{" "}
          </motion.div>
          <motion.div className="overflow-hidden h-[70px]">
            <motion.div variants={titleWordAnimation}>Out some</motion.div>{" "}
          </motion.div>
          <motion.div className="overflow-hidden h-[70px]">
            <motion.div variants={titleWordAnimation}>Stuff...</motion.div>{" "}
          </motion.div>
        </div>
      </motion.section>
    </Transition>
  );
};

export default AboutPage;
