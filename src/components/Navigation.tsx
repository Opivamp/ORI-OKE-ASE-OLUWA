import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Search, 
  ArrowRight,
  Home,
  Compass,
  Calendar,
  Building2,
  Image as ImageIcon,
  MessageSquare,
  PhoneCall,
  MapPin,
  ChevronRight
} from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onOpenSearch?: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  currentPage,
  onNavigate,
  onOpenSearch
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile sidebar is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleNavClick = (page: string) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { id: 'home', label: 'Home', subtitle: 'Sanctuary & Welcome', icon: Home },
    { id: 'about', label: 'About Us', subtitle: 'Vision, 9 Missions & Founder', icon: Compass },
    { id: 'programmes', label: 'Prayer & Retreats', subtitle: 'Daily Services & Vigils', icon: Calendar },
    { id: 'facilities', label: 'Facilities', subtitle: 'Auditorium, Lodges & Grounds', icon: Building2 },
    { id: 'gallery', label: 'Gallery', subtitle: 'Authentic Mountain Photography', icon: ImageIcon },
    { id: 'testimonies', label: 'Testimonies', subtitle: 'Praise & Supernatural Acts', icon: MessageSquare },
    { id: 'contact', label: 'Contact', subtitle: 'Directions & Enquiries', icon: PhoneCall },
  ];

  return (
    <header className={`sticky top-0 z-40 bg-white/95 backdrop-blur-md transition-all duration-300 ${isScrolled ? 'shadow-sm py-2' : 'py-3 sm:py-3.5'} border-b border-gray-100`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6">
          
          {/* Brand Identity / Logo */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer group shrink-0"
          >
            <div className="relative">
              <img 
                src="/images/logo.jpg" 
                alt="Ori Oke Ase Oluwa Logo"
                className="w-11 h-11 sm:w-12 sm:h-12 object-cover rounded-full shadow-sm ring-2 ring-ministry-gold/60 group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-serif font-bold text-base sm:text-lg lg:text-xl tracking-tight text-ministry-forest group-hover:text-ministry-deep transition-colors leading-tight">
                ORI OKE ASE OLUWA
              </span>
              <span className="text-xs sm:text-sm font-bold text-ministry-gold tracking-wide">
                (IBUDO IYANU)
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links - Stylish, Free & Airy */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium text-gray-700">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative py-2 tracking-wide transition-all duration-200 group ${
                    isActive 
                      ? 'text-ministry-forest font-bold' 
                      : 'text-gray-600 hover:text-ministry-forest'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive ? (
                    <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-ministry-gold rounded-full" />
                  ) : (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-ministry-forest/40 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Area */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Minimalist Search Button */}
            <button
              onClick={onOpenSearch}
              aria-label="Search site"
              className="p-2.5 text-gray-500 hover:text-ministry-forest hover:bg-gray-50 rounded-full transition-colors"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Plan Your Visit Stylish Gold Pill */}
            <button
              onClick={() => handleNavClick('visit')}
              className="bg-gradient-to-r from-ministry-gold to-ministry-warmGold hover:brightness-105 active:scale-95 text-ministry-dark font-bold px-5 py-2.5 rounded-full text-xs sm:text-sm shadow-sm hover:shadow-md transition-all flex items-center gap-2"
            >
              <span>Plan Your Visit</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Right Controls: Search + Hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenSearch}
              aria-label="Search"
              className="p-2 text-gray-600 hover:text-ministry-forest hover:bg-gray-100 rounded-full transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Navigation Menu"
              className="p-2 text-ministry-forest hover:bg-gray-100 rounded-lg transition-colors active:scale-95"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

        </div>
      </div>

      {/* Off-canvas Responsive Sidebar Drawer - Stylish & Smart */}
      <div 
        className={`fixed inset-0 z-50 transition-opacity duration-300 lg:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Soft Dark Blurred Backdrop (tap to close) */}
        <div 
          onClick={() => setMobileMenuOpen(false)}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
          aria-hidden="true"
        />

        {/* Sliding Sidebar Panel (slides in from right, leaving background visible) */}
        <aside
          className={`absolute top-0 right-0 bottom-0 w-[86vw] max-w-sm sm:max-w-md bg-white shadow-2xl flex flex-col justify-between overflow-hidden transform transition-transform duration-300 ease-out ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation Menu"
        >
          {/* 1. Sidebar Header */}
          <div className="p-4 sm:p-5 border-b border-gray-100 bg-[#FCFCFA] flex items-center justify-between gap-3">
            <div 
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <img 
                src="/images/logo.jpg" 
                alt="Ori Oke Ase Oluwa Logo"
                className="w-10 h-10 object-cover rounded-full shadow ring-2 ring-ministry-gold/60"
              />
              <div className="flex flex-col text-left">
                <span className="font-serif font-bold text-sm sm:text-base text-ministry-forest leading-tight">
                  ORI OKE ASE OLUWA
                </span>
                <span className="text-[11px] sm:text-xs font-bold text-ministry-gold tracking-wide">
                  (IBUDO IYANU)
                </span>
              </div>
            </div>

            {/* Smart Close Button */}
            <button
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
              className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center transition-all active:scale-95"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* 2. Scrollable Navigation List */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-1.5">
            <div className="space-y-1">
              {navItems.map((item) => {
                const isActive = currentPage === item.id;
                const ItemIcon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full group flex items-center justify-between p-2.5 sm:p-3 rounded-xl transition-all text-left ${
                      isActive
                        ? 'bg-ministry-forest/10 border-l-4 border-ministry-forest text-ministry-forest shadow-sm'
                        : 'hover:bg-gray-50 text-gray-800'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                        isActive 
                          ? 'bg-ministry-forest text-ministry-gold shadow-sm' 
                          : 'bg-gray-100 text-ministry-forest group-hover:bg-ministry-ivory group-hover:text-ministry-forest'
                      }`}>
                        <ItemIcon className="w-4 h-4" />
                      </div>
                      <div className="flex flex-col">
                        <span className={`text-sm tracking-tight ${
                          isActive ? 'font-bold text-ministry-forest' : 'font-medium text-gray-800 group-hover:text-ministry-forest'
                        }`}>
                          {item.label}
                        </span>
                        <span className="text-[11px] text-gray-400 group-hover:text-gray-500 font-sans">
                          {item.subtitle}
                        </span>
                      </div>
                    </div>

                    <ChevronRight className={`w-4 h-4 transition-transform ${
                      isActive 
                        ? 'text-ministry-forest' 
                        : 'text-gray-300 group-hover:text-ministry-forest group-hover:translate-x-0.5'
                    }`} />
                  </button>
                );
              })}
            </div>

            {/* Quick Action: Search in Drawer */}
            <div className="pt-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenSearch) onOpenSearch();
                }}
                className="w-full flex items-center gap-3 p-2.5 rounded-xl bg-gray-50 hover:bg-gray-100 text-gray-600 text-xs font-medium transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shadow-xs text-gray-500">
                  <Search className="w-4 h-4" />
                </div>
                <span>Search programmes, retreats, facilities...</span>
              </button>
            </div>
          </div>

          {/* 3. Smart Sidebar Footer */}
          <div className="p-4 sm:p-5 border-t border-gray-100 bg-[#FCFCFA] space-y-3">
            {/* Primary Action Button */}
            <button
              onClick={() => handleNavClick('visit')}
              className="w-full bg-gradient-to-r from-ministry-gold to-ministry-warmGold hover:brightness-105 active:scale-95 text-ministry-dark font-extrabold py-3.5 px-4 rounded-xl shadow-md text-center flex items-center justify-center gap-2 text-sm transition-all"
            >
              <span>PLAN YOUR VISIT</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Fast Location Info */}
            <div className="flex items-start gap-2 text-[11px] text-gray-500 bg-white p-2.5 rounded-lg border border-gray-100">
              <MapPin className="w-3.5 h-3.5 text-ministry-gold shrink-0 mt-0.5" />
              <span className="line-clamp-2">Prayer City, KM 54/400 New Oyo - Ogbomoso Expressway, Oyo State</span>
            </div>

            {/* Micro Scripture Quote */}
            <p className="text-[10px] text-center font-serif italic text-gray-400">
              “Call unto Me, and I will answer you...” — Jer. 33:3
            </p>
          </div>
        </aside>
      </div>
    </header>
  );
};
