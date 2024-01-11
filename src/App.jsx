import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import GrowingCircle from "./components/background/GrowingCirle";
import Cursor from "./components/cursor/Cursor";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Works from "./pages/Works";
import About from "./pages/About";
import Error from "./pages/Error";
import LoadingScreen from "./components/loading/LoadingScreen";
import { AnimatePresence, motion } from "framer-motion";
import Footer from "./components/footer/Footer";
import SmoothScrolling from "./components/smooth-scrolling/SmoothScrolling";

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  return (
    <div className="App overflow-hidden">
      {loading == true ? (
        <AnimatePresence mode="wait">
          <motion.div key="loader">
            <LoadingScreen setLoading={setLoading} />
          </motion.div>
        </AnimatePresence>
      ) : (
        <SmoothScrolling>
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
        </SmoothScrolling>
      )}
    </div>
  );
}

export default App;
