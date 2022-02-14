import React, { useState, useEffect, useRef, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from "./context/globalContext";

//styled components
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { normalize } from "styled-normalize";

//components
import Loader from "./components/Loader/Loader";
import Header from "./components/Header/Header";
import CustomCursor from "./components/CustomCursor/CustomCursor";
import Hamburger from "./components/Hamburger/Hamburger";

import AboutDetails from "./components/About/AboutDetails";
import AboutPlane from "./components/About/AboutPlane";
import AboutContent from "./components/About/AboutContent";
import AboutTimeline from "./components/About/AboutTimeline";

import { AboutSection } from "./styles/aboutStyles";

const Projects = React.lazy(() => import("./components/Projects/Projects"));
const AboutBanner = React.lazy(() => import("./components/About/AboutBanner"));
const HomeBanner = React.lazy(() => import("./components/Home/HomeBanner"));
const Contact = React.lazy(() => import("./components/Contact/Contact"));

// global style
const GlobalStyle = createGlobalStyle`
${normalize}
*{
@font-face {
  font-family: 'Hammersmith One';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/hammersmithone/v12/qWcyB624q4L_C4jGQ9IK0O_dFlnrtREl.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
@font-face {
  font-family: 'Bungee Outline';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/bungeeoutline/v16/_6_mEDvmVP24UvU2MyiGDslL3Tg-aBNaPQ.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
  cursor: none;
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
}

::-webkit-scrollbar {
  width: 0px;
}

`;

function App() {
  const { currentTheme, cursorStyles } = useGlobalStateContext();
  const dispatch = useGlobalDispatchContext();
  const [toggleMenu, setToggleMenu] = useState(false);
  const [loading, setLoading] = useState(true);
  const [hamburgerPosition, setHamburgerPosition] = useState({ x: 0, y: 0 });

  //component refs
  let aboutRef = useRef(null);

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
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, [currentTheme]);

  const onCursor = (curType) => {
    curType = (cursorStyles.includes(curType) && curType) || false;
    dispatch({ type: "CURSOR_TYPE", cursorType: curType });
  };

  return (
    <ThemeProvider theme={currentTheme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyle />
      <CustomCursor toggleMenu={toggleMenu} />
      {loading === true ? (
        <Loader />
      ) : (
        <>
          <Router>
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

            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Suspense fallback={<Loader />}>
                      <HomeBanner onCursor={onCursor} />
                    </Suspense>
                  </>
                }
              ></Route>
              <Route
                path="/about"
                element={
                  <Suspense fallback={<Loader />}>
                    <AboutBanner onCursor={onCursor} />
                    <AboutPlane />
                    <AboutDetails />
                    <AboutContent />
                    <AboutTimeline />
                  </Suspense>
                }
              ></Route>
              <Route
                path="/projects"
                element={
                  <Suspense fallback={<Loader />}>
                    <Projects onCursor={onCursor} />
                  </Suspense>
                }
              ></Route>
              <Route
                path="/contact"
                element={
                  <Suspense fallback={<Loader />}>
                    <Contact onCursor={onCursor} />
                  </Suspense>
                }
              ></Route>
            </Routes>
          </Router>
        </>
      )}
    </ThemeProvider>
  );
}

export default App;
