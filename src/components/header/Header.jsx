import React, { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import ThemeToggle from "../theme/ThemeToggle";
import styles from "./Header.module.scss";

import { defaultCursor, expandCursor } from "../cursor/CursorSlice";

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

const menuButtonAnimation = {
  collapse: {
    scale: 1
  },
  expand: {
    scale: 3.5,
    transition: {
      duration: 0.4
    }
  }
};

const menuLogoAnimation = {
  hide: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.4,
      delay: 0.2
    }
  }
};

const menuLogoUpperAnimation = {
  open: {
    rotate: 0,
    y: 0
  },
  close: {
    rotate: 45,
    y: 6,
    transition: {
      type: "spring",
      duration: 0.6,
      delay: 0.1
    }
  }
};

const menuLogoMiddleAnimation = {
  open: {
    opacity: 1,
    transition: {
      duration: 0.3
    }
  },
  close: {
    opacity: 0,
    transition: {
      duration: 0.3
    }
  }
};

const menuLogoLowerAnimation = {
  open: {
    y: 0,
    rotate: 0
  },
  close: {
    y: -6,
    rotate: -45,
    transition: {
      type: "spring",
      duration: 0.6,
      delay: 0.1
    }
  }
};

const Header = ({ location, isMenuOpen, setMenuOpen }) => {
  const theme = useSelector((state) => state.theme.currentTheme);
  const dispatch = useDispatch();
  const { scrollY } = useScroll();

  const [headerState, setHeaderState] = useState("expanded");
  const [currentPage, setCurrentPage] = useState("none");

  useMotionValueEvent(scrollY, "change", (scrollValue) => {
    if (scrollValue < 180) {
      setHeaderState("expanded");
    } else if (scrollValue >= 180) {
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

    if (headerState === "expanded") setMenuOpen(false);
  }, [location.pathname, headerState]);

  const handleMouseEnter = () => {
    dispatch(expandCursor());
  };

  const handleMouseLeave = () => {
    dispatch(defaultCursor());
  };

  const handleHamburgerMenu = () => {
    if (headerState === "collapsed") {
      setMenuOpen(!isMenuOpen);
    }
  };

  return (
    <div className={`${styles.headerWrapper} ${styles[theme]}`}>
      <div className={styles.headerLinksContainer}>
        <motion.button
          type="button"
          className={`${styles.menuButton} ${styles[theme]}`}
          variants={menuButtonAnimation}
          animate={headerState === "collapsed" ? "expand" : "collapse"}
          onClick={() => handleHamburgerMenu()}
        >
          <motion.svg
            role="Menu Button"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-menu"
            variants={menuLogoAnimation}
            animate={headerState === "expanded" ? "hide" : "show"}
          >
            <title>Menu Button</title>
            <motion.line
              variants={menuLogoMiddleAnimation}
              animate={isMenuOpen ? "close" : "open"}
              x1="4"
              x2="20"
              y1="12"
              y2="12"
            />
            <motion.line
              variants={menuLogoUpperAnimation}
              animate={isMenuOpen ? "close" : "open"}
              x1="4"
              x2="20"
              y1="6"
              y2="6"
            />
            <motion.line
              variants={menuLogoLowerAnimation}
              animate={isMenuOpen ? "close" : "open"}
              x1="4"
              x2="20"
              y1="18"
              y2="18"
            />
          </motion.svg>
        </motion.button>
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
      <ThemeToggle isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
    </div>
  );
};

export default Header;
