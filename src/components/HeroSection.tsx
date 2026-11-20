import React from 'react';
import { ArrowRight, Mountain, Sparkles } from 'lucide-react';
import { ministryConfig } from '../data/ministryData';

interface HeroSectionProps {
  onNavigate: (page: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  const { scriptures } = ministryConfig;

  return (
    <section className="relative overflow-hidden bg-ministry-forest min-h-[500px] lg:min-h-[560px] flex items-center">
      
      {/* Background Hero Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero.jpg" 
          alt="Ori Oke Ase Oluwa Prayer Mountain Sanctuary"
          className="w-full h-full object-cover object-center"
        />
        {/* Responsive Gradient Overlays for readable text and authentic photograph visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-ministry-forest/95 via-ministry-forest/80 to-ministry-forest/30 sm:via-ministry-forest/60 sm:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-ministry-forest/85 via-transparent to-black/30 lg:hidden" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-24 w-full">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
          
          {/* Left Column: Welcome & Core Typography */}
          <div className="max-w-2xl text-left">
            
            {/* Small Welcome Tag */}
            <div className="inline-flex items-center gap-2 mb-2 sm:mb-3">
              <span className="font-serif italic text-ministry-gold text-xl sm:text-2xl lg:text-3xl font-medium tracking-wide">
                Welcome to
              </span>
              <span className="w-8 sm:w-12 h-[2px] bg-ministry-gold/80 inline-block" />
            </div>

            {/* Main Heading */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] drop-shadow-sm mb-4">
              Ori Oke Ase Oluwa <br />
              <span className="text-white/95 font-semibold text-2xl sm:text-4xl lg:text-5xl">
                (Ibudo Iyanu)
              </span>
            </h1>

            {/* Supporting Tagline / Text */}
            <p className="font-serif italic text-white/90 text-base sm:text-xl lg:text-2xl font-normal leading-relaxed mb-8 max-w-xl drop-shadow">
              “A Place of Divine Encounter, <br className="hidden sm:inline" />
              Prayer and Transformation.”
            </p>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => {
                  onNavigate('visit');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="group bg-gradient-to-r from-ministry-gold to-ministry-warmGold hover:from-[#fada5e] hover:to-[#dfaf2d] text-ministry-dark font-bold px-6 sm:px-8 py-3.5 rounded-full shadow-lg hover:shadow-xl active:scale-95 transition-all flex items-center gap-3 text-sm sm:text-base"
              >
                <span>Plan Your Visit</span>
                <span className="w-6 h-6 rounded-full bg-ministry-dark text-white flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </button>

              <button
                onClick={() => {
                  onNavigate('about');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-white/15 hover:bg-white/25 backdrop-blur-sm border border-white/30 text-white font-medium px-5 sm:px-6 py-3.5 rounded-full shadow-sm hover:shadow active:scale-95 transition-all flex items-center gap-2 text-sm sm:text-base"
              >
                <Mountain className="w-4 h-4 text-ministry-gold" />
                <span>Explore The Mountain</span>
              </button>
            </div>

          </div>

          {/* Right Column: Floating Scripture Badge */}
          <div className="self-end lg:self-start lg:mt-2">
            <div className="bg-white/90 backdrop-blur-md border border-white/60 text-ministry-dark px-5 py-4 sm:px-6 sm:py-5 rounded-2xl shadow-elevated max-w-xs sm:max-w-sm text-center transform lg:hover:-translate-y-1 transition-transform">
              <span className="text-3xl font-serif text-ministry-forest font-bold leading-none block -mb-2">“</span>
              <p className="font-serif italic text-ministry-deep text-lg sm:text-xl font-bold leading-snug mb-3">
                {scriptures.hero.verse}
              </p>
              <div className="inline-block bg-ministry-forest text-white font-sans text-xs font-semibold px-3 py-1 rounded-full shadow-sm tracking-wide">
                {scriptures.hero.reference}
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};

