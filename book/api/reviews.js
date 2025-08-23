// File: /api/reviews.js

const mongoose = require('mongoose');
require('dotenv').config();

// Connect to MongoDB - IMPORTANT: Vercel caches connections, so this is the proper way.
let conn = null;

async function connectToDatabase() {
  if (conn == null) {
    conn = mongoose.connect(process.env.DATABASE_URL, {
      serverSelectionTimeoutMS: 5000 // Keep trying to connect for 5 seconds
    }).then(() => mongoose);

    // `await`ing connection after assigning to the `conn` variable
    // to avoid multiple function calls creating new connections
    await conn;
  }
  return conn;
}

// Define the schema if it doesn't already exist
const reviewSchema = new mongoose.Schema({
  bookId: { type: String, required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  reviewText: { type: String, required: true },
  username: { type: String, default: 'Anonymous' },
  createdAt: { type: Date, default: Date.now }
});

// The model 'Review' will be created or retrieved.
// Using mongoose.models.Review to prevent redefining the model in the serverless environment.
const Review = mongoose.models.Review || mongoose.model('Review', reviewSchema);

// This is the main function Vercel will run
export default async function handler(req, res) {
  await connectToDatabase();
  
  // Set CORS headers to allow requests from your website
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle pre-flight requests for CORS
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Handle GET request to fetch reviews
  if (req.method === 'GET') {
    try {
      const { bookId } = req.query; // Get bookId from URL (e.g., /api/reviews?bookId=123)
      const reviews = await Review.find({ bookId: bookId }).sort({ createdAt: -1 });
      return res.status(200).json(reviews);
    } catch (error) {
      return res.status(500).json({ error: 'Error fetching reviews.' });
    }
  }

  // Handle POST request to add a new review
  if (req.method === 'POST') {
    try {
      const newReview = new Review(req.body);
      await newReview.save();
      return res.status(201).json(newReview);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  // If method is not GET or POST
  res.setHeader('Allow', ['GET', 'POST']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}