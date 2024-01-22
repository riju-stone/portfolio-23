import React from "react";

import usePostList from "../components/hooks/usePostList";
import Transition from "../components/transition/Transition";
import PostList from "../components/post/PostList";

const BlogPage = () => {
  const { status, data } = usePostList();

  return <Transition>{status == "pending" ? <span>Loading</span> : <PostList postsData={data} />}</Transition>;
};

export default BlogPage;
