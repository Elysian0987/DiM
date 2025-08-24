// File: src/pages/BookDetailPage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { booksData as books } from '../data/bookData'; // Make sure this path is correct

function BookDetailPage() {
  const { id } = useParams();
  const book = books.find((b) => b.id === parseInt(id));

  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // States for the review form
  const [username, setUsername] = useState('');
  const [rating, setRating] = useState('');
  const [reviewText, setReviewText] = useState('');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  // Function to fetch reviews
  const fetchReviews = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`/api/reviews?bookId=${id}`);
      const data = await response.json();
      setReviews(data);
    } catch (error) {
      console.error("Failed to fetch reviews:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // After
useEffect(() => {
  const fetchReviews = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`/api/reviews?bookId=${id}`);
      const data = await response.json();
      setReviews(data);
    } catch (error) {
      console.error("Failed to fetch reviews:", error);
    } finally {
      setIsLoading(false);
    }
  };

  fetchReviews();
}, [id]); // Now the dependency array is correct

  // Handle the review form submission
  const handleReviewSubmit = async (event) => {
    event.preventDefault();
    setMessage('');
    setIsError(false);
    
    const reviewData = { bookId: id, username, rating: Number(rating), reviewText };

    try {
      const response = await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(reviewData),
      });
      if (!response.ok) throw new Error('Failed to submit review.');
      
      setMessage('Thank you! Your review has been submitted.');
      setUsername('');
      setRating('');
      setReviewText('');
      fetchReviews(); // Re-fetch reviews to show the new one
    } catch (error) {
      setMessage(error.message);
      setIsError(true);
    }
  };

  if (!book) {
    return <div className="container mx-auto p-8 text-center"><h2>Book not found!</h2></div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-12">
        {/* Book Info Column */}
        <div className="md:col-span-1 mb-8 md:mb-0">
          <img src={book.coverImage} alt={book.title} className="w-full rounded-lg shadow-2xl mb-4" />
          <h1 className="text-3xl font-bold text-gray-900">{book.title}</h1>
          <h2 className="text-xl text-gray-600 mb-4">by {book.author}</h2>
          <p className="text-gray-700">{book.description}</p>
        </div>
        
        {/* Reviews Column */}
        <div className="md:col-span-2">
          <h2 className="text-3xl font-bold mb-6 border-b pb-2">Reviews</h2>
          {isLoading ? (
            <p>Loading reviews...</p>
          ) : (
            <div className="space-y-4 mb-8">
              {reviews.length > 0 ? (
                reviews.map((review) => (
                  <div key={review._id} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <div className="flex items-center mb-1">
                      <strong className="text-gray-800">{review.username}</strong>
                      <span className="text-yellow-500 ml-2">{'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}</span>
                    </div>
                    <p className="text-gray-600">{review.reviewText}</p>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">Be the first to write a review!</p>
              )}
            </div>
          )}

          {/* Add Review Form */}
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-2xl font-bold mb-4">Add Your Review</h3>
            <form onSubmit={handleReviewSubmit} className="space-y-4">
              <div className="flex flex-col">
                <label htmlFor="username" className="mb-1 font-semibold text-gray-700">Your Name</label>
                <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required className="p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="rating" className="mb-1 font-semibold text-gray-700">Rating (1-5)</label>
                <input type="number" id="rating" min="1" max="5" value={rating} onChange={(e) => setRating(e.target.value)} required className="p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="reviewText" className="mb-1 font-semibold text-gray-700">Your Review</label>
                <textarea id="reviewText" rows="4" value={reviewText} onChange={(e) => setReviewText(e.target.value)} required className="p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300">Submit Review</button>
            </form>
            {message && <p className={`mt-4 text-center font-semibold ${isError ? 'text-red-600' : 'text-green-600'}`}>{message}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDetailPage;