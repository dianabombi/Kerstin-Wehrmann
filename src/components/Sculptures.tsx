import React from 'react';

interface Sculpture {
  id: number;
  title: string;
  material: string;
  dimensions: string;
  year: string;
  price: string;
  image?: string;
}

const Sculptures = () => {
  const sculptures: Sculpture[] = [
    {
      id: 1,
      title: "Horse",
      material: "Bronze",
      dimensions: "28\" H x 18\" W",
      year: "2023",
      price: "$18,500",
      image: "/horse.JPG"
    },
    {
      id: 2,
      title: "Dog",
      material: "Bronze",
      dimensions: "24\" H",
      year: "2023",
      price: "$12,000",
      image: "/dog.JPG"
    },
    {
      id: 3,
      title: "Polo Player in Motion",
      material: "Bronze",
      dimensions: "36\" H x 24\" W",
      year: "2022",
      price: "$25,000"
    },
    {
      id: 4,
      title: "Horse and Rider",
      material: "Bronze",
      dimensions: "20\" H x 16\" W",
      year: "2024",
      price: "$15,000"
    }
  ];

  return (
    <section id="sculptures" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-elegant font-bold text-bordeaux-900 mb-4">
            Sculptures
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Bronze sculptures capturing the dynamic movement and grace of polo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sculptures.map((sculpture) => (
            <div key={sculpture.id} className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="aspect-w-3 aspect-h-4 bg-white relative overflow-hidden">
                {sculpture.image ? (
                  <img
                    src={sculpture.image}
                    alt={sculpture.title}
                    className="w-full h-full object-contain p-4"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-bordeaux-100 to-bordeaux-200">
                    <div className="text-bordeaux-600 text-center">
                      <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                      </svg>
                      <p className="text-sm">Sculpture Image</p>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-elegant font-semibold text-gray-900 mb-2">
                  {sculpture.title}
                </h3>
                <p className="text-gray-600 mb-1">{sculpture.material}</p>
                <p className="text-gray-500 text-sm mb-1">{sculpture.dimensions}</p>
                <p className="text-gray-500 text-sm mb-4">{sculpture.year}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-elegant font-bold text-bordeaux-700">
                    {sculpture.price}
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

export default Sculptures;
