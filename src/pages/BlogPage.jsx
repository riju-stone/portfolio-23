import React, { useEffect } from "react";
import { AnimatePresence } from "framer-motion";

import usePostList from "../hooks/usePostList";
import Transition from "../components/transition/Transition";

import Loader from "../components/post/Loader";
import PostList from "../components/post/PostList";

const BlogPage = () => {
  const { status, data } = usePostList();

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <Transition>
      <AnimatePresence>{status === "pending" ? <Loader /> : <PostList postsData={data} />}</AnimatePresence>
    </Transition>
  );
};

export default BlogPage;
