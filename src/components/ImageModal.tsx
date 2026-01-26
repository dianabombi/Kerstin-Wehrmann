import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
  onPrevious?: () => void;
  onNext?: () => void;
  hasPrevious?: boolean;
  hasNext?: boolean;
}

const ImageModal: React.FC<ImageModalProps> = ({ 
  isOpen, 
  onClose, 
  imageSrc, 
  imageAlt,
  onPrevious,
  onNext,
  hasPrevious = false,
  hasNext = false
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft' && hasPrevious && onPrevious) {
        onPrevious();
      } else if (e.key === 'ArrowRight' && hasNext && onNext) {
        onNext();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, onPrevious, onNext, hasPrevious, hasNext]);

  if (!isOpen) return null;

  const modalContent = (
    <div 
      className="fixed inset-0 flex items-center justify-center bg-white"
      style={{ zIndex: 99999 }}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white hover:text-white transition-all duration-200 bg-stone-800 hover:bg-stone-700 rounded-full p-3 shadow-lg"
        style={{ zIndex: 100000 }}
        aria-label="Close modal"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Previous Button */}
      {hasPrevious && onPrevious && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrevious();
          }}
          className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 text-white hover:text-white transition-all duration-200 bg-stone-800 hover:bg-stone-700 rounded-full p-4 shadow-lg"
          style={{ zIndex: 100000 }}
          aria-label="Previous image"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
      )}

      {/* Next Button */}
      {hasNext && onNext && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 text-white hover:text-white transition-all duration-200 bg-stone-800 hover:bg-stone-700 rounded-full p-4 shadow-lg"
          style={{ zIndex: 100000 }}
          aria-label="Next image"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      )}
      
      <div 
        className="max-w-[90vw] max-h-[90vh] overflow-auto bg-white p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-auto"
          style={{ display: 'block', minWidth: '300px' }}
        />
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};

export default ImageModal;
