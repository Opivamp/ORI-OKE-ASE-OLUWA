import React from 'react';
import { Building2, Check, ArrowRight, ShieldCheck, MapPin } from 'lucide-react';
import { ministryConfig } from '../data/ministryData';

interface FacilitiesPageProps {
  onNavigate: (page: string) => void;
}

export const FacilitiesPage: React.FC<FacilitiesPageProps> = ({ onNavigate }) => {
  const { facilities } = ministryConfig;

  return (
    <div className="bg-ministry-ivory min-h-screen py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 bg-ministry-forest/10 text-ministry-forest px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            <Building2 className="w-4 h-4 text-ministry-gold" />
            <span>Retreat Environment & Mountain Amenities</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-ministry-deep tracking-tight">
            Facilities & Mountain Retreats
          </h1>
          <p className="font-serif italic text-base sm:text-xl text-ministry-forest font-medium">
            A peaceful, consecrated sanctuary equipped for your spiritual renewal.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility) => (
            <div 
              key={facility.id}
              className="bg-white rounded-2xl shadow-card border border-gray-100 overflow-hidden flex flex-col justify-between hover:shadow-elevated transition-all group"
            >
              <div>
                {/* Photo */}
                <div className="relative h-56 bg-gray-100 overflow-hidden">
                  <img 
                    src={facility.image} 
                    alt={facility.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-4">
                    <span className="text-white font-serif font-bold text-base sm:text-lg">
                      {facility.title}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-sans">
                    {facility.fullDesc}
                  </p>

                  <div className="pt-2 border-t border-gray-100">
                    <span className="text-[11px] uppercase font-bold text-ministry-forest tracking-wider block mb-2">
                      Key Highlights:
                    </span>
                    <ul className="space-y-1.5 text-xs text-gray-600">
                      {facility.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-ministry-forest shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-5 bg-gray-50 border-t border-gray-100">
                <button
                  onClick={() => onNavigate('visit')}
                  className="w-full bg-ministry-forest hover:bg-ministry-deep text-white font-bold py-2.5 rounded-xl text-xs flex items-center justify-center gap-2 transition-colors shadow-sm"
                >
                  <span>Plan Your Retreat</span>
                  <ArrowRight className="w-3.5 h-3.5 text-ministry-gold" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Retreat Preparation Guidance */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-card border border-gray-100">
          <div className="max-w-3xl mx-auto space-y-6 text-center">
            <ShieldCheck className="w-12 h-12 text-ministry-gold mx-auto" />
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ministry-forest">
              Planning Your Spiritual Retreat at Ibudo Iyanu
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Ibudo Iyanu welcomes believers, pastors, ministers, and families from all denominations seeking solitary fasting, quiet reflection, and corporate prayer. Our mountain grounds provide a safe, peaceful atmosphere away from the distractions of city life.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left pt-4">
              <div className="p-4 rounded-xl bg-ministry-ivory border border-gray-200">
                <h4 className="font-bold text-xs uppercase text-ministry-forest mb-1">What to Bring</h4>
                <p className="text-xs text-gray-600">Holy Bible, prayer notebooks, modest clothing, personal toiletries, and bedding items for extended retreat stays.</p>
              </div>

              <div className="p-4 rounded-xl bg-ministry-ivory border border-gray-200">
                <h4 className="font-bold text-xs uppercase text-ministry-forest mb-1">Mountain Etiquette</h4>
                <p className="text-xs text-gray-600">Maintaining reverence, respect for fellow worshippers in prayer, modesty, and holy conduct on the prayer mountain.</p>
              </div>

              <div className="p-4 rounded-xl bg-ministry-ivory border border-gray-200">
                <h4 className="font-bold text-xs uppercase text-ministry-forest mb-1">Check-in & Registration</h4>
                <p className="text-xs text-gray-600">Visitors and retreat campers register upon arrival at the mountain administration office for room allocation.</p>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={() => onNavigate('visit')}
                className="bg-gradient-to-r from-ministry-gold to-ministry-warmGold text-ministry-dark font-extrabold px-8 py-3.5 rounded-full text-sm shadow-md hover:brightness-105 transition-all inline-flex items-center gap-2"
              >
                <span>PLAN YOUR RETREAT TO IBUDO IYANU</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

