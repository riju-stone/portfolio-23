import React from "react";

import Transition from "../components/transition/Transition";
import PostList from "../components/post/PostList";

const Blog = ({ posts }) => {
  return (
    <Transition>
      <PostList posts={posts} />
    </Transition>
  );
};

export default Blog;
