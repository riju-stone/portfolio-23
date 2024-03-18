import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimationFrame } from "framer-motion";

import styles from "./LoadingScreen.module.scss";
import {
  loadingPercentAnimation,
  loadingScreenAnimation,
  loadingProgressAnimation,
  loadingTitleAnimation
} from "./anim";

const phraseArray = ["Hola", "مرحبًا", "γεια", "שלום", "Ciao", "안녕하세요", "Привет", "নমস্কার", "नमस्ते", "Hello"];

const LoadingScreen = ({ setLoading }) => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  const progressRef = useRef(null);
  const [progressPercent, setProgressPercent] = useState(0);

  useEffect(() => {
    if (currentPhraseIndex === phraseArray.length - 1) return;
    setTimeout(
      () => {
        setCurrentPhraseIndex(currentPhraseIndex + 1);
      },
      currentPhraseIndex === 0 ? 1000 : 250
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
      className={styles.loadingScreenWrapper}
    >
      <div className={styles.loaderContainer}>
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
          onAnimationComplete={() => setLoading(false)}
        />
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
