import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { useScroll, useMotionValueEvent } from "framer-motion";

import GrowingCircle from "./components/background/GrowingCirle";
import Cursor from "./components/cursor/Cursor";
import Footer from "./components/footer/Footer";

import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import PostPage from "./pages/PostPage";
import AboutPage from "./pages/AboutPage";
import ErrorPage from "./pages/ErrorPage";

import LoadingScreen from "./components/loading/LoadingScreen";
import Header from "./components/header/Header";

import HamburgerMenu from "./components/hamburger/HamburgerMenu";

function App() {
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", () => {
    setMenuOpen(false);
  });

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 15,
        refetchOnMount: false
      }
    }
  });

  return (
    <div className="App">
      <AnimatePresence mode="wait">{menuOpen ? <HamburgerMenu isMenuOpen={menuOpen} /> : null}</AnimatePresence>
      <Header location={location} isMenuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <GrowingCircle />
      <Cursor />
      <QueryClientProvider client={queryClient}>
        <AnimatePresence mode="wait">
          {loading ? (
            <LoadingScreen setLoading={setLoading} />
          ) : (
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/blogs" element={<BlogPage />} />
              <Route path="/blogs/:id" element={<PostPage />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          )}
        </AnimatePresence>
      </QueryClientProvider>
      <Footer />
    </div>
  );
}

export default App;
