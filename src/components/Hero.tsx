import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center mt-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light text-stone-900 tracking-luxury leading-tight">
              Kerstin A. Wehrmann
            </h1>
            
            <p className="text-lg md:text-xl font-sans font-light text-stone-700 tracking-luxury">
              Sculpture and Painting
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 pt-4">
              <a href="#works" className="btn-primary text-center">
                Selected Works
              </a>
              <a href="#contact" className="btn-secondary text-center">
                Private Inquiry
              </a>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-lg">
              <img
                src="/horse.JPG"
                alt="Bronze sculpture by Kerstin A. Wehrmann"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
