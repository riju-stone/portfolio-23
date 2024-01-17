import React from "react";

import Transition from "../components/transition/Transition";
import PostList from "../components/post/PostList";

const Blog = () => {
  return (
    <Transition>
      <PostList />
    </Transition>
  );
};

export default Blog;
