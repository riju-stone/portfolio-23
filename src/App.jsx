import React, { useState, useEffect, Suspense } from "react";

// global context
import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from "./context/globalContext";

// fonts
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

// lazy loading components
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
  width: 10px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: ${(props) => props.theme.turqoise};
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: ${(props) => props.theme.darkTurqoise};
}

`;

// main app component
function App() {
  // keeping track of theme and cursor styles using global state context
  const { currentTheme, cursorStyles } = useGlobalStateContext();
  // using global dispatch context to dispatch actions
  const dispatch = useGlobalDispatchContext();
  // using useState to toggle hamburger menu
  const [toggleMenu, setToggleMenu] = useState(false);
  // using useState to toggle the loader screen
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
    background: "#cecece",
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
    }, 4500);
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
          <AboutDetails onCursor={onCursor} />
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
