import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="text-center space-y-2">
          <p className="text-sm font-sans text-stone-600">
            © 2025 Kerstin A. Wehrmann
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
