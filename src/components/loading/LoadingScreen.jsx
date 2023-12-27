import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimationFrame } from "framer-motion";
import { useSelector } from "react-redux";

const styles = {
  loaderContainer: "absolute h-screen w-screen flex overflow-hidden",
  loaderScreenWrapper: "h-screen w-screen flex column bg-[#E04634] z-50",
  loadingProgress: "absolute w-full h-[8px] bg-darkbg bottom-0",
  loadingTitle: "font-avant-garde font-[700] text-5xl text-lighttext z-50 mx-8 my-8",
  loadingPercent: "absolute font-space-grotesk font-[700] bottom-[1.2rem] text-6xl text-lighttext z-10 mx-8 my-8"
};

const loadingScreenAnimation = {
  show: {
    transition: {
      when: "afterChildren",
      staggerChildren: 0.4
    }
  }
};

const loadingWrapperAnimation = {
  hidden: {
    y: 0,
    opacity: 0
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      ease: [0.65, 0.01, 0.05, 0.95],
      staggerChildren: 0.4,
      when: "beforeChildren",
      duration: 1.5
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
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.8
    }
  }
};

const loadingProgressAnimation = {
  hidden: {
    x: -window.screen.width
  },
  show: {
    x: 0,
    transition: {
      ease: [0.5, 0.001, 0.08, 0.95],
      duration: 5
    }
  }
};

const loadingPercentAnimation = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 1.2
    }
  }
};

const phraseArray = [
  "Hola",
  "مرحبًا",
  "γεια",
  "שלום",
  "こんにちは",
  "Ciao",
  "안녕하세요",
  "Привет",
  "নমস্কার",
  "नमस्ते",
  "Hello"
];

const LoadingScreen = ({ setLoading }) => {
  const theme = useSelector((state) => state.theme.currentTheme);
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  const backgroundStyle = theme == "dark" ? "bg-darkbg" : "bg-lightbg";

  const progressRef = useRef(null);
  const [progressPercent, setProgressPercent] = useState(0);

  useEffect(() => {
    if (currentPhraseIndex == phraseArray.length - 1) return;
    setTimeout(
      () => {
        setCurrentPhraseIndex(currentPhraseIndex + 1);
      },
      currentPhraseIndex == 0 ? 2000 : 250
    );
  }, [currentPhraseIndex]);

  useAnimationFrame(() => {
    let progressPos = progressRef.current.getBoundingClientRect().left;
    progressPos = Math.floor(Math.abs(progressPos));
    let percent = Math.abs(progressPos - window.screen.width);
    percent = Math.floor((percent / window.screen.width) * 100);
    setProgressPercent(percent);
  });

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
        <motion.div variants={loadingTitleAnimation} className={styles.loadingTitle}>
          * {phraseArray[currentPhraseIndex]}
        </motion.div>
        <motion.div variants={loadingPercentAnimation} className={styles.loadingPercent}>
          {progressPercent}%
        </motion.div>

        <motion.div
          ref={progressRef}
          className={styles.loadingProgress}
          variants={loadingProgressAnimation}
        ></motion.div>
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;
