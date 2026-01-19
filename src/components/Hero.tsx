import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  const images = [
    '/Gemälde-035-Bearbeitet-Bearbeitet.jpg',
    '/Gemälde-052-Bearbeitet.jpg',
    '/Gemälde-060-Bearbeitet.jpg',
    '/Gemälde-061-Bearbeitet.jpg',
    '/Gemälde-062-Bearbeitet.jpg',
    '/Gemälde-063-Bearbeitet.jpg',
    '/Gemälde-067-Bearbeitet.jpg',
    '/Gemälde-068-Bearbeitet.jpg',
    '/Gemälde-069-Bearbeitet.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden mt-20">
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Polo artwork ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
          </div>
        ))}
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left text-white">
            <h1 className="text-5xl md:text-7xl font-elegant font-bold mb-6 leading-tight">
              The Art of
              <span className="block text-bordeaux-300">Horse Polo</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 font-light leading-relaxed max-w-xl">
              Capturing the elegance, power, and timeless beauty of polo through the eyes of a master artist
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#sculptures" className="btn-primary">
                View Collection
              </a>
              <a href="#contact" className="bg-white text-bordeaux-700 hover:bg-bordeaux-50 px-8 py-3 transition-all duration-300 font-medium tracking-wide">
                Commission Artwork
              </a>
            </div>
          </div>
          
          <div className="hidden lg:block">
            <div className="grid grid-cols-2 gap-4">
              {images.slice(0, 4).map((image, index) => (
                <div
                  key={index}
                  className="aspect-square rounded-lg overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-500 cursor-pointer bg-white p-3"
                  onClick={() => setCurrentImage(index)}
                >
                  <img
                    src={image}
                    alt={`Polo artwork thumbnail ${index + 1}`}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <svg className="w-6 h-6 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
      
      <div className="absolute bottom-8 right-8 flex gap-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentImage ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
