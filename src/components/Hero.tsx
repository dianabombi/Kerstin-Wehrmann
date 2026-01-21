import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-24 sm:pt-32 pb-8 sm:pb-0 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center">
          <div className="flex justify-center lg:justify-start order-1 lg:order-1">
            <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg">
              <img
                src="/horse.JPG"
                alt="Bronze sculpture by Kerstin A. Wehrmann"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
          
          <div className="space-y-3 sm:space-y-6 lg:space-y-8 text-center lg:text-right order-2 lg:order-2">
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-light text-stone-900 tracking-luxury leading-tight px-2">
              Kerstin A. Wehrmann
            </h1>
            
            <p className="text-sm sm:text-lg md:text-xl font-sans font-light text-stone-700 tracking-luxury italic px-2">
              Art speaks where words fail.
            </p>
            
            <p className="text-sm sm:text-lg md:text-xl font-sans font-light text-stone-700 tracking-luxury px-2">
              Sculpture and Painting
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-8 pt-2 sm:pt-4 justify-center lg:justify-end px-2 sm:px-0">
              <a href="#sculpture" className="btn-primary text-center py-3.5 sm:py-3 text-sm sm:text-sm px-6 sm:px-8 inline-block">
                Selected Works
              </a>
              <a href="#contact" className="btn-secondary text-center py-3.5 sm:py-3 text-sm sm:text-sm px-6 sm:px-8 inline-block">
                Private Inquiry
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
