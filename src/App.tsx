import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Works from './components/Works';
import Sculptures from './components/Sculptures';
import Paintings from './components/Paintings';
import ArtistInformation from './components/ArtistInformation';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Works />
      <Sculptures />
      <Paintings />
      <ArtistInformation />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
