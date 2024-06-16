import React from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { ArrowDownLeft } from "lucide-react";

import styles from "./styles.module.scss";
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
    y: 150
  },
  show: (i) => ({
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.4 * i
    }
  })
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
          <div className={styles.heroTitleMask}>
            <motion.div
              variants={heroTitleAnimation}
              custom={1}
              className={`${styles.heroTitleStroke} ${styles.heroTitleFname}`}
            >
              Arighna
            </motion.div>
          </div>
          <div className={styles.heroTitleMask}>
            <motion.div
              variants={heroTitleAnimation}
              custom={2}
              className={`${styles.heroTitleStroke} ${styles.heroTitleLname}`}
            >
              Chakraborty
            </motion.div>
          </div>
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
        {/* <div className={`${styles.heroSectionCount} ${styles[theme]}`}>[ 01 / 04 ]</div> */}
      </motion.section>
    </SkewScroll>
  );
};
export default HeroSection;
