import React, { useRef } from "react";
import { motion } from "framer-motion";

//styles
import {
  HeaderNav,
  Logo,
  Menu,
  Container,
  Flex,
} from "../../styles/headerStyles";

import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from "../../context/globalContext";

import { BiSun, BiMoon } from "react-icons/bi";

//hooks
import useElementPosition from "../../hooks/useElemPos";

const Header = ({
  onCursor,
  toggleMenu,
  setToggleMenu,
  setHamburgerPosition,
}) => {
  const { currentTheme } = useGlobalStateContext();
  const dispatch = useGlobalDispatchContext();
  const toggleTheme = () => {
    if (currentTheme === "dark") {
      dispatch({ type: "TOGGLE_THEME", theme: "light" });
    } else {
      dispatch({ type: "TOGGLE_THEME", theme: "dark" });
    }
  };

  const hamburger = useRef(null);
  const position = useElementPosition(hamburger);
  const menuHover = (x, y) => {
    onCursor("locked");
    setHamburgerPosition({ x: x, y: y });
  };

  const menuAnim1 = {
    initial: { rotate: 0, y: 0 },
    open: { rotate: 45, y: 7 },
    transition: {
      duration: 0.2,
      ease: [0.6, 0.05, -0.01, 0.9],
    },
  };

  const menuAnim2 = {
    initial: { rotate: 0, y: 0 },
    open: { rotate: -45, y: -7 },
    transition: {
      duration: 0.2,
      ease: [0.6, 0.05, -0.01, 0.9],
    },
  };

  return (
    <HeaderNav
      initial={{ opacity: 0, y: -72 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4, ease: [0.6, 0.05, -0.01, 0.9] }}
    >
      <Container>
        <Flex spaceBetween noHeight>
          <Logo
            onMouseEnter={() => onCursor("hovered")}
            onMouseLeave={() => onCursor()}
          >
            <a href="/">H</a>
            <span
              onClick={toggleTheme}
              onMouseEnter={() => onCursor("pointer")}
              onMouseLeave={() => onCursor()}
            >
              {currentTheme === "dark" ? (
                <BiMoon color="#ededed" />
              ) : (
                <BiSun color="#00232b" />
              )}
            </span>
            <a href="/">ME</a>
          </Logo>
          <Menu
            ref={hamburger}
            onClick={() => setToggleMenu(!toggleMenu)}
            onMouseEnter={() => menuHover(position.x, position.y)}
            onMouseLeave={() => onCursor()}
            initial="initial"
            animate={toggleMenu ? "open" : "initial"}
          >
            <motion.span variants={menuAnim1}></motion.span>
            <motion.span variants={menuAnim2}></motion.span>
          </Menu>
        </Flex>
      </Container>
    </HeaderNav>
  );
};

export default Header;
