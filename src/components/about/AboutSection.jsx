import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { motion, useAnimation, useInView } from "framer-motion";
import { defaultCursor, maskCursor } from "../cursor/CursorSlice";
import { useDeviceDetection } from "../../utils/deviceType";

const styles = {
  aboutContainer: "h-screen flex justify-center align-middle items-center py-[4rem] px-[2rem]",
  aboutTextWrapper:
    "flex justify-center align-middle items-center font-avant-garde font-[600] text-4xl ease-out duration-[0.6s]",
  aboutMaskedTextWrapper:
    "absolute h-screen w-screen flex justify-center align-middle items-center font-avant-garde font-[900] text-4xl ease-out duration-[0.6s] py-[4rem] px-[2rem] z-10",
  aboutWordsMask: "relative overflow-hidden inline-flex py-1",
  aboutWords: "mr-4"
};

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
    y: 50
  },
  show: (i) => ({
    y: 0,
    transition: { duration: 0.5, delay: 0.05 * i }
  })
};

const phrase =
  "Based out of City of Joy - Kolkata. A selectively skilled developer with strong focus on high quality & impactful digital experiences.";
const maskedPhrase =
  "A full-stack developer - with skills that haven't been replaced by A.I. (yet) - making good shit only if the paycheck is equally good.";

const AboutSection = () => {
  const dispatch = useDispatch();
  const cursorState = useSelector((state) => state.cursor.cursorStyle);

  const deviceType = useDeviceDetection();

  const aboutTextRef = useRef(null);
  const aboutMaskedTextRef = useRef(null);
  const [maskPos, setMaskPos] = useState({ x: null, y: null });
  const maskSize = cursorState == "masked" ? 400 : 0;

  const theme = useSelector((state) => state.theme.currentTheme);
  const textStyle = theme == "dark" ? "text-darktext" : "text-lighttext";

  const inView = useInView(aboutTextRef, { once: true });
  const animationControls = useAnimation();

  const handleMouseMove = (e) => {
    let { clientX, clientY } = e;
    setMaskPos({ x: clientX, y: clientY });
  };

  const handleMouseEnter = () => {
    dispatch(maskCursor());
  };

  const handleMouseLeave = () => {
    dispatch(defaultCursor());
  };

  useEffect(() => {
    if (inView) {
      animationControls.start("show");
    } else {
      animationControls.start("hidden");
    }

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [inView]);

  return (
    <motion.section
      className={styles.aboutContainer + " " + textStyle}
      variants={aboutSectionAnimation}
      animate={animationControls}
    >
      {deviceType == "desktop" ? (
        <motion.div
          ref={aboutMaskedTextRef}
          className={"masked-text" + " " + styles.aboutMaskedTextWrapper}
          animate={{
            WebkitMaskPosition: `${maskPos.x - maskSize / 2}px ${maskPos.y - maskSize / 2}px`,
            WebkitMaskSize: `${maskSize}px`
          }}
          transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
        >
          <p onMouseEnter={() => handleMouseEnter()} onMouseLeave={() => handleMouseLeave()}>
            {maskedPhrase.split(" ").map((word, index) => {
              return (
                <span key={index}>
                  <span className={styles.aboutWords}>{word}</span>
                </span>
              );
            })}
          </p>
        </motion.div>
      ) : (
        <></>
      )}

      <div className={styles.aboutTextWrapper} ref={aboutTextRef}>
        <p>
          {phrase.split(" ").map((word, index) => {
            return (
              <span key={index} className={styles.aboutWordsMask}>
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
  );
};

export default AboutSection;
