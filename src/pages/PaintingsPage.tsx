import React from 'react';
import Navbar from '../components/Navbar';
import Paintings from '../components/Paintings';
import Footer from '../components/Footer';

const PaintingsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-16 sm:pt-20">
        <Paintings />
      </div>
      <Footer />
    </div>
  );
};

export default PaintingsPage;
