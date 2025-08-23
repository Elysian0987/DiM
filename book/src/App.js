import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Reviews from './pages/Reviews';
import Recommendations from './pages/Recommendations';
import About from './pages/About';
import Contact from './pages/Contact';
import SingleReview from './pages/SingleReview';
// This import must match the file name and export type
import CollectionPage from './pages/CollectionPage'; 
import AddReviewPage from './pages/AddReviewPage';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/recommendations" element={<Recommendations />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/review/:id" element={<SingleReview />} />
            {/* This route must use the correctly imported component */}
            <Route path="/list/:collectionId" element={<CollectionPage />} />
            <Route path="/add-review" element={<AddReviewPage />} /> {/* <-- 2. ADD THE ROUTE */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;