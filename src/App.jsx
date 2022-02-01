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

import HomeContent from "./components/Home/HomeContent";
import HomeAbout from "./components/Home/HomeAbout";
import Footer from "./components/Footer/Footer";

const Projects = React.lazy(() => import("./components/Projects/Projects"));
const About = React.lazy(() => import("./components/About/About"));
const HomeBanner = React.lazy(() => import("./components/Home/HomeBanner"));

// global style
const GlobalStyle = createGlobalStyle`
${normalize}
*{
  /* cyrillic-ext */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/montserrat/v21/JTUSjIg1_i6t8kCHKm459WRhyzbi.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/montserrat/v21/JTUSjIg1_i6t8kCHKm459W1hyzbi.woff2) format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* vietnamese */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/montserrat/v21/JTUSjIg1_i6t8kCHKm459WZhyzbi.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/montserrat/v21/JTUSjIg1_i6t8kCHKm459Wdhyzbi.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/montserrat/v21/JTUSjIg1_i6t8kCHKm459Wlhyw.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/montserrat/v21/JTUSjIg1_i6t8kCHKm459WRhyzbi.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/montserrat/v21/JTUSjIg1_i6t8kCHKm459W1hyzbi.woff2) format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* vietnamese */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/montserrat/v21/JTUSjIg1_i6t8kCHKm459WZhyzbi.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/montserrat/v21/JTUSjIg1_i6t8kCHKm459Wdhyzbi.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/montserrat/v21/JTUSjIg1_i6t8kCHKm459Wlhyw.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
  /* latin-ext */
@font-face {
  font-family: 'Hammersmith One';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/hammersmithone/v12/qWcyB624q4L_C4jGQ9IK0O_dFlnruxElg4M.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Hammersmith One';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/hammersmithone/v12/qWcyB624q4L_C4jGQ9IK0O_dFlnrtREl.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* vietnamese */
@font-face {
  font-family: 'Bungee Outline';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/bungeeoutline/v16/_6_mEDvmVP24UvU2MyiGDslL3Tg_aBNaPQ.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Bungee Outline';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/bungeeoutline/v16/_6_mEDvmVP24UvU2MyiGDslL3Tg-aBNaPQ.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Bungee Outline';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/bungeeoutline/v16/_6_mEDvmVP24UvU2MyiGDslL3TgwaBM.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
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
    link: "#f2B591",
    turqoise: "#09bd86",
    darkTurqoise: "#024959",
    left: `${hamburgerPosition.x}px`,
    top: `${hamburgerPosition.y}px`,
  };

  const lightTheme = {
    background: "#dddddd",
    text: "#011826",
    link: "#BF6560",
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
    }, 5000);
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
                      <HomeContent />
                      <HomeAbout onCursor={onCursor} aboutRef={aboutRef} />
                      <Footer onCursor={onCursor} />
                    </Suspense>
                  </>
                }
              ></Route>
              <Route
                path="/about"
                element={
                  <Suspense fallback={<Loader />}>
                    <About onCursor={onCursor} />
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
            </Routes>
          </Router>
        </>
      )}
    </ThemeProvider>
  );
}

export default App;
