import React from 'react';
import { Calendar, Clock, AlertCircle, Sparkles, Shield, Flame, Users, CheckCircle, ArrowRight } from 'lucide-react';
import { ministryConfig } from '../data/ministryData';

interface ProgrammesPageProps {
  onNavigate: (page: string) => void;
}

export const ProgrammesPage: React.FC<ProgrammesPageProps> = ({ onNavigate }) => {
  const { schedules } = ministryConfig;

  return (
    <div className="bg-ministry-ivory min-h-screen py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 bg-ministry-forest/10 text-ministry-forest px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            <Calendar className="w-4 h-4 text-ministry-gold" />
            <span>Spiritual Calendar & Prayer Timetables</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-ministry-deep tracking-tight">
            Programmes & Prayer Schedule
          </h1>
          <p className="font-serif italic text-base sm:text-xl text-ministry-forest font-medium">
            Join us for powerful prayers, divine encounters and spiritual growth.
          </p>
        </div>

        {/* Section 1: Daily and Sunday Programmes Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Daily Card */}
          <div className="bg-white rounded-2xl shadow-card border border-gray-100 overflow-hidden flex flex-col justify-between">
            <div>
              <div className="bg-ministry-forest text-white p-5 border-b-2 border-ministry-gold flex items-center justify-between">
                <div>
                  <span className="text-xs text-ministry-gold font-bold uppercase tracking-wider block">
                    Ongoing Fire on the Altar
                  </span>
                  <h2 className="font-serif text-xl sm:text-2xl font-bold">
                    A. Daily Programmes (Monday – Saturday)
                  </h2>
                </div>
                <Flame className="w-7 h-7 text-ministry-gold shrink-0" />
              </div>

              <div className="p-6 space-y-4">
                <p className="text-xs sm:text-sm text-gray-600">
                  Every day of the week, the gates of Ibudo Iyanu remain open for scheduled intercessions, personal prayer walks, and corporate vigils:
                </p>

                <div className="space-y-3">
                  {schedules.daily.map((item, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-ministry-ivory border border-gray-200/80 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-ministry-forest/10 flex items-center justify-center text-ministry-forest font-bold text-sm">
                          0{idx + 1}
                        </div>
                        <div>
                          <div className="font-bold text-sm sm:text-base text-ministry-dark">
                            {item.name}
                          </div>
                          <div className="text-[11px] text-gray-500">
                            {idx === 0 && "Mid-day spiritual alignment and fasting break"}
                            {idx === 1 && "Evening praise, scripture exhortation and communion"}
                            {idx === 2 && "Midnight warfare, breaking spiritual cages and darkness"}
                          </div>
                        </div>
                      </div>
                      <div className="bg-white px-3 py-1.5 rounded-lg border border-gray-200 text-ministry-forest font-mono text-xs sm:text-sm font-bold shadow-xs">
                        {item.time}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-5 bg-gray-50 border-t border-gray-100 text-xs text-gray-600 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-ministry-forest shrink-0" />
              <span>Free accommodation is available for visitors staying for daily prayer sessions.</span>
            </div>
          </div>

          {/* Sunday Card */}
          <div className="bg-white rounded-2xl shadow-card border border-gray-100 overflow-hidden flex flex-col justify-between">
            <div>
              <div className="bg-ministry-forest text-white p-5 border-b-2 border-ministry-gold flex items-center justify-between">
                <div>
                  <span className="text-xs text-ministry-gold font-bold uppercase tracking-wider block">
                    The Lord's Day
                  </span>
                  <h2 className="font-serif text-xl sm:text-2xl font-bold">
                    B. Sunday Programmes
                  </h2>
                </div>
                <Users className="w-7 h-7 text-ministry-gold shrink-0" />
              </div>

              <div className="p-6 space-y-4">
                <p className="text-xs sm:text-sm text-gray-600">
                  Every Sunday is marked by celebration, profound teaching of God's Word, healing, and personal deliverance ministrations:
                </p>

                <div className="space-y-3">
                  {schedules.sunday.map((item, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-ministry-ivory border border-gray-200/80 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-ministry-forest/10 flex items-center justify-center text-ministry-forest font-bold text-sm">
                          0{idx + 1}
                        </div>
                        <div>
                          <div className="font-bold text-sm sm:text-base text-ministry-dark">
                            {item.name}
                          </div>
                          <div className="text-[11px] text-gray-500">
                            {idx === 0 && "Worship, prophetic teaching, thanksgiving and prayers"}
                            {idx === 1 && "Intense miracle prayer service and prophetic counseling"}
                          </div>
                        </div>
                      </div>
                      <div className="bg-white px-3 py-1.5 rounded-lg border border-gray-200 text-ministry-forest font-mono text-xs sm:text-sm font-bold shadow-xs">
                        {item.time}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200/60 text-xs text-amber-900">
                  <span className="font-bold block mb-1">First-Time Visitors on Sunday:</span>
                  Special orientation and prayer ministration follow immediately after each Sunday service.
                </div>
              </div>
            </div>

            <div className="p-5 bg-gray-50 border-t border-gray-100 text-xs text-gray-600 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-ministry-forest shrink-0" />
              <span>Transportation assistance is accessible from the main Oyo-Ogbomoso junction.</span>
            </div>
          </div>

        </div>

        {/* Section 2: SPECIAL MONTHLY PROGRAMMES */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 text-ministry-forest font-bold text-xs uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-ministry-gold" />
              <span>Supernatural Encounters</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-ministry-forest">
              C. Special Monthly Programmes
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm">
              Major monthly vigils and spiritual warfare gatherings drawing thousands from across Nigeria and abroad.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {schedules.monthly.map((prog) => (
              <div 
                key={prog.id}
                className="bg-white rounded-2xl shadow-card border border-gray-100 overflow-hidden flex flex-col justify-between hover:shadow-elevated transition-all"
              >
                <div>
                  {/* Photo Header */}
                  <div className="relative h-48 bg-ministry-deep overflow-hidden">
                    <img 
                      src={prog.image} 
                      alt={prog.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-between p-4">
                      <span className="inline-block bg-ministry-gold text-ministry-dark font-extrabold text-xs px-2.5 py-1 rounded shadow self-start">
                        Programme {prog.letter}
                      </span>
                      <span className="text-xs text-gray-200 font-semibold uppercase tracking-wider">
                        {prog.category}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4">
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-ministry-forest">
                      {prog.title}
                    </h3>

                    <div className="space-y-2 text-xs sm:text-sm text-gray-700">
                      <div className="flex items-start gap-2.5">
                        <Calendar className="w-4 h-4 text-ministry-gold shrink-0 mt-0.5" />
                        <div>
                          <span className="text-[11px] uppercase font-bold text-gray-500 block">Schedule:</span>
                          <span className="font-semibold text-ministry-dark">{prog.schedule}</span>
                        </div>
                      </div>

                      <div className="flex items-start gap-2.5">
                        <Clock className="w-4 h-4 text-ministry-forest shrink-0 mt-0.5" />
                        <div>
                          <span className="text-[11px] uppercase font-bold text-gray-500 block">Time:</span>
                          <span className="font-mono font-bold text-ministry-forest">{prog.time}</span>
                        </div>
                      </div>

                      {prog.specialCondition && (
                        <div className="bg-amber-50 p-2.5 rounded-lg border border-amber-200 text-xs text-amber-950 font-serif italic flex items-start gap-2 mt-2">
                          <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                          <span>{prog.specialCondition}</span>
                        </div>
                      )}
                    </div>

                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed pt-2 border-t border-gray-100">
                      {prog.description}
                    </p>
                  </div>
                </div>

                <div className="p-5 bg-gray-50 border-t border-gray-100">
                  <button
                    onClick={() => onNavigate('visit')}
                    className="w-full bg-ministry-forest hover:bg-ministry-deep text-white font-bold py-2.5 rounded-xl text-xs flex items-center justify-center gap-2 transition-colors shadow-sm"
                  >
                    <span>Reserve Retreat Space</span>
                    <ArrowRight className="w-3.5 h-3.5 text-ministry-gold" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

