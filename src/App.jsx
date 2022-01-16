import React, { useState, useEffect, useRef, Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Fragment,
} from "react-router-dom";
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
import Hero from "./components/Hero/Hero";
import HomeBanner from "./components/Home/HomeBanner";
import HomeContent from "./components/Home/HomeContent";
import HomeAbout from "./components/Home/HomeAbout";
import Footer from "./components/Footer/Footer";

import About from "./components/About/About";
import Projects from "./components/Projects/Projects";

// global style
const GlobalStyle = createGlobalStyle`
${normalize}
*{
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Hammersmith+One&display=swap');
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
  font-family: 'Segoe UI', 'Open Sans', 'Helvetica Neue';
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
  const [hamburgerPosition, setHamburgerPosition] = useState({ x: 0, y: 0 });

  //component refs
  let aboutRef = useRef(null);
  // save the theme on localstorage

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
      <CustomCursor toggleMenu={toggleMenu} />
      <Suspense fallback={<Loader />}>
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
            footerPosition={hamburgerPosition}
            setFooterPosition={setHamburgerPosition}
          />

          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HomeBanner onCursor={onCursor} />
                  <Hero />
                  <HomeContent />
                  <HomeAbout onCursor={onCursor} aboutRef={aboutRef} />
                  <Footer
                    onCursor={onCursor}
                    footerPosition={hamburgerPosition}
                    setFooterPosition={setHamburgerPosition}
                  />
                </>
              }
            ></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
          </Routes>
        </Router>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
