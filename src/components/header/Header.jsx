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
  hidden: { y: 150 },
  show: (i) => ({
    y: 0,
    transition: {
      duration: 1.5,
      delay: i * 0.08
    }
  })
};

const Header = ({ location }) => {
  const theme = useSelector((state) => state.theme.currentTheme);
  const [currentPage, setCurrentPage] = useState("none");
  const dispatch = useDispatch();

  useEffect(() => {
    switch (location.pathname.split("/")[1]) {
      case "":
        setCurrentPage("home");
        break;
      case "about":
        setCurrentPage("about");
        break;
      case "blogs":
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
              <div className={styles.headerLinkWrapper}>
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
              </div>
            </Link>
          );
        })}
      </div>
      <ThemeToggle />
    </div>
  );
};

export default Header;
