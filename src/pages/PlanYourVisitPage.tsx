import React, { useState } from 'react';
import { MapPin, Navigation, Calendar, Clock, CheckCircle2, Phone, Mail, Send, Compass, ShieldCheck } from 'lucide-react';
import { ministryConfig } from '../data/ministryData';

interface PlanYourVisitPageProps {
  onNavigate: (page: string) => void;
}

export const PlanYourVisitPage: React.FC<PlanYourVisitPageProps> = () => {
  const { location, contact, schedules } = ministryConfig;

  const [enquiry, setEnquiry] = useState({
    name: '',
    phone: '',
    email: '',
    arrivalDate: '',
    durationDays: '1-3 days',
    visitType: 'Personal Prayer Retreat',
    groupSize: '1 person',
    specialRequirements: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="bg-ministry-ivory min-h-screen py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 bg-ministry-forest/10 text-ministry-forest px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-4 h-4 text-ministry-gold" />
            <span>Sacred Mountain Sanctuary</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-ministry-deep tracking-tight">
            Plan Your Visit to Ibudo Iyanu
          </h1>
          <p className="font-serif italic text-base sm:text-xl text-ministry-forest font-medium">
            Prayer City, KM 54/400 New Oyo - Ogbomoso Expressway, Oyo State, Nigeria
          </p>
        </div>

        {/* Location Banner & Official Signboard Card */}
        <div className="bg-white rounded-2xl shadow-card border border-gray-100 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-block bg-ministry-gold/20 text-ministry-forest text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Official Location & Landmarks
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ministry-forest">
                Convenient, Direct Highway Access
              </h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Ori Oke Ase Oluwa (Ibudo Iyanu) is strategically located along the modern <strong>New Oyo - Ogbomoso Dual Carriageway Expressway at KM 54/400</strong>. It is easily accessible by private vehicle, commercial interstate transit, and charted buses traveling between Southwestern and Northern Nigeria.
              </p>

              <div className="space-y-3 text-xs sm:text-sm">
                <div className="p-3.5 rounded-xl bg-ministry-ivory border border-gray-200 flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-ministry-forest shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-ministry-dark block">Official Camp Address:</span>
                    <span className="text-gray-700">{location.address}</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-ministry-ivory border border-gray-200 flex items-start gap-3">
                  <Compass className="w-5 h-5 text-ministry-forest shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-ministry-dark block">Prominent Highway Landmark:</span>
                    <span className="text-gray-700">Look for the prominent official white signpost marked <em>'ORI OKE ASE OLUWA PRAYER MINISTRY (IBUDO IYANU)'</em> at KM 54/400 on the New Oyo-Ogbomoso Expressway.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-elevated border-4 border-white aspect-[4/3] bg-gray-100">
                <img 
                  src="/images/real/photo_2026-11-18_02-01-47.jpg" 
                  alt="Official Ori Oke Ase Oluwa Entrance Signpost"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex items-end p-4 text-white">
                  <div>
                    <span className="text-xs font-bold text-ministry-gold block">Authentic Roadside Signpost:</span>
                    <p className="text-[11px] text-gray-200">Expressway landmark guiding visitors directly into Prayer City.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Travel Directions Grid */}
        <div className="space-y-4">
          <h3 className="font-serif text-2xl font-bold text-ministry-forest text-center">
            Travel Directions to the Prayer Mountain
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-ministry-ivory flex items-center justify-center text-ministry-forest font-bold">
                01
              </div>
              <h4 className="font-serif text-base font-bold text-ministry-forest">
                From Lagos & Ibadan
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Take the Lagos-Ibadan Expressway to Ibadan, then connect to the New Ibadan-Oyo-Ogbomoso Expressway heading towards Ogbomoso. Continue along the dual expressway until KM 54/400 where the official entrance gate and signpost appear.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-ministry-ivory flex items-center justify-center text-ministry-forest font-bold">
                02
              </div>
              <h4 className="font-serif text-base font-bold text-ministry-forest">
                From Ogbomoso & Ilorin
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Take the expressway south towards Oyo Town. The mountain grounds are located shortly along the New Oyo-Ogbomoso corridor at KM 54/400 with visible signage for easy turn-in.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-ministry-ivory flex items-center justify-center text-ministry-forest font-bold">
                03
              </div>
              <h4 className="font-serif text-base font-bold text-ministry-forest">
                From Abuja & Northern States
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Travel via Jebba/Ilorin route down to Ogbomoso bypass and enter the New Oyo-Ogbomoso dual expressway. Chartered buses and private transit enjoy smooth, direct highway driving.
              </p>
            </div>

          </div>
        </div>

        {/* Visitor Enquiry Form */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-card border border-gray-100 max-w-3xl mx-auto">
          {submitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 bg-green-100 text-green-700 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-ministry-forest">
                Your Mountain Visit Enquiry Has Been Sent!
              </h3>
              <p className="text-sm text-gray-600 max-w-md mx-auto">
                Thank you for contacting Ori Oke Ase Oluwa. Our reception ministers have noted your planned visit date. We look forward to welcoming you to Prayer City!
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 bg-ministry-forest text-white px-6 py-2.5 rounded-full text-xs font-bold hover:bg-ministry-deep transition-all"
              >
                Submit Another Enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="border-b border-gray-100 pb-4">
                <h3 className="font-serif text-2xl font-bold text-ministry-forest">
                  Register Your Planned Mountain Visit
                </h3>
                <p className="text-xs text-gray-500">
                  Notify our protocol and accommodation team in advance for a seamless stay.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={enquiry.name}
                    onChange={(e) => setEnquiry({ ...enquiry, name: e.target.value })}
                    placeholder="e.g. Deacon Emmanuel Adeleke"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-ministry-forest"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={enquiry.phone}
                    onChange={(e) => setEnquiry({ ...enquiry, phone: e.target.value })}
                    placeholder="e.g. +234 800 000 0000"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-ministry-forest"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    value={enquiry.email}
                    onChange={(e) => setEnquiry({ ...enquiry, email: e.target.value })}
                    placeholder="e.g. adeleke@example.com"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-ministry-forest"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    Expected Arrival Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={enquiry.arrivalDate}
                    onChange={(e) => setEnquiry({ ...enquiry, arrivalDate: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-ministry-forest"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    Purpose of Visit
                  </label>
                  <select
                    value={enquiry.visitType}
                    onChange={(e) => setEnquiry({ ...enquiry, visitType: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-lg border border-gray-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-ministry-forest"
                  >
                    <option value="Personal Prayer Retreat">Personal Prayer Retreat</option>
                    <option value="Night of Encounter Vigil">Night of Encounter Vigil</option>
                    <option value="Back to Sender Programme">Back to Sender Programme</option>
                    <option value="Men's Programme">Men's Programme</option>
                    <option value="Sunday Service">Sunday Service</option>
                    <option value="Group / Church Fasting">Group / Church Fasting</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    Stay Duration
                  </label>
                  <select
                    value={enquiry.durationDays}
                    onChange={(e) => setEnquiry({ ...enquiry, durationDays: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-lg border border-gray-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-ministry-forest"
                  >
                    <option value="Day Visit (No lodging)">Day Visit (No lodging)</option>
                    <option value="1 Night (Vigil)">1 Night (Vigil)</option>
                    <option value="2-3 Days">2-3 Days (Weekend Retreat)</option>
                    <option value="4-7 Days">4-7 Days (Fasting Retreat)</option>
                    <option value="Extended Stay">Extended Stay (1+ Week)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    Party Size
                  </label>
                  <select
                    value={enquiry.groupSize}
                    onChange={(e) => setEnquiry({ ...enquiry, groupSize: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-lg border border-gray-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-ministry-forest"
                  >
                    <option value="1 person">Individual (1 Person)</option>
                    <option value="Couple (2)">Couple (2 Persons)</option>
                    <option value="Family (3-5)">Family (3-5 Persons)</option>
                    <option value="Small Group (6-15)">Small Group (6-15 Persons)</option>
                    <option value="Church Delegation (15+)">Church Delegation (15+ Persons)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                  Additional Notes or Prayer Requests (Optional)
                </label>
                <textarea
                  rows={3}
                  value={enquiry.specialRequirements}
                  onChange={(e) => setEnquiry({ ...enquiry, specialRequirements: e.target.value })}
                  placeholder="Any specific prayer intention, special mobility assistance or arrival notes..."
                  className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-ministry-forest"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-ministry-gold to-ministry-warmGold text-ministry-dark font-extrabold py-3.5 rounded-xl shadow-md hover:brightness-105 active:scale-95 transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                {isSubmitting ? (
                  <span>Registering Your Visit...</span>
                ) : (
                  <>
                    <span>REGISTER YOUR MOUNTAIN VISIT</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};

