import React, { useState, useMemo } from 'react';
import { Eye, Sparkles } from 'lucide-react';
import { IndianArchEmblem, IndianOrnamentDivider } from '../components/IndianMotif';
import GalleryLightbox from '../components/GalleryLightbox';
import SEO from '../components/SEO';
import { galleryCategories, galleryItems } from '../data/galleryData';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Filter items
  const filteredGallery = useMemo(() => {
    if (selectedCategory === 'all') return galleryItems;
    return galleryItems.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  const openLightbox = (index) => {
    setActiveImageIndex(index);
    setLightboxOpen(true);
  };

  const handlePrev = () => {
    setActiveImageIndex((prev) => (prev === 0 ? filteredGallery.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveImageIndex((prev) => (prev === filteredGallery.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="pt-24 pb-20 bg-espresso text-ivory min-h-screen">
      <SEO
        title="Visual Gallery — Architectural Splendour & Culinary Craft"
        description="Immerse yourself in high-resolution photography capturing palace interiors, aromatic charcoal grills, modern café baristas, and intimate banquets at THE SPICE COURT."
      />

      {/* Header Banner */}
      <section className="relative py-16 sm:py-24 bg-espresso-surface border-b border-gold/20 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(181,138,82,0.12)_0%,_transparent_70%)]" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs uppercase tracking-widest font-semibold mb-4">
            <IndianArchEmblem className="w-4 h-4 text-gold" />
            <span>The Visual Anthology</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-wide uppercase text-ivory">
            Visual Gallery
          </h1>

          <IndianOrnamentDivider className="my-5" />

          <p className="font-serif italic text-base sm:text-lg text-ivory-cream/85 max-w-xl mx-auto">
            Glimpses of architectural arches, glowing lanterns, rich curries, and serene café moments.
          </p>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="sticky top-16 z-30 bg-espresso-deep/95 backdrop-blur-md border-b border-gold/20 py-4 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-2 overflow-x-auto no-scrollbar pb-1">
            {galleryCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`whitespace-nowrap px-5 py-2 rounded-full text-xs font-sans tracking-wider uppercase font-semibold transition-all shrink-0 ${
                  selectedCategory === cat.id
                    ? 'bg-burgundy text-ivory border border-gold shadow-md'
                    : 'bg-charcoal text-ivory-dark/80 hover:text-gold hover:bg-gold/10 border border-gold/20'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Responsive Gallery Grid */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredGallery.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightbox(idx)}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-charcoal border border-gold/25 hover:border-gold shadow-lg hover:shadow-royal-card cursor-pointer transition-all duration-500"
            >
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Ambient gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-espresso-deep via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />

              {/* Hover Overlay Information */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex justify-end">
                  <span className="p-2 rounded-full bg-espresso/80 text-gold border border-gold/40">
                    <Eye className="w-4 h-4" />
                  </span>
                </div>

                <div>
                  <span className="text-[10px] uppercase font-sans tracking-widest text-gold block">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-ivory mt-0.5">
                    {item.title}
                  </h3>
                  {item.caption && (
                    <p className="text-xs font-sans text-ivory-dark/90 mt-1 line-clamp-2">
                      {item.caption}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      <GalleryLightbox
        isOpen={lightboxOpen}
        items={filteredGallery}
        currentIndex={activeImageIndex}
        onClose={() => setLightboxOpen(false)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </div>
  );
}
