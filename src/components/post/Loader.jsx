import React from "react";
import { motion } from "framer-motion";

import styles from "./Posts.module.scss";
import { useSelector } from "react-redux";

const Loader = () => {
  const theme = useSelector((state) => state.theme.currentTheme);

  const loaderAnimation = {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.4,
        delay: 1
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.2
      }
    }
  };
  return (
    <motion.div
      className={`${styles.contentLoaderWrapper} ${styles[theme]}`}
      variants={loaderAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      Getting my shit together...
    </motion.div>
  );
};

export default Loader;
