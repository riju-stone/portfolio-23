import React, { useState, useEffect, Suspense } from "react";
import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from "./context/globalContext";

import Monoton from "./fonts/Monoton.ttf";

//styled components
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { normalize } from "styled-normalize";

//components
import Loader from "./components/Loader/Loader";
import Header from "./components/Header/Header";
import CustomCursor from "./components/CustomCursor/CustomCursor";
import Hamburger from "./components/Hamburger/Hamburger";
import AboutDetails from "./components/About/AboutDetails";
import AboutContent from "./components/About/AboutContent";
import AboutTimeline from "./components/About/AboutTimeline";

const Banner = React.lazy(() => import("./components/Hero/Banner"));
const AboutPlane = React.lazy(() => import("./components/About/AboutPlane"));
const Projects = React.lazy(() => import("./components/Projects/Projects"));
const Contact = React.lazy(() => import("./components/Contact/Contact"));

// global style
const GlobalStyle = createGlobalStyle`
${normalize}
*{
  cursor: none;
  @font-face {
    font-family: "Monoton";
    src: url(${Monoton});
  }
}

html{
  text-decoration: none;
  box-sizing: border-box;
  font-size: 16px;
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
}

body{
  cursor: none;
  background: ${(props) => props.theme.background};
  overscroll-behavior: none;
  overflow-x: hidden;
  padding:0;
  margin:0;
  scroll-snap-type: y mandatory;
}

::-webkit-scrollbar {
  width: 0px;
}

`;

// main app component
function App() {
  const { currentTheme, cursorStyles } = useGlobalStateContext();
  const dispatch = useGlobalDispatchContext();
  const [toggleMenu, setToggleMenu] = useState(false);
  const [loading, setLoading] = useState(true);
  const [hamburgerPosition, setHamburgerPosition] = useState({ x: 0, y: 0 });

  const darkTheme = {
    background: "#152b39",
    text: "#ededed",
    link: "#ffa46f",
    turqoise: "#09bd86",
    darkTurqoise: "#024959",
    left: `${hamburgerPosition.x}px`,
    top: `${hamburgerPosition.y}px`,
  };

  const lightTheme = {
    background: "#dddddd",
    text: "#011826",
    link: "#c25b55",
    turqoise: "#09bd86",
    darkTurqoise: "#024959",
    left: `${hamburgerPosition.x}px`,
    top: `${hamburgerPosition.y}px`,
  };

  // save the theme on localstorage
  useEffect(() => {
    window.localStorage.setItem("theme", currentTheme);

    // timeout for loader component
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, [currentTheme]);

  // dispatch action when cursor type is changed
  const onCursor = (curType) => {
    curType = (cursorStyles.includes(curType) && curType) || false;
    dispatch({ type: "CURSOR_TYPE", cursorType: curType });
  };

  return (
    <ThemeProvider theme={currentTheme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyle />
      <CustomCursor toggleMenu={toggleMenu} />
      {loading === true ? (
        <Loader onCursor={onCursor} />
      ) : (
        <Suspense fallback={<Loader />}>
          <Header
            onCursor={onCursor}
            toggleMenu={toggleMenu}
            setToggleMenu={setToggleMenu}
            setHamburgerPosition={setHamburgerPosition}
          />
          <Hamburger
            toggleMenu={toggleMenu}
            setToggleMenu={setToggleMenu}
            onCursor={onCursor}
          />

          <Banner onCursor={onCursor} />
          <AboutPlane />
          <AboutDetails />
          <AboutContent />
          <AboutTimeline />
          <Projects onCursor={onCursor} />
          <Contact onCursor={onCursor} />
        </Suspense>
      )}
    </ThemeProvider>
  );
}

export default App;
