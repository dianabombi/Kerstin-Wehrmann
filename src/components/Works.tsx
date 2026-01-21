import React from 'react';
import { Link } from 'react-router-dom';

const Works = () => {
  return (
    <section id="works" className="relative min-h-screen flex items-center overflow-hidden sm:mt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/Kerstin.png"
          alt="Kerstin A. Wehrmann at work"
          className="w-full h-full object-cover "
          style={{ objectPosition: '50% 1%' }}
        />
        
        {/* Dark Gradient Overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, rgba(28,25,23,0.95) 0%, rgba(41,37,36,0.8) 25%, rgba(68,64,60,0.6) 50%, rgba(87,83,78,0.3) 75%, transparent 100%)',
            pointerEvents: 'none'
          }}
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 mt-64 sm:mt-80">
        {/* Buttons */}
        <div className="flex flex-col gap-4 sm:gap-6">
          <div className="flex gap-4 sm:gap-6">
            <Link to="/sculptures" className="px-8 py-4 bg-white text-stone-900 border font-sans text-sm tracking-luxury uppercase hover:bg-stone-900 hover:text-white transition-colors duration-300 text-center">
              Sculptures
            </Link>
            <Link to="/paintings" className="px-8 py-4 bg-stone-900 text-white font-sans text-sm tracking-luxury uppercase hover:bg-white hover:text-stone-900 transition-colors duration-300 text-center">
              Painting
            </Link>
          </div>
          <Link to="/other-works" className="px-8 py-4 bg-transparent text-white border border-white font-sans text-sm tracking-luxury uppercase hover:bg-white hover:text-stone-900 transition-colors duration-300 text-center self-start">
            Other Work
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Works;
