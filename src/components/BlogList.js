// src/components/BlogList.js
import React from 'react';
import { Link } from 'react-router-dom';

const BlogList = ({ posts, selectedCategory }) => {
  const filteredPosts = selectedCategory
    ? posts.filter(post => post.category === selectedCategory)
    : posts;

  return (
    <div className='post-list'>
      {filteredPosts.map((post) => (
        <div className='post' key={post.id} >
          <h2><Link to={`/post/${post.id}`}>{post.title}</Link></h2>
          <p>{post.content.substring(0, 100)}...</p> {/* Muestra un extracto del contenido */}
        </div>
      ))}
    </div>
  );
};

export default BlogList;
