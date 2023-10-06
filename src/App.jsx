import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GrowingCircle from "./components/background/GrowingCirle";
import Cursor from "./components/cursor/Cursor";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Error from "./pages/Error";
import LoadingScreen from "./components/loading/LoadingScreen";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <Router>
      <div className="App">
        <AnimatePresence>
          {loading == true ? (
            <motion.div key="loader">
              <LoadingScreen setLoading={setLoading} />
            </motion.div>
          ) : (
            <>
              <GrowingCircle />
              <Header />
              <Cursor />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="*" element={<Error />} />
              </Routes>
            </>
          )}
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;
