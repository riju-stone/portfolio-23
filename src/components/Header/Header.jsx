import React, { useRef } from "react";
import { Link } from "react-router-dom";

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

//hooks
import useElementPosition from "../../hooks/useElemPos";

// logos
import { HalfMoon, SunLight } from "iconoir-react";

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

  return (
    <HeaderNav
      initial={{ opacity: 0, y: -72 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
    >
      <Container>
        <Flex spaceBetween noHeight>
          <Logo
            onMouseEnter={() => onCursor("hovered")}
            onMouseLeave={() => onCursor()}
          >
            <Link to="/">H</Link>
            <span
              onClick={toggleTheme}
              onMouseEnter={() => onCursor("pointer")}
              onMouseLeave={() => onCursor()}
            >
              {currentTheme === "dark" ? (
                <HalfMoon color="#ededed" />
              ) : (
                <SunLight color="#024959" />
              )}
            </span>
            <Link to="/">ME</Link>
          </Logo>
          <Menu
            ref={hamburger}
            onClick={() => setToggleMenu(!toggleMenu)}
            onMouseEnter={() => menuHover(position.x, position.y)}
            onMouseLeave={() => onCursor()}
          >
            <button>
              <span></span>
              <span></span>
            </button>
          </Menu>
        </Flex>
      </Container>
    </HeaderNav>
  );
};

export default Header;
