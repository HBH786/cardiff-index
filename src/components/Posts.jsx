import { useState, useEffect } from 'react';
import { API_URL } from '../config';
import './Posts.css';

function Posts({ category }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const url = category 
          ? `${API_URL}/posts?category=${category}`
          : `${API_URL}/posts`;
        const response = await fetch(url);
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [category]);

  if (loading) {
    return <div className="loading">Loading posts...</div>;
  }

  return (
    <div className="posts-grid">
      {posts.map((post) => (
        <article key={post.id} className="post-card">
          {post.image_url && (
            <img src={post.image_url} alt={post.title} className="post-image" />
          )}
          <div className="post-content">
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <span className="post-category">{post.category}</span>
          </div>
        </article>
      ))}
    </div>
  );
}

export default Posts;
