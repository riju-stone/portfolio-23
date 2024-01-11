import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimationFrame } from "framer-motion";

import styles from "./LoadingScreen.module.scss";

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
  }
};

const loadingTitleAnimation = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: "easeInOut"
    }
  },
  exit: {
    opacity: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.4
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
      duration: 4
    }
  },
  exit: {
    y: -20,
    transition: {
      ease: [0.5, 0.001, 0.08, 0.95],
      duration: 0.4
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
      ease: "easeInOut",
      duration: 1.2
    }
  },
  exit: {
    opacity: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.4
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
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  const progressRef = useRef(null);
  const [progressPercent, setProgressPercent] = useState(0);

  useEffect(() => {
    if (currentPhraseIndex == phraseArray.length - 1) return;
    setTimeout(
      () => {
        setCurrentPhraseIndex(currentPhraseIndex + 1);
      },
      currentPhraseIndex == 0 ? 2500 : 250
    );
  }, [currentPhraseIndex]);

  useAnimationFrame(() => {
    let progressPos = 0;
    if (progressRef.current !== null) {
      progressPos = progressRef.current.getBoundingClientRect().left;
      progressPos = Math.floor(Math.abs(progressPos));
      let percent = Math.abs(progressPos - window.screen.width);
      percent = Math.floor((percent / window.screen.width) * 100);
      setProgressPercent(percent);
    }
  });

  return (
    <motion.div
      key="loader"
      variants={loadingScreenAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      onAnimationComplete={() => setLoading(false)}
      className={styles.loadingScreenWrapper}
    >
      <motion.div variants={loadingWrapperAnimation} className={styles.loaderContainer}>
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
