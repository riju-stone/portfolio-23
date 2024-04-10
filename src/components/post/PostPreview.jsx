import React from "react";
import { useSelector } from "react-redux";

import styles from "./Posts.module.scss";
import { Link } from "react-router-dom";

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
      <div key={id} className={`${styles.postPreviewContainer} ${styles[theme]}`}>
        <div className={styles.postPreviewTitle}>{postData.title}</div>
        <div className={styles.postPreviewDate}>{postDate}</div>
      </div>
    </Link>
  );
}

export default PostPreview;
