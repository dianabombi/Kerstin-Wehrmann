import React from 'react';
import { Link } from 'react-router-dom';

const Works = () => {
  return (
    <section id="works" className="relative h-[80vh] sm:h-[120vh] flex items-end overflow-hidden sm:mt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 ml-32 mr-32">
        <img
          src="/Kerstin.png"
          alt="Kerstin A. Wehrmann at work"
          className="w-full h-full object-cover"
          style={{ objectPosition: '50% 1%' }}
        />
        
        {/* Dark Grey Gradient Overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, rgba(28,25,23,0.95) 0%, rgba(41,37,36,0.8) 25%, rgba(68,64,60,0.6) 50%, rgba(87,83,78,0.3) 75%, transparent 100%)',
            pointerEvents: 'none'
          }}
        />
        
        {/* Content */}
        <div className="absolute bottom-0 left-0 z-10 w-full px-4 sm:px-8 pb-12 sm:pb-16">
        {/* Buttons */}
        <div className="flex flex-col gap-4 sm:gap-6 max-w-xs">
          <Link to="/sculptures" className="px-6 py-3 bg-white text-stone-900 border font-sans text-sm tracking-luxury uppercase hover:bg-stone-900 hover:text-white transition-colors duration-300 text-center">
            Sculpture
          </Link>
          <Link to="/paintings" className="px-6 py-3 bg-stone-900 text-white font-sans text-sm tracking-luxury uppercase hover:bg-white hover:text-stone-900 transition-colors duration-300 text-center">
            Painting
          </Link>
          <Link to="/other-works" className="px-6 py-3 bg-transparent text-white border border-white font-sans text-sm tracking-luxury uppercase hover:bg-white hover:text-stone-900 transition-colors duration-300 text-center">
            Works on Paper
          </Link>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Works;
