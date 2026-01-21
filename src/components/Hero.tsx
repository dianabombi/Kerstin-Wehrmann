import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 sm:pt-20 sm:pb-0 bg-stone-900">
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-16 items-center">
          {/* Horse Image - Left Side */}
          <div className="relative h-screen order-2 lg:order-1 overflow-hidden bg-stone-900">
            <div className="relative h-full w-full">
              <img
                src="/horse.JPG"
                alt="Bronze sculpture by Kerstin A. Wehrmann"
                className="w-auto h-full object-contain pl-44"
              />
              {/* Left edge gradient */}
              <div 
                className="absolute top-0 left-0 bottom-0 w-96"
                style={{
                  background: 'linear-gradient(to right, rgb(28,25,23) 50%, rgba(28,25,23,0.9) 60%, rgba(28,25,23,0.6) 80%, transparent 100%)',
                  pointerEvents: 'none'
                }}
              />
              {/* Right edge gradient */}
              <div 
                className="absolute top-0 right-0 bottom-0 w-96"
                style={{
                  background: 'linear-gradient(to left, rgb(28,25,23) 15%, rgba(28,25,23,0.9) 30%, rgba(28,25,23,0.6) 60%, transparent 100%)',
                  pointerEvents: 'none'
                }}
              />
            </div>
          </div>
          
          {/* Content - Right Side */}
          <div className="order-1 lg:order-2 px-4 sm:px-8 lg:pr-8">
            <div className="space-y-4 sm:space-y-6 lg:space-y-8 text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-light text-white tracking-luxury leading-tight">
                Kerstin A. Wehrmann
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl font-sans font-light text-white/90 tracking-luxury italic">
                Art speaks where words fail.
              </p>
              
              <p className="text-base sm:text-lg md:text-xl font-sans font-light text-white/90 tracking-luxury">
                Sculpture and Painting
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 pt-4 justify-center lg:justify-start">
                <a href="#sculpture" className="btn-primary text-center py-3.5 sm:py-3 text-sm px-6 sm:px-8 inline-block bg-white text-stone-900 border-white hover:bg-stone-900 hover:text-white transition-colors duration-300">
                  Selected Works
                </a>
                <a href="#contact" className="btn-secondary text-center py-3.5 sm:py-3 text-sm px-6 sm:px-8 inline-block bg-transparent text-white border-white hover:bg-white hover:text-stone-900">
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
