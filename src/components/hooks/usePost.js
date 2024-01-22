import { useQuery } from "@tanstack/react-query";
import supabase from "../../utils/db";

const fetchPostData = async (id) => {
  let { data, error } = await supabase.from("post_data").select("*").eq("post_id", id);

  if (error) {
    console.error("Error fetching posts", error);
  }

  return data;
};

export default function usePost(post_id) {
  return useQuery({ queryKey: ["postQuery", post_id], queryFn: () => fetchPostData(post_id) });
}
