import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 sm:pt-20 sm:pb-0 overflow-hidden" style={{ backgroundColor: '#232222' }}>
      {/* Background Image - Mobile version */}
      <div className="absolute inset-0 z-0 sm:hidden">
        <img
          src="/horseScul.JPG"
          alt="Bronze sculpture by Kerstin A. Wehrmann"
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center center' }}
        />
        {/* Left gradient overlay for mobile */}
        <div 
          className="absolute inset-0 z-[5]"
          style={{
            background: 'linear-gradient(to right, #232222 0%, rgba(35, 34, 34, 0.8) 30%, rgba(35, 34, 34, 0.4) 50%, transparent 70%)',
            pointerEvents: 'none'
          }}
        />
      </div>
      
      {/* Background Image - Desktop version */}
      <div className="absolute inset-0 z-0 ml-32 mt-10 hidden sm:block">
        <img
          src="/HorseHead.jpg"
          alt="Bronze sculpture by Kerstin A. Wehrmann"
          className="h-full object-cover"
          style={{ objectPosition: 'left center' }}
        />
      </div>
  
      {/* Content - Right Side */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex justify-right items-center sm:justify-end sm:items-center h-[80vh]">
          <div className="max-w-xl pr-0 sm:pr-8">
            <div className="space-y-6 sm:space-y-8 lg:space-y-10 text-right">
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-serif font-light text-white tracking-luxury leading-tight whitespace-nowrap" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.5)' }}>
                Kerstin A. Wehrmann
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl font-sans font-light text-white tracking-luxury" style={{ textShadow: '1px 1px 6px rgba(0,0,0,0.5)' }}>
                Sculpture and Painting
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-4 lg:gap-6 pt-6 justify-end items-end">
                <a href="#works" className="text-center py-4 sm:py-3 text-sm px-8 sm:px-8 inline-block bg-white text-stone-900 border-2 border-white hover:bg-stone-900 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 font-semibold tracking-wider">
                  SELECTED WORKS
                </a>
                <a href="#contact" className="text-center py-4 sm:py-3 text-sm px-8 sm:px-8 inline-block bg-transparent text-white border-2 border-white hover:bg-white hover:text-stone-900 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 font-semibold tracking-wider">
                  PRIVATE INQUIRY
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
