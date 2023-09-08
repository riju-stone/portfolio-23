import React, { useState } from "react";
import ThemeToggle from "../theme/ThemeToggle";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { defaultCursor, expandCursor } from "../cursor/CursorSlice";

const Header = () => {
  const theme = useSelector((state) => state.theme.currentTheme);
  const [currentPage, setCurrentPage] = useState("Home");
  const dispatch = useDispatch();

  const styles = {
    textlight: `text-[#122027]`,
    textdark: `text-[#EDEDED]`,
    headerContainer: `w-screen flex justify-between align-middle items-center py-6 px-8 font-work-sans`,
    headerLink: `flex font-normal items-center ease-out duration-[0.1s]`,
    selectedHeaderLink: `flex font-bold items-center ease-out duration-[0.1s]`
  };

  const headerData = [
    {
      link: "/",
      label: "Home"
    },
    {
      link: "#projects",
      label: "Projects"
    },
    {
      link: "#skills",
      label: "Skills"
    },
    {
      link: "/blog",
      label: "Blog"
    }
  ];

  const headerAnimation = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.8,
        duration: 0.1
      }
    }
  };

  const headerLinkAnimation = {
    hidden: { y: -20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  const handleMouseEnter = () => {
    dispatch(expandCursor());
  };

  const handleMouseLeave = () => {
    dispatch(defaultCursor());
  };

  return (
    <motion.div
      variants={headerAnimation}
      initial="hidden"
      animate="show"
      className={`${styles.headerContainer} ${
        theme === "dark" ? styles.textdark : styles.textlight
      }`}
    >
      {headerData.map((headerElement, i) => {
        return (
          <Link key={i} to={headerElement.link}>
            <motion.div
              className={`${
                currentPage === headerElement.label
                  ? styles.selectedHeaderLink
                  : styles.headerLink
              }`}
              variants={headerLinkAnimation}
              onClick={() => setCurrentPage(headerElement.label)}
              onMouseEnter={() => handleMouseEnter()}
              onMouseLeave={() => handleMouseLeave()}
            >
              {headerElement.label}
            </motion.div>
          </Link>
        );
      })}
      <ThemeToggle />
    </motion.div>
  );
};

export default Header;
