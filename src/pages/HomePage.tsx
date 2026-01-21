import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import WorksTitle from '../components/WorksTitle';
import Works from '../components/Works';
import Sculptures from '../components/Sculptures';
import ArtistInformation from '../components/ArtistInformation';
import Exhibitions from '../components/Exhibitions';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <WorksTitle />
      <Works />
      <Sculptures />
      <ArtistInformation />
      <Exhibitions />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
