import React, { useState, useEffect } from "react";
import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from "./context/globalContext";

import { createGlobalStyle, ThemeProvider } from "styled-components";
import { normalize } from "styled-normalize";

//components
import Header from "./components/Header/Header";
import CustomCursor from "./components/CustomCursor/CustomCursor";
import HomeBanner from "./components/Home/HomeBanner";
import Hamburger from "./components/Hamburger/Hamburger";

const GlobalStyle = createGlobalStyle`
${normalize}
*{
  text-decoration: none;
  cursor: none;
}

html{
  box-sizing: border-box;
  font-size: 16px;
}

body{
  font-family: 'Segoe UI', 'Open Sans', 'Helvetica Neue';
  background: ${(props) => props.theme.background};
  overscroll-behaviour: none;
  overflow-x: hidden;
  padding:0;
  margin:0;
}
`;

const darkTheme = {
  background: "#000",
  text: "#fff",
  red: "#ea291e",
};

const lightTheme = {
  background: "#fff",
  text: "#000",
  red: "#ea291e",
};

function App() {
  const { currentTheme, cursorStyles } = useGlobalStateContext();
  const dispatch = useGlobalDispatchContext();
  // save the theme on localstorage
  useEffect(() => {
    window.localStorage.setItem("theme", currentTheme);
  }, [currentTheme]);

  const onCursor = (curType) => {
    curType = (cursorStyles.includes(curType) && curType) || false;
    dispatch({ type: "CURSOR_TYPE", cursorType: curType });
  };

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <ThemeProvider theme={currentTheme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyle />
      <CustomCursor toggleMenu={toggleMenu} />
      <Header
        onCursor={onCursor}
        toggleMenu={toggleMenu}
        setToggleMenu={setToggleMenu}
      />
      <Hamburger
        toggleMenu={toggleMenu}
        setToggleMenu={setToggleMenu}
        onCursor={onCursor}
      />
      <HomeBanner onCursor={onCursor} />
    </ThemeProvider>
  );
}

export default App;
