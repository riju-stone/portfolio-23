import React from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

import styles from "./HeroSection.module.scss";
import HeroImage from "./HeroImage";

const heroSectionAnimation = {
  show: {
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.4
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
      duration: 1.2,
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

const HeroSection = () => {
  const theme = useSelector((state) => state.theme.currentTheme);

  return (
    <motion.section
      className={styles.heroScreenWrapper}
      variants={heroSectionAnimation}
      initial="hidden"
      animate="show"
    >
      <div className={styles.heroImageWrapper + " " + styles[theme]}>
        <HeroImage />
      </div>
      <motion.div variants={leftSubtitleAnimation} className={styles.heroLeftTitle + " " + styles[theme]}>
        Full-Stack Developer
        <br />
        with a love for Design ...
      </motion.div>
      <div className={styles.heroTitleWrapper + " " + styles[theme]}>
        <motion.div className={styles.heroTitleMask}>
          <motion.div variants={titleWordAnimation} className={styles.heroTitle}>
            Multi-Disciplinary Creative Developer
          </motion.div>
          <motion.div variants={titleWordAnimation} className={styles.heroTitleOutline + " " + styles[theme]}>
            Multi-Disciplinary Creative Developer
          </motion.div>
        </motion.div>
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
