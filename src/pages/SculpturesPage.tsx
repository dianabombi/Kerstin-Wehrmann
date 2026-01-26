import React from 'react';
import Navbar from '../components/Navbar';
import Sculptures from '../components/Sculptures';
import Footer from '../components/Footer';

const SculpturesPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-20 sm:pt-24">
        <Sculptures />
      </div>
      <Footer />
    </div>
  );
};

export default SculpturesPage;
