import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-elegant font-bold text-bordeaux-900 mb-6">
                The Artist
              </h2>
              <div className="w-24 h-1 bg-bordeaux-700 mb-8"></div>
            </div>
            
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg">
                With over two decades dedicated to the equestrian arts, I have found my true passion in capturing the dynamic elegance of horse polo. My work seeks to immortalize the split-second moments of grace, power, and strategy that define this timeless sport.
              </p>
              
              <p className="text-lg">
                Trained in classical European techniques yet inspired by contemporary movements, each piece represents a dialogue between tradition and innovation. My studio overlooks the world's most prestigious polo fields, allowing me to study the intimate relationship between horse and rider in their natural element.
              </p>
              
              <p className="text-lg">
                Collectors from around the world have commissioned works for private estates, corporate collections, and polo clubs. Each artwork is created using the finest materials and techniques, ensuring that the legacy of polo's elegance endures for generations.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 pt-8">
              <div>
                <h3 className="text-3xl font-elegant font-bold text-bordeaux-700 mb-2">200+</h3>
                <p className="text-gray-600">Original Works</p>
              </div>
              <div>
                <h3 className="text-3xl font-elegant font-bold text-bordeaux-700 mb-2">15+</h3>
                <p className="text-gray-600">Countries</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-w-3 aspect-h-4 bg-gradient-to-br from-bordeaux-100 to-bordeaux-200 rounded-lg overflow-hidden shadow-2xl">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-bordeaux-600 text-center">
                  <svg className="w-24 h-24 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                  <p className="text-lg font-medium">Artist Portrait</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-bordeaux-700 text-white p-6 rounded-lg shadow-xl">
              <p className="text-elegant text-xl font-medium italic">
                "Art is the bridge between the momentary and the eternal"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
