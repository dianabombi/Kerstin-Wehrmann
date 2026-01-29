import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import WorksTitle from '../components/WorksTitle';
import Works from '../components/Works';
import Sculptures from '../components/Sculptures';
import Paintings from '../components/Paintings';
import OtherWorks from '../components/OtherWorks';
import ArtistInformation from '../components/ArtistInformation';
import Exhibitions from '../components/Exhibitions';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white w-full max-w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <WorksTitle />
      <Works />
      <Sculptures />
      <Paintings />
      <OtherWorks />
      <ArtistInformation />
      <Exhibitions />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
