import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Search, 
  ArrowRight,
  Home,
  Compass,
  Calendar,
  Sparkles,
  Building2,
  Image as ImageIcon,
  MessageSquareQuote,
  Phone,
  ChevronRight,
  MapPin,
  Facebook,
  Youtube,
  Instagram,
  MessageCircle
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

  // Lock body scroll when mobile menu is open
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

  const handleNavClick = (page: string) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { id: 'home', label: 'Home', desc: 'Sanctuary portal & highlights', icon: Home },
    { id: 'about', label: 'About Us', desc: 'History, founder & divine mandate', icon: Compass },
    { id: 'programmes', label: 'Prayer & Retreats', desc: 'Daily, Sunday & vigil timetables', icon: Calendar },
    { id: 'events', label: 'Events', desc: 'Conferences & special gatherings', icon: Sparkles },
    { id: 'facilities', label: 'Facilities', desc: 'Auditorium & guest chalets', icon: Building2 },
    { id: 'gallery', label: 'Gallery', desc: 'Authentic mountain photography', icon: ImageIcon },
    { id: 'testimonies', label: 'Testimonies', desc: 'Divine miracles & encounters', icon: MessageSquareQuote },
    { id: 'contact', label: 'Contact', desc: 'Expressway location & enquiries', icon: Phone },
  ];

  return (
    <header className={`sticky top-0 z-40 bg-white/95 backdrop-blur-md transition-all duration-300 ${isScrolled ? 'shadow-sm py-2' : 'py-2.5 sm:py-3.5'} border-b border-gray-100`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 lg:gap-6">
          
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
          <nav className="hidden xl:flex items-center gap-6 2xl:gap-7 text-sm font-medium text-gray-700">
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
          <div className="hidden xl:flex items-center gap-3">
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
          <div className="flex items-center gap-1.5 xl:hidden">
            <button
              onClick={onOpenSearch}
              aria-label="Search"
              className="p-2 text-gray-600 hover:text-ministry-forest hover:bg-gray-100 rounded-full transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Navigation Sidebar"
              className="p-2 text-ministry-forest hover:bg-gray-100 rounded-xl transition-colors flex items-center gap-1.5 active:scale-95"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

        </div>
      </div>

      {/* STYLISH & SMART MOBILE SIDEBAR DRAWER */}
      {/* 1. Backdrop Overlay */}
      <div 
        onClick={() => setMobileMenuOpen(false)}
        className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity duration-300 xl:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden="true"
      />

      {/* 2. Slide-In Sidebar Panel (Right Off-Canvas Sheet) */}
      <aside 
        className={`fixed top-0 right-0 bottom-0 z-50 w-[84vw] max-w-[340px] bg-white flex flex-col shadow-2xl transition-transform duration-300 ease-out xl:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-label="Mobile Navigation"
      >
        {/* Drawer Header with Forest Green Brand Banner */}
        <div className="bg-ministry-forest text-white p-5 border-b-2 border-ministry-gold relative shrink-0">
          <div className="flex items-center justify-between gap-3">
            <div 
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <img 
                src="/images/logo.jpg" 
                alt="Ori Oke Ase Oluwa Logo"
                className="w-10 h-10 rounded-full object-cover ring-2 ring-ministry-gold shadow-sm"
              />
              <div className="flex flex-col text-left">
                <span className="font-serif font-bold text-sm tracking-tight text-white leading-tight">
                  ORI OKE ASE OLUWA
                </span>
                <span className="text-[11px] font-bold text-ministry-gold tracking-wide">
                  (IBUDO IYANU)
                </span>
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close navigation"
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 active:scale-90 text-white flex items-center justify-center transition-all"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="mt-2 text-[10px] text-white/80 font-serif italic border-t border-white/10 pt-2">
            Prayer, Spiritual Empowerment & Transformation.
          </p>
        </div>

        {/* Scrollable Navigation Body */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-1.5 divide-y divide-gray-50">
          
          <div className="text-[10px] font-extrabold uppercase tracking-wider text-gray-400 px-3 pb-1">
            Menu Directory
          </div>

          <div className="space-y-1 pt-1">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              const ItemIcon = item.icon;

              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-3.5 py-2.5 rounded-xl transition-all duration-200 flex items-center justify-between group ${
                    isActive 
                      ? 'bg-gradient-to-r from-ministry-forest to-ministry-deep text-white shadow-sm'
                      : 'text-gray-700 hover:bg-ministry-ivory hover:text-ministry-forest'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className={`p-2 rounded-lg shrink-0 transition-colors ${
                      isActive 
                        ? 'bg-white/15 text-ministry-gold' 
                        : 'bg-gray-100 text-ministry-forest group-hover:bg-white group-hover:text-ministry-gold'
                    }`}>
                      <ItemIcon className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className={`text-sm font-semibold truncate ${isActive ? 'text-white' : 'text-gray-900 group-hover:text-ministry-forest'}`}>
                        {item.label}
                      </span>
                      <span className={`text-[10px] truncate ${isActive ? 'text-white/80' : 'text-gray-400 group-hover:text-gray-600'}`}>
                        {item.desc}
                      </span>
                    </div>
                  </div>

                  <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${
                    isActive ? 'text-ministry-gold translate-x-0.5' : 'text-gray-300 group-hover:text-ministry-forest group-hover:translate-x-0.5'
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Inspirational Scripture Card */}
          <div className="pt-3">
            <div className="bg-ministry-ivory border border-ministry-gold/40 rounded-xl p-3 text-center">
              <p className="font-serif italic text-xs text-ministry-forest font-semibold leading-relaxed">
                “Call unto Me, and I will answer you...”
              </p>
              <span className="text-[10px] font-bold text-ministry-warmGold block mt-0.5 uppercase tracking-wider">
                — Jeremiah 33:3
              </span>
            </div>
          </div>

        </div>

        {/* Drawer Bottom Actions & Footer */}
        <div className="p-4 border-t border-gray-100 bg-[#FCFCFA] space-y-3 shrink-0">
          
          {/* Main Gold CTA */}
          <button
            onClick={() => handleNavClick('visit')}
            className="w-full bg-gradient-to-r from-ministry-gold to-ministry-warmGold hover:brightness-105 active:scale-95 text-ministry-dark font-black py-3 rounded-full shadow-md text-center flex items-center justify-center gap-2 text-xs tracking-wider uppercase transition-all"
          >
            <span>Plan Your Visit</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Location Badge */}
          <div className="flex items-center gap-2 text-[11px] text-gray-500 justify-center">
            <MapPin className="w-3.5 h-3.5 text-ministry-gold shrink-0" />
            <span className="truncate">Prayer City, KM 54/400 Oyo Exp.</span>
          </div>

          {/* Social Icons Strip */}
          <div className="flex items-center justify-center gap-3 pt-1 text-gray-400">
            <span 
              onClick={() => handleNavClick('contact')}
              className="p-1.5 rounded-full hover:bg-ministry-ivory hover:text-ministry-forest transition-colors cursor-pointer"
              title="Facebook"
            >
              <Facebook className="w-3.5 h-3.5" />
            </span>
            <span 
              onClick={() => handleNavClick('contact')}
              className="p-1.5 rounded-full hover:bg-ministry-ivory hover:text-ministry-forest transition-colors cursor-pointer"
              title="YouTube"
            >
              <Youtube className="w-3.5 h-3.5" />
            </span>
            <span 
              onClick={() => handleNavClick('contact')}
              className="p-1.5 rounded-full hover:bg-ministry-ivory hover:text-ministry-forest transition-colors cursor-pointer"
              title="Instagram"
            >
              <Instagram className="w-3.5 h-3.5" />
            </span>
            <span 
              onClick={() => handleNavClick('contact')}
              className="p-1.5 rounded-full hover:bg-ministry-ivory hover:text-ministry-forest transition-colors cursor-pointer"
              title="WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5" />
            </span>
          </div>

          {/* Designer Credit */}
          <div className="text-[10px] text-center text-gray-400">
            Designed by <span className="font-semibold text-ministry-forest">Opivamp</span>
          </div>

        </div>
      </aside>

    </header>
  );
};
