import React, { useEffect, useRef, useState } from 'react';

interface Sculpture {
  id: number;
  title: string;
  year: string;
  dimensions: string;
  image?: string;
}

const Sculptures = () => {
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
  const sculptures: Sculpture[] = [
    {
      id: 1,
      title: "Horse Head",
      year: "2025",
      dimensions: "70 × 45 × 30 cm / 27.6 × 17.7 × 11.8 inch",
      image: "/horse.JPG"
    },
    {
      id: 2,
      title: "Capricorn Head",
      year: "2025",
      dimensions: "50 × 30 × 25 cm / 19.7 × 11.8 × 9.8 inch",
      image: "/steinbockkopf.PNG"
    },
    {
      id: 3,
      title: "Horse",
      year: "2025",
      dimensions: "65 × 40 × 35 cm / 25.6 × 15.7 × 13.8 inch",
      image: "/IMG_6030.jpg"
    },
    {
      id: 4,
      title: "Ferdinand (Bull)",
      year: "2025",
      dimensions: "55 × 40 × 30 cm / 21.7 × 15.7 × 11.8 inch",
      image: "/IMG_6020.jpg"
    },
    {
      id: 5,
      title: "Monkeys",
      year: "2023",
      dimensions: "45 × 35 × 25 cm / 17.7 × 13.8 × 9.8 inch",
      image: "/monkeys.jpg"
    },
    {
      id: 6,
      title: "Dogs",
      year: "2024",
      dimensions: "50 × 30 × 25 cm / 19.7 × 11.8 × 9.8 inch",
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
        <div className="flex justify-center mb-16 sm:mb-24">
          <h2 className="text-3xl sm:text-4xl font-serif font-light text-stone-900 tracking-luxury relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-stone-900 after:transition-all after:duration-500 hover:after:w-full">
            Sculpture
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 sm:gap-x-12 gap-y-16 sm:gap-y-24">
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
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mt-16 sm:mt-20">
        <div className="h-px bg-gradient-to-r from-transparent via-stone-300 to-transparent"></div>
      </div>
    </section>
  );
};

export default Sculptures;
