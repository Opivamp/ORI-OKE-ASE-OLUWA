import React from 'react';
import { X, Heart, ShieldCheck, AlertCircle, Building2, Gift } from 'lucide-react';
import { ministryConfig } from '../data/ministryData';

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DonationModal: React.FC<DonationModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden border border-gray-100 animate-fade-in relative">
        
        {/* Header */}
        <div className="bg-ministry-forest text-white p-5 border-b-2 border-ministry-gold flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-ministry-deep text-ministry-gold">
              <Gift className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold">Partner with the Ministry</h3>
              <p className="text-xs text-gray-300">Ori Oke Ase Oluwa (Ibudo Iyanu)</p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-1.5 rounded-full hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5 text-gray-700 text-sm">
          
          <div className="space-y-2">
            <h4 className="font-serif text-lg font-bold text-ministry-forest">
              “Honour the Lord with your substance...” — Proverbs 3:9
            </h4>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Your free-will offerings, tithes, project support, and covenant seeds empower the continuous work of evangelism, mountain facility upkeep, welfare support for the less privileged, and all-night prayer vigils.
            </p>
          </div>

          {/* Configurable Status Notice */}
          <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-950 space-y-2">
            <div className="flex items-center gap-2 font-bold text-amber-900">
              <AlertCircle className="w-4 h-4 text-amber-700 shrink-0" />
              <span>Digital Payment Integration Under Setup</span>
            </div>
            <p className="leading-relaxed">
              Official electronic payment gateways (Paystack/Flutterwave/Direct Bank Transfer) will be activated as soon as verified corporate banking documentation is finalized by the ministry board.
            </p>
          </div>

          <div className="space-y-3 pt-2">
            <div className="p-3.5 rounded-xl bg-ministry-ivory border border-gray-200 flex items-start gap-3">
              <Building2 className="w-5 h-5 text-ministry-forest shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-ministry-dark block text-xs uppercase">Giving on Mountain Grounds:</span>
                <p className="text-xs text-gray-600 mt-0.5">
                  Visitors and campers may give their offerings, tithes, and vows directly at the church administration office in Prayer City.
                </p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-ministry-ivory border border-gray-200 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-ministry-forest shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-ministry-dark block text-xs uppercase">Financial Integrity & Stewardship:</span>
                <p className="text-xs text-gray-600 mt-0.5">
                  The ministry ensures all kingdom resources are stewarded transparently towards gospel advancement and humanitarian care.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={onClose}
              className="w-full bg-ministry-forest hover:bg-ministry-deep text-white font-bold py-3 rounded-xl text-xs sm:text-sm transition-colors shadow-sm"
            >
              Understood / Close
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};

