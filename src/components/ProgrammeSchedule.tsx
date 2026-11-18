import React from 'react';
import { Calendar, Clock, AlertCircle } from 'lucide-react';
import { ministryConfig } from '../data/ministryData';

interface ProgrammeScheduleProps {
  onNavigate?: (page: string) => void;
}

export const ProgrammeSchedule: React.FC<ProgrammeScheduleProps> = ({ onNavigate }) => {
  const { schedules } = ministryConfig;

  return (
    <div className="bg-white rounded-2xl shadow-card overflow-hidden border border-gray-100 flex flex-col h-full">
      
      {/* Dark Green Header Strip matching screenshot */}
      <div className="bg-ministry-forest text-white p-4 sm:p-5 flex items-center gap-3.5 border-b-2 border-ministry-gold">
        <div className="p-2 rounded-lg bg-ministry-deep text-ministry-gold shrink-0">
          <Calendar className="w-6 h-6" />
        </div>
        <div>
          <h2 className="font-serif text-lg sm:text-2xl font-bold tracking-tight text-white">
            Weekly & Monthly Programme Schedule
          </h2>
          <p className="font-serif italic text-ministry-gold text-xs sm:text-sm font-medium">
            Join us for powerful prayer and divine encounter
          </p>
        </div>
      </div>

      <div className="p-4 sm:p-6 space-y-5 flex-1 bg-[#FCFCFA]">
        
        {/* Box 1: DAILY PROGRAMMES (MONDAY - SATURDAY) */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
          <div className="bg-ministry-forest text-white px-4 py-2 text-xs sm:text-sm font-bold tracking-wider uppercase flex items-center justify-between">
            <span>1. DAILY PROGRAMMES (MONDAY – SATURDAY)</span>
            <span className="text-[10px] text-ministry-gold font-normal lowercase tracking-normal">every week</span>
          </div>
          <div className="p-3.5 divide-y divide-gray-100 space-y-2.5">
            {schedules.daily.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between pt-2 first:pt-0 text-xs sm:text-sm">
                <div className="flex items-center gap-2.5 font-semibold text-ministry-dark">
                  <Clock className="w-4 h-4 text-ministry-forest shrink-0" />
                  <span>{item.name}</span>
                </div>
                <div className="font-medium text-ministry-forest bg-ministry-ivory px-2.5 py-1 rounded-md border border-gray-100 font-mono text-xs">
                  {item.time}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Box 2: SUNDAY PROGRAMMES */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
          <div className="bg-ministry-forest text-white px-4 py-2 text-xs sm:text-sm font-bold tracking-wider uppercase flex items-center justify-between">
            <span>2. SUNDAY PROGRAMMES</span>
            <span className="text-[10px] text-ministry-gold font-normal lowercase tracking-normal">Lord's day</span>
          </div>
          <div className="p-3.5 divide-y divide-gray-100 space-y-2.5">
            {schedules.sunday.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between pt-2 first:pt-0 text-xs sm:text-sm">
                <div className="flex items-center gap-2.5 font-semibold text-ministry-dark">
                  <Clock className="w-4 h-4 text-ministry-forest shrink-0" />
                  <span>{item.name}</span>
                </div>
                <div className="font-medium text-ministry-forest bg-ministry-ivory px-2.5 py-1 rounded-md border border-gray-100 font-mono text-xs">
                  {item.time}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Box 3: SPECIAL MONTHLY PROGRAMMES */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
          <div className="bg-ministry-forest text-white px-4 py-2 text-xs sm:text-sm font-bold tracking-wider uppercase flex items-center justify-between">
            <span>3. SPECIAL MONTHLY PROGRAMMES</span>
            <span className="text-[10px] text-ministry-gold font-normal lowercase tracking-normal">monthly miracles</span>
          </div>

          <div className="p-3.5 space-y-3.5">
            {schedules.monthly.map((prog) => (
              <div 
                key={prog.id} 
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 p-2.5 rounded-lg bg-gray-50/70 border border-gray-100 hover:border-ministry-gold/60 transition-colors"
              >
                {/* Programme Image Thumbnail matching reference */}
                <div className="relative w-full sm:w-28 h-24 sm:h-20 rounded-lg overflow-hidden shrink-0 shadow-sm bg-ministry-deep">
                  <img 
                    src={prog.image} 
                    alt={prog.title}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute top-1 left-1 bg-ministry-forest text-white font-bold text-[10px] w-5 h-5 rounded flex items-center justify-center shadow">
                    {prog.letter}
                  </div>
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <h4 className="font-bold text-xs sm:text-sm text-ministry-forest tracking-tight">
                      {prog.letter}. {prog.title}
                    </h4>
                  </div>

                  <div className="space-y-1 text-xs text-gray-700">
                    <div className="flex items-center gap-1.5 text-gray-700">
                      <Calendar className="w-3.5 h-3.5 text-ministry-forest shrink-0" />
                      <span className="font-medium">{prog.schedule}</span>
                    </div>

                    <div className="flex items-center gap-1.5 text-ministry-forest font-semibold">
                      <Clock className="w-3.5 h-3.5 text-ministry-forest shrink-0" />
                      <span>{prog.time}</span>
                    </div>

                    {prog.specialCondition && (
                      <div className="flex items-start gap-1 text-[11px] text-amber-900 bg-amber-50 p-1 rounded font-serif italic mt-1 border border-amber-200/50">
                        <AlertCircle className="w-3 h-3 text-amber-700 shrink-0 mt-0.5" />
                        <span>{prog.specialCondition}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
};

