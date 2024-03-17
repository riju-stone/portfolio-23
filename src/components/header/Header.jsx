import React, { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import ThemeToggle from "../theme/ThemeToggle";
import styles from "./Header.module.scss";

import { defaultCursor, expandCursor } from "../cursor/CursorSlice";
import HamburgerMenu from "../hamburger/HamburgerMenu";

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
  expand: (i) => ({
    y: 0,
    transition: {
      duration: 0.2,
      delay: i * 0.08
    }
  }),
  collapse: (i) => ({
    y: -150,
    transition: {
      duration: 0.2,
      delay: i * 0.08
    }
  })
};

const Header = ({ location }) => {
  const theme = useSelector((state) => state.theme.currentTheme);
  const dispatch = useDispatch();
  const { scrollY } = useScroll();

  const [headerState, setHeaderState] = useState("expanded");
  const [currentPage, setCurrentPage] = useState("none");
  const [menuOpen, setMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (scrollValue) => {
    if (scrollValue < 250) {
      setHeaderState("expanded");
    } else if (scrollValue >= 250) {
      setHeaderState("collapsed");
    }
  });

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
    <div className={`${styles.headerWrapper} ${styles[theme]}`}>
      <div className={styles.headerLinksContainer}>
        <HamburgerMenu headerState={headerState} isMenuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        {headerData.map((headerElement, index) => {
          return (
            <Link key={`${index} ${headerElement.link}`} to={headerElement.link}>
              <div className={styles.headerLinkWrapper}>
                <motion.div
                  className={`${styles.headerLink} ${styles[theme]} ${
                    currentPage === headerElement.label ? styles.selected : styles.normal
                  }`}
                  variants={headerLinkAnimation}
                  initial="hidden"
                  animate={headerState === "expanded" ? "expand" : "collapse"}
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
