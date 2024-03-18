import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";

import { defaultCursor, expandCursor } from "../cursor/CursorSlice";
import styles from "./HamburgerMenu.module.scss";

const menuButtonAnimation = {
  collapse: {
    height: "1rem",
    width: "1rem",
    borderRadius: "100%"
  },
  expand: {
    height: "3rem",
    width: "3rem",
    borderRadius: "100%",
    transition: {
      duration: 0.35,
      delay: 0.4,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
      borderRadius: {
        duration: 0.4,
        delay: 0.6
      }
    }
  },
  open: {
    borderRadius: "10px",
    height: "680px",
    width: "480px",
    transition: { duration: 0.35, type: "tween", ease: [0.76, 0, 0.24, 1], borderRadius: { duration: 0.4 } }
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
          <div>
            <motion.div className={styles.hamburgerContainer}>
              {isMenuOpen ? (
                <button className={styles.hamburgerButton} type="button" onClick={() => setMenuOpen(false)}>
                  <X />
                </button>
              ) : (
                <button className={styles.hamburgerButton} type="button" onClick={() => setMenuOpen(true)}>
                  <Menu />
                </button>
              )}
            </motion.div>
          </div>
        ) : null}
      </motion.div>
    </div>
  );
}

export default HamburgerMenu;
