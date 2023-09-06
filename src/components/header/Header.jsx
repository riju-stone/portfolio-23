import React from "react";
import ThemeToggle from "../theme/ThemeToggle";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { TEXTCOLORS } from "../../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const theme = useSelector((state) => state.theme.currentTheme);

  const styles = {
    text: `text-[${TEXTCOLORS[theme]}]`,
    headerContainer: `w-screen flex justify-center align-middle items-center py-6 px-8 font-space-grotesk`,
    headerLink: `flex font-bormal mx-4 items-center`,
    selectedHeaderLink: `flex font-bold mx-4 items-center`
  };

  const headerAnimation = {
    hidden: { y: -50, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.8,
        duration: 0.3
      }
    }
  };

  const firstItem = {
    hidden: { y: -20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  const secondItem = {
    hidden: { y: -20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  const thirdItem = {
    hidden: { y: -20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };
  const fourthItem = {
    hidden: { y: -20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <motion.div
      variants={headerAnimation}
      initial="hidden"
      animate="show"
      className={`${styles.headerContainer} ${styles.text}`}
    >
      <Link to="/">
        <motion.span
          className={styles.selectedHeaderLink}
          variants={firstItem}
        >
          H
          <ThemeToggle />
          ME
        </motion.span>
      </Link>
      <motion.span
        className={styles.headerLink}
        variants={secondItem}
      >
        Projects
      </motion.span>
      <motion.span className={styles.headerLink} variants={thirdItem}>
        Skills
      </motion.span>
      <Link to="/blogs">
        <motion.span
          className={styles.headerLink}
          variants={fourthItem}
        >
          Blog
        </motion.span>
      </Link>
    </motion.div>
  );
};

export default Header;
