import React from 'react';
import { X, Shield } from 'lucide-react';
import { ministryConfig } from '../data/ministryData';

interface PrivacyTermsModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const PrivacyTermsModal: React.FC<PrivacyTermsModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const isPrivacy = type === 'privacy';
  const { name, location } = ministryConfig;

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[85vh] flex flex-col overflow-hidden border border-gray-100 animate-fade-in">
        
        {/* Header */}
        <div className="bg-ministry-forest text-white p-5 border-b-2 border-ministry-gold flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Shield className="w-5 h-5 text-ministry-gold" />
            <h3 className="font-serif text-xl font-bold">
              {isPrivacy ? 'Privacy Policy' : 'Terms & Conditions of Visit'}
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="p-1.5 rounded-full hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-gray-700 leading-relaxed">
          {isPrivacy ? (
            <>
              <p className="font-bold text-ministry-dark">
                Official Privacy Commitment of {name}
              </p>
              <p>
                Ori Oke Ase Oluwa (Ibudo Iyanu) is committed to protecting the privacy and personal details of all visitors, retreat campers, and website users.
              </p>
              <h4 className="font-bold text-ministry-forest text-sm">1. Information We Collect</h4>
              <p>
                When you submit a retreat registration, contact enquiry, or testimony on this website, we collect only the personal information you voluntarily provide (such as your name, phone number, email address, and prayer requests).
              </p>
              <h4 className="font-bold text-ministry-forest text-sm">2. Use of Information</h4>
              <p>
                Information provided is strictly utilized by our pastoral and protocol teams to facilitate your mountain stay, reply to your spiritual enquiries, or intercede on your behalf. We do not sell, rent, or distribute personal information to third parties.
              </p>
              <h4 className="font-bold text-ministry-forest text-sm">3. Security</h4>
              <p>
                We maintain appropriate administrative and technical safeguards to keep all communications and prayer requests confidential.
              </p>
            </>
          ) : (
            <>
              <p className="font-bold text-ministry-dark">
                Guidelines for Visitors & Retreat Participants
              </p>
              <p>
                Ibudo Iyanu is a consecrated Christian prayer mountain dedicated to prayer, spiritual empowerment, and worship. All visitors are kindly requested to observe these guidelines:
              </p>
              <h4 className="font-bold text-ministry-forest text-sm">1. Spiritual Atmosphere & Reverence</h4>
              <p>
                Visitors are expected to maintain an atmosphere of quiet reflection, reverence for God, and mutual respect for fellow worshippers engaged in private prayer and fasting.
              </p>
              <h4 className="font-bold text-ministry-forest text-sm">2. Mountain Safety & Care of Facilities</h4>
              <p>
                Please treat all auditorium furnishings, retreat chalets, water points, and outdoor grounds with care. Registration at the administration office upon arrival is required for all overnight stays.
              </p>
              <h4 className="font-bold text-ministry-forest text-sm">3. Modesty & Decorum</h4>
              <p>
                In alignment with Christian values and mountain tradition, modest attire is requested throughout the grounds and prayer auditoriums.
              </p>
            </>
          )}
        </div>

        <div className="p-4 bg-gray-50 border-t border-gray-100 flex justify-end">
          <button
            onClick={onClose}
            className="bg-ministry-forest text-white px-5 py-2 rounded-xl text-xs font-bold hover:bg-ministry-deep transition-all"
          >
            Close Document
          </button>
        </div>

      </div>
    </div>
  );
};

