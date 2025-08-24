// File: src/pages/BooksPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import { booksData as books } from '../data/bookData'; // Make sure this path is correct

function BooksPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">Our Book Collection</h1>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        {books.map((book) => (
          <Link to={`/book/${book.id}`} key={book.id}>
            <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
              <img src={book.coverImage} alt={`Cover of ${book.title}`} className="w-full h-72 object-cover" />
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