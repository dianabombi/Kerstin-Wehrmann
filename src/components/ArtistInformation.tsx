import React from 'react';

const ArtistInformation = () => {
  return (
    <section id="about" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <h2 className="text-3xl sm:text-4xl font-serif font-light text-stone-900 tracking-luxury text-center mb-16 sm:mb-24">
          About
        </h2>
        
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
              src="/Kerstin.png"
              alt="Kerstin A. Wehrmann"
              className="w-full h-full object-cover object-right-top"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtistInformation;
