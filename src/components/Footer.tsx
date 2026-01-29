import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 sm:py-12">
        <div className="text-center sm:text-right space-y-1 sm:space-y-2">
          <p className="text-xs sm:text-sm font-sans text-stone-600">
            © 2026 WehrmannArt
          </p>
          <p className="text-xs font-sans text-stone-500">
            Created by{' '}
            <a 
              href="https://wavelynecode.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-stone-900 transition-colors duration-200"
            >
              Wavelyne
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
