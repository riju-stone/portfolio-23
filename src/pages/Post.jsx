import React from "react";
import { useSelector } from "react-redux";
import Markdown from "markdown-to-jsx";

import Transition from "../components/transition/Transition";
import styles from "../components/post/Posts.module.scss";
import SkewScroll from "../components/skew-scroll/SkewScroll";
import CodeHighlighter from "../components/post/CodeHighlighter";

function Post({ postData }) {
  const theme = useSelector((state) => state.theme.currentTheme);

  return (
    <Transition>
      <SkewScroll>
        <section className={styles.postSectionWrapper + " " + styles[theme]}>
          <div className={styles.postTitle}>{postData.title}</div>
          <div className={styles.postDetailsContainer}>
            <p>{postData.created_at}</p>
            <p>{postData.read_time} mins read</p>
            <div className={styles.postTagsContainer}>
              {postData.tags.split(",").map((tag, index) => {
                return (
                  <p key={index} className={styles.postTag}>
                    {tag}
                  </p>
                );
              })}
            </div>
          </div>

          <Markdown
            className={styles.postContentWrapper + " " + styles[theme]}
            options={{
              overrides: {
                code: CodeHighlighter
              }
            }}
          >
            {postData.mrkdwn_text}
          </Markdown>
        </section>
      </SkewScroll>
    </Transition>
  );
}

export default Post;
