import React, { useState, useEffect } from 'react';
import { Image as ImageIcon, ArrowRight, X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { ministryConfig, GalleryImage } from '../data/ministryData';

interface GallerySectionProps {
  onNavigate?: (page: string) => void;
  showAll?: boolean;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onNavigate, showAll = false }) => {
  const { gallery } = ministryConfig;
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  // Categories for full page filter
  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'facilities', label: 'Facilities & Grounds' },
    { id: 'worship', label: 'Worship & Prayer' },
    { id: 'leadership', label: 'Leadership' },
    { id: 'mountain', label: 'Prayer Mountain' },
    { id: 'programmes', label: 'Programmes' },
  ];

  const filteredImages = selectedCategory === 'all'
    ? gallery
    : gallery.filter(img => img.category === selectedCategory);

  // On homepage preview, show 5 items matching the reference screenshot
  const displayImages = showAll ? filteredImages : gallery.slice(0, 5);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeImageIndex === null) return;
      if (e.key === 'Escape') setActiveImageIndex(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeImageIndex, displayImages]);

  const handleNext = () => {
    if (activeImageIndex === null) return;
    setActiveImageIndex((activeImageIndex + 1) % displayImages.length);
  };

  const handlePrev = () => {
    if (activeImageIndex === null) return;
    setActiveImageIndex((activeImageIndex - 1 + displayImages.length) % displayImages.length);
  };

  return (
    <section className="bg-white rounded-2xl shadow-card overflow-hidden border border-gray-100">
      
      {/* Green Header Banner matching reference */}
      <div className="bg-ministry-forest text-white p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b-2 border-ministry-gold">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-ministry-deep text-ministry-gold shrink-0">
            <ImageIcon className="w-6 h-6" />
          </div>
          <div>
            <h2 className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-white">
              Our Gallery
            </h2>
            <p className="text-xs text-gray-300">
              Photographs of Ibudo Iyanu, prayer meetings & facilities
            </p>
          </div>
        </div>

        {!showAll && onNavigate && (
          <button
            onClick={() => {
              onNavigate('gallery');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="bg-gradient-to-r from-ministry-gold to-ministry-warmGold text-ministry-dark font-bold px-4 py-2 rounded-full text-xs shadow hover:brightness-105 active:scale-95 transition-all flex items-center gap-1.5 self-end sm:self-auto"
          >
            <span>View More Photos</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* Filter Tabs if showAll is true */}
      {showAll && (
        <div className="p-4 bg-gray-50 border-b border-gray-100 flex flex-wrap gap-2 justify-center">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                selectedCategory === cat.id
                  ? 'bg-ministry-forest text-white shadow-sm'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      )}

      {/* 5-Column Preview Grid on Homepage / Responsive Grid */}
      <div className="p-4 sm:p-6 bg-[#FCFCFA]">
        <div className={`grid gap-3 sm:gap-4 ${
          showAll 
            ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4' 
            : 'grid-cols-2 sm:grid-cols-3 md:grid-cols-5'
        }`}>
          {displayImages.map((img, idx) => (
            <div
              key={img.id}
              onClick={() => setActiveImageIndex(idx)}
              className="group relative rounded-xl overflow-hidden aspect-[4/3] bg-gray-200 cursor-pointer shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1"
            >
              <img 
                src={img.src} 
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Overlay with zoom icon and caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-ministry-forest/90 via-ministry-forest/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-2.5 flex flex-col justify-end text-white">
                <div className="flex items-center justify-between text-xs font-medium mb-1">
                  <span className="text-ministry-gold font-semibold text-[11px] truncate">
                    {img.categoryLabel}
                  </span>
                  <ZoomIn className="w-4 h-4 text-white shrink-0" />
                </div>
                <p className="text-[11px] text-gray-200 line-clamp-2 leading-tight">
                  {img.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeImageIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4">
          <button
            onClick={() => setActiveImageIndex(null)}
            className="absolute top-4 right-4 p-2 text-white/80 hover:text-white bg-white/10 rounded-full transition-colors z-50"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors z-50"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors z-50"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="max-w-4xl max-h-[85vh] flex flex-col items-center">
            <div className="relative rounded-xl overflow-hidden shadow-2xl bg-black max-h-[70vh]">
              <img 
                src={displayImages[activeImageIndex].src} 
                alt={displayImages[activeImageIndex].alt}
                className="max-h-[70vh] w-auto object-contain mx-auto"
              />
            </div>
            
            <div className="mt-4 text-center text-white max-w-xl">
              <span className="inline-block bg-ministry-forest text-ministry-gold text-xs font-semibold px-3 py-1 rounded-full mb-1.5 border border-ministry-gold/40">
                {displayImages[activeImageIndex].categoryLabel}
              </span>
              <h3 className="font-serif text-lg sm:text-xl font-bold">
                {displayImages[activeImageIndex].title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 mt-1">
                {displayImages[activeImageIndex].caption}
              </p>
              <div className="text-xs text-gray-400 mt-2 font-mono">
                {activeImageIndex + 1} of {displayImages.length}
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

