import React from "react";
import Markdown from "markdown-to-jsx";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

import styles from "./Posts.module.scss";
import SkewScroll from "../skew-scroll/SkewScroll";
import CodeHighlighter from "./CodeHighlighter";
import MagneticButton from "../button/MagneticButton";

import { ChevronLeft } from "lucide-react";
import { useDeviceDetection } from "../../hooks/useDeviceDetection";

const Post = ({ data }) => {
  const deviceType = useDeviceDetection();
  const postDate = new Date(data.created_at).toString().split(" ").slice(0, 4).join(" ");
  const theme = useSelector((state) => state.theme.currentTheme);
  const navigate = useNavigate();

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
    <>
      <motion.div style={{ left: scrollPercent }} className={`${styles.postScrollProgress} ${styles[theme]}`} />
      <SkewScroll>
        <section className={`${styles.postSectionWrapper} ${styles[theme]}`}>
          <div className={styles.postHeaderWrapper}>
            <button className={`${styles.postBackButton} ${styles[theme]}`} onClick={() => navigate("/blogs")}>
              {deviceType === "mobile" ? (
                <ChevronLeft />
              ) : (
                <MagneticButton>
                  <ChevronLeft />
                </MagneticButton>
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
            className={styles.postContentWrapper + " " + styles[theme]}
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
  );
};

export default Post;
