import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CtaBannerProps {
  onNavigate: (page: string) => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onNavigate }) => {
  return (
    <section className="relative overflow-hidden rounded-2xl shadow-elevated bg-ministry-forest border-2 border-ministry-gold/40">
      
      {/* Text-Free Background Graphic */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/banner-encounter-clean.jpg" 
          alt="Prayer Mountain Sanctuary Background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ministry-forest/90 via-ministry-forest/40 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 py-8 sm:py-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-white">
        
        {/* Left: Praying Hands + Vertical Gold Line + Heading */}
        <div className="flex items-center gap-5 sm:gap-6 w-full sm:w-auto">
          {/* Custom Praying Hands SVG */}
          <div className="shrink-0 p-2 text-white">
            <svg className="w-12 h-12 sm:w-14 sm:h-14 fill-white" viewBox="0 0 24 24">
              <path d="M12 2C11.5 2 11 2.4 11 3v7.2L8.6 7.8c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l4.1 4.1V21c0 .6.4 1 1 1s1-.4 1-1v-7.7l4.1-4.1c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0L13 10.2V3c0-.6-.5-1-1-1z" />
            </svg>
          </div>

          <div className="h-14 w-[2px] bg-ministry-gold/80 hidden sm:block" />

          <div className="flex flex-col">
            <h2 className="font-serif italic text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
              Come and Encounter God
            </h2>
            <p className="font-serif italic text-white/90 text-sm sm:text-base lg:text-lg">
              Plan your visit to Ibudo Iyanu.
            </p>
          </div>
        </div>

        {/* Right: Gold CTA Button */}
        <div className="shrink-0 w-full sm:w-auto text-right">
          <button
            onClick={() => {
              onNavigate('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="w-full sm:w-auto bg-gradient-to-r from-ministry-gold to-ministry-warmGold hover:brightness-105 active:scale-95 text-ministry-dark font-extrabold px-7 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2.5 text-sm sm:text-base"
          >
            <span>Contact Us</span>
            <ArrowRight className="w-4 h-4 text-ministry-dark" />
          </button>
        </div>

      </div>

    </section>
  );
};

