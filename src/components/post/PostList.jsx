import React, { Suspense, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { MoveDown, MoveLeft } from "lucide-react";

import styles from "./Posts.module.scss";
import SkewScroll from "../skew-scroll/SkewScroll";
import PostPreview from "./PostPreview";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import MagneticButton from "../button/MagneticButton";

function PostList({ postsData }) {
  const theme = useSelector((state) => state.theme.currentTheme);
  const sectionRef = useRef(null);
  const scrollBarRef = useRef(null);
  const scrollBarThumbRef = useRef(null);

  const [scrollBarHeight, setScrollBarHeight] = useState("100vh");

  let parentHeight = "100vh";

  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    mass: 0.5,
    restSpeed: 0.5,
    restDelta: 0.5
  });
  const scrollPercent = useTransform(scaleY, [0, 1], ["0%", "90%"]);

  useEffect(() => {
    parentHeight = sectionRef.current.clientHeight;
    setScrollBarHeight(parentHeight - 250 + "px");
  }, []);

  return (
    <SkewScroll>
      <section ref={sectionRef} className={styles.postsSectionWrapper + " " + styles[theme]}>
        {postsData === null ? (
          <div>Nothing to Show</div>
        ) : (
          <>
            <div ref={scrollBarRef} className={styles.postsScrollBarWrapper} style={{ height: scrollBarHeight }}>
              <MagneticButton>
                <MoveDown />
              </MagneticButton>
              <div className={styles.postsScrollBarBackground + " " + styles[theme]}>
                <motion.div
                  ref={scrollBarThumbRef}
                  style={{ top: scrollPercent }}
                  className={styles.postsScrollBarThumb + " " + styles[theme]}
                />
              </div>
            </div>
            <div className={styles.postsListWrapper}>
              <div className={styles.postsHeaderContainer}>
                <p className={styles.postsTitle}>My scribbles & opinions</p>
                <div className={styles.postsSort}>
                  <p>By Newest </p>
                  <MagneticButton>
                    <MoveLeft />
                  </MagneticButton>
                </div>
              </div>
              <div className={styles.postsWrapper}>
                <Suspense fallback={<div>Loading...</div>}>
                  {postsData.map((post, index) => {
                    return (
                      <div key={index}>
                        {index === 0 && <div className={styles.postDivider + " " + styles[theme]} />}
                        <PostPreview id={index} postData={post} />
                        <div className={styles.postDivider + " " + styles[theme]} />
                      </div>
                    );
                  })}
                </Suspense>
              </div>
            </div>
          </>
        )}
      </section>
    </SkewScroll>
  );
}

export default PostList;
