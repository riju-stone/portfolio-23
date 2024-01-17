import React from "react";

import styles from "./Posts.module.scss";

function Post({ id, postData }) {
  return (
    <div key={id} className={styles.postContainer}>
      <div className={styles.postTitle}>{postData.title}</div>
      <div className={styles.postDate}>{postData.created_at}</div>
      <div className={styles.postSummary}>{postData.summary}</div>
    </div>
  );
}

export default Post;
