import { useQuery } from "@tanstack/react-query";
import supabase from "../../utils/db";

const fetchPostMetadata = async () => {
  let { data, error } = await supabase.from("post_metadata").select("*").order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching posts", error);
  }

  return data;
};

export default function usePostList() {
  return useQuery({ queryKey: ["postsListQuery"], queryFn: () => fetchPostMetadata() });
}
