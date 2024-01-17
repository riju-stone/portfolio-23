import React from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

import styles from "./HeroSection.module.scss";
import HeroImage from "./HeroImage";
import SkewScroll from "../skew-scroll/SkewScroll";

import { RiArrowLeftDownLine } from "@remixicon/react";

const heroSectionAnimation = {
  show: {
    transition: {
      staggerChildren: 0
    }
  }
};

const heroTitleAnimation = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      duration: 1.5,
      delay: 2
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
      duration: 0.6,
      delay: 1.2
    }
  }
};

const rightSubtitleAnimation = {
  hidden: {
    y: 50,
    opacity: 0
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.85],
      duration: 0.6,
      delay: 1.2
    }
  }
};

const HeroSection = () => {
  const theme = useSelector((state) => state.theme.currentTheme);

  return (
    <SkewScroll>
      <motion.section
        className={styles.heroScreenWrapper}
        variants={heroSectionAnimation}
        initial="hidden"
        animate="show"
      >
        <div className={styles.heroTitleWrapper + " " + styles[theme]}>
          <motion.div className={styles.heroTitleMask}>
            <motion.div variants={heroTitleAnimation} className={styles.heroTitle}>
              <Marquee loop={0} autoFill={true} speed={100}>
                {" "}
                Arighna * Chakraborty *
              </Marquee>
            </motion.div>
            <motion.div variants={heroTitleAnimation} className={styles.heroTitleStroke + " " + styles[theme]}>
              <Marquee loop={0} autoFill={true} speed={100}>
                {" "}
                Arighna * Chakraborty *
              </Marquee>
            </motion.div>
          </motion.div>
        </div>
        <div className={styles.heroImageWrapper + " " + styles[theme]}>
          <HeroImage />
          <div className={styles.heroNameWrapper + " " + styles[theme]}>
            <RiArrowLeftDownLine size={32} />
            <p>Creative &</p>
            <p>Full-Stack Developer</p>
          </div>
        </div>
        <motion.div variants={leftSubtitleAnimation} className={styles.heroLeftTitle + " " + styles[theme]}>
          Full-Stack Developer
          <br />
          with a love for Design ...
        </motion.div>
        <div className={styles.heroSectionCount + " " + styles[theme]}>[ 01/06 ]</div>
        <motion.div variants={rightSubtitleAnimation} className={styles.heroRightTitle + " " + styles[theme]}>
          ... and emphasis on
          <br />
          unique user experiences
        </motion.div>
      </motion.section>
    </SkewScroll>
  );
};
export default HeroSection;
