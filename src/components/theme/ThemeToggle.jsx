import React from "react";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";

import { changeTheme, setThemeSwitchPos } from "./ThemeSlice";
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

const ThemeToggle = () => {
  const dispatch = useDispatch();

  const handleSwitch = (e) => {
    dispatch(changeTheme());
    dispatch(setThemeSwitchPos({ x: e.clientX, y: e.clientY }));
  };

  return (
    <motion.div variants={themeButtonAnimation} initial="initial" animate="show" onClick={(e) => handleSwitch(e)}>
      <ThemeSwitch />
    </motion.div>
  );
};

export default ThemeToggle;
