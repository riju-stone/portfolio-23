import React /*, { useEffect, useRef }*/ from "react";
import { HeaderNav, Logo, Menu } from "../../styles/headerStyles";
import { Container, Flex } from "../../styles/globalStyles";

import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from "../../context/globalContext";

// import { gsap } from "gsap";

const Header = ({ onCursor, toggleMenu, setToggleMenu }) => {
  const { currentTheme } = useGlobalStateContext();
  const dispatch = useGlobalDispatchContext();

  const toggleTheme = () => {
    if (currentTheme === "dark") {
      dispatch({ type: "TOGGLE_THEME", theme: "light" });
    } else {
      dispatch({ type: "TOGGLE_THEME", theme: "dark" });
    }
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
            <a href="/">H</a>
            <span
              onClick={toggleTheme}
              onMouseEnter={() => onCursor("pointer")}
              onMouseLeave={() => onCursor()}
            ></span>
            <a href="/">ME</a>
          </Logo>
          <Menu onClick={() => setToggleMenu(!toggleMenu)}>
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
