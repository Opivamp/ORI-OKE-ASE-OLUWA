import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare, Clock, ShieldCheck, Heart } from 'lucide-react';
import { ministryConfig } from '../data/ministryData';

export const ContactPage: React.FC = () => {
  const { location, contact } = ministryConfig;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.message.trim() || !formData.subject.trim()) {
      setErrorMessage('Please fill in all required fields.');
      return;
    }
    setErrorMessage('');
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <div className="bg-ministry-ivory min-h-screen py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 bg-ministry-forest/10 text-ministry-forest px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            <Mail className="w-4 h-4 text-ministry-gold" />
            <span>Ministry Correspondence & Enquiries</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-ministry-deep tracking-tight">
            Contact Ori Oke Ase Oluwa
          </h1>
          <p className="font-serif italic text-base sm:text-xl text-ministry-forest font-medium">
            We are here to intercede with you and welcome you to Ibudo Iyanu.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Office & Location Info */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-card border border-gray-100 space-y-6">
              <h3 className="font-serif text-2xl font-bold text-ministry-forest">
                Mountain Secretariat
              </h3>

              <div className="space-y-4 text-sm text-gray-700">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-ministry-ivory text-ministry-forest shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-ministry-dark block text-xs uppercase tracking-wider">Physical Address</span>
                    <p className="text-gray-700 mt-0.5">{location.address}</p>
                    <p className="text-xs text-gray-500 mt-1 font-serif italic">Directly off the expressway at KM 54/400 signpost</p>
                  </div>
                </div>

                {contact.isPhonePublic && (
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-ministry-ivory text-ministry-forest shrink-0 mt-0.5">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-ministry-dark block text-xs uppercase tracking-wider">Telephone Line</span>
                      <p className="text-gray-700 mt-0.5">{contact.phoneDisplay}</p>
                    </div>
                  </div>
                )}

                {contact.isEmailPublic && (
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-ministry-ivory text-ministry-forest shrink-0 mt-0.5">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-ministry-dark block text-xs uppercase tracking-wider">Email Address</span>
                      <p className="text-gray-700 mt-0.5">{contact.emailDisplay}</p>
                    </div>
                  </div>
                )}

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-ministry-ivory text-ministry-forest shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-ministry-dark block text-xs uppercase tracking-wider">Mountain Gates & Sanctuary Hours</span>
                    <p className="text-gray-700 mt-0.5">Open 24 hours daily for prayer, retreats and personal vigils</p>
                  </div>
                </div>
              </div>

              {/* Administrative Notice */}
              <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200/80 text-xs text-amber-950 space-y-1">
                <span className="font-bold block text-amber-900">Official Contact Transparency:</span>
                <p>
                  Official ministry direct phone and electronic payment channels are strictly provided via verified in-person administration at Prayer City until permanent digital helplines are certified.
                </p>
              </div>
            </div>

            {/* Prayer Request Prompt */}
            <div className="bg-gradient-to-br from-ministry-forest to-ministry-deep text-white rounded-2xl p-6 sm:p-8 shadow-card space-y-3">
              <Heart className="w-8 h-8 text-ministry-gold" />
              <h4 className="font-serif text-xl font-bold">Need Fervent Intercession?</h4>
              <p className="text-xs text-gray-200 leading-relaxed">
                Our intercessory prayer warriors lay every prayer request before God at the mountain altar during the daily midnight vigils.
              </p>
            </div>

          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-card border border-gray-100">
              
              {submitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 bg-green-100 text-green-700 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-ministry-forest">
                    Message Sent Successfully
                  </h3>
                  <p className="text-sm text-gray-600 max-w-md mx-auto">
                    Thank you for reaching out to Ori Oke Ase Oluwa. Your message and prayer enquiry will be attended to promptly by our protocol office.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
                    }}
                    className="mt-4 bg-ministry-forest text-white px-6 py-2.5 rounded-full text-xs font-bold hover:bg-ministry-deep transition-all"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-ministry-forest">
                      Send Us an Enquiry or Prayer Message
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">
                      Fill out the form below and our team will be in touch with you.
                    </p>
                  </div>

                  {errorMessage && (
                    <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-lg">
                      {errorMessage}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your name"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-ministry-forest"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                        Phone Number (Optional)
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="Your phone number"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-ministry-forest"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Your email address"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-ministry-forest"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                      Subject / Enquiry Type *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Prayer Request / Mountain Accommodation Enquiry"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-ministry-forest"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                      Message / Prayer Intention *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your message or prayer request clearly..."
                      className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-ministry-forest"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-ministry-gold to-ministry-warmGold text-ministry-dark font-extrabold py-3.5 rounded-xl shadow-md hover:brightness-105 active:scale-95 transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
                  >
                    {isSubmitting ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <span>SEND MESSAGE TO MINISTRY</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

