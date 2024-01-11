import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { ReactLenis } from "@studio-freight/react-lenis";
import { AnimatePresence, motion } from "framer-motion";

import GrowingCircle from "./components/background/GrowingCirle";
import Cursor from "./components/cursor/Cursor";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Works from "./pages/Works";
import About from "./pages/About";
import Error from "./pages/Error";
import LoadingScreen from "./components/loading/LoadingScreen";
import Footer from "./components/footer/Footer";

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  return (
    <ReactLenis className="App" root options={{ lerp: 0.1, duration: 1.5, smoothTouch: true }}>
      {loading == true ? (
        <AnimatePresence>
          <div>
            <LoadingScreen setLoading={setLoading} />
          </div>
        </AnimatePresence>
      ) : (
        <>
          <GrowingCircle />
          <Cursor />
          <Header location={location} />
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/blogs" element={<Blog />} />
              <Route path="/works" element={<Works />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </AnimatePresence>
          <Footer />
        </>
      )}
    </ReactLenis>
  );
}

export default App;
