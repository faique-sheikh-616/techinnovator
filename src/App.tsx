import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Courses from './components/Courses';
import Segments from './components/Segments';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Courses />
              <Segments />
              <Team />
            </>
          } />
          {/* Add more routes here if needed */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;