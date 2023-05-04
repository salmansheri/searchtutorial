"use client";

import { useSearchParams } from "next/navigation";
import useSWR from "swr";
import EmptyState from "../components/EmptyState";
import { Post } from "@prisma/client";


const fetchPost = async (url: string) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetchpost");
  }

  return response.json();
};

const SearchClient = () => {
  const searchParams = useSearchParams();

  const query = searchParams?.get("q");

  const encodedSearchQuery = encodeURI(query || "");
  console.log(query);
  const { data, mutate, error, isLoading } = useSWR(
    `/api/search?q=${encodedSearchQuery}`,
    fetchPost
  );

 
  const posts: Array<Post> = data; 


  if(isLoading) {
    return <div>Loading...</div>

  }

  if(!posts) {
    return <EmptyState title="No Post found" subtitle="no posts yet..." />
  }

  return (
  <div>
    {posts.map((post: Post) => (
      <div key={post.id}>
        {post.body}
      </div>
    ))}
  </div>
  );
};

export default SearchClient;
