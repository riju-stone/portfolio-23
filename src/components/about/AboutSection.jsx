import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { motion, useAnimation, useInView } from "framer-motion";
import { COLORS } from "../../utils/constants";

const styles = {
  aboutContainer: "h-screen flex align-middle items-center py-[4rem] px-[2rem]",
  aboutTitle: "flex-row font-work-sans text-xl ease-out duration-[0.6s]",
  specialText: "font-work-sans text-xl text-orangebg",
  iconWrapper: "flex flex-row",
  icons: "h-6 w-6 mx-1 ease-out duration-[0.6s]"
};

const aboutSectionAnimation = {
  show: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.3
    }
  }
};

const titleWordAnimation = {
  hidden: {
    y: 50
  },
  show: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 1
    }
  }
};

const AboutSection = () => {
  const aboutSectionRef = useRef(null);
  const theme = useSelector((state) => state.theme.currentTheme);
  const textStyle = theme == "dark" ? "text-darktext" : "text-lighttext";

  const inView = useInView(aboutSectionRef, { once: true });
  const animationControls = useAnimation();

  useEffect(() => {
    if (inView) {
      animationControls.start("show");
      console.log("Section In View: ", inView);
    } else {
      animationControls.start("hidden");
    }
  }, [animationControls, inView]);

  return (
    <motion.section className={styles.aboutContainer} variants={aboutSectionAnimation} animate={animationControls}>
      <div ref={aboutSectionRef} className={styles.aboutTitle + " " + textStyle}>
        <motion.div className="overflow-hidden h-[35px]">
          <motion.div variants={titleWordAnimation}>Based out of City of Joy - Kolkata</motion.div>
        </motion.div>
        <motion.div className="overflow-hidden h-[35px]">
          <motion.div variants={titleWordAnimation}>A full-stack developer specializing</motion.div>
        </motion.div>
        <motion.div className="overflow-hidden h-[35px]">
          <motion.div variants={titleWordAnimation}>in building and designing</motion.div>
        </motion.div>
        <motion.div className="overflow-hidden h-[35px]">
          <motion.div variants={titleWordAnimation}>beautiful & unique experiences for</motion.div>
        </motion.div>
        <motion.div className="overflow-hidden h-[35px]">
          <motion.div variants={titleWordAnimation}>
            <div className={styles.iconWrapper}>
              <svg className={styles.icons} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  d="M6.23509 6.45329C4.85101 7.89148 4 9.84636 4 12C4 16.4183 7.58172 20 12 20C13.0808 20 14.1116 19.7857 15.0521 19.3972C15.1671 18.6467 14.9148 17.9266 14.8116 17.6746C14.582 17.115 13.8241 16.1582 12.5589 14.8308C12.2212 14.4758 12.2429 14.2035 12.3636 13.3943L12.3775 13.3029C12.4595 12.7486 12.5971 12.4209 14.4622 12.1248C15.4097 11.9746 15.6589 12.3533 16.0043 12.8777C16.0425 12.9358 16.0807 12.9928 16.1198 13.0499C16.4479 13.5297 16.691 13.6394 17.0582 13.8064C17.2227 13.881 17.428 13.9751 17.7031 14.1314C18.3551 14.504 18.3551 14.9247 18.3551 15.8472V15.9518C18.3551 16.3434 18.3168 16.6872 18.2566 16.9859C19.3478 15.6185 20 13.8854 20 12C20 8.70089 18.003 5.8682 15.1519 4.64482C14.5987 5.01813 13.8398 5.54726 13.575 5.91C13.4396 6.09538 13.2482 7.04166 12.6257 7.11976C12.4626 7.14023 12.2438 7.12589 12.012 7.11097C11.3905 7.07058 10.5402 7.01606 10.268 7.75495C10.0952 8.2232 10.0648 9.49445 10.6239 10.1543C10.7134 10.2597 10.7307 10.4547 10.6699 10.6735C10.59 10.9608 10.4286 11.1356 10.3783 11.1717C10.2819 11.1163 10.0896 10.8931 9.95938 10.7412C9.64554 10.3765 9.25405 9.92233 8.74797 9.78176C8.56395 9.73083 8.36166 9.68867 8.16548 9.64736C7.6164 9.53227 6.99443 9.40134 6.84992 9.09302C6.74442 8.8672 6.74488 8.55621 6.74529 8.22764C6.74529 7.8112 6.74529 7.34029 6.54129 6.88256C6.46246 6.70541 6.35689 6.56446 6.23509 6.45329ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"
                  fill={COLORS.orange}
                ></path>
              </svg>
              ,
              <svg className={styles.icons} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  d="M7 4V20H17V4H7ZM6 2H18C18.5523 2 19 2.44772 19 3V21C19 21.5523 18.5523 22 18 22H6C5.44772 22 5 21.5523 5 21V3C5 2.44772 5.44772 2 6 2ZM12 17C12.5523 17 13 17.4477 13 18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18C11 17.4477 11.4477 17 12 17Z"
                  fill={COLORS.orange}
                ></path>
              </svg>
              and
              <svg className={styles.icons} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  d="M4 16H20V5H4V16ZM13 18V20H17V22H7V20H11V18H2.9918C2.44405 18 2 17.5511 2 16.9925V4.00748C2 3.45107 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44892 22 4.00748V16.9925C22 17.5489 21.5447 18 21.0082 18H13Z"
                  fill={COLORS.orange}
                ></path>
              </svg>
              .
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
