import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Post Schema
const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  category: { type: String, required: true },
  image_url: String,
  created_at: { type: Date, default: Date.now }
});

const Post = mongoose.model('Post', postSchema);

// Create post
app.post('/api/posts', async (req, res) => {
  try {
    const { title, content, category, image_url } = req.body;
    
    if (!title || !content || !category) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const post = new Post({
      title,
      content,
      category,
      image_url
    });

    await post.save();

    res.status(201).json({
      message: 'Post created successfully',
      postId: post._id
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
    let query = category ? { category } : {};
    
    const posts = await Post.find(query)
      .sort({ created_at: -1 })
      .exec();

    res.json(posts);
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
