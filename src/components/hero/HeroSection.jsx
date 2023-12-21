import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { COLORS } from "../../utils/constants";

const styles = {
  heroContainer: "flex flex-col h-screen justify-center align-middle items-center px-10",
  heroTitle: "font-work-sans font-normal text-6xl text-center ease-out duration-[0.6s]",
  heroLeftTitle: "absolute font-playfair top-[4rem] left-[2rem] text-left",
  heroRightTitle: "absolute font-playfair bottom-[4rem] right-[2rem] text-right z-[5]",
  arrow: "h-16 w-16 my-4 ease-out duration-[0.6s]",
  backgroundImage: "absolute bottom-0 z-0"
};

const HeroSection = () => {
  const theme = useSelector((state) => state.theme.currentTheme);

  const colorStyle = theme == "dark" ? COLORS.light : COLORS.dark;
  const textStyle = theme == "dark" ? "text-darktext" : "text-lighttext";
  const disabledTextStyle = theme == "dark" ? "text-darkdisabled" : "text-lightdisabled";

  const heroSectionAnimation = {
    show: {
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.4
      }
    }
  };

  const leftSubtitleAnimation = {
    hidden: {
      y: 30,
      opacity: 0
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        ease: [0.6, 0.01, 0.05, 0.85],
        duration: 1
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

  const arrowAnimation = {
    hidden: { y: 0, opacity: 0 },
    show: {
      y: 30,
      opacity: 1,
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  };

  return (
    <motion.section className={styles.heroContainer} variants={heroSectionAnimation} initial="hidden" animate="show">
      <motion.div variants={leftSubtitleAnimation} className={styles.heroLeftTitle + " " + disabledTextStyle}>
        Full-Stack Developer
        <br />
        with a love for Design ...
      </motion.div>
      <div className={styles.heroTitle + " " + textStyle}>
        <motion.div className="overflow-hidden h-[65px]">
          <motion.div variants={titleWordAnimation}>Multi-</motion.div>
        </motion.div>
        <motion.div className="overflow-hidden h-[65px]">
          <motion.div variants={titleWordAnimation}>Disciplinary</motion.div>{" "}
        </motion.div>
        <motion.div className="overflow-hidden h-[65px]">
          <motion.div variants={titleWordAnimation}>Developer</motion.div>{" "}
        </motion.div>
      </div>
      <div>
        <motion.svg
          variants={arrowAnimation}
          className={styles.arrow}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            d="M12.9999 16.1716L18.3638 10.8076L19.778 12.2218L11.9999 20L4.22168 12.2218L5.63589 10.8076L10.9999 16.1716V4H12.9999V16.1716Z"
            fill={COLORS.orange}
          ></path>
        </motion.svg>
      </div>
      <motion.div variants={leftSubtitleAnimation} className={styles.heroRightTitle + " " + disabledTextStyle}>
        ... and emphasis on
        <br />
        user experiences
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
