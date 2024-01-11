import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { motion, useAnimation, useInView } from "framer-motion";
import { Link } from "react-router-dom";

import { defaultCursor, maskCursor } from "../cursor/CursorSlice";
import { useDeviceDetection } from "../hooks/useDeviceDetection";
import MagneticButton from "../button/MagneticButton";

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
    y: 100
  },
  show: (i) => ({
    y: 0,
    transition: { duration: 0.5, delay: 0.05 * i }
  })
};

const phrase =
  "Based out of City of Joy - Kolkata. A selectively skilled developer with strong focus on high quality & impactful digital experiences.";
const maskedPhrase =
  "A full-stack developer with skills that haven't been replaced by A.I. (yet) - making good shit only if the paycheck is equally good.";

const AboutSection = () => {
  const dispatch = useDispatch();
  const cursorState = useSelector((state) => state.cursor.cursorStyle);
  const deviceType = useDeviceDetection();

  const [mousePos, setMousePos] = useState({ x: null, y: null });

  const aboutTextRef = useRef(null);
  const aboutMaskedTextRef = useRef(null);
  let maskSize = cursorState == "masked" ? 400 : 0;

  const theme = useSelector((state) => state.theme.currentTheme);

  const inView = useInView(aboutTextRef, { once: true });
  const animationControls = useAnimation();

  const handleMouseMove = (e) => {
    let { clientX, clientY } = e;
    setMousePos({ x: clientX, y: clientY });
  };

  const handleMouseEnter = () => {
    dispatch(maskCursor());
  };

  const handleMouseLeave = () => {
    dispatch(defaultCursor());
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);

    if (inView) {
      console.log(inView);
      animationControls.start("show");
    } else {
      animationControls.start("hidden");
    }
  }, [inView]);

  return (
    <SkewScroll>
      <motion.section
        className={styles.aboutContainer + " " + styles[theme]}
        variants={aboutSectionAnimation}
        animate={animationControls}
      >
        {deviceType == "desktop" ? (
          <motion.div
            ref={aboutMaskedTextRef}
            className={styles.maskedTextWrapper}
            animate={{
              WebkitMaskPosition: `${mousePos.x - maskSize / 2}px ${mousePos.y - maskSize / 2}px`,
              WebkitMaskSize: `${maskSize}px`
            }}
            transition={{ type: "tween", ease: "backOut", duration: 0.4 }}
          >
            <p
              className={styles.maskedTextContainer}
              onMouseEnter={() => handleMouseEnter()}
              onMouseLeave={() => handleMouseLeave()}
            >
              {maskedPhrase.split(" ").map((word, index) => {
                return (
                  <span key={index + " " + word}>
                    <span className={styles.maskedWords}>{word}</span>
                  </span>
                );
              })}
            </p>
          </motion.div>
        ) : null}
        <div className={styles.aboutTextWrapper}>
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
        {/* <div className={styles.aboutButtonWrapper}>
          <MagneticButton>
            <Link to="/about">
              <div className={styles.aboutButton}>About Me</div>
            </Link>
          </MagneticButton>
        </div> */}
      </motion.section>
    </SkewScroll>
  );
};

export default AboutSection;
