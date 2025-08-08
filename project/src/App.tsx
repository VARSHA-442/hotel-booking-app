import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturedDestinations from './components/FeaturedDestinations';
import ExclusiveOffers from './components/ExclusiveOffers';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import RoomsPage from './components/RoomsPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Set up navigation for header
  useEffect(() => {
    const event = new CustomEvent('setNavigation', {
      detail: { navigate: setCurrentPage }
    });
    window.dispatchEvent(event);
  }, []);

  const handleViewAllDestinations = () => {
    setCurrentPage('rooms');
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
  };

  if (currentPage === 'rooms') {
    return (
      <div className="min-h-screen">
        <Header />
        <RoomsPage />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturedDestinations onViewAllDestinations={handleViewAllDestinations} />
      <ExclusiveOffers />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;