import React, { useState, useEffect } from "react";
import { getPosts } from "../services/postServices";

const Post = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPost() {
      const result = await getPosts();
      setPosts(result.data);
    }
    getPost();
  }, []);

  return (
    <div className="container">
      <ul class="list-group">
        {posts.map((post) => (
          <li key={post.id}>{post.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Post;
