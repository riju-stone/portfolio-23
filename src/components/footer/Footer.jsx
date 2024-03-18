import React from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

import styles from "./Footer.module.scss";

const Footer = () => {
  const theme = useSelector((state) => state.theme.currentTheme);
  const date = new Date();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.8, delay: 1 } }}
      className={`${styles.footerWrapper} ${styles[theme]}`}
    >
      <div>&copy; {date.getFullYear()}</div>
      <div>v2.0</div>
    </motion.div>
  );
};

export default Footer;
