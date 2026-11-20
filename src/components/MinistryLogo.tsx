import React from 'react';

interface MinistryLogoProps {
  className?: string;
  size?: number | string;
  showText?: boolean;
  textColor?: string;
}

export const MinistryLogo: React.FC<MinistryLogoProps> = ({
  className = '',
  size = 64,
  showText = false,
  textColor = 'text-ministry-forest',
}) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Official circular seal */}
      <div 
        className="relative shrink-0 rounded-full shadow-sm bg-white overflow-hidden p-0.5"
        style={{ width: size, height: size }}
      >
        <img 
          src="/images/logo.jpg" 
          alt="Ori Oke Ase Oluwa (Ibudo Iyanu) Official Logo" 
          className="w-full h-full object-cover rounded-full"
          onError={(e) => {
            // Fallback if image path has issue
            const target = e.currentTarget;
            target.style.display = 'none';
          }}
        />
        {/* Subtle decorative gold ring border matching reference */}
        <div className="absolute inset-0 rounded-full border-2 border-ministry-gold/40 pointer-events-none" />
      </div>

      {showText && (
        <div className="flex flex-col text-left leading-tight">
          <span className={`font-extrabold uppercase tracking-tight text-sm sm:text-base md:text-lg ${textColor}`}>
            ORI OKE ASE OLUWA
          </span>
          <span className="font-bold text-xs sm:text-sm text-ministry-forest tracking-normal">
            (IBUDO IYANU)
          </span>
          <span className="text-[10px] sm:text-xs text-ministry-muted italic font-serif">
            Prayer, Spiritual Empowerment and Transformation.
          </span>
        </div>
      )}
    </div>
  );
};

