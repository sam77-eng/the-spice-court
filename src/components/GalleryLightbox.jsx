import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

export default function GalleryLightbox({
  items = [],
  currentIndex = 0,
  isOpen = false,
  onClose,
  onPrev,
  onNext
}) {
  const currentItem = items[currentIndex];

  const handleKeyDown = useCallback(
    (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose && onClose();
      if (e.key === 'ArrowLeft') onPrev && onPrev();
      if (e.key === 'ArrowRight') onNext && onNext();
    },
    [isOpen, onClose, onPrev, onNext]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [handleKeyDown, isOpen]);

  if (!isOpen || !currentItem) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-espresso-deep/95 backdrop-blur-md transition-opacity duration-300"
      role="dialog"
      aria-modal="true"
      aria-label="Image gallery preview"
    >
      {/* Background click to close */}
      <div className="absolute inset-0 cursor-zoom-out" onClick={onClose} />

      {/* Top Bar with Title & Close */}
      <div className="absolute top-0 left-0 right-0 p-5 flex items-center justify-between z-10 bg-gradient-to-b from-espresso-deep/90 to-transparent">
        <div className="text-ivory">
          <h4 className="font-serif text-lg md:text-xl font-bold tracking-wide">
            {currentItem.title}
          </h4>
          <p className="text-xs font-sans text-gold tracking-widest uppercase">
            Image {currentIndex + 1} of {items.length} &bull; {currentItem.category}
          </p>
        </div>

        <button
          onClick={onClose}
          className="p-2.5 rounded-full bg-charcoal/80 text-ivory hover:text-gold hover:bg-gold/20 border border-gold/30 transition-colors focus:outline-none"
          aria-label="Close lightbox (Esc)"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev && onPrev();
        }}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-charcoal/80 text-ivory hover:text-gold hover:bg-gold/20 border border-gold/30 transition-all focus:outline-none"
        aria-label="Previous Image (Left Arrow)"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext && onNext();
        }}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-charcoal/80 text-ivory hover:text-gold hover:bg-gold/20 border border-gold/30 transition-all focus:outline-none"
        aria-label="Next Image (Right Arrow)"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Central Image Showcase */}
      <div className="relative max-w-5xl max-h-[80vh] px-4 z-10 flex flex-col items-center">
        <img
          src={currentItem.src}
          alt={currentItem.title}
          className="max-h-[72vh] max-w-full object-contain rounded-lg shadow-2xl border border-gold/30"
        />
        {currentItem.caption && (
          <p className="mt-4 text-center text-sm font-sans text-ivory-dark/90 italic max-w-xl">
            "{currentItem.caption}"
          </p>
        )}
      </div>
    </div>
  );
}
