import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white bg-opacity-95 backdrop-blur-sm z-50 border-b border-bordeaux-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <h1 className="text-3xl font-script font-semibold text-bordeaux-800">
              Kerstin Wehrmann
            </h1>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#sculptures" className="text-gray-900 hover:text-bordeaux-700 px-3 py-2 text-sm font-medium transition-colors duration-300">
                Sculptures
              </a>
              <a href="#paintings" className="text-gray-900 hover:text-bordeaux-700 px-3 py-2 text-sm font-medium transition-colors duration-300">
                Paintings
              </a>
              <a href="#artist" className="text-gray-900 hover:text-bordeaux-700 px-3 py-2 text-sm font-medium transition-colors duration-300">
                Artist Information
              </a>
              <a href="#exhibitions" className="text-gray-900 hover:text-bordeaux-700 px-3 py-2 text-sm font-medium transition-colors duration-300">
                Exhibitions
              </a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-900 hover:text-bordeaux-700 p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden bg-white border-t border-bordeaux-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#sculptures" className="text-gray-900 hover:text-bordeaux-700 block px-3 py-2 text-base font-medium">
              Sculptures
            </a>
            <a href="#paintings" className="text-gray-900 hover:text-bordeaux-700 block px-3 py-2 text-base font-medium">
              Paintings
            </a>
            <a href="#artist" className="text-gray-900 hover:text-bordeaux-700 block px-3 py-2 text-base font-medium">
              Artist Information
            </a>
            <a href="#exhibitions" className="text-gray-900 hover:text-bordeaux-700 block px-3 py-2 text-base font-medium">
              Exhibitions
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
