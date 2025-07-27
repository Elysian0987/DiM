import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Reviews from './pages/Reviews';
import Recommendations from './pages/Recommendations';
import About from './pages/About';
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
          </Routes>
        </main>
        <footer>
          <p>&copy; 2025 Monsoon Book Nook</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;