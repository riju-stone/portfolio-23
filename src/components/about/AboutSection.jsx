import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { motion, useAnimation, useInView } from "framer-motion";

import styles from "./AboutSection.module.scss";
import SkewScroll from "../skew-scroll/SkewScroll";

const aboutSectionAnimation = {
  show: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.3
    }
  }
};

const aboutTextAnimation = {
  hidden: {
    y: 150
  },
  show: (i) => ({
    y: 0,
    transition: { duration: 0.5, delay: 0.05 * i }
  })
};

const phrase =
  "Based out of City of Joy - Kolkata. A selectively skilled developer with strong focus on high quality & impactful digital experiences.";

const AboutSection = () => {
  const aboutTextRef = useRef(null);

  const theme = useSelector((state) => state.theme.currentTheme);

  const inView = useInView(aboutTextRef, { once: true });
  const animationControls = useAnimation();

  useEffect(() => {
    if (inView) {
      animationControls.start("show");
    } else {
      animationControls.start("hidden");
    }
  }, [inView]);

  return (
    <SkewScroll>
      <motion.section className={styles.aboutContainer} variants={aboutSectionAnimation} animate={animationControls}>
        <div className={styles.aboutTextWrapper + " " + styles[theme]}>
          <p className={styles.aboutWordsContainer} ref={aboutTextRef}>
            {phrase.split(" ").map((word, index) => {
              return (
                <span key={index} className={styles.aboutTextMask}>
                  <motion.span
                    className={styles.aboutWords}
                    variants={aboutTextAnimation}
                    custom={index}
                    animate={inView ? "show" : "hidden"}
                  >
                    {word}
                  </motion.span>
                </span>
              );
            })}
          </p>
        </div>
      </motion.section>
    </SkewScroll>
  );
};

export default AboutSection;
