import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

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
  const sectionRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

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
      title: "Other Work I",
      year: "2025",
      technique: "Mixed media",
      dimensions: "TBD",
      image: "/Other1.jpg"
    },
    {
      id: 2,
      title: "Other Work II",
      year: "2025",
      technique: "Mixed media",
      dimensions: "TBD",
      image: "/Other2.jpg"
    }
  ];

  const OtherWorkCard = ({ work }: { work: OtherWork }) => (
    <div className="group">
      <div className="aspect-[3/4] overflow-hidden mb-6 sm:mb-6 lg:mb-8 bg-white relative">
        {work.image && (
          <img
            src={work.image}
            alt={work.title}
            className="w-full h-full object-cover"
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
          <button 
            onClick={() => navigate(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-2 text-stone-900 hover:text-stone-600 transition-colors duration-200"
            aria-label="Go back"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
          </button>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-light text-stone-900 tracking-luxury relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-stone-900 after:transition-all after:duration-500 hover:after:w-full">
            Other Works
          </h2>
        </div>

        <div>
          <div className="-mx-2 sm:mx-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 sm:gap-x-8 lg:gap-x-16 gap-y-12 sm:gap-y-12 lg:gap-y-16">
              {otherWorks.map((work) => (
                <OtherWorkCard key={work.id} work={work} />
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

export default OtherWorks;
