import React, { useState } from 'react';

interface Artwork {
  id: number;
  title: string;
  medium: string;
  dimensions: string;
  price: string;
  category: string;
}

const Portfolio = () => {
  const [filter, setFilter] = useState<string>('all');
  
  const artworks: Artwork[] = [
    {
      id: 1,
      title: "Polo Morning",
      medium: "Oil on Canvas",
      dimensions: "48\" x 36\"",
      price: "$12,000",
      category: "oil"
    },
    {
      id: 2,
      title: "The Charge",
      medium: "Watercolor",
      dimensions: "24\" x 18\"",
      price: "$4,500",
      category: "watercolor"
    },
    {
      id: 3,
      title: "Elegant Motion",
      medium: "Oil on Canvas",
      dimensions: "60\" x 40\"",
      price: "$18,000",
      category: "oil"
    },
    {
      id: 4,
      title: "Polo Players",
      medium: "Charcoal Sketch",
      dimensions: "18\" x 24\"",
      price: "$2,800",
      category: "sketch"
    },
    {
      id: 5,
      title: "Sunset Polo",
      medium: "Oil on Canvas",
      dimensions: "36\" x 48\"",
      price: "$15,000",
      category: "oil"
    },
    {
      id: 6,
      title: "The Mallet",
      medium: "Bronze Sculpture",
      dimensions: "24\" H",
      price: "$8,500",
      category: "sculpture"
    }
  ];

  const filteredArtworks = filter === 'all' 
    ? artworks 
    : artworks.filter(art => art.category === filter);

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-elegant font-bold text-bordeaux-900 mb-4">
            Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A curated collection of original artworks celebrating the sport of kings
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-4">
            {['all', 'oil', 'watercolor', 'sketch', 'sculpture'].map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 capitalize transition-all duration-300 ${
                  filter === category
                    ? 'bg-bordeaux-700 text-white'
                    : 'bg-white text-gray-700 hover:bg-bordeaux-100 border border-bordeaux-200'
                }`}
              >
                {category === 'all' ? 'All Works' : category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArtworks.map((artwork) => (
            <div key={artwork.id} className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="aspect-w-4 aspect-h-3 bg-gradient-to-br from-bordeaux-100 to-bordeaux-200 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-bordeaux-600 text-center">
                    <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                    </svg>
                    <p className="text-sm">Artwork Preview</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-elegant font-semibold text-gray-900 mb-2">
                  {artwork.title}
                </h3>
                <p className="text-gray-600 mb-1">{artwork.medium}</p>
                <p className="text-gray-500 text-sm mb-4">{artwork.dimensions}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-elegant font-bold text-bordeaux-700">
                    {artwork.price}
                  </span>
                  <button className="text-bordeaux-700 hover:text-bordeaux-800 font-medium transition-colors duration-300">
                    Inquire →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
