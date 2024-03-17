import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";

import { defaultCursor, expandCursor } from "../cursor/CursorSlice";
import styles from "./HamburgerMenu.module.scss";

const menuButtonAnimation = {
  collapse: {
    height: "1rem",
    width: "1rem"
  },
  expand: {
    height: "3rem",
    width: "3rem",
    transition: {
      duration: 0.4
    }
  },
  open: {
    height: "70vh",
    width: "70vw",
    borderRadius: "10px",
    position: "fixed",
    top: "1.5rem",
    left: "2rem",
    transition: {
      duration: 0.4,
      ease: [0.6, 0.05, 0.1, 0.95]
    }
  }
};

function HamburgerMenu({ headerState, isMenuOpen, setMenuOpen }) {
  const theme = useSelector((state) => state.theme.currentTheme);
  const dispatch = useDispatch();

  useEffect(() => {
    if (headerState === "expanded") setMenuOpen(false);
  });

  const handleMouseEnter = () => {
    dispatch(expandCursor());
  };

  const handleMouseLeave = () => {
    dispatch(defaultCursor());
  };

  console.log(isMenuOpen);
  return (
    <div>
      <motion.div
        className={`${styles.hamburgerMenuWrapper} ${styles[theme]}`}
        variants={menuButtonAnimation}
        animate={headerState === "expanded" ? "collapse" : isMenuOpen ? "open" : "expand"}
        onMouseEnter={() => handleMouseEnter()}
        onMouseLeave={() => handleMouseLeave()}
      >
        {headerState === "collapsed" ? (
          <>
            {isMenuOpen ? (
              <motion.div className={styles.hamburgerContainer}>
                <button className={styles.hamburgerButton} onClick={() => setMenuOpen(false)}>
                  <X />
                </button>
              </motion.div>
            ) : (
              <button className={styles.hamburgerButton} onClick={() => setMenuOpen(true)}>
                <Menu />
              </button>
            )}
          </>
        ) : null}
      </motion.div>
    </div>
  );
}

export default HamburgerMenu;
