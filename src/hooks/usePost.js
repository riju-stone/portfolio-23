import { useQuery } from "@tanstack/react-query";
import supabase from "../utils/db";

const fetchPostData = async (post_title) => {
  const { data, error } = await supabase.from("post_data").select("*").eq("post_title_uid", post_title);

  if (error) {
    console.error("Error fetching posts", error);
  }

  return data;
};

export default function usePost(post_title) {
  return useQuery({ queryKey: ["postQuery", post_title], queryFn: () => fetchPostData(post_title) });
}
