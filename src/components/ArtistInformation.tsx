import React from 'react';

const ArtistInformation = () => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex justify-center mb-16 sm:mb-24">
          <h2 className="text-3xl sm:text-4xl font-serif font-light text-stone-900 tracking-luxury relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-stone-900 after:transition-all after:duration-500 hover:after:w-full">
            About
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="space-y-6">
            <p className="text-base font-sans text-stone-700 leading-relaxed">
              Kerstin A. Wehrmann lives and works in Surlej, Engadine, Switzerland. Her practice centers on bronze sculpture and painting on Plexiglas, with a particular focus on the relationship between humans, animals, and nature.
            </p>
            
            <p className="text-base font-sans text-stone-700 leading-relaxed">
              Working primarily in bronze, Wehrmann creates sculptures that explore form, movement, and the enduring qualities of natural subjects. Her paintings employ a reverse technique on Plexiglas, requiring extensive preliminary studies before application.
            </p>
            
            <p className="text-base font-sans text-stone-700 leading-relaxed">
              Her work is held in private collections internationally. She has maintained a consistent studio practice for over three decades, grounded in observation and material exploration.
            </p>
          </div>
          
          <div className="relative aspect-[3/4] overflow-hidden">
            <img
              src="/Kerstin2.png"
              alt="Kerstin A. Wehrmann"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mt-16 sm:mt-20">
        <div className="h-px bg-gradient-to-r from-transparent via-stone-300 to-transparent"></div>
      </div>
    </section>
  );
};

export default ArtistInformation;
