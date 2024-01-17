import React, { useEffect, useState, Suspense } from "react";
import { useSelector } from "react-redux";
import supabase from "../../utils/db";

import styles from "./Posts.module.scss";
import SkewScroll from "../skew-scroll/SkewScroll";
import Post from "./Post";

function PostList() {
  const [posts, setPosts] = useState([]);
  const theme = useSelector((state) => state.theme.currentTheme);

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
    <SkewScroll>
      <section className={styles.postsSectionWrapper + " " + styles[theme]}>
        <div className={styles.postsTitle}>My scribbles & opinions</div>
        <div className={styles.postsWrapper}>
          <Suspense fallback={<div>Loading...</div>}>
            {posts.map((post, index) => {
              return <Post key={index} id={index} postData={post} />;
            })}
          </Suspense>
        </div>
      </section>
    </SkewScroll>
  );
}

export default PostList;
