import React from "react";

import usePostList from "../hooks/usePostList";
import Transition from "../components/transition/Transition";

import Loader from "../components/post/Loader";
import PostList from "../components/post/PostList";

const BlogPage = () => {
  const { status, data } = usePostList();

  return <Transition>{status == "pending" ? <Loader /> : <PostList postsData={data} />}</Transition>;
};

export default BlogPage;
