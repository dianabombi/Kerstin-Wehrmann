import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ImageModal from './ImageModal';

interface Sculpture {
  id: number;
  title: string;
  year: string;
  dimensions: string;
  image?: string;
}

const Sculptures = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isOnSculpturesPage = location.pathname === '/sculptures';
  const [isVisible, setIsVisible] = useState(isOnSculpturesPage);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // If on sculptures page, make visible immediately
    if (isOnSculpturesPage) {
      setIsVisible(true);
      return;
    }

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
  }, [isOnSculpturesPage]);
  const sculptures: Sculpture[] = [
    {
      id: 1,
      title: "Custodian (Equine)",
      year: "2025",
      dimensions: "44 x 27.5 x 14 cm / 17 x 11 x 6 inch",
      image: "/horseScul.JPG"
    },
    {
      id: 2,
      title: "Custodian (Capricorn)",
      year: "2025",
      dimensions: "50 x 26 x 16 cm / 20 x 10 x 6 inch",
      image: "/steinbockkopf.PNG"
    },
    {
      id: 3,
      title: "Custodian (Cervine)",
      year: "2025",
      dimensions: "46 x 22 x 18 cm / 18 x 9 x 7 inch",
      image: "/deer.jpg"
    },
    {
      id: 4,
      title: "Equus",
      year: "2025",
      dimensions: "58 x 44.5 x 25 cm / 23 x 17 x 10 inch",
      image: "/IMG_6020.jpg"
    },
    {
      id: 5,
      title: "Ursus",
      year: "2009",
      dimensions: "12 x 12 x 12 cm / 5 x 5 x 5 inch",
      image: "/IMG_6030.jpg"
    },
    {
      id: 7,
      title: "Figures in Relation",
      year: "2025",
      dimensions: "24 x 23 x 16 cm / 9.5 x 9 x 6 inch",
      image: "/monkeys.jpg"
    },
    {
      id: 8,
      title: "Ferdinand",
      year: "2025",
      dimensions: "TBD",
      image: "/Ferdo.jpg"
    },
    {
      id: 9,
      title: "Cervus",
      year: "2024",
      dimensions: "48 x 44 x 20 cm / 19 x 17 x 8 inch",
      image: "/deer.jpg"
    },
    {
      id: 6,
      title: "Figures in Waiting",
      year: "2025",
      dimensions: "69 x 84 x 33 cm / 27 x 33 x 13 inch",
      image: "/dog.JPG"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="sculpture" 
      className={`py-16 sm:py-20 bg-white transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="relative flex justify-center mb-8 sm:mb-12 lg:mb-16">
          {isOnSculpturesPage && (
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
            Sculpture
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 sm:gap-x-8 lg:gap-x-12 gap-y-8 sm:gap-y-12 lg:gap-y-16">
          {sculptures.map((sculpture, index) => (
            sculpture.image ? (
              <div key={sculpture.id} className="group">
                <div 
                  className="h-[36rem] sm:h-[40rem] overflow-hidden mb-8 bg-white cursor-pointer flex items-center justify-center"
                  onClick={() => sculpture.image && setSelectedImageIndex(index)}
                >
                  <img
                    src={sculpture.image}
                    alt={sculpture.title}
                    className={`transition-transform duration-300 group-hover:scale-105 ${
                      sculpture.title.startsWith('Custodian')
                        ? 'h-full w-auto object-cover'
                        : 'w-full h-full object-contain'
                    }`}
                  />
                </div>
                
                <div className="text-center space-y-1 sm:space-y-2">
                  <h3 className="text-lg sm:text-xl font-serif font-light text-stone-900 tracking-luxury">
                    {sculpture.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-sans text-stone-600">
                    Bronze
                  </p>
                  <p className="text-xs sm:text-sm font-sans text-stone-600">
                    {sculpture.dimensions}
                  </p>
                  <p className="text-xs sm:text-sm font-sans text-stone-600">
                    {sculpture.year}
                  </p>
                  <a href="#contact" className="inline-block text-xs sm:text-sm font-sans text-stone-900 border border-stone-900 px-6 py-2 hover:bg-stone-900 hover:text-white transition-colors duration-300 tracking-luxury uppercase mt-6 sm:mt-8">
                    Private Inquiry
                  </a>
                </div>
              </div>
            ) : (
              <div key={sculpture.id} className="invisible"></div>
            )
          ))}
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mt-16 sm:mt-20">
        <div className="h-px bg-gradient-to-r from-transparent via-stone-300 to-transparent"></div>
      </div>
      <ImageModal
        isOpen={selectedImageIndex !== null}
        onClose={() => setSelectedImageIndex(null)}
        imageSrc={selectedImageIndex !== null ? sculptures[selectedImageIndex]?.image || '' : ''}
        imageAlt={selectedImageIndex !== null ? sculptures[selectedImageIndex]?.title || '' : ''}
        onPrevious={() => setSelectedImageIndex(prev => prev !== null && prev > 0 ? prev - 1 : prev)}
        onNext={() => setSelectedImageIndex(prev => prev !== null && prev < sculptures.length - 1 ? prev + 1 : prev)}
        hasPrevious={selectedImageIndex !== null && selectedImageIndex > 0}
        hasNext={selectedImageIndex !== null && selectedImageIndex < sculptures.length - 1}
      />
    </section>
  );
};

export default Sculptures;
