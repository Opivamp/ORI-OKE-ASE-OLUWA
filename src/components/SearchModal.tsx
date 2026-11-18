import React, { useState } from 'react';
import { Search, X, ArrowRight, Calendar, Building2, MapPin, Sparkles, BookOpen } from 'lucide-react';
import { ministryConfig } from '../data/ministryData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onNavigate }) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const searchableItems = [
    { title: 'Night of Encounter (Monthly Vigil)', desc: 'Second Wednesday to Friday, 12 AM - 4 AM', page: 'programmes', icon: <Sparkles className="w-4 h-4 text-ministry-gold" /> },
    { title: 'Back to Sender Programme', desc: 'Last Friday of every month, 10 AM - 2 PM', page: 'programmes', icon: <Calendar className="w-4 h-4 text-ministry-gold" /> },
    { title: "Men's Programme (Men Only)", desc: 'Last day of every month, 9 AM - 10 AM', page: 'programmes', icon: <Calendar className="w-4 h-4 text-ministry-gold" /> },
    { title: 'Daily Prayer Sessions', desc: '12 PM - 2 PM, 6 PM - 7 PM, Midnight Vigil 12 AM - 2 AM', page: 'programmes', icon: <Calendar className="w-4 h-4 text-ministry-gold" /> },
    { title: 'Sunday Services', desc: '8:30 AM - 12 PM & 4 PM - 6 PM', page: 'programmes', icon: <Calendar className="w-4 h-4 text-ministry-gold" /> },
    { title: 'Prophet Sunday Olawale', desc: 'Founder & General Overseer established 2014', page: 'about', icon: <BookOpen className="w-4 h-4 text-ministry-gold" /> },
    { title: 'Vision & 9 Mission Statements', desc: 'The divine mandates and calling of the ministry', page: 'about', icon: <BookOpen className="w-4 h-4 text-ministry-gold" /> },
    { title: 'Main Prayer Auditorium', desc: 'Consecrated altar with terrazzo cross and prayer platform', page: 'facilities', icon: <Building2 className="w-4 h-4 text-ministry-gold" /> },
    { title: 'Retreat Accommodation Lodges', desc: 'Peaceful guest chalets and rooms for fasting stays', page: 'facilities', icon: <Building2 className="w-4 h-4 text-ministry-gold" /> },
    { title: 'Prayer Grounds & Open-Air Gazebo', desc: 'Tree-shaded quiet groves for personal prayer', page: 'facilities', icon: <Building2 className="w-4 h-4 text-ministry-gold" /> },
    { title: 'Plan Your Mountain Visit', desc: 'KM 54/400 New Oyo-Ogbomoso Expressway travel directions', page: 'visit', icon: <MapPin className="w-4 h-4 text-ministry-gold" /> },
    { title: 'Testimonies & Miracles', desc: 'Submit and read divine accounts of answered prayers', page: 'testimonies', icon: <Sparkles className="w-4 h-4 text-ministry-gold" /> },
    { title: 'Contact Ministry Office', desc: 'Visitor enquiry and prayer request correspondence', page: 'contact', icon: <MapPin className="w-4 h-4 text-ministry-gold" /> },
  ];

  const results = query.trim() === ''
    ? searchableItems.slice(0, 5)
    : searchableItems.filter(item => 
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.desc.toLowerCase().includes(query.toLowerCase())
      );

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-start justify-center p-4 pt-20">
      <div className="bg-white rounded-2xl shadow-2xl max-w-xl w-full overflow-hidden border border-gray-100 animate-fade-in">
        
        {/* Search Input Bar */}
        <div className="p-4 border-b border-gray-100 flex items-center gap-3">
          <Search className="w-5 h-5 text-ministry-forest shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search programmes, founder, retreats, location, facilities..."
            className="w-full text-sm sm:text-base text-gray-800 placeholder-gray-400 focus:outline-none"
          />
          {query && (
            <button onClick={() => setQuery('')} className="text-gray-400 hover:text-gray-600 p-1">
              <X className="w-4 h-4" />
            </button>
          )}
          <button 
            onClick={onClose}
            className="p-1 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors ml-1"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="p-3 max-h-96 overflow-y-auto divide-y divide-gray-50">
          <div className="px-3 py-1.5 text-[11px] font-bold uppercase text-gray-400 tracking-wider">
            {query ? `Search Results (${results.length})` : 'Popular Searches'}
          </div>

          {results.length === 0 ? (
            <div className="text-center py-8 text-gray-500 text-sm">
              No matching pages or programmes found for "{query}".
            </div>
          ) : (
            results.map((res, idx) => (
              <button
                key={idx}
                onClick={() => {
                  onNavigate(res.page);
                  onClose();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full text-left p-3 hover:bg-ministry-ivory rounded-xl flex items-center justify-between gap-3 group transition-colors"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-2 rounded-lg bg-ministry-forest/10 group-hover:bg-ministry-forest text-ministry-forest group-hover:text-ministry-gold transition-colors shrink-0">
                    {res.icon}
                  </div>
                  <div className="truncate">
                    <div className="font-bold text-xs sm:text-sm text-ministry-dark group-hover:text-ministry-forest transition-colors">
                      {res.title}
                    </div>
                    <div className="text-[11px] text-gray-500 truncate">
                      {res.desc}
                    </div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-ministry-forest group-hover:translate-x-0.5 transition-all shrink-0" />
              </button>
            ))
          )}
        </div>

      </div>
    </div>
  );
};

