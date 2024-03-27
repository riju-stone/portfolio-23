import React from "react";

import { motion } from "framer-motion";
import { useSelector } from "react-redux";

import styles from "./HamburgerMenu.module.scss";

const hamburgerMenuAnimation = {
  initial: {
    y: -550
  },
  animate: {
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1]
    }
  },
  exit: {
    y: -550,
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1]
    }
  }
};

function HamburgerMenu() {
  const theme = useSelector((state) => state.theme.currentTheme);
  const initialPath = `M0 0 L${window.innerWidth} 0 Q ${window.innerWidth / 2} 250 0 0`;
  const targetPath = `M0 0 L${window.innerWidth} 0 Q ${window.innerWidth / 2} 0 0 0`;

  const hamburgerCurveAnimation = {
    initial: {
      d: initialPath
    },
    animate: {
      d: targetPath,
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1]
      }
    },
    exit: {
      d: initialPath,
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1]
      }
    }
  };

  return (
    <motion.div
      variants={hamburgerMenuAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      className={`${styles.hamburgerMenuWrapper} ${styles[theme]}`}
    >
      <div className={styles.hamburgerMenuContainer}> HamburgerMenu</div>
      <svg className={`${styles.hamburgerMenuCurve} ${styles[theme]}`} fill="#fff">
        <motion.path variants={hamburgerCurveAnimation} initial="initial" animate="animate" exit="exit" />
      </svg>
    </motion.div>
  );
}

export default HamburgerMenu;
