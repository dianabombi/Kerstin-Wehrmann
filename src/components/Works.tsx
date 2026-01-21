import React from 'react';

const Works = () => {
  return (
    <section id="works" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="relative aspect-[3/4] overflow-hidden">
            <img
              src="/Kerstin.png"
              alt="Kerstin A. Wehrmann at work"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="flex flex-col gap-8 justify-center">
            <a href="#sculpture" className="group">
              <div className="border-2 border-stone-900 px-12 py-8 text-center transition-all duration-300 hover:bg-stone-900 hover:text-white">
                <h2 className="text-3xl font-serif font-light tracking-luxury">
                  Sculptures
                </h2>
              </div>
            </a>
            
            <a href="#painting" className="group">
              <div className="border-2 border-stone-900 px-12 py-8 text-center transition-all duration-300 hover:bg-stone-900 hover:text-white">
                <h2 className="text-3xl font-serif font-light tracking-luxury">
                  Paintings
                </h2>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
