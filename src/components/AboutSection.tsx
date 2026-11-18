import React from 'react';
import { Eye, Target, ArrowRight } from 'lucide-react';
import { ministryConfig } from '../data/ministryData';

interface AboutSectionProps {
  onNavigate: (page: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onNavigate }) => {
  const { founder, founderTitle, yearEstablished, vision, missions } = ministryConfig;

  return (
    <div className="bg-white rounded-2xl shadow-card overflow-hidden border border-gray-100 flex flex-col h-full">
      
      {/* Green Header Strip matching reference */}
      <div className="bg-ministry-forest text-white p-4 sm:p-5 flex items-center justify-between border-b-2 border-ministry-gold">
        <h2 className="font-serif text-lg sm:text-2xl font-bold tracking-tight text-white">
          About Our Mountain
        </h2>
        <button
          onClick={() => {
            onNavigate('about');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="text-xs font-semibold text-ministry-gold hover:text-white transition-colors flex items-center gap-1"
        >
          <span>More Details</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="p-4 sm:p-6 space-y-5 flex-1 bg-[#FCFCFA]">
        
        {/* Founder & General Overseer Header Card */}
        <div className="bg-white rounded-xl p-3 sm:p-4 border border-gray-200 shadow-sm flex items-center gap-4">
          <div className="relative shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden border-2 border-ministry-gold/60 shadow-md bg-gray-100">
            <img 
              src="/images/founder-portrait.png" 
              alt={founder}
              className="w-full h-full object-cover object-top"
              onError={(e) => {
                // If crop image has issue, use real photo
                e.currentTarget.src = "/images/real/photo_2026-11-18_02-00-40.jpg";
              }}
            />
          </div>

          <div className="flex-1 min-w-0">
            <span className="text-[11px] sm:text-xs uppercase font-bold text-gray-500 tracking-wider block mb-0.5">
              {founderTitle}
            </span>
            <h3 className="font-serif text-base sm:text-xl font-bold text-ministry-forest leading-tight mb-2">
              {founder}
            </h3>
            <div className="inline-block bg-gradient-to-r from-ministry-gold to-ministry-warmGold text-ministry-dark font-extrabold text-[11px] sm:text-xs px-3 py-1 rounded-full shadow-sm">
              Established: {yearEstablished}
            </div>
          </div>
        </div>

        {/* Our Vision */}
        <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
          <div className="flex items-center gap-2 mb-2 text-ministry-forest">
            <div className="p-1.5 rounded-lg bg-ministry-ivory border border-gray-100 text-ministry-forest">
              <Eye className="w-4 h-4 text-ministry-forest" />
            </div>
            <h4 className="font-serif text-base sm:text-lg font-bold text-ministry-forest">
              Our Vision
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-sans">
            {vision}
          </p>
        </div>

        {/* Our Mission (Statements 1 to 9) */}
        <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm flex-1">
          <div className="flex items-center justify-between mb-3 text-ministry-forest">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-lg bg-ministry-ivory border border-gray-100 text-ministry-forest">
                <Target className="w-4 h-4 text-ministry-forest" />
              </div>
              <h4 className="font-serif text-base sm:text-lg font-bold text-ministry-forest">
                Our Mission
              </h4>
            </div>
            <span className="text-[11px] font-semibold text-gray-500">
              9 Divine Mandates
            </span>
          </div>

          <div className="space-y-2 text-xs sm:text-[13px] text-gray-700 leading-snug">
            {missions.map((mission) => (
              <div key={mission.number} className="flex items-start gap-2 pt-1 border-t border-gray-100 first:border-0 first:pt-0">
                <span className="font-bold text-ministry-forest shrink-0 font-mono text-xs w-4">
                  {mission.number}.
                </span>
                <span className="text-gray-700 font-sans leading-tight">
                  {mission.description}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-4 pt-3 border-t border-gray-100 text-center">
            <button
              onClick={() => {
                onNavigate('about');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-xs font-bold text-ministry-forest hover:text-ministry-gold transition-colors inline-flex items-center gap-1.5"
            >
              <span>Learn More About Us</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};

