import React from "react";

import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./HamburgerMenu.module.scss";

const hamburgerMenuAnimation = {
  initial: {
    y: -600
  },
  animate: {
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.76, 0, 0.24, 1]
    }
  },
  exit: {
    y: -600,
    transition: {
      duration: 0.7,
      ease: [0.76, 0, 0.24, 1]
    }
  }
};

function HamburgerMenu({ isMenuOpen, setMenuOpen }) {
  const theme = useSelector((state) => state.theme.currentTheme);
  const initialPath = `M0 0 L${window.innerWidth} 0 Q ${window.innerWidth / 2} 200 0 0`;
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

  const handleMenuClick = () => {
    if (isMenuOpen) {
      setMenuOpen(false);
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
      <div className={styles.hamburgerMenuContainer}>
        <div className={styles.hamburgerMenuLink} onClick={() => handleMenuClick()}>
          <Link to="/">Home</Link>
        </div>
        <div className={styles.hamburgerMenuLink} onClick={() => handleMenuClick()}>
          <Link to="/about">About</Link>{" "}
        </div>
        <div className={styles.hamburgerMenuLink} onClick={() => handleMenuClick()}>
          <Link to="/blogs">Blogs</Link>
        </div>
      </div>
      <svg className={`${styles.hamburgerMenuCurve} ${styles[theme]}`} fill="#fff">
        <motion.path variants={hamburgerCurveAnimation} initial="initial" animate="animate" exit="exit" />
      </svg>
    </motion.div>
  );
}

export default HamburgerMenu;
