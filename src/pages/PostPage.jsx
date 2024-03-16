import React from "react";
import { useParams } from "react-router-dom";

import Post from "../components/post/Post";
import Transition from "../components/transition/Transition";
import usePost from "../hooks/usePost";
import Loader from "../components/post/Loader";

function PostPage() {
  const { id } = useParams();
  const { status, data } = usePost(id);

  return <Transition>{status === "pending" ? <Loader /> : <Post data={data[0]} />}</Transition>;
}

export default PostPage;
