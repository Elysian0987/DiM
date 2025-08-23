import React from 'react';
import { useParams, Link } from 'react-router-dom';
// Make sure this import is correct:
import { collectionsData, booksData } from '../data/bookData';

function CollectionPage() {
  const { collectionId } = useParams();
  const collection = collectionsData.find(c => c.id === collectionId);
  const booksInCollection = booksData.filter(book => 
    book.collections.includes(collectionId)
  );

  if (!collection) {
    return (
      <div className="page-container">
        <div className="page-header">
          <h1>Collection Not Found</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>{collection.title}</h1>
        <p>{collection.description}</p>
      </div>
      <div className="reviews-grid">
        {booksInCollection.map(book => (
          <Link to={`/review/${book.id}`} className="book-card-link" key={book.id}>
            <div className="book-card">
              <img src={book.cover} alt={book.title} />
              <h3>{book.title}</h3>
              <h4>{book.author}</h4>
              <p className="rating">{book.rating}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

// And ensure the export is correct:
export default CollectionPage;