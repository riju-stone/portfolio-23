import React from "react";
import { useParams } from "react-router-dom";

import Post from "../components/post/Post";
import Transition from "../components/transition/Transition";
import usePost from "../components/hooks/usePost";

function PostPage() {
  let { id } = useParams();
  const { status, data } = usePost(id);

  return <Transition>{status == "pending" ? <span>Loading</span> : <Post data={data[0]} />}</Transition>;
}

export default PostPage;
