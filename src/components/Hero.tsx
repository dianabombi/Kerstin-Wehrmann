import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 sm:pt-20 sm:pb-0 overflow-hidden">
      {/* Background Image - Left Positioned */}
      <div className="absolute inset-0 z-0 bg-stone-900">
        <img
          src="/horse.JPG"
          alt="Bronze sculpture by Kerstin A. Wehrmann"
          className="w-full h-full object-cover"
          style={{ objectPosition: '5% 25%' }}
        />
        {/* Dark Blue to Transparent Gradient Overlay - Left to Right */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, rgba(15,23,42,0.9) 0%, rgba(30,41,59,0.7) 25%, rgba(51,65,85,0.5) 50%, rgba(100,116,139,0.3) 75%, transparent 100%)',
            pointerEvents: 'none'
          }}
        />
      </div>
      
      {/* Content - Right Side */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex justify-end items-end h-[80vh]">
          <div className="max-w-xl pr-8 pb-16">
            <div className="space-y-4 sm:space-y-6 lg:space-y-8 text-right">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-light text-white tracking-luxury leading-tight" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.5)' }}>
                Kerstin A. Wehrmann
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl font-sans font-light text-white tracking-luxury italic" style={{ textShadow: '1px 1px 6px rgba(0,0,0,0.5)' }}>
                Art speaks where words fail.
              </p>
              
              <p className="text-base sm:text-lg md:text-xl font-sans font-light text-white tracking-luxury" style={{ textShadow: '1px 1px 6px rgba(0,0,0,0.5)' }}>
                Sculpture and Painting
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 pt-4 justify-end">
                <a href="#sculpture" className="text-center py-3.5 sm:py-3 text-sm px-6 sm:px-8 inline-block bg-white text-stone-900 border border-white hover:bg-stone-900 hover:text-white transition-colors duration-300">
                  Selected Works
                </a>
                <a href="#contact" className="btn-secondary text-center py-3.5 sm:py-3 text-sm px-6 sm:px-8 inline-block">
                  Private Inquiry
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
