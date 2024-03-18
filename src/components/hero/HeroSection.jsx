import React from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import { ArrowDownLeft } from "lucide-react";

import styles from "./HeroSection.module.scss";
import HeroImage from "./HeroImage";
import SkewScroll from "../skew-scroll/SkewScroll";
import MagneticButton from "../button/MagneticButton";

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
        <div className={`${styles.heroTitleWrapper} ${styles[theme]}`}>
          <motion.div className={styles.heroTitleMask}>
            <motion.div variants={heroTitleAnimation} className={styles.heroTitle}>
              <Marquee loop={0} autoFill={true} speed={100}>
                {" "}
                Arighna * Chakraborty *
              </Marquee>
            </motion.div>
            <motion.div variants={heroTitleAnimation} className={`${styles.heroTitleStroke} ${styles[theme]}`}>
              <Marquee loop={0} autoFill={true} speed={100}>
                {" "}
                Arighna * Chakraborty *
              </Marquee>
            </motion.div>
          </motion.div>
        </div>
        <div className={`${styles.heroImageWrapper} ${styles[theme]}`}>
          <HeroImage />
          <MagneticButton>
            <div className={`${styles.heroNameWrapper} ${styles[theme]}`}>
              <ArrowDownLeft />
              <p>Creative &</p>
              <p>Full-Stack Developer</p>
            </div>
          </MagneticButton>
        </div>
        <div className={`${styles.heroSectionCount} ${styles[theme]}`}>[ 01 / 04 ]</div>
      </motion.section>
    </SkewScroll>
  );
};
export default HeroSection;
