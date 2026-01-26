import React from 'react';

const ArtistInformation = () => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex justify-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-light text-stone-900 tracking-luxury relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-stone-900 after:transition-all after:duration-500 hover:after:w-full">
            About
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center">
          <div className="relative aspect-[3/4] overflow-hidden">
            <img
              src="/AboutKerstin.png"
              alt="Kerstin A. Wehrmann"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="space-y-4 sm:space-y-6">
            <p className="text-sm sm:text-base font-sans text-stone-700 leading-relaxed">
              Originally from Germany, the artist Kerstin A. Wehrmann lives and works in the idyllic area of St. Moritz, Engadine, a region that deeply inspires her with its rugged nature and expansive, clear landscapes. The untamed wilderness and the play of light and shadow in the mountains continuously offer new inspiration. Her goal is to highlight the fragility of the natural balance and the connection between humans and animals, as well as the need to protect nature and wildlife, while not neglecting its aesthetic beauty. For her, working with bronze is a tribute to the durability and resilience of nature.
            </p>
            
            <p className="text-sm sm:text-base font-sans text-stone-700 leading-relaxed">
              Her bronze sculptures focus on animals and natural forms, not as representation but as presence. Movement is suggested rather than described, held in a state of quiet tension. Strength and stillness coexist, informed by the alpine environment that surrounds her studio.
            </p>
            
            <p className="text-sm sm:text-base font-sans text-stone-700 leading-relaxed">
              Alongside sculpture, Wehrmann creates paintings on Perspex using a reverse technique that allows no revision. Each work is preceded by prolonged observation and exact preparation. Once executed, the image is fixed. This process reflects the core of her practice: clarity of intention and commitment to the final gesture.
            </p>
            
            <p className="text-sm sm:text-base font-sans text-stone-700 leading-relaxed">
              For more than three decades, Wehrmann has maintained a continuous studio practice. Her works are held in international private collections and are often placed in architectural and natural contexts where material, space, and silence are equally considered.
            </p>
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
