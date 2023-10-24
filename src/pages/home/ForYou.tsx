import React, { useState } from "react";
import { posts as postData } from "../../utils/consts";
import Post from "../../components/Post";

export default function ForYou() {
  const [posts, setPosts] = useState(postData);

  return (
    <>
      {posts.map((post, key) => (
        <Post post={post} key={post.id + key} />
      ))}
    </>
  );
}
