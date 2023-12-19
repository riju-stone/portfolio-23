import React from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { COLORS } from "../utils/constants";

const styles = {
  blogContainer: "h-screen flex align-middle items-center py-[4rem] px-[2rem]",
  blogTitle: "font-work-sans font-normal text-6xl text-center ease-out duration-[0.6s]"
};

const Blog = (props) => {
  const theme = useSelector((state) => state.theme.currentTheme);

  const colorStyle = theme == "dark" ? COLORS.light : COLORS.dark;
  const textStyle = theme == "dark" ? "text-darktext" : "text-lighttext";
  const disabledTextStyle = theme == "dark" ? "text-darkdisabled" : "text-lightdisabled";

  return <div className={styles.blogContainer + " " + textStyle}>Blogs</div>;
};

export default Blog;
