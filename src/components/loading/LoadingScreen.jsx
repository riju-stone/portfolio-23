import React from "react";
import { easeInOut, motion } from "framer-motion";
import { useSelector } from "react-redux";

const styles = {
  loaderContainer: "h-screen w-screen",
  loaderScreenWrapper:
    "absolute h-screen w-screen flex justify-center align-middle items-center text-center bg-[#E04634] z-10",
  loadingTitle: "font-space-grotesk text-3xl text-lighttext w-[75%]",
  loadingProgress: "absolute !w-full h-[8px] bg-darkbg bottom-0"
};

const LoadingScreen = ({ setLoading }) => {
  const theme = useSelector((state) => state.theme.currentTheme);

  const backgroundStyle = theme == "dark" ? "bg-darkbg" : "bg-lightbg";
  const textStyle = theme == "dark" ? "text-darktext" : "text-lighttext";
  const disabledTextStyle = theme == "dark" ? "text-darkdisabled" : "text-lightdisabled";

  const loadingScreenAnimation = {
    show: {
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.4
      }
    }
  };

  const loadingWrapperAnimation = {
    hidden: {
      y: window.screen.height
    },
    show: {
      y: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        staggerChildren: 0.4,
        when: "beforeChildren",
        duration: 1.8
      }
    },
    exit: {
      y: -window.screen.height,
      transition: {
        ease: "easeInOut",
        duration: 0.8
      }
    }
  };

  const loadingTitleAnimation = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        ease: "easeIn",
        duration: 0.8
      }
    }
  };

  const loadingProgressANimation = {
    hidden: {
      x: -window.screen.width
    },
    show: {
      x: 0,
      transition: {
        ease: [0.04, 0.01, -0.05, 0.55],
        duration: 5
      }
    }
  };

  return (
    <motion.div
      variants={loadingScreenAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      onAnimationComplete={() => setLoading(false)}
      className={styles.loaderContainer + " " + backgroundStyle}
    >
      <motion.div variants={loadingWrapperAnimation} className={styles.loaderScreenWrapper}>
        <motion.div className={styles.loadingTitle} variants={loadingTitleAnimation}>
          Getting my shit together...
        </motion.div>
        <motion.div className={styles.loadingProgress} variants={loadingProgressANimation}></motion.div>
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;
