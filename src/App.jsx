import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

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
    <div className="App">
      {/* {loading ? (
        <AnimatePresence mode="wait">
          <LoadingScreen setLoading={setLoading} />
        </AnimatePresence>
      ) : ( */}
      <>
        <GrowingCircle />
        <Cursor />
        <Header location={location} />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="/works" element={<Works />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </>
      {/* )} */}
    </div>
  );
}

export default App;
