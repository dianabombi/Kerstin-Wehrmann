import React from 'react';

const ArtistInformation = () => {
  return (
    <section id="about" className="py-32 bg-white">
      <div className="max-w-4xl mx-auto px-8">
        <h2 className="text-4xl font-serif font-light text-stone-900 tracking-luxury text-center mb-24">
          About
        </h2>
        
        <div className="max-w-2xl mx-auto">
          <p className="text-base font-sans text-stone-700 leading-relaxed mb-6">
            Kerstin A. Wehrmann lives and works in Surlej, Engadine, Switzerland. Her practice centers on bronze sculpture and painting on Plexiglas, with a particular focus on the relationship between humans, animals, and nature.
          </p>
          
          <p className="text-base font-sans text-stone-700 leading-relaxed mb-6">
            Working primarily in bronze, Wehrmann creates sculptures that explore form, movement, and the enduring qualities of natural subjects. Her paintings employ a reverse technique on Plexiglas, requiring extensive preliminary studies before application.
          </p>
          
          <p className="text-base font-sans text-stone-700 leading-relaxed">
            Her work is held in private collections internationally. She has maintained a consistent studio practice for over three decades, grounded in observation and material exploration.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ArtistInformation;
