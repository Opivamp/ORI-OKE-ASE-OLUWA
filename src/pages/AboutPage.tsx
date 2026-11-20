import React from 'react';
import { Eye, Target, Compass, Award, Heart, Shield, BookOpen, Users, Handshake, Globe, Sparkles, GraduationCap, HelpingHand, ArrowRight } from 'lucide-react';
import { ministryConfig } from '../data/ministryData';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const { about, founder, founderTitle, yearEstablished, location, vision, missions } = ministryConfig;

  const missionIcons: Record<string, React.ReactNode> = {
    Heart: <Heart className="w-5 h-5 text-ministry-forest" />,
    ShieldAlert: <Shield className="w-5 h-5 text-ministry-forest" />,
    BookOpen: <BookOpen className="w-5 h-5 text-ministry-forest" />,
    Users: <Users className="w-5 h-5 text-ministry-forest" />,
    Handshake: <Handshake className="w-5 h-5 text-ministry-forest" />,
    Globe: <Globe className="w-5 h-5 text-ministry-forest" />,
    Sparkles: <Sparkles className="w-5 h-5 text-ministry-forest" />,
    GraduationCap: <GraduationCap className="w-5 h-5 text-ministry-forest" />,
    HelpingHand: <HelpingHand className="w-5 h-5 text-ministry-forest" />,
  };

  return (
    <div className="bg-ministry-ivory min-h-screen py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 bg-ministry-forest/10 text-ministry-forest px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            <Compass className="w-4 h-4 text-ministry-gold" />
            <span>Sacred Calling & History</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-ministry-deep tracking-tight">
            About Ori Oke Ase Oluwa
          </h1>
          <p className="font-serif italic text-base sm:text-xl text-ministry-forest font-medium">
            (Ibudo Iyanu) — A Place of Divine Encounter, Prayer and Transformation.
          </p>
        </div>

        {/* Section 1: Detailed Story & Ministry Foundations */}
        <div className="bg-white rounded-2xl shadow-card border border-gray-100 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10">
            
            <div className="lg:col-span-7 space-y-4 text-gray-700 leading-relaxed text-sm sm:text-base">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ministry-forest">
                Our Origin & Spiritual Sanctuary
              </h2>
              <p className="font-semibold text-ministry-dark">
                {about.leadParagraph}
              </p>
              {about.bodyParagraphs.map((para, i) => (
                <p key={i} className="text-gray-600">
                  {para}
                </p>
              ))}

              <div className="pt-2 flex flex-wrap gap-4 text-xs font-medium text-gray-600">
                <div className="bg-ministry-ivory px-3.5 py-2 rounded-lg border border-gray-200">
                  <span className="font-bold text-ministry-forest">Location:</span> {location.city}, {location.state}
                </div>
                <div className="bg-ministry-ivory px-3.5 py-2 rounded-lg border border-gray-200">
                  <span className="font-bold text-ministry-forest">Established:</span> Year {yearEstablished}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-elevated border-4 border-white aspect-[4/3] bg-gray-100">
                <img 
                  src="/images/real/photo_2026-11-18_02-01-14.jpg" 
                  alt="Main Prayer Auditorium Altar at Ori Oke Ase Oluwa"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4 text-white">
                  <span className="text-xs font-semibold">
                    The Main Prayer Auditorium Altar with Terrazzo Cross
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Section 2: Founder and General Overseer Profile */}
        <div className="bg-gradient-to-br from-ministry-forest to-ministry-deep text-white rounded-2xl shadow-elevated overflow-hidden p-6 sm:p-10 border-2 border-ministry-gold/40">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-5 flex justify-center">
              <div className="relative w-60 h-80 sm:w-72 sm:h-96 md:w-80 md:h-[420px] rounded-2xl overflow-hidden shadow-2xl border-4 border-ministry-gold bg-white group">
                <img 
                  src="/images/founder.jpg" 
                  alt={founder}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            <div className="md:col-span-7 space-y-4 text-left">
              <div className="inline-block bg-ministry-gold text-ministry-dark font-extrabold text-xs px-3.5 py-1 rounded-full uppercase tracking-wider">
                Ministry Leadership
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
                {founder}
              </h2>
              <p className="font-serif italic text-ministry-gold text-lg sm:text-xl font-medium">
                {founderTitle} — Established 2014
              </p>
              <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
                Prophet Sunday Olawale is the visionary founder and General Overseer of Ori Oke Ase Oluwa (Ibudo Iyanu). He is an anointed minister of God with an apostolic and prophetic mandate centered on fervent prayer, holiness, deliverance, Holy Spirit empowerment, and salvation through Christ Jesus.
              </p>
              <p className="text-gray-300 text-sm leading-relaxed">
                Under his leadership since 2014, the prayer mountain has grown into an international refuge for thousands seeking divine direction, freedom from spiritual bondage, healing, and revival.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('programmes')}
                  className="bg-ministry-gold hover:bg-yellow-400 text-ministry-dark font-bold px-5 py-2.5 rounded-full text-xs sm:text-sm shadow-md transition-all inline-flex items-center gap-2"
                >
                  <span>View Ministry Programme Schedule</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Section 3: Our Divine Vision */}
        <div className="bg-white rounded-2xl shadow-card border border-gray-100 p-6 sm:p-10">
          <div className="flex items-center gap-3 mb-4 text-ministry-forest">
            <div className="p-2.5 rounded-xl bg-ministry-forest/10 text-ministry-forest">
              <Eye className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-ministry-gold uppercase tracking-wider block">
                The Guiding Light
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ministry-forest">
                Our Vision
              </h2>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-ministry-ivory border-l-4 border-ministry-gold shadow-sm">
            <p className="font-serif italic text-lg sm:text-2xl text-ministry-deep leading-relaxed font-semibold">
              “{vision}”
            </p>
          </div>
        </div>

        {/* Section 4: Our Nine Mission Statements Grid */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 text-ministry-forest font-bold text-xs uppercase tracking-wider">
              <Target className="w-4 h-4 text-ministry-gold" />
              <span>Divine Mandate</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ministry-forest">
              Our 9 Mission Statements
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm">
              The foundational pillars guiding every prayer session, programme, and evangelical initiative.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {missions.map((m) => (
              <div 
                key={m.number}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-card hover:border-ministry-gold/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-lg bg-ministry-ivory flex items-center justify-center border border-gray-100">
                      {missionIcons[m.iconName] || <Award className="w-5 h-5 text-ministry-forest" />}
                    </div>
                    <span className="text-2xl font-serif font-bold text-ministry-gold/80">
                      0{m.number}
                    </span>
                  </div>

                  <h3 className="font-serif text-base sm:text-lg font-bold text-ministry-forest mb-2">
                    {m.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {m.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="bg-ministry-forest rounded-2xl p-8 text-center text-white space-y-4">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold">
            Experience the Presence of God at Ibudo Iyanu
          </h3>
          <p className="text-gray-200 text-sm max-w-xl mx-auto">
            Whether for personal fasting, retreat, or joining our corporate vigils, your life will never remain the same.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <button
              onClick={() => onNavigate('visit')}
              className="bg-ministry-gold text-ministry-dark font-bold px-6 py-3 rounded-full text-sm shadow hover:brightness-105 transition-all"
            >
              Plan Your Mountain Visit
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-medium px-6 py-3 rounded-full text-sm transition-all"
            >
              Contact Us
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

