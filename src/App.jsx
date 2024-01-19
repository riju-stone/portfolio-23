import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import supabase from "./utils/db";

import GrowingCircle from "./components/background/GrowingCirle";
import Cursor from "./components/cursor/Cursor";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Post from "./pages/Post";
import About from "./pages/About";
import Error from "./pages/Error";

import LoadingScreen from "./components/loading/LoadingScreen";
import Footer from "./components/footer/Footer";

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    let { data, error } = await supabase.from("posts").select("*").order("created_at", { ascending: false });

    if (error) {
      console.log("Error fetching posts", error);
    } else {
      setPosts(data);
    }
  };

  useEffect(() => {
    fetchPosts().catch(console.error);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <AnimatePresence mode="wait">
          <LoadingScreen setLoading={setLoading} />
        </AnimatePresence>
      ) : (
        <>
          <GrowingCircle />
          <Cursor />
          <Header location={location} />
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/blogs" element={<Blog posts={posts} />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<Error />} />
              {posts.map((post, index) => {
                let postLink = post.title.split(" ").join("-").toLowerCase();
                return <Route key={index} path={`/blogs/${postLink}`} element={<Post postData={post} />} />;
              })}
            </Routes>
          </AnimatePresence>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
