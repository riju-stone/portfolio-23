import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { motion, useAnimation, useInView } from "framer-motion";

import styles from "./styles.module.scss";
import SkewScroll from "../skew-scroll/SkewScroll";

const aboutTextAnimation = {
  hidden: {
    y: "150px"
  },
  show: (i) => ({
    y: "0px",
    transition: { duration: 0.4, delay: 0.05 * i }
  })
};

const phrase =
  "Based out of City of Joy - Kolkata. A selectively skilled developer with strong focus on high quality & impactful digital experiences.";

const AboutSection = () => {
  const aboutTextRef = useRef();
  const isInView = useInView(aboutTextRef, { margin: "-200px", once: true });

  const theme = useSelector((state) => state.theme.currentTheme);
  const animationControls = useAnimation();

  useEffect(() => {
    console.log("About Text Ref: ", aboutTextRef, "In View:", isInView);
    if (isInView) {
      animationControls.start("show");
    }
  }, [animationControls, isInView]);

  return (
    <SkewScroll>
      <section className={styles.aboutContainer}>
        <div className={`${styles.aboutTextWrapper} ${styles[theme]}`}>
          <p className={styles.aboutWordsContainer} ref={aboutTextRef}>
            {phrase.split(" ").map((word, index) => {
              return (
                <span key={`mask${index}`} className={styles.aboutTextMask}>
                  <motion.span
                    className={styles.aboutWords}
                    variants={aboutTextAnimation}
                    custom={index}
                    initial="hidden"
                    animate={animationControls}
                  >
                    {word}
                  </motion.span>
                </span>
              );
            })}
          </p>
          {/* <div className={`${styles.aboutSectionCount} ${styles[theme]}`}>[ 02 / 04 ]</div> */}
        </div>
      </section>
    </SkewScroll>
  );
};

export default AboutSection;
