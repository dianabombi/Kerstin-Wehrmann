import React, { useEffect, useRef, useState } from 'react';

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
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);
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
      <div className="aspect-[3/4] overflow-hidden mb-8 bg-white">
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
    <section 
      ref={sectionRef}
      id="painting" 
      className={`py-32 bg-white transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <h2 className="text-3xl sm:text-4xl font-serif font-light text-stone-900 tracking-luxury text-center mb-12">
          Painting
        </h2>

        <div className="mb-16 sm:mb-24">
          <h3 className="text-xl sm:text-2xl font-serif font-light text-stone-900 tracking-luxury text-center mb-12">
            Polo Paintings — Selected Works
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 sm:gap-x-16 gap-y-16 sm:gap-y-24">
            {poloPaintings.map((painting) => (
              <PaintingCard key={painting.id} painting={painting} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl sm:text-2xl font-serif font-light text-stone-900 tracking-luxury text-center mb-12">
            Other Paintings
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 sm:gap-x-16 gap-y-16 sm:gap-y-24">
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
