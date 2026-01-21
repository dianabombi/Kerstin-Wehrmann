import React, { useEffect, useRef, useState } from 'react';

interface Painting {
  id: number;
  title: string;
  year: string;
  technique: string;
  dimensions: string;
  image?: string;
  category: 'polo' | 'other';
  sold?: boolean;
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
      year: "2025",
      technique: "Plexiglas",
      dimensions: "120 × 90 cm / 47.2 × 35.4 inch",
      image: "/Polo1.jpg",
      category: 'polo'
    },
    {
      id: 2,
      title: "Polo II",
      year: "2025",
      technique: "Plexiglas",
      dimensions: "100 × 75 cm / 39.4 × 29.5 inch",
      image: "/Polo2.jpg",
      category: 'polo'
    },
    {
      id: 3,
      title: "Polo III",
      year: "2025",
      technique: "Plexiglas",
      dimensions: "150 × 100 cm / 59.1 × 39.4 inch",
      image: "/Polo3.jpg",
      category: 'polo'
    },
    {
      id: 4,
      title: "Polo IV",
      year: "2024",
      technique: "Plexiglas",
      dimensions: "90 × 120 cm / 35.4 × 47.2 inch",
      image: "/Polo4.jpg",
      category: 'polo',
      sold: true
    },
  ];

  const poloPaintings = paintings.filter(p => p.category === 'polo');

  const PaintingCard = ({ painting }: { painting: Painting }) => (
    <div className="group">
      <div className="aspect-[3/4] overflow-hidden mb-6 sm:mb-6 lg:mb-8 bg-white relative">
        {painting.image && (
          <img
            src={painting.image}
            alt={painting.title}
            className="w-full h-full object-contain"
          />
        )}
        {painting.sold && (
          <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-stone-900 text-white px-4 sm:px-4 py-2 sm:py-2 text-xs tracking-wider uppercase">
            SOLD
          </div>
        )}
      </div>
      
      <div className="text-center space-y-2 sm:space-y-2">
        <h3 className="text-xl sm:text-xl font-serif font-light text-stone-900 tracking-luxury">
          {painting.title}
        </h3>
        <p className="text-sm sm:text-sm font-sans text-stone-600">
          {painting.year}
        </p>
        <p className="text-sm sm:text-sm font-sans text-stone-600">
          {painting.technique}
        </p>
        <p className="text-sm sm:text-sm font-sans text-stone-600 mb-3 sm:mb-4">
          {painting.dimensions}
        </p>
        {!painting.sold && (
          <a href="#contact" className="inline-block text-sm sm:text-sm font-sans text-stone-900 hover:text-stone-600 transition-colors duration-200 tracking-luxury uppercase mt-3 sm:mt-4">
            Private Inquiry
          </a>
        )}
      </div>
    </div>
  );

  return (
    <section 
      ref={sectionRef}
      id="painting" 
      className={`py-16 sm:py-20 bg-white transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
      }`}
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-8">
        <div className="flex justify-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-light text-stone-900 tracking-luxury relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-stone-900 after:transition-all after:duration-500 hover:after:w-full">
            Painting
          </h2>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl lg:text-2xl font-serif font-light text-stone-900 tracking-luxury text-center mb-8 sm:mb-12">
            Polo Paintings — Selected Works
          </h3>
          <div className="-mx-2 sm:mx-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 sm:gap-x-8 lg:gap-x-16 gap-y-12 sm:gap-y-12 lg:gap-y-16">
              {poloPaintings.map((painting) => (
                <PaintingCard key={painting.id} painting={painting} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mt-16 sm:mt-20">
        <div className="h-px bg-gradient-to-r from-transparent via-stone-300 to-transparent"></div>
      </div>
    </section>
  );
};

export default Paintings;
