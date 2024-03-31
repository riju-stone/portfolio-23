import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { defaultCursor, expandCursor } from "../cursor/CursorSlice";

import { setThemeSwitchPos } from "./ThemeSlice";

import styles from "./Theme.module.scss";

const animations = {
  sunBeams: {
    light: {
      rotateZ: -120,
      opacity: 1,
      transition: {
        duration: 0.8
      }
    },
    dark: {
      rotateZ: 0,
      opacity: 0,
      transition: {
        duration: 0.4
      }
    }
  },
  moonCircle: {
    light: {
      x: 0,
      transition: {
        duration: 0.8
      }
    },
    dark: {
      x: -7,
      transition: {
        duration: 0.8
      }
    }
  }
};

const ThemeSwitch = () => {
  const theme = useSelector((state) => state.theme.currentTheme);

  const dispatch = useDispatch();
  const switchRef = useRef(null);

  const handleMouseEnter = () => {
    dispatch(expandCursor());
  };

  const handleMouseLeave = () => {
    dispatch(defaultCursor());
  };

  useEffect(() => {
    const switchData = switchRef.current.getBoundingClientRect();
    dispatch(setThemeSwitchPos({ x: switchData.x, y: switchData.y }));
  }, []);

  return (
    <motion.button
      className={styles.themeSwitchWrapper}
      title="Theme Toggle Switch"
      aria-label="auto"
      aria-live="polite"
      initial={{ scale: 0 }}
      animate={{ scale: 1, transition: { duration: 1.2 } }}
      exit={{ scale: 0 }}
      onMouseEnter={() => handleMouseEnter()}
      onMouseLeave={() => handleMouseLeave()}
    >
      <motion.svg
        className={`sun-moon ${styles.logoWrapper}`}
        ref={switchRef}
        aria-hidden="true"
        width="20"
        height="20"
        viewBox="0 0 24 24"
      >
        <motion.circle
          className="sun"
          cx="12"
          cy="12"
          r="6"
          mask="url(#moon-mask)"
          fill={theme === "light" ? "#e04634" : "#B9B9B9"}
        />
        <motion.g
          className="sun-beams stroke-[1.5px]"
          stroke="#e04634"
          variants={animations.sunBeams}
          animate={theme === "light" ? "light" : "dark"}
        >
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </motion.g>
        <motion.mask className="moon" id="moon-mask">
          <rect x="0" y="0" width="100%" height="100%" fill="white" />
          <motion.circle
            cx="24"
            cy="10"
            r="6"
            fill="black"
            variants={animations.moonCircle}
            animate={theme === "light" ? "light" : "dark"}
          />
        </motion.mask>
      </motion.svg>
    </motion.button>
  );
};

export default ThemeSwitch;
