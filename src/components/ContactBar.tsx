import React from 'react';
import { MapPin, Phone, Heart, Facebook, Youtube, Instagram, MessageCircle } from 'lucide-react';
import { ministryConfig } from '../data/ministryData';

interface ContactBarProps {
  onOpenDonate?: () => void;
  onNavigate?: (page: string) => void;
}

export const ContactBar: React.FC<ContactBarProps> = ({ onOpenDonate, onNavigate }) => {
  const { location, contact } = ministryConfig;

  return (
    <div className="bg-ministry-deep text-white text-xs py-2 px-4 sm:px-6 lg:px-8 border-b border-ministry-forest/40">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2.5">
        
        {/* Left: Location */}
        <div 
          onClick={() => onNavigate?.('visit')}
          className="flex items-center gap-1.5 cursor-pointer hover:text-ministry-gold transition-colors text-center md:text-left"
          title="Click to view location and directions"
        >
          <MapPin className="w-3.5 h-3.5 text-ministry-gold shrink-0" />
          <span className="font-medium tracking-wide">
            {location.shortAddress}
          </span>
        </div>

        {/* Center: Configurable Phone / Notice */}
        <div className="hidden lg:flex items-center gap-1.5 text-gray-200">
          <Phone className="w-3.5 h-3.5 text-ministry-gold shrink-0" />
          {contact.isPhonePublic && contact.phoneDisplay ? (
            <a href={`tel:${contact.phoneRaw}`} className="hover:text-ministry-gold transition-colors font-medium">
              {contact.phoneDisplay}
            </a>
          ) : (
            <span 
              onClick={() => onNavigate?.('contact')}
              className="text-gray-300 hover:text-ministry-gold cursor-pointer transition-colors"
            >
              Enquiries & Prayer: Contact Ministry Office
            </span>
          )}
        </div>

        {/* Right: Social icons & Donate Button */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2.5 text-gray-300">
            {contact.social.facebook ? (
              <a href={contact.social.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-ministry-gold transition-colors" aria-label="Facebook">
                <Facebook className="w-3.5 h-3.5" />
              </a>
            ) : (
              <span className="opacity-75 hover:opacity-100 hover:text-ministry-gold cursor-pointer" title="Ministry Facebook (Upcoming)" onClick={() => onNavigate?.('contact')}>
                <Facebook className="w-3.5 h-3.5" />
              </span>
            )}

            {contact.social.youtube ? (
              <a href={contact.social.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-ministry-gold transition-colors" aria-label="YouTube">
                <Youtube className="w-3.5 h-3.5" />
              </a>
            ) : (
              <span className="opacity-75 hover:opacity-100 hover:text-ministry-gold cursor-pointer" title="Ministry YouTube (Upcoming)" onClick={() => onNavigate?.('contact')}>
                <Youtube className="w-3.5 h-3.5" />
              </span>
            )}

            {contact.social.instagram ? (
              <a href={contact.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-ministry-gold transition-colors" aria-label="Instagram">
                <Instagram className="w-3.5 h-3.5" />
              </a>
            ) : (
              <span className="opacity-75 hover:opacity-100 hover:text-ministry-gold cursor-pointer" title="Ministry Instagram (Upcoming)" onClick={() => onNavigate?.('contact')}>
                <Instagram className="w-3.5 h-3.5" />
              </span>
            )}

            {contact.social.whatsapp ? (
              <a href={`https://wa.me/${contact.social.whatsapp}`} target="_blank" rel="noopener noreferrer" className="hover:text-ministry-gold transition-colors" aria-label="WhatsApp">
                <MessageCircle className="w-3.5 h-3.5" />
              </a>
            ) : (
              <span className="opacity-75 hover:opacity-100 hover:text-ministry-gold cursor-pointer" title="Ministry WhatsApp (Upcoming)" onClick={() => onNavigate?.('contact')}>
                <MessageCircle className="w-3.5 h-3.5" />
              </span>
            )}
          </div>

          {/* Donate Pill Button */}
          <button
            onClick={onOpenDonate}
            className="flex items-center gap-1.5 bg-gradient-to-r from-ministry-gold to-ministry-warmGold text-ministry-dark font-semibold px-3 py-1 rounded-full text-xs shadow-sm hover:brightness-105 active:scale-95 transition-all"
          >
            <span>Donate</span>
            <Heart className="w-3 h-3 fill-ministry-dark text-ministry-dark" />
          </button>
        </div>

      </div>
    </div>
  );
};

