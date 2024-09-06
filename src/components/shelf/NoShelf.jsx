import React from "react";
import { motion } from "framer-motion";

import styles from "./styles.module.scss";
import { useSelector } from "react-redux";

function NoShelfComponent() {
  const theme = useSelector((state) => state.theme.currentTheme);
  return (
    <motion.div
      className={styles.NoShelfWrapper}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.5 }}
    >
      <div className={`${styles.NoShelfText} ${styles[theme]}`}>Getting my shit together...</div>
    </motion.div>
  );
}

export default NoShelfComponent;
