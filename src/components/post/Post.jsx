import React, { useEffect } from "react";
import Markdown from "markdown-to-jsx";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

import styles from "./styles.module.scss";
import SkewScroll from "../skew-scroll/SkewScroll";
import CodeHighlighter from "./CodeHighlighter";
import MagneticButton from "../button/MagneticButton";

import { ChevronLeft } from "lucide-react";
import { useDeviceDetection } from "../../hooks/useDeviceDetection";

const Post = ({ data }) => {
  console.log("Post data: ", data);

  const deviceType = useDeviceDetection();
  const theme = useSelector((state) => state.theme.currentTheme);
  const navigate = useNavigate();
  let postDate = null;

  const postAnimation = {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.4
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.2
      }
    }
  };

  useEffect(() => {
    if (data) {
      postDate = new Date(data.created_at).toString().split(" ").slice(0, 4).join(" ");
      window.scroll(0, 0);
    }
  }, [data]);

  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    mass: 0.5,
    restSpeed: 0.5,
    restDelta: 0.5
  });
  const scrollPercent = useTransform(scaleY, [0, 1], ["-100%", "0%"]);

  return (
    <motion.div variants={postAnimation} initial="initial" animate="animate" exit="exit">
      {data == undefined ? (
        <div className={styles.noPostWrapper}>
          <div className={`${styles.noPostTitle} ${styles[theme]}`}>
            Opps!
            <br /> Are you sure I wrote this ?
          </div>
          <div className={`${styles.noPostSubTitle} ${styles[theme]}`}>Cause I could not find anything...</div>
        </div>
      ) : (
        <>
          <motion.div style={{ left: scrollPercent }} className={`${styles.postScrollProgress} ${styles[theme]}`} />
          <SkewScroll>
            <section className={`${styles.postSectionWrapper} ${styles[theme]}`}>
              <div className={styles.postHeaderWrapper}>
                <button
                  className={`${styles.postBackButton} ${styles[theme]}`}
                  type="button"
                  onClick={() => navigate("/blogs")}
                >
                  {deviceType === "desktop" ? (
                    <MagneticButton>
                      <ChevronLeft />
                    </MagneticButton>
                  ) : (
                    <ChevronLeft />
                  )}
                </button>
                <div className={styles.postTitle}>{data.title}</div>
              </div>
              <div className={styles.postDetailsContainer}>
                <p>{postDate}</p>
                <p>~ {data.read_time} mins read</p>
                <div className={styles.postTagsContainer}>
                  {data.tags.split(",").map((tag, index) => {
                    return (
                      <p key={index} className={styles.postTag}>
                        {tag}
                      </p>
                    );
                  })}
                </div>
              </div>

              <Markdown
                className={`${styles.postContentWrapper} ${styles[theme]}`}
                options={{
                  overrides: {
                    code: CodeHighlighter
                  }
                }}
              >
                {data.content}
              </Markdown>
            </section>
          </SkewScroll>
        </>
      )}
    </motion.div>
  );
};

export default Post;
