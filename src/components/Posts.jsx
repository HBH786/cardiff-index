import { posts } from '../data/posts';
import './Posts.css';

function Posts({ category }) {
  const categoryPosts = category ? posts[category] : Object.values(posts).flat();

  return (
    <div className="posts-grid">
      {categoryPosts.map((post) => (
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
