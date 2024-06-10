import React, { useRef, useEffect, useState } from "react";
import { AnimatePresence, motion, useAnimationFrame } from "framer-motion";
// import { Asterisk } from "lucide-react";
import styles from "./styles.module.scss";
import Asterisk from "../../assets/icons/asterisk.svg";
const phraseArray = ["Hola", "مرحبًا", "γεια", "Ciao", "Привет", "नमस्ते", "Hello"];

const loadingScreenAnimation = {
  show: {
    transition: {
      when: "afterChildren"
    }
  },
  exit: {
    when: "afterChildren"
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
      duration: 6
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

const LoadingScreen = ({ setLoading }) => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  const progressRef = useRef(null);
  const [progressPercent, setProgressPercent] = useState(0);

  useEffect(() => {
    if (currentPhraseIndex === phraseArray.length - 1) return;
    setTimeout(() => {
      setCurrentPhraseIndex(currentPhraseIndex + 1);
    }, 800);
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
        <div className={styles.loadingTitle}>
          <motion.div
            className={styles.loadingAsterisk}
            animate={{ rotate: 360 }}
            transition={{ ease: "linear", repeat: Infinity, duration: 4 }}
          >
            <img src={Asterisk} />
          </motion.div>
          <AnimatePresence mode="wait">
            <motion.div
              key={phraseArray[currentPhraseIndex]}
              exit={{ opacity: 0 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.3
              }}
            >
              {phraseArray[currentPhraseIndex]}
            </motion.div>
          </AnimatePresence>
        </div>
        <motion.div
          className={styles.loadingPercent}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {progressPercent < 10 ? "0" : null}
          {progressPercent < 100 ? "0" : null}
          {progressPercent}
          <span>%</span>
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
