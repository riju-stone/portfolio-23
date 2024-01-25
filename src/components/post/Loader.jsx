import React from "react";
import styles from "./Posts.module.scss";
import { useSelector } from "react-redux";

const Loader = () => {
  const theme = useSelector((state) => state.theme.currentTheme);
  return <div className={styles.contentLoaderWrapper + " " + styles[theme]}>Loading Content...</div>;
};

export default Loader;
