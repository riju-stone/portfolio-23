import React /*, { useEffect, useRef }*/ from "react";
import { HeaderNav, Logo, Menu } from "../../styles/headerStyles";
import { Container, Flex } from "../../styles/globalStyles";

import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from "../../context/globalContext";

// import { gsap } from "gsap";

const Header = ({ onCursor }) => {
  const { currentTheme } = useGlobalStateContext();
  const dispatch = useGlobalDispatchContext();

  const toggleTheme = () => {
    if (currentTheme === "dark") {
      dispatch({ type: "TOGGLE_THEME", theme: "light" });
    } else {
      dispatch({ type: "TOGGLE_THEME", theme: "dark" });
    }
  };

  // let headerNav = useRef(null);

  // useEffect(() => {
  //   headerAnimate();
  // });

  // const headerAnimate = () => {
  //   gsap.from(headerNav, {
  //     opacity: 0,
  //     y: -100,
  //   });
  //   gsap.to(headerNav, {
  //     duration: 1,
  //     opacity: 1,
  //     y: 0,
  //     ease: "power3.inOut",
  //   });
  // };

  return (
    <HeaderNav /*ref={(el) => (headerNav = el)}*/>
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
          <Menu>
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
