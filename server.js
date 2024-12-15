import express from 'express';
import cors from 'cors';
import { createClient } from '@libsql/client';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const db = createClient({
  url: process.env.DB_URL,
  authToken: process.env.DB_TOKEN
});

// Initialize database
await db.execute(`
  CREATE TABLE IF NOT EXISTS posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    category TEXT NOT NULL,
    image_url TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

// Zapier webhook endpoint
app.post('/api/posts', async (req, res) => {
  try {
    const { title, content, category, image_url } = req.body;
    
    // Validate required fields
    if (!title || !content || !category) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Insert post into database
    const result = await db.execute({
      sql: 'INSERT INTO posts (title, content, category, image_url) VALUES (?, ?, ?, ?)',
      args: [title, content, category, image_url]
    });

    res.status(201).json({
      message: 'Post created successfully',
      postId: result.lastInsertRowid
    });
  } catch (error) {
    console.error('Error creating post:', error);
    res.status(500).json({ error: 'Failed to create post' });
  }
});

// Get all posts
app.get('/api/posts', async (req, res) => {
  try {
    const { category } = req.query;
    let posts;
    
    if (category) {
      posts = await db.execute({
        sql: 'SELECT * FROM posts WHERE category = ? ORDER BY created_at DESC',
        args: [category]
      });
    } else {
      posts = await db.execute('SELECT * FROM posts ORDER BY created_at DESC');
    }

    res.json(posts.rows);
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
