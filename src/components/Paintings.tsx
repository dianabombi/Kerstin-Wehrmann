import React from 'react';

interface Painting {
  id: number;
  title: string;
  medium: string;
  dimensions: string;
  year: string;
  price: string;
  image?: string;
}

const Paintings = () => {
  const paintings: Painting[] = [
    {
      id: 1,
      title: "Polo Morning",
      medium: "Oil on Canvas",
      dimensions: "48\" x 36\"",
      year: "2023",
      price: "$12,000",
      image: "/Gemälde-035-Bearbeitet-Bearbeitet.jpg"
    },
    {
      id: 2,
      title: "The Charge",
      medium: "Watercolor",
      dimensions: "24\" x 18\"",
      year: "2024",
      price: "$4,500",
      image: "/Gemälde-052-Bearbeitet.jpg"
    },
    {
      id: 3,
      title: "Elegant Motion",
      medium: "Oil on Canvas",
      dimensions: "60\" x 40\"",
      year: "2022",
      price: "$18,000",
      image: "/Gemälde-060-Bearbeitet.jpg"
    },
    {
      id: 4,
      title: "Sunset Polo",
      medium: "Oil on Canvas",
      dimensions: "36\" x 48\"",
      year: "2023",
      price: "$15,000",
      image: "/Gemälde-061-Bearbeitet.jpg"
    },
    {
      id: 5,
      title: "Polo Players",
      medium: "Charcoal Sketch",
      dimensions: "18\" x 24\"",
      year: "2024",
      price: "$2,800",
      image: "/Gemälde-062-Bearbeitet.jpg"
    },
    {
      id: 6,
      title: "Golden Hour",
      medium: "Watercolor",
      dimensions: "30\" x 22\"",
      year: "2023",
      price: "$5,200",
      image: "/Gemälde-063-Bearbeitet.jpg"
    }
  ];

  return (
    <section id="paintings" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-elegant font-bold text-bordeaux-900 mb-4">
            Paintings
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Original artworks celebrating the elegance and power of horse polo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paintings.map((painting) => (
            <div key={painting.id} className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="aspect-w-4 aspect-h-3 bg-white relative overflow-hidden">
                {painting.image ? (
                  <img
                    src={painting.image}
                    alt={painting.title}
                    className="w-full h-full object-contain p-4"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-bordeaux-100 to-bordeaux-200">
                    <div className="text-bordeaux-600 text-center">
                      <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                      </svg>
                      <p className="text-sm">Painting Preview</p>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-elegant font-semibold text-gray-900 mb-2">
                  {painting.title}
                </h3>
                <p className="text-gray-600 mb-1">{painting.medium}</p>
                <p className="text-gray-500 text-sm mb-1">{painting.dimensions}</p>
                <p className="text-gray-500 text-sm mb-4">{painting.year}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-elegant font-bold text-bordeaux-700">
                    {painting.price}
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

export default Paintings;
