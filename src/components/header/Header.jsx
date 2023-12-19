import React, { useEffect, useState } from "react";
import ThemeToggle from "../theme/ThemeToggle";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { defaultCursor, expandCursor } from "../cursor/CursorSlice";

const headerData = [
  {
    link: "/",
    label: "home"
  },
  {
    link: "/blog",
    label: "blog"
  }
];

const headerAnimation = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.35,
      delayChildren: 0.5
    }
  }
};

const headerLinkAnimation = {
  hidden: { x: -20, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6
    }
  }
};

const styles = {
  headerContainer: `w-screen fixed flex justify-between align-middle items-center py-[1rem] px-[1.5rem] font-space-grotesk z-20`,
  headerLinkWrapper: `flex justify-start items-center`,
  headerLink: `flex justify-start font-[500] ease-out duration-[0.6s] mx-2`
};

const Header = () => {
  const theme = useSelector((state) => state.theme.currentTheme);
  const [currentPage, setCurrentPage] = useState("none");
  const dispatch = useDispatch();

  const linkStyle = theme == "dark" ? "text-darktext" : "text-lighttext";
  const selectedLinkStyle = theme == "dark" ? "text-darkdisabled" : "text-lightdisabled";

  useEffect(() => {
    let pathname = window.location.pathname;
    if (pathname.indexOf("blog") > -1) {
      setCurrentPage("blog");
    } else if (pathname == "/") {
      setCurrentPage("home");
    } else {
      setCurrentPage("none");
    }
  });

  const handleMouseEnter = () => {
    dispatch(expandCursor());
  };

  const handleMouseLeave = () => {
    dispatch(defaultCursor());
  };

  return (
    <motion.div variants={headerAnimation} initial="hidden" animate="show" className={styles.headerContainer}>
      <div className={styles.headerLinkWrapper}>
        {headerData.map((headerElement, i) => {
          return (
            <Link key={i} to={headerElement.link}>
              <motion.div
                className={
                  styles.headerLink + " " + `${currentPage === headerElement.label ? linkStyle : selectedLinkStyle}`
                }
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
      </div>
      <ThemeToggle />
    </motion.div>
  );
};

export default Header;
