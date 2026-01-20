import React from 'react';

const Works = () => {
  return (
    <section id="works" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <a href="#sculpture" className="group">
            <div className="aspect-[3/4] overflow-hidden mb-6">
              <img
                src="/horse.JPG"
                alt="Sculpture"
                className="w-full h-full object-contain transition-opacity duration-300 group-hover:opacity-80"
              />
            </div>
            <h2 className="text-3xl font-serif font-light text-stone-900 tracking-luxury text-center">
              Sculpture
            </h2>
          </a>
          
          <a href="#painting" className="group">
            <div className="aspect-[3/4] overflow-hidden mb-6">
              <img
                src="/Gemälde-035-Bearbeitet-Bearbeitet.jpg"
                alt="Painting"
                className="w-full h-full object-contain transition-opacity duration-300 group-hover:opacity-80"
              />
            </div>
            <h2 className="text-3xl font-serif font-light text-stone-900 tracking-luxury text-center">
              Painting
            </h2>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Works;
