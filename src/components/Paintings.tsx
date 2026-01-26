import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import ImageModal from './ImageModal';

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
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const isOnPaintingsPage = location.pathname === '/paintings';

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
      technique: "ink and acrylic on perspex",
      dimensions: "91 × 61 cm / 36 × 24 inch",
      image: "/Polo1.jpg",
      category: 'polo'
    },
    {
      id: 2,
      title: "Polo II",
      year: "2025",
      technique: "ink and acrylic on perspex",
      dimensions: "91 × 61 cm / 36 × 24 inch",
      image: "/CorrectedPolo2.jpg",
      category: 'polo'
    },
    {
      id: 3,
      title: "Polo III",
      year: "2025",
      technique: "ink and acrylic on perspex",
      dimensions: "91 × 61 cm / 36 × 24 inch",
      image: "/Polo3.jpg",
      category: 'polo'
    },
    {
      id: 4,
      title: "Polo IV",
      year: "2025",
      technique: "ink and acrylic on perspex",
      dimensions: "91 × 61 cm / 36 × 24 inch",
      image: "/Polo4.jpg",
      category: 'polo'
    },
  ];

  const poloPaintings = paintings.filter(p => p.category === 'polo');

  const PaintingCard = ({ painting, index }: { painting: Painting; index: number }) => (
    <div className="group">
      <div 
        className="aspect-[3/4] overflow-hidden mb-6 sm:mb-6 lg:mb-8 bg-white relative cursor-pointer"
        onClick={() => painting.image && setSelectedImageIndex(index)}
      >
        {painting.image && (
          <img
            src={painting.image}
            alt={painting.title}
            className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
          />
        )}
      </div>
      
      <div className="text-center space-y-2 sm:space-y-2">
        <h3 className="text-xl sm:text-xl font-serif font-light text-stone-900 tracking-luxury">
          {painting.title}
        </h3>
        <p className="text-sm sm:text-sm font-sans text-stone-600">
          {painting.technique}
        </p>
        <p className="text-sm sm:text-sm font-sans text-stone-600">
          {painting.dimensions}
        </p>
        <p className="text-sm sm:text-sm font-sans text-stone-600">
          {painting.year}
        </p>
        <Link to="/#contact" className="inline-block text-sm sm:text-sm font-sans text-stone-900 border border-stone-900 px-6 py-2 hover:bg-stone-900 hover:text-white transition-colors duration-300 tracking-luxury uppercase mt-6 sm:mt-8">
          Private Inquiry
        </Link>
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
        <div className="relative flex justify-center mb-8 sm:mb-12">
          {isOnPaintingsPage && (
            <button 
              onClick={() => navigate(-1)}
              className="absolute left-0 top-1/2 -translate-y-1/2 p-2 text-stone-900 hover:text-stone-600 transition-colors duration-200"
              aria-label="Go back"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
            </button>
          )}
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
              {poloPaintings.map((painting, index) => (
                <PaintingCard key={painting.id} painting={painting} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mt-16 sm:mt-20">
        <div className="h-px bg-gradient-to-r from-transparent via-stone-300 to-transparent"></div>
      </div>
      <ImageModal
        isOpen={selectedImageIndex !== null}
        onClose={() => setSelectedImageIndex(null)}
        imageSrc={selectedImageIndex !== null ? poloPaintings[selectedImageIndex]?.image || '' : ''}
        imageAlt={selectedImageIndex !== null ? poloPaintings[selectedImageIndex]?.title || '' : ''}
        onPrevious={() => setSelectedImageIndex(prev => prev !== null && prev > 0 ? prev - 1 : prev)}
        onNext={() => setSelectedImageIndex(prev => prev !== null && prev < poloPaintings.length - 1 ? prev + 1 : prev)}
        hasPrevious={selectedImageIndex !== null && selectedImageIndex > 0}
        hasNext={selectedImageIndex !== null && selectedImageIndex < poloPaintings.length - 1}
      />
    </section>
  );
};

export default Paintings;
