import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <nav className="fixed top-0 w-full bg-white z-50 border-b border-stone-200 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex justify-between items-center h-20 sm:h-24">
          <div className="flex-shrink-0 pl-2 sm:pl-0">
            <Link to="/" className="text-xl sm:text-2xl font-serif font-light text-stone-900 tracking-luxury">
              WehrmannArt
            </Link>
          </div>
          
          <div className="hidden lg:block">
            <div className="flex items-center space-x-12">
              {isHomePage ? (
                <a href="#works" className="relative text-sm font-sans text-stone-900 tracking-luxury uppercase after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-stone-900 after:transition-all after:duration-300 hover:after:w-full">
                  Works
                </a>
              ) : (
                <Link to="/#works" className="relative text-sm font-sans text-stone-900 tracking-luxury uppercase after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-stone-900 after:transition-all after:duration-300 hover:after:w-full">
                  Works
                </Link>
              )}
              {isHomePage ? (
                <a href="#about" className="relative text-sm font-sans text-stone-900 tracking-luxury uppercase after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-stone-900 after:transition-all after:duration-300 hover:after:w-full">
                  About
                </a>
              ) : (
                <Link to="/#about" className="relative text-sm font-sans text-stone-900 tracking-luxury uppercase after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-stone-900 after:transition-all after:duration-300 hover:after:w-full">
                  About
                </Link>
              )}
              {isHomePage ? (
                <a href="#exhibitions" className="relative text-sm font-sans text-stone-900 tracking-luxury uppercase after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-stone-900 after:transition-all after:duration-300 hover:after:w-full">
                  Exhibitions
                </a>
              ) : (
                <Link to="/#exhibitions" className="relative text-sm font-sans text-stone-900 tracking-luxury uppercase after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-stone-900 after:transition-all after:duration-300 hover:after:w-full">
                  Exhibitions
                </Link>
              )}
              {isHomePage ? (
                <a href="#contact" className="relative text-sm font-sans text-stone-900 tracking-luxury uppercase after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-stone-900 after:transition-all after:duration-300 hover:after:w-full">
                  Contact
                </a>
              ) : (
                <Link to="/#contact" className="relative text-sm font-sans text-stone-900 tracking-luxury uppercase after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-stone-900 after:transition-all after:duration-300 hover:after:w-full">
                  Contact
                </Link>
              )}
              <span className="text-sm font-sans tracking-wider uppercase">
                <span className="text-stone-900 font-semibold">EN</span>
                <span className="text-stone-400 mx-1">|</span>
                <span className="text-stone-400">DE</span>
              </span>
            </div>
          </div>
          
          <div className="lg:hidden relative z-[60] pr-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-stone-900 hover:text-stone-600 focus:outline-none p-2 relative"
              aria-label="Toggle menu"
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 7h18M3 17h18" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <>
          <div 
            className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsOpen(false)}
          ></div>
          <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-stone-200 shadow-lg animate-slide-up z-50">
            <div className="px-12 py-16 space-y-16">
              {isHomePage ? (
                <a href="#works" className="block text-lg font-sans text-stone-900 tracking-luxury uppercase" onClick={() => setIsOpen(false)}>
                  Works
                </a>
              ) : (
                <Link to="/#works" className="block text-lg font-sans text-stone-900 tracking-luxury uppercase" onClick={() => setIsOpen(false)}>
                  Works
                </Link>
              )}
              {isHomePage ? (
                <a href="#about" className="block text-lg font-sans text-stone-900 tracking-luxury uppercase" onClick={() => setIsOpen(false)}>
                  About
                </a>
              ) : (
                <Link to="/#about" className="block text-lg font-sans text-stone-900 tracking-luxury uppercase" onClick={() => setIsOpen(false)}>
                  About
                </Link>
              )}
              {isHomePage ? (
                <a href="#exhibitions" className="block text-lg font-sans text-stone-900 tracking-luxury uppercase" onClick={() => setIsOpen(false)}>
                  Exhibitions
                </a>
              ) : (
                <Link to="/#exhibitions" className="block text-lg font-sans text-stone-900 tracking-luxury uppercase" onClick={() => setIsOpen(false)}>
                  Exhibitions
                </Link>
              )}
              {isHomePage ? (
                <a href="#contact" className="block text-lg font-sans text-stone-900 tracking-luxury uppercase" onClick={() => setIsOpen(false)}>
                  Contact
                </a>
              ) : (
                <Link to="/#contact" className="block text-lg font-sans text-stone-900 tracking-luxury uppercase" onClick={() => setIsOpen(false)}>
                  Contact
                </Link>
              )}
              <div className="pt-4 border-t border-stone-200">
                <span className="block text-base font-sans tracking-wider uppercase">
                  <span className="text-stone-900 font-semibold">EN</span>
                  <span className="text-stone-400 mx-1">|</span>
                  <span className="text-stone-400">DE</span>
                </span>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
