import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { defaultCursor, expandCursor } from "../cursor/CursorSlice";
import ThemeToggle from "../theme/ThemeToggle";
import styles from "./Header.module.scss";

const headerData = [
  {
    link: "/",
    label: "home"
  },
  {
    link: "/about",
    label: "about"
  },
  {
    link: "/blogs",
    label: "blogs"
  }
];

const headerLinkAnimation = {
  hidden: { x: -30, opacity: 0 },
  show: (i) => ({
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      delay: 1.2 + i * 0.1
    }
  })
};

const Header = ({ location }) => {
  const theme = useSelector((state) => state.theme.currentTheme);
  const [currentPage, setCurrentPage] = useState("none");
  const dispatch = useDispatch();

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setCurrentPage("home");
        break;
      case "/works":
        setCurrentPage("works");
        break;
      case "/about":
        setCurrentPage("about");
        break;
      case "/blogs":
        setCurrentPage("blogs");
        break;
      default:
        setCurrentPage("none");
        break;
    }
  }, [location.pathname]);

  const handleMouseEnter = () => {
    dispatch(expandCursor());
  };

  const handleMouseLeave = () => {
    dispatch(defaultCursor());
  };

  return (
    <div className={styles.headerWrapper + " " + styles[theme]}>
      <div className={styles.headerLinksContainer}>
        {headerData.map((headerElement, index) => {
          return (
            <Link key={index + " " + headerElement.link} to={headerElement.link}>
              <motion.div
                className={
                  styles.headerLink +
                  " " +
                  styles[theme] +
                  " " +
                  `${currentPage === headerElement.label ? styles.selected : styles.normal}`
                }
                variants={headerLinkAnimation}
                initial="hidden"
                animate="show"
                custom={index}
                onClick={() => setCurrentPage(headerElement.label)}
                onMouseEnter={() => handleMouseEnter()}
                onMouseLeave={() => handleMouseLeave()}
              >
                {headerElement.label}
              </motion.div>
            </Link>
          );
        })}
      </div>
      <ThemeToggle />
    </div>
  );
};

export default Header;
