import React from 'react';
import { Calendar, Clock, MapPin, Sparkles, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';
import { ministryConfig } from '../data/ministryData';

interface EventsPageProps {
  onNavigate: (page: string) => void;
}

export const EventsPage: React.FC<EventsPageProps> = ({ onNavigate }) => {
  const { schedules, location } = ministryConfig;

  return (
    <div className="bg-ministry-ivory min-h-screen py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 bg-ministry-forest/10 text-ministry-forest px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            <Calendar className="w-4 h-4 text-ministry-gold" />
            <span>Spiritual Gatherings & Divine Appointments</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-ministry-deep tracking-tight">
            Ministry Events & Special Programmes
          </h1>
          <p className="font-serif italic text-base sm:text-xl text-ministry-forest font-medium">
            Join the congregation of saints for power, deliverance, and divine encounters.
          </p>
        </div>

        {/* Feature Event Spotlight: Night of Encounter */}
        <div className="bg-gradient-to-r from-ministry-forest via-ministry-deep to-ministry-forest text-white rounded-2xl shadow-elevated overflow-hidden border-2 border-ministry-gold/60 p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 bg-ministry-gold text-ministry-dark font-extrabold text-xs px-3.5 py-1 rounded-full uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Premier Monthly Mountain Vigil</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
                NIGHT OF ENCOUNTER
              </h2>
              <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
                A sacred 3-night all-night mountain vigil held from the Second Wednesday through Friday of every month. Thousands gather under the open heavens to pray for destiny breakthroughs, family deliverance, health restorations, and Holy Spirit revival.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-2">
                <div className="bg-white/10 backdrop-blur-sm p-3 rounded-xl border border-white/20">
                  <span className="text-ministry-gold font-bold block mb-0.5">When it holds:</span>
                  <span className="text-white font-medium">Second Wednesday to Friday of Every Month</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-3 rounded-xl border border-white/20">
                  <span className="text-ministry-gold font-bold block mb-0.5">Vigil Hours:</span>
                  <span className="font-mono text-white font-bold">12:00 AM – 4:00 AM (Midnight)</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('visit')}
                  className="bg-gradient-to-r from-ministry-gold to-ministry-warmGold text-ministry-dark font-extrabold px-6 py-3 rounded-full text-xs sm:text-sm shadow-md hover:brightness-105 transition-all inline-flex items-center gap-2"
                >
                  <span>Plan Your Attendance & Lodging</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 aspect-[4/3] bg-black">
                <img 
                  src="/images/real/photo_2026-11-18_02-00-47.jpg" 
                  alt="Night of Encounter vigil worshippers lifting hands in prayer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                  <span className="text-xs text-white font-serif italic">
                    Real Photo: Fervent Midnight Vigil Prayers at Ibudo Iyanu
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Regular & Recurring Events Grid */}
        <div className="space-y-6">
          <h3 className="font-serif text-2xl font-bold text-ministry-forest">
            Confirmed Recurring Programmes
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Back to Sender */}
            <div className="bg-white rounded-2xl p-6 shadow-card border border-gray-100 flex flex-col justify-between hover:border-ministry-gold/60 transition-all">
              <div className="space-y-3">
                <div className="h-40 rounded-xl overflow-hidden bg-ministry-deep">
                  <img src="/images/prog-back-to-sender.png" alt="Back to Sender" className="w-full h-full object-cover" />
                </div>
                <div className="inline-block bg-ministry-forest/10 text-ministry-forest text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                  Monthly Deliverance Service
                </div>
                <h4 className="font-serif text-xl font-bold text-ministry-forest">
                  Back to Sender Programme
                </h4>
                <div className="space-y-1.5 text-xs text-gray-700">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-ministry-gold" />
                    <span>Last Friday of every month</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-ministry-forest" />
                    <span className="font-mono font-bold text-ministry-forest">10:00 AM – 2:00 PM</span>
                  </div>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed pt-2 border-t border-gray-100">
                  Anointed spiritual warfare service terminating evil projections, reversing afflictions, and establishing covenant protection.
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 mt-4">
                <button
                  onClick={() => onNavigate('visit')}
                  className="w-full bg-ministry-forest text-white py-2 rounded-lg text-xs font-bold hover:bg-ministry-deep transition-all"
                >
                  Plan to Attend
                </button>
              </div>
            </div>

            {/* Men's Programme */}
            <div className="bg-white rounded-2xl p-6 shadow-card border border-gray-100 flex flex-col justify-between hover:border-ministry-gold/60 transition-all">
              <div className="space-y-3">
                <div className="h-40 rounded-xl overflow-hidden bg-ministry-deep">
                  <img src="/images/real/photo_2026-11-18_02-00-52.jpg" alt="Men's Programme" className="w-full h-full object-cover" />
                </div>
                <div className="inline-block bg-ministry-forest/10 text-ministry-forest text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                  Men's Ministry Empowerment
                </div>
                <h4 className="font-serif text-xl font-bold text-ministry-forest">
                  Men's Programme (Men Only)
                </h4>
                <div className="space-y-1.5 text-xs text-gray-700">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-ministry-gold" />
                    <span>Last day of every month</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-ministry-forest" />
                    <span className="font-mono font-bold text-ministry-forest">9:00 AM – 10:00 AM</span>
                  </div>
                  <div className="bg-amber-50 p-2 rounded text-[11px] text-amber-900 border border-amber-200/50">
                    * If the last day falls on a Sunday, holds from 3:00 PM – 4:00 PM.
                  </div>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed pt-2 border-t border-gray-100">
                  Spiritual empowerment and intercession exclusively for fathers, husbands, and young men leading godly homes and careers.
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 mt-4">
                <button
                  onClick={() => onNavigate('visit')}
                  className="w-full bg-ministry-forest text-white py-2 rounded-lg text-xs font-bold hover:bg-ministry-deep transition-all"
                >
                  Plan to Attend
                </button>
              </div>
            </div>

            {/* Sunday Service */}
            <div className="bg-white rounded-2xl p-6 shadow-card border border-gray-100 flex flex-col justify-between hover:border-ministry-gold/60 transition-all">
              <div className="space-y-3">
                <div className="h-40 rounded-xl overflow-hidden bg-ministry-deep">
                  <img src="/images/real/photo_2026-11-18_02-00-24.jpg" alt="Sunday Worship" className="w-full h-full object-cover" />
                </div>
                <div className="inline-block bg-ministry-forest/10 text-ministry-forest text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                  Weekly Holy Convocation
                </div>
                <h4 className="font-serif text-xl font-bold text-ministry-forest">
                  Sunday Services & Special Session
                </h4>
                <div className="space-y-1.5 text-xs text-gray-700">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-ministry-gold" />
                    <span>Every Sunday</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-ministry-forest" />
                    <span className="font-mono font-bold text-ministry-forest">8:30 AM – 12:00 PM & 4:00 PM – 6:00 PM</span>
                  </div>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed pt-2 border-t border-gray-100">
                  Vibrant praise, apostolic teaching, prophetic declarations, and special afternoon prayer ministrations for families.
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 mt-4">
                <button
                  onClick={() => onNavigate('visit')}
                  className="w-full bg-ministry-forest text-white py-2 rounded-lg text-xs font-bold hover:bg-ministry-deep transition-all"
                >
                  Plan to Attend
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

