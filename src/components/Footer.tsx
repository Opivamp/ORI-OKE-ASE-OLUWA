import React from 'react';
import { MapPin, Phone, Mail, Facebook, Youtube, Instagram, MessageCircle, Heart, ArrowUp } from 'lucide-react';
import { ministryConfig } from '../data/ministryData';

interface FooterProps {
  onNavigate: (page: string) => void;
  onOpenPrivacy?: () => void;
  onOpenTerms?: () => void;
  onOpenDonate?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenPrivacy,
  onOpenTerms,
  onOpenDonate,
}) => {
  const currentYear = new Date().getFullYear();
  const { scriptures, location, contact, founder, founderTitle } = ministryConfig;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-ministry-deep text-white border-t border-ministry-forest/60 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Scripture Banner */}
        <div className="text-center pb-10 border-b border-ministry-forest/70">
          <p className="font-serif italic text-ministry-gold text-base sm:text-xl md:text-2xl font-medium max-w-3xl mx-auto leading-relaxed">
            “{scriptures.footer.verse}”
          </p>
          <span className="inline-block mt-2 text-xs font-semibold tracking-wider text-gray-300 uppercase">
            {scriptures.footer.reference}
          </span>
        </div>

        {/* Multi-Column Ministry Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-10 border-b border-ministry-forest/70 text-sm">
          
          {/* Column 1: Ministry Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="/images/logo.jpg" 
                alt="Ori Oke Ase Oluwa Logo"
                className="w-12 h-12 object-cover rounded-full shadow-md bg-white ring-2 ring-ministry-gold/60" 
              />
              <div>
                <h3 className="font-bold text-white text-base tracking-tight leading-none">
                  ORI OKE ASE OLUWA
                </h3>
                <span className="text-xs text-ministry-gold font-semibold">
                  (IBUDO IYANU)
                </span>
              </div>
            </div>
            
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
              Established in 2014 under the divine leadership of {founderTitle} {founder}. A sanctuary of prayer, healing, and spiritual transformation.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenDonate}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-ministry-gold to-ministry-warmGold text-ministry-dark font-bold text-xs px-4 py-2 rounded-full shadow-sm hover:brightness-105 active:scale-95 transition-all"
              >
                <span>Support Ministry</span>
                <Heart className="w-3.5 h-3.5 fill-ministry-dark" />
              </button>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-serif text-base font-bold text-ministry-gold mb-4 tracking-wide">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
              <li>
                <button onClick={() => { onNavigate('home'); scrollToTop(); }} className="hover:text-ministry-gold transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => { onNavigate('about'); scrollToTop(); }} className="hover:text-ministry-gold transition-colors">
                  About the Ministry & Founder
                </button>
              </li>
              <li>
                <button onClick={() => { onNavigate('programmes'); scrollToTop(); }} className="hover:text-ministry-gold transition-colors">
                  Weekly & Monthly Programme Schedule
                </button>
              </li>
              <li>
                <button onClick={() => { onNavigate('facilities'); scrollToTop(); }} className="hover:text-ministry-gold transition-colors">
                  Retreat Facilities & Grounds
                </button>
              </li>
              <li>
                <button onClick={() => { onNavigate('gallery'); scrollToTop(); }} className="hover:text-ministry-gold transition-colors">
                  Photo Gallery
                </button>
              </li>
              <li>
                <button onClick={() => { onNavigate('testimonies'); scrollToTop(); }} className="hover:text-ministry-gold transition-colors">
                  Testimonies & Divine Acts
                </button>
              </li>
              <li>
                <button onClick={() => { onNavigate('visit'); scrollToTop(); }} className="hover:text-ministry-gold transition-colors">
                  Plan Your Mountain Visit
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Programmes Overview */}
          <div>
            <h4 className="font-serif text-base font-bold text-ministry-gold mb-4 tracking-wide">
              Prayer Gatherings
            </h4>
            <div className="space-y-2.5 text-xs text-gray-300">
              <div>
                <span className="font-bold text-white block">Daily Prayers:</span>
                <p>12:00 PM – 2:00 PM | 6:00 PM – 7:00 PM</p>
                <p>Midnight Vigil: 12:00 AM – 2:00 AM</p>
              </div>
              <div>
                <span className="font-bold text-white block">Sunday Service:</span>
                <p>8:30 AM – 12:00 PM & 4:00 PM – 6:00 PM</p>
              </div>
              <div>
                <span className="font-bold text-white block">Special Monthly Vigils:</span>
                <p>Night of Encounter (2nd Wed–Fri)</p>
                <p>Back to Sender (Last Friday)</p>
                <p>Men's Programme (Last Day of Month)</p>
              </div>
            </div>
          </div>

          {/* Column 4: Location & Contact Notice */}
          <div>
            <h4 className="font-serif text-base font-bold text-ministry-gold mb-4 tracking-wide">
              Sacred Location
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-gray-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-ministry-gold shrink-0 mt-0.5" />
                <span>{location.address}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-ministry-gold shrink-0 mt-0.5" />
                <span>
                  {contact.isPhonePublic && contact.phoneDisplay 
                    ? contact.phoneDisplay 
                    : "Enquiries available on mountain grounds or via web contact form."}
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-ministry-gold shrink-0 mt-0.5" />
                <span>
                  {contact.isEmailPublic && contact.emailDisplay 
                    ? contact.emailDisplay 
                    : "Official electronic enquiries: Use Visitor Enquiry Form."}
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Strip matching screenshot exactly */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-300">
          
          {/* Copyright with Designer Credit */}
          <div>
            © {currentYear} Ori Oke Ase Oluwa (Ibudo Iyanu). All Rights Reserved. • Designed by <span className="text-ministry-gold font-semibold">Opivamp</span>
          </div>

          {/* Legal / Policy Links */}
          <div className="flex items-center gap-3 text-gray-300">
            <button onClick={onOpenPrivacy} className="hover:text-ministry-gold transition-colors">
              Privacy Policy
            </button>
            <span>|</span>
            <button onClick={onOpenTerms} className="hover:text-ministry-gold transition-colors">
              Terms & Conditions
            </button>
            <span>|</span>
            <button onClick={() => onNavigate('contact')} className="hover:text-ministry-gold transition-colors">
              Support
            </button>
          </div>

          {/* Social Icons matching screenshot */}
          <div className="flex items-center gap-3 text-gray-300">
            <span className="p-1.5 rounded-full hover:bg-ministry-forest hover:text-ministry-gold transition-colors cursor-pointer" title="Facebook" onClick={() => onNavigate('contact')}>
              <Facebook className="w-4 h-4" />
            </span>
            <span className="p-1.5 rounded-full hover:bg-ministry-forest hover:text-ministry-gold transition-colors cursor-pointer" title="YouTube" onClick={() => onNavigate('contact')}>
              <Youtube className="w-4 h-4" />
            </span>
            <span className="p-1.5 rounded-full hover:bg-ministry-forest hover:text-ministry-gold transition-colors cursor-pointer" title="Instagram" onClick={() => onNavigate('contact')}>
              <Instagram className="w-4 h-4" />
            </span>
            <span className="p-1.5 rounded-full hover:bg-ministry-forest hover:text-ministry-gold transition-colors cursor-pointer" title="WhatsApp" onClick={() => onNavigate('contact')}>
              <MessageCircle className="w-4 h-4" />
            </span>

            {/* Back to top mini button */}
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="ml-2 p-1.5 rounded-full bg-ministry-forest text-ministry-gold hover:bg-ministry-gold hover:text-ministry-dark transition-colors"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
};

