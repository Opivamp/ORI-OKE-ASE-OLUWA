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
        
        {/* Founder & General Overseer Header Card - Big, Visible, and Prominent */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-gray-200 shadow-md flex flex-col sm:flex-row items-center sm:items-start gap-5">
          <div className="relative shrink-0 w-32 sm:w-36 md:w-40 h-44 sm:h-48 md:h-52 rounded-2xl overflow-hidden border-2 border-ministry-gold shadow-lg bg-gray-100 group">
            <img 
              src="/images/founder.jpg" 
              alt={founder}
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          </div>

          <div className="flex-1 min-w-0 text-center sm:text-left flex flex-col justify-center py-1">
            <span className="inline-block text-[11px] sm:text-xs uppercase font-extrabold text-ministry-warmGold tracking-wider mb-1">
              {founderTitle}
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-ministry-forest leading-tight mb-2">
              {founder}
            </h3>
            <div className="inline-flex items-center gap-2 justify-center sm:justify-start mb-3">
              <span className="bg-gradient-to-r from-ministry-gold to-ministry-warmGold text-ministry-dark font-black text-xs px-3.5 py-1 rounded-full shadow-sm">
                Established: {yearEstablished}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-sans">
              Visionary servant of God ministering under an apostolic mandate of prayer, deliverance, holiness, and the supernatural power of the Holy Spirit.
            </p>
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

