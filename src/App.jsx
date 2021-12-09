import React, { useEffect } from "react";
import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from "./context/globalContext";

import { createGlobalStyle, ThemeProvider } from "styled-components";
import { normalize } from "styled-normalize";
import Header from "./components/Header/Header";
import CustomCursor from "./components/CustomCursor/CustomCursor";
import HomeBanner from "./components/Home/HomeBanner";

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

  return (
    <ThemeProvider theme={currentTheme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyle />
      <CustomCursor />
      <Header onCursor={onCursor} />
      <HomeBanner onCursor={onCursor} />
    </ThemeProvider>
  );
}

export default App;
