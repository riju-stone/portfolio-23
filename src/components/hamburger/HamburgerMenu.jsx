import React from "react";

import { motion } from "framer-motion";
import { useSelector } from "react-redux";

import styles from "./HamburgerMenu.module.scss";

const hamburgerMenuAnimation = {
  open: {
    height: "40vh"
  },
  close: {
    height: "0",
    transition: {
      duration: 0.4
    }
  }
};

function HamburgerMenu({ isMenuOpen }) {
  const theme = useSelector((state) => state.theme.currentTheme);
  return (
    <motion.div
      variants={hamburgerMenuAnimation}
      animate={isMenuOpen ? "open" : "close"}
      className={`${styles.hamburgerMenuWrapper} ${styles[theme]}`}
    >
      {" "}
      {isMenuOpen ? <div> HamburgerMenu</div> : null}
    </motion.div>
  );
}

export default HamburgerMenu;
