import React from "react";
import { useSelector } from "react-redux";

import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import { delay, motion } from "framer-motion";

const postPreviewAnimation = {
  hidden: {
    opacity: 0,
    y: 100
  },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      delay: 0.4 + 0.1 * i
    }
  })
};

function PostPreview({ id, postData }) {
  const theme = useSelector((state) => state.theme.currentTheme);

  let postLink = postData.title
    .replace(/[!@#$%^&*:]/g, "")
    .split(" ")
    .join("-")
    .replace("--", "-")
    .toLowerCase();
  const postDate = new Date(postData.created_at).toString().split(" ").slice(0, 4).join(" ");
  return (
    <Link to={`/blogs/${postLink}`}>
      <motion.div
        key={id}
        variants={postPreviewAnimation}
        initial="hidden"
        animate="show"
        custom={id}
        className={`${styles.postPreviewContainer} ${styles[theme]}`}
      >
        <div className={styles.postPreviewTitle}>{postData.title}</div>
        <div className={styles.postPreviewDate}>{postDate}</div>
      </motion.div>
    </Link>
  );
}

export default PostPreview;
