import React, { useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";

import { useSelector } from "react-redux";
import ExpandedHeader from "./ExpandedHeader";
import CollapsedHeader from "./CollapsedHeader";
import ThemeToggle from "../theme/ThemeToggle";
import styles from "./Header.module.scss";

const Header = ({ location }) => {
  const [headerState, setHeaderState] = useState("expanded");
  const theme = useSelector((state) => state.theme.currentTheme);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (scrollValue) => {
    console.log("Page scroll: ", scrollValue);
    if (scrollValue < 250) {
      setHeaderState("expanded");
    } else if (scrollValue >= 250) {
      setHeaderState("collapsed");
    }
  });

  return (
    <div className={`${styles.headerWrapper} ${styles[theme]}`}>
      <AnimatePresence mode="wait">
        <motion.div>
          {headerState === "expanded" ? (
            <ExpandedHeader location={location} />
          ) : (
            <CollapsedHeader location={location} />
          )}
        </motion.div>
      </AnimatePresence>
      <ThemeToggle />
    </div>
  );
};

export default Header;
