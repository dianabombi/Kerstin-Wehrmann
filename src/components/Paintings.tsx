import React from 'react';

interface Painting {
  id: number;
  title: string;
  year: string;
  technique: string;
  dimensions: string;
  image?: string;
  category: 'polo' | 'other';
}

const Paintings = () => {
  const paintings: Painting[] = [
    {
      id: 1,
      title: "Polo I",
      year: "2023",
      technique: "Plexiglas",
      dimensions: "120 × 90 cm",
      image: "/Gemälde-035-Bearbeitet-Bearbeitet.jpg",
      category: 'polo'
    },
    {
      id: 2,
      title: "Polo II",
      year: "2024",
      technique: "Plexiglas",
      dimensions: "100 × 75 cm",
      image: "/Gemälde-052-Bearbeitet.jpg",
      category: 'polo'
    },
    {
      id: 3,
      title: "Polo III",
      year: "2022",
      technique: "Plexiglas",
      dimensions: "150 × 100 cm",
      image: "/Gemälde-060-Bearbeitet.jpg",
      category: 'polo'
    },
    {
      id: 4,
      title: "Study I",
      year: "2023",
      technique: "Mixed media",
      dimensions: "90 × 120 cm",
      image: "/Gemälde-061-Bearbeitet.jpg",
      category: 'other'
    },
    {
      id: 5,
      title: "Study II",
      year: "2024",
      technique: "Mixed media",
      dimensions: "45 × 60 cm",
      image: "/Gemälde-062-Bearbeitet.jpg",
      category: 'other'
    }
  ];

  const poloPaintings = paintings.filter(p => p.category === 'polo');
  const otherPaintings = paintings.filter(p => p.category === 'other');

  const PaintingCard = ({ painting }: { painting: Painting }) => (
    <div className="group">
      <div className="aspect-[4/5] overflow-hidden mb-8 bg-white">
        {painting.image && (
          <img
            src={painting.image}
            alt={painting.title}
            className="w-full h-full object-contain"
          />
        )}
      </div>
      
      <div className="text-center space-y-2">
        <h3 className="text-xl font-serif font-light text-stone-900 tracking-luxury">
          {painting.title}
        </h3>
        <p className="text-sm font-sans text-stone-600">
          {painting.year}
        </p>
        <p className="text-sm font-sans text-stone-600">
          {painting.technique}
        </p>
        <p className="text-sm font-sans text-stone-600 mb-4">
          {painting.dimensions}
        </p>
        <a href="#contact" className="inline-block text-sm font-sans text-stone-900 hover:text-stone-600 transition-colors duration-200 tracking-luxury uppercase mt-4">
          Private Inquiry
        </a>
      </div>
    </div>
  );

  return (
    <section id="painting" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-4xl font-serif font-light text-stone-900 tracking-luxury text-center mb-24">
          Painting
        </h2>

        <div className="mb-32">
          <h3 className="text-2xl font-serif font-light text-stone-900 tracking-luxury text-center mb-16">
            Polo Paintings — Selected Works
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-24">
            {poloPaintings.map((painting) => (
              <PaintingCard key={painting.id} painting={painting} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-serif font-light text-stone-900 tracking-luxury text-center mb-16">
            Other Paintings
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
            {otherPaintings.map((painting) => (
              <PaintingCard key={painting.id} painting={painting} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Paintings;
