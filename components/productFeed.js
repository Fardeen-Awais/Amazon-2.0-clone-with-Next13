"use client"; 
import React, { useState, useEffect } from 'react';

function ProductFeed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products?offset=0&limit=10") // #0001 README
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>
          <p>{post.title}</p>
          <p>{post.price}</p>
          <p>{post.description}</p>
          <img src="https://source.unsplash.com/160x160/?ecommerce" alt="" />
        </div>
      ))}
    </div>
  );
}

export default ProductFeed;
