import React, { useState } from 'react';
import { MessageSquare, Send, Sparkles, CheckCircle2, ShieldCheck, HeartHandshake } from 'lucide-react';
import { ministryConfig } from '../data/ministryData';

interface TestimoniesPageProps {
  onNavigate: (page: string) => void;
}

export const TestimoniesPage: React.FC<TestimoniesPageProps> = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    programmeAttended: 'General Encounter / Retreat',
    testimonyTitle: '',
    testimonyDetails: '',
    consent: true,
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulating safe client-side processing without fake backend
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
            <Sparkles className="w-4 h-4 text-ministry-gold" />
            <span>Divine Acts & Testimonies of Faith</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-ministry-deep tracking-tight">
            Testimonies of Divine Encounter
          </h1>
          <p className="font-serif italic text-base sm:text-xl text-ministry-forest font-medium">
            “And they overcame him by the blood of the Lamb, and by the word of their testimony.” — Revelation 12:11
          </p>
        </div>

        {/* Introductory Spiritual Statement */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-card border border-gray-100 max-w-4xl mx-auto text-center space-y-5">
          <div className="w-16 h-16 rounded-full bg-ministry-forest/10 flex items-center justify-center mx-auto text-ministry-forest">
            <HeartHandshake className="w-8 h-8 text-ministry-forest" />
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ministry-forest">
            Has God Done a Wonder in Your Life at Ibudo Iyanu?
          </h2>

          <p className="text-sm sm:text-base text-gray-700 leading-relaxed max-w-2xl mx-auto">
            At Ori Oke Ase Oluwa, we celebrate the faithfulness and supernatural power of God Almighty. Whether you received healing, deliverance, fruit of the womb, marital restoration, financial breakthrough, or a life-transforming encounter on this mountain, your testimony encourages believers and brings glory to Jesus Christ.
          </p>

          <div className="p-4 rounded-xl bg-ministry-ivory border border-gray-200 text-xs sm:text-sm text-gray-600 max-w-2xl mx-auto">
            <span className="font-bold text-ministry-forest block mb-1">Authenticity & Verification:</span>
            To maintain absolute spiritual integrity and truthfulness, all testimonies submitted to the ministry are prayerfully reviewed and verified before publication.
          </div>
        </div>

        {/* Testimony Submission Form */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-card border border-gray-100 max-w-3xl mx-auto">
          {submitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 bg-green-100 text-green-700 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-ministry-forest">
                Thank You for Sharing Your Testimony!
              </h3>
              <p className="text-sm text-gray-600 max-w-md mx-auto">
                Your testimony has been received. Our ministry pastoral team will review your testimony with thanksgiving. May your miracle remain permanent in Jesus' name!
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 bg-ministry-forest text-white px-6 py-2 rounded-full text-xs font-bold hover:bg-ministry-deep transition-all"
              >
                Submit Another Testimony
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="border-b border-gray-100 pb-4">
                <h3 className="font-serif text-xl font-bold text-ministry-forest">
                  Share Your Miracle
                </h3>
                <p className="text-xs text-gray-500">
                  Please provide details about what God did for you at Ori Oke Ase Oluwa.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Brother John Olawale"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-ministry-forest"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. john@example.com"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-ministry-forest"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +234..."
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-ministry-forest"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    City / State / Country *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="e.g. Oyo, Oyo State, Nigeria"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-ministry-forest"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                  Programme Attended
                </label>
                <select
                  value={formData.programmeAttended}
                  onChange={(e) => setFormData({ ...formData, programmeAttended: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-ministry-forest"
                >
                  <option value="Night of Encounter">Night of Encounter (Monthly Vigil)</option>
                  <option value="Back to Sender Programme">Back to Sender Programme (Last Friday)</option>
                  <option value="Men's Programme">Men's Programme (Monthly)</option>
                  <option value="Sunday Service">Sunday Service / Special Sunday Programme</option>
                  <option value="Daily Midnight Vigil">Daily Midnight Vigil</option>
                  <option value="Personal Mountain Retreat">Personal Mountain Retreat / Fasting</option>
                  <option value="Other">Other Programme</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                  Testimony Title *
                </label>
                <input
                  type="text"
                  required
                  value={formData.testimonyTitle}
                  onChange={(e) => setFormData({ ...formData, testimonyTitle: e.target.value })}
                  placeholder="e.g. Healing from 5-Year Affliction during Night of Encounter"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-ministry-forest"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                  Testimony Details *
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.testimonyDetails}
                  onChange={(e) => setFormData({ ...formData, testimonyDetails: e.target.value })}
                  placeholder="Please describe how God intervened and brought about your victory, healing, or deliverance..."
                  className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-ministry-forest"
                />
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="consent"
                  checked={formData.consent}
                  onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                  className="rounded border-gray-300 text-ministry-forest focus:ring-ministry-forest w-4 h-4"
                />
                <label htmlFor="consent" className="text-xs text-gray-600">
                  I give permission for this testimony to be shared for the glory of God and the encouragement of others.
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-ministry-gold to-ministry-warmGold text-ministry-dark font-extrabold py-3.5 rounded-xl shadow-md hover:brightness-105 active:scale-95 transition-all flex items-center justify-center gap-2 text-sm"
              >
                {isSubmitting ? (
                  <span>Submitting Testimony...</span>
                ) : (
                  <>
                    <span>SUBMIT TESTIMONY FOR REVIEW</span>
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

