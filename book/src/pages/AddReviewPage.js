import React, { useState } from 'react';
import '../App.css'; // Assuming you have some basic styles here

function AddReviewPage() {
  const [username, setUsername] = useState('');
  const [rating, setRating] = useState('');
  const [reviewText, setReviewText] = useState('');
  const [message, setMessage] = useState(''); // To show success/error messages

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the form from reloading the page
    setMessage(''); // Clear previous messages

    // Hardcoding a bookId for now, as requested.
    // Later, this will come from the book you're viewing.
    const bookId = 'test-book-123'; 

    const reviewData = {
      bookId,
      username,
      rating: Number(rating),
      reviewText,
    };

    try {
      const response = await fetch('/api/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reviewData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit review.');
      }

      // If successful:
      setMessage('Thank you! Your review has been submitted.');
      setUsername('');
      setRating('');
      setReviewText('');

    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Add a Book Review</h1>
      </div>
      
      <form onSubmit={handleSubmit} className="review-form">
        <div className="form-group">
          <label htmlFor="username">Your Name</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="rating">Rating (1-5)</label>
          <input
            type="number"
            id="rating"
            min="1"
            max="5"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="reviewText">Your Review</label>
          <textarea
            id="reviewText"
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            required
          ></textarea>
        </div>

        <button type="submit">Submit Review</button>
      </form>
      
      {message && <p className="form-message">{message}</p>}
    </div>
  );
}

export default AddReviewPage;