// File: src/pages/BooksPage.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function BooksPage() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/dbData')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch');
        return res.json();
      })
      .then(data => {
        setBooks(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="container mx-auto px-4 py-8 text-center">Loading books...</div>;
  if (error) return <div className="container mx-auto px-4 py-8 text-center text-red-600">Error: {error}</div>;
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">Our Book Collection</h1>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        {books.map((book, index) => (
          <Link to={`/book/${book._id || book.id || index}`} key={book._id || book.id || index}>
            <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
              <img src={book.coverImage || book.image || '/img/default-book.jpg'} alt={`Cover of ${book.title}`} className="w-full h-72 object-cover" />
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-gray-900 mb-2 truncate">{book.title}</h3>
                <p className="text-sm text-gray-600">by {book.author}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default BooksPage;