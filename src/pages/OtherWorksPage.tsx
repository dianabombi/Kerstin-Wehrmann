import React from 'react';
import Navbar from '../components/Navbar';
import OtherWorks from '../components/OtherWorks';
import Footer from '../components/Footer';

const OtherWorksPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-20 sm:pt-24">
        <OtherWorks />
      </div>
      <Footer />
    </div>
  );
};

export default OtherWorksPage;
