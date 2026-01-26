import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import ImageModal from './ImageModal';

interface OtherWork {
  id: number;
  title: string;
  year: string;
  technique: string;
  dimensions: string;
  image?: string;
}

const OtherWorks = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const isOnOtherWorksPage = location.pathname === '/other-works';

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

  const otherWorks: OtherWork[] = [
    {
      id: 1,
      title: "Head of Capricorn",
      year: "2025",
      technique: "Pencil and charcoal on handmade paper collage",
      dimensions: "100 x 82 cm / 39 x 32 inch",
      image: "/Other2.jpg"
    },
    {
      id: 2,
      title: "Margna",
      year: "2025",
      technique: "Pencil and charcoal on handmade paper collage",
      dimensions: "100 x 82 cm / 39 x 32 inch",
      image: "/Other1.jpg"
    }
  ];

  const OtherWorkCard = ({ work, index }: { work: OtherWork; index: number }) => (
    <div className="group max-w-sm mx-auto">
      <div 
        className="h-[36rem] sm:h-[40rem] overflow-hidden mb-6 sm:mb-6 lg:mb-8 bg-white relative cursor-pointer flex items-center justify-center"
        onClick={() => work.image && setSelectedImageIndex(index)}
      >
        {work.image && (
          <img
            src={work.image}
            alt={work.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        )}
      </div>
      
      <div className="text-center space-y-2 sm:space-y-2">
        <h3 className="text-xl sm:text-xl font-serif font-light text-stone-900 tracking-luxury">
          {work.title}
        </h3>
        <p className="text-sm sm:text-sm font-sans text-stone-600">
          {work.technique}
        </p>
        <p className="text-sm sm:text-sm font-sans text-stone-600">
          {work.dimensions}
        </p>
        <p className="text-sm sm:text-sm font-sans text-stone-600">
          {work.year}
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
      id="other-works" 
      className={`py-16 sm:py-20 bg-white transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
      }`}
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-8">
        <div className="relative flex justify-center mb-8 sm:mb-12">
          {isOnOtherWorksPage && (
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
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-light text-stone-900 tracking-luxury relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full sm:after:w-0 after:h-[2px] after:bg-stone-900 after:transition-all after:duration-500 sm:hover:after:w-full">
            Works on Paper
          </h2>
        </div>

        <div>
          <div className="-mx-2 sm:mx-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 sm:gap-x-8 lg:gap-x-16 gap-y-12 sm:gap-y-12 lg:gap-y-16">
              {otherWorks.map((work, index) => (
                <OtherWorkCard key={work.id} work={work} index={index} />
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
        imageSrc={selectedImageIndex !== null ? otherWorks[selectedImageIndex]?.image || '' : ''}
        imageAlt={selectedImageIndex !== null ? otherWorks[selectedImageIndex]?.title || '' : ''}
        onPrevious={() => setSelectedImageIndex(prev => prev !== null && prev > 0 ? prev - 1 : prev)}
        onNext={() => setSelectedImageIndex(prev => prev !== null && prev < otherWorks.length - 1 ? prev + 1 : prev)}
        hasPrevious={selectedImageIndex !== null && selectedImageIndex > 0}
        hasNext={selectedImageIndex !== null && selectedImageIndex < otherWorks.length - 1}
      />
    </section>
  );
};

export default OtherWorks;
