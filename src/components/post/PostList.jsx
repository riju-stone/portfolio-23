import React, { Suspense } from "react";
import { useSelector } from "react-redux";

import styles from "./Posts.module.scss";
import SkewScroll from "../skew-scroll/SkewScroll";
import PostPreview from "./PostPreview";

function PostList({ posts }) {
  const theme = useSelector((state) => state.theme.currentTheme);

  return (
    <SkewScroll>
      <section className={styles.postsSectionWrapper + " " + styles[theme]}>
        <div className={styles.postsTitle}>My scribbles & opinions</div>
        <div className={styles.postsWrapper}>
          <Suspense fallback={<div>Loading...</div>}>
            {posts.map((post, index) => {
              return <PostPreview key={index} id={index} postData={post} />;
            })}
          </Suspense>
        </div>
      </section>
    </SkewScroll>
  );
}

export default PostList;
