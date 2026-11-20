import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Search, 
  ArrowRight
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

  const handleNavClick = (page: string) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'programmes', label: 'Prayer & Retreats' },
    { id: 'facilities', label: 'Facilities' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'testimonies', label: 'Testimonies' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className={`sticky top-0 z-50 bg-white/95 backdrop-blur-md transition-all duration-300 ${isScrolled ? 'shadow-sm py-2' : 'py-3 sm:py-3.5'} border-b border-gray-100`}>
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
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              className="p-2 text-ministry-forest hover:bg-gray-100 rounded-lg transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu - Clean & Spacious */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-5 pt-4 pb-8 shadow-2xl animate-fade-in">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-ministry-forest text-white font-bold shadow-sm'
                      : 'text-gray-800 hover:bg-gray-50 hover:text-ministry-forest'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}

            <div className="pt-4 mt-2 border-t border-gray-100">
              <button
                onClick={() => handleNavClick('visit')}
                className="w-full bg-gradient-to-r from-ministry-gold to-ministry-warmGold text-ministry-dark font-extrabold py-3.5 rounded-xl shadow-md text-center flex items-center justify-center gap-2 text-sm"
              >
                <span>PLAN YOUR VISIT</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      )}
    </header>
  );
};
