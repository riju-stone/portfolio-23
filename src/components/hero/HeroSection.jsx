import React from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { COLORS } from "../../utils/constants";

import styles from "./HeroSection.module.scss";

const heroSectionAnimation = {
  show: {
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.4
    }
  }
};

const heroTitleAnimation = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 0.08,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.85],
      duration: 1,
      delay: 2.2
    }
  }
};

const titleWordAnimation = {
  hidden: {
    y: 150
  },
  show: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 1,
      delay: 1.8
    }
  }
};

const leftSubtitleAnimation = {
  hidden: {
    y: 50,
    opacity: 0
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.85],
      duration: 1,
      delay: 1.2
    }
  }
};

const arrowAnimation = {
  hidden: { y: 0, opacity: 0 },
  show: {
    y: 50,
    opacity: 1,
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
};

const HeroSection = () => {
  const theme = useSelector((state) => state.theme.currentTheme);

  return (
    <motion.section
      className={styles.heroScreenWrapper}
      variants={heroSectionAnimation}
      initial="hidden"
      animate="show"
    >
      <motion.div className={styles.heroName + " " + styles[theme]} variants={heroTitleAnimation}>
        ARIGHNA
      </motion.div>
      <motion.div variants={leftSubtitleAnimation} className={styles.heroLeftTitle + " " + styles[theme]}>
        Full-Stack Developer
        <br />
        with a love for Design ...
      </motion.div>
      <div className={styles.heroTitleWrapper + " " + styles[theme]}>
        <motion.div className={styles.heroTitleMask}>
          <motion.div variants={titleWordAnimation}>Multi-</motion.div>
        </motion.div>
        <motion.div className={styles.heroTitleMask}>
          <motion.div variants={titleWordAnimation}>Disciplinary</motion.div>{" "}
        </motion.div>
        <motion.div className={styles.heroTitleMask}>
          <motion.div variants={titleWordAnimation}>Developer</motion.div>{" "}
        </motion.div>
      </div>
      <div>
        <motion.svg
          variants={arrowAnimation}
          className={styles.arrowIcon}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            d="M12.9999 16.1716L18.3638 10.8076L19.778 12.2218L11.9999 20L4.22168 12.2218L5.63589 10.8076L10.9999 16.1716V4H12.9999V16.1716Z"
            fill={COLORS.orange}
          ></path>
        </motion.svg>
      </div>
      <motion.div variants={leftSubtitleAnimation} className={styles.heroRightTitle + " " + styles[theme]}>
        ... and emphasis on
        <br />
        unique user experiences
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
