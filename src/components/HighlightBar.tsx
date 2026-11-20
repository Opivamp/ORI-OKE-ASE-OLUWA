import React from 'react';
import { Users, Home, Calendar, MapPin } from 'lucide-react';

interface HighlightBarProps {
  onNavigate: (page: string) => void;
}

export const HighlightBar: React.FC<HighlightBarProps> = ({ onNavigate }) => {
  const items = [
    {
      icon: (
        <svg className="w-6 h-6 text-ministry-forest" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 11v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6" />
          <path d="M12 2v9" />
          <path d="m9 5 3-3 3 3" />
          <path d="M9 14h6" />
        </svg>
      ),
      title: "Prayer Grounds",
      subtitle: "Sacred mountain terrain",
      page: "facilities",
    },
    {
      icon: <Users className="w-6 h-6 text-ministry-forest" />,
      title: "Spiritual Retreats",
      subtitle: "Fasting & renewal stays",
      page: "visit",
    },
    {
      icon: <Home className="w-6 h-6 text-ministry-forest" />,
      title: "Comfortable Facilities",
      subtitle: "Auditorium & guest rooms",
      page: "facilities",
    },
    {
      icon: <Calendar className="w-6 h-6 text-ministry-forest" />,
      title: "Powerful Programmes",
      subtitle: "Daily & monthly vigils",
      page: "programmes",
    },
    {
      icon: <MapPin className="w-6 h-6 text-ministry-forest" />,
      title: "Easy Access",
      subtitle: "Oyo-Ogbomoso Expressway",
      page: "visit",
    },
  ];

  return (
    <div className="bg-[#FAF9F5] border-y border-gray-200/80 shadow-sm py-4 lg:py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Responsive Grid matching the 5-item bar in screenshot */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-gray-200/90">
          {items.map((item, index) => (
            <button
              key={index}
              onClick={() => {
                onNavigate(item.page);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`flex items-center justify-center gap-3 py-2 px-3 hover:bg-white/80 rounded-xl transition-all group text-left w-full focus:outline-none ${
                index === 4 ? 'col-span-2 md:col-span-1 max-w-xs mx-auto md:max-w-none' : ''
              }`}
            >
              <div className="p-2.5 rounded-full bg-ministry-forest/10 group-hover:bg-ministry-forest group-hover:text-ministry-gold text-ministry-forest transition-colors shrink-0">
                {item.icon}
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xs sm:text-sm text-ministry-dark group-hover:text-ministry-forest transition-colors tracking-tight">
                  {item.title}
                </span>
                <span className="text-[11px] text-gray-500 hidden sm:block">
                  {item.subtitle}
                </span>
              </div>
            </button>
          ))}
        </div>

      </div>
    </div>
  );
};
