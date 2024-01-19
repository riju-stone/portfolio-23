import React from "react";
import { useSelector } from "react-redux";

import styles from "./Posts.module.scss";
import { Link } from "react-router-dom";

function PostPreview({ id, postData }) {
  let postLink = postData.title.split(" ").join("-").toLowerCase();
  const theme = useSelector((state) => state.theme.currentTheme);
  return (
    <Link to={`/blogs/${postLink}`}>
      <div key={id} className={styles.postPreviewContainer + " " + styles[theme]}>
        <div className={styles.postPreviewTitle}>{postData.title}</div>
        <div className={styles.postPreviewDate}>{postData.created_at}</div>
        <div className={styles.postPreviewSummary}>{postData.summary}</div>
      </div>
    </Link>
  );
}

export default PostPreview;
