import React from 'react';

interface Sculpture {
  id: number;
  title: string;
  year: string;
  dimensions: string;
  image?: string;
}

const Sculptures = () => {
  const sculptures: Sculpture[] = [
    {
      id: 1,
      title: "Horse I",
      year: "2023",
      dimensions: "70 × 45 cm",
      image: "/horse.JPG"
    },
    {
      id: 2,
      title: "Dog",
      year: "2023",
      dimensions: "60 cm",
      image: "/dog.JPG"
    },
    {
      id: 3,
      title: "Horse II",
      year: "2023",
      dimensions: "65 × 40 cm",
      image: "/IMG_6030.jpg"
    },
    {
      id: 4,
      title: "Horse III",
      year: "2023",
      dimensions: "55 × 35 cm",
      image: "/IMG_6020.jpg"
    },
    {
      id: 5,
      title: "Steinbock",
      year: "2023",
      dimensions: "50 × 30 cm",
      image: "/steinbockkopf.PNG"
    }
  ];

  return (
    <section id="sculpture" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-4xl font-serif font-light text-stone-900 tracking-luxury text-center mb-24">
          Sculpture
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
          {sculptures.map((sculpture) => (
            <div key={sculpture.id} className="group">
              <div className="aspect-square overflow-hidden mb-8 bg-white flex items-center justify-center">
                {sculpture.image && (
                  <img
                    src={sculpture.image}
                    alt={sculpture.title}
                    className="w-full h-full object-contain p-8"
                  />
                )}
              </div>
              
              <div className="text-center space-y-2">
                <h3 className="text-xl font-serif font-light text-stone-900 tracking-luxury">
                  {sculpture.title}
                </h3>
                <p className="text-sm font-sans text-stone-600">
                  {sculpture.year}
                </p>
                <p className="text-sm font-sans text-stone-600">
                  Bronze
                </p>
                <p className="text-sm font-sans text-stone-600 mb-4">
                  {sculpture.dimensions}
                </p>
                <a href="#contact" className="inline-block text-sm font-sans text-stone-900 hover:text-stone-600 transition-colors duration-200 tracking-luxury uppercase mt-4">
                  Private Inquiry
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sculptures;
