import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white z-50 border-b border-stone-200 shadow-md">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <a href="#home" className="text-2xl font-serif font-light text-stone-900 tracking-luxury">
              WehrmannArt
            </a>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-12">
              <a href="#sculpture" className="relative text-sm font-sans text-stone-900 tracking-luxury uppercase after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-stone-900 after:transition-all after:duration-300 hover:after:w-full">
                Works
              </a>
              <a href="#about" className="relative text-sm font-sans text-stone-900 tracking-luxury uppercase after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-stone-900 after:transition-all after:duration-300 hover:after:w-full">
                About
              </a>
              <a href="#exhibitions" className="relative text-sm font-sans text-stone-900 tracking-luxury uppercase after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-stone-900 after:transition-all after:duration-300 hover:after:w-full">
                Exhibitions
              </a>
              <a href="#contact" className="relative text-sm font-sans text-stone-900 tracking-luxury uppercase after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-stone-900 after:transition-all after:duration-300 hover:after:w-full">
                Contact
              </a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-stone-900 p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden bg-white border-t border-stone-200">
          <div className="px-8 py-6 space-y-4">
            <a href="#sculpture" className="block text-sm font-sans text-stone-900 tracking-luxury uppercase">
              Works
            </a>
            <a href="#about" className="block text-sm font-sans text-stone-900 tracking-luxury uppercase">
              About
            </a>
            <a href="#exhibitions" className="block text-sm font-sans text-stone-900 tracking-luxury uppercase">
              Exhibitions
            </a>
            <a href="#contact" className="block text-sm font-sans text-stone-900 tracking-luxury uppercase">
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
