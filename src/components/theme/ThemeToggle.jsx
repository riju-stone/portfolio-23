import React from "react";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";

import { changeTheme } from "./ThemeSlice";
import ThemeSwitch from "./ThemeSwitch";

const themeButtonAnimation = {
  initial: {
    x: 30,
    opacity: 0
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      delay: 1.2
    }
  }
};

const ThemeToggle = ({ isMenuOpen, setMenuOpen }) => {
  const dispatch = useDispatch();

  const handleSwitch = () => {
    if (isMenuOpen) {
      setMenuOpen(false);
      setTimeout(() => dispatch(changeTheme()), 500);
    } else {
      dispatch(changeTheme());
    }
  };

  return (
    <motion.div variants={themeButtonAnimation} initial="initial" animate="show" onClick={() => handleSwitch()}>
      <ThemeSwitch />
    </motion.div>
  );
};

export default ThemeToggle;
