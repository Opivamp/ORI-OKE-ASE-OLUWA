import React, { useState, useEffect } from 'react';
import { 
  ChevronDown, 
  Menu, 
  X, 
  Search, 
  ArrowRight,
  Compass,
  Users,
  Eye,
  Calendar,
  Building2,
  Image as ImageIcon,
  MessageSquare,
  PhoneCall,
  Sparkles
} from 'lucide-react';
import { MinistryLogo } from './MinistryLogo';

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
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [prayerDropdownOpen, setPrayerDropdownOpen] = useState(false);
  const [facilityDropdownOpen, setFacilityDropdownOpen] = useState(false);
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
    setAboutDropdownOpen(false);
    setPrayerDropdownOpen(false);
    setFacilityDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`sticky top-0 z-50 bg-white transition-all duration-300 ${isScrolled ? 'shadow-md py-1.5' : 'py-2.5 sm:py-3'} border-b border-gray-100`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Brand Identity / Logo */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer group shrink-0"
          >
            <div className="relative">
              <img 
                src="/images/logo-badge.png" 
                alt="Ori Oke Ase Oluwa Logo"
                className="w-12 h-12 sm:w-14 sm:h-14 object-contain rounded-full shadow-sm group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="flex flex-col text-left">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-sm sm:text-base lg:text-lg tracking-tight text-ministry-forest group-hover:text-ministry-deep transition-colors">
                  ORI OKE ASE OLUWA
                </span>
              </div>
              <span className="font-bold text-xs sm:text-sm text-ministry-forest tracking-normal -mt-0.5">
                (IBUDO IYANU)
              </span>
              <span className="text-[10px] sm:text-xs text-gray-500 font-serif italic hidden sm:block">
                Prayer, Spiritual Empowerment and Transformation.
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-1 lg:space-x-1.5 text-xs lg:text-sm font-medium text-gray-700">
            
            {/* Home */}
            <button
              onClick={() => handleNavClick('home')}
              className={`px-3 py-1.5 rounded-full transition-all ${
                currentPage === 'home'
                  ? 'bg-ministry-forest text-white font-semibold shadow-sm'
                  : 'hover:text-ministry-forest hover:bg-gray-50'
              }`}
            >
              Home
            </button>

            {/* About Us (With Dropdown) */}
            <div 
              className="relative"
              onMouseEnter={() => setAboutDropdownOpen(true)}
              onMouseLeave={() => setAboutDropdownOpen(false)}
            >
              <button
                onClick={() => handleNavClick('about')}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-full transition-all ${
                  currentPage === 'about'
                    ? 'bg-ministry-forest text-white font-semibold shadow-sm'
                    : 'hover:text-ministry-forest hover:bg-gray-50'
                }`}
              >
                <span>About Us</span>
                <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
              </button>

              {aboutDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-card border border-gray-100 py-2 animate-fade-in z-50">
                  <button
                    onClick={() => handleNavClick('about')}
                    className="w-full text-left px-4 py-2 hover:bg-ministry-ivory text-xs sm:text-sm flex items-center gap-2.5 text-ministry-dark hover:text-ministry-forest"
                  >
                    <Compass className="w-4 h-4 text-ministry-gold" />
                    <div>
                      <div className="font-medium">About the Mountain</div>
                      <div className="text-[11px] text-gray-500">History, origin & sacred mission</div>
                    </div>
                  </button>
                  <button
                    onClick={() => handleNavClick('about')}
                    className="w-full text-left px-4 py-2 hover:bg-ministry-ivory text-xs sm:text-sm flex items-center gap-2.5 text-ministry-dark hover:text-ministry-forest"
                  >
                    <Users className="w-4 h-4 text-ministry-gold" />
                    <div>
                      <div className="font-medium">Prophet Sunday Olawale</div>
                      <div className="text-[11px] text-gray-500">Founder & General Overseer</div>
                    </div>
                  </button>
                  <button
                    onClick={() => handleNavClick('about')}
                    className="w-full text-left px-4 py-2 hover:bg-ministry-ivory text-xs sm:text-sm flex items-center gap-2.5 text-ministry-dark hover:text-ministry-forest"
                  >
                    <Eye className="w-4 h-4 text-ministry-gold" />
                    <div>
                      <div className="font-medium">Our Vision & 9 Missions</div>
                      <div className="text-[11px] text-gray-500">Divine mandate & calling</div>
                    </div>
                  </button>
                </div>
              )}
            </div>

            {/* Prayer & Retreats (With Dropdown) */}
            <div 
              className="relative"
              onMouseEnter={() => setPrayerDropdownOpen(true)}
              onMouseLeave={() => setPrayerDropdownOpen(false)}
            >
              <button
                onClick={() => handleNavClick('programmes')}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-full transition-all ${
                  currentPage === 'programmes'
                    ? 'bg-ministry-forest text-white font-semibold shadow-sm'
                    : 'hover:text-ministry-forest hover:bg-gray-50'
                }`}
              >
                <span>Prayer & Retreats</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>

              {prayerDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-card border border-gray-100 py-2 animate-fade-in z-50">
                  <button
                    onClick={() => handleNavClick('programmes')}
                    className="w-full text-left px-4 py-2 hover:bg-ministry-ivory text-xs sm:text-sm flex items-center gap-2.5 text-ministry-dark hover:text-ministry-forest"
                  >
                    <Calendar className="w-4 h-4 text-ministry-gold" />
                    <div>
                      <div className="font-medium">Daily & Sunday Services</div>
                      <div className="text-[11px] text-gray-500">Regular prayer timetables</div>
                    </div>
                  </button>
                  <button
                    onClick={() => handleNavClick('programmes')}
                    className="w-full text-left px-4 py-2 hover:bg-ministry-ivory text-xs sm:text-sm flex items-center gap-2.5 text-ministry-dark hover:text-ministry-forest"
                  >
                    <Sparkles className="w-4 h-4 text-ministry-gold" />
                    <div>
                      <div className="font-medium">Special Monthly Vigils</div>
                      <div className="text-[11px] text-gray-500">Night of Encounter & Deliverance</div>
                    </div>
                  </button>
                  <button
                    onClick={() => handleNavClick('visit')}
                    className="w-full text-left px-4 py-2 hover:bg-ministry-ivory text-xs sm:text-sm flex items-center gap-2.5 text-ministry-dark hover:text-ministry-forest"
                  >
                    <Building2 className="w-4 h-4 text-ministry-gold" />
                    <div>
                      <div className="font-medium">Personal Retreats</div>
                      <div className="text-[11px] text-gray-500">Private fasting & prayer stays</div>
                    </div>
                  </button>
                </div>
              )}
            </div>

            {/* Events */}
            <button
              onClick={() => handleNavClick('events')}
              className={`px-3 py-1.5 rounded-full transition-all ${
                currentPage === 'events'
                  ? 'bg-ministry-forest text-white font-semibold shadow-sm'
                  : 'hover:text-ministry-forest hover:bg-gray-50'
              }`}
            >
              Events
            </button>

            {/* Facilities (With Dropdown) */}
            <div 
              className="relative"
              onMouseEnter={() => setFacilityDropdownOpen(true)}
              onMouseLeave={() => setFacilityDropdownOpen(false)}
            >
              <button
                onClick={() => handleNavClick('facilities')}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-full transition-all ${
                  currentPage === 'facilities'
                    ? 'bg-ministry-forest text-white font-semibold shadow-sm'
                    : 'hover:text-ministry-forest hover:bg-gray-50'
                }`}
              >
                <span>Facilities</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>

              {facilityDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-card border border-gray-100 py-2 animate-fade-in z-50">
                  <button
                    onClick={() => handleNavClick('facilities')}
                    className="w-full text-left px-4 py-2 hover:bg-ministry-ivory text-xs sm:text-sm flex items-center gap-2.5 text-ministry-dark hover:text-ministry-forest"
                  >
                    <Building2 className="w-4 h-4 text-ministry-gold" />
                    <div>
                      <div className="font-medium">Prayer Auditorium</div>
                      <div className="text-[11px] text-gray-500">Terrazzo altar & worship hall</div>
                    </div>
                  </button>
                  <button
                    onClick={() => handleNavClick('facilities')}
                    className="w-full text-left px-4 py-2 hover:bg-ministry-ivory text-xs sm:text-sm flex items-center gap-2.5 text-ministry-dark hover:text-ministry-forest"
                  >
                    <Building2 className="w-4 h-4 text-ministry-gold" />
                    <div>
                      <div className="font-medium">Accommodation Lodges</div>
                      <div className="text-[11px] text-gray-500">Guest chalets and rooms</div>
                    </div>
                  </button>
                  <button
                    onClick={() => handleNavClick('facilities')}
                    className="w-full text-left px-4 py-2 hover:bg-ministry-ivory text-xs sm:text-sm flex items-center gap-2.5 text-ministry-dark hover:text-ministry-forest"
                  >
                    <Compass className="w-4 h-4 text-ministry-gold" />
                    <div>
                      <div className="font-medium">Prayer Grounds & Gazebo</div>
                      <div className="text-[11px] text-gray-500">Serene tree-shaded areas</div>
                    </div>
                  </button>
                </div>
              )}
            </div>

            {/* Gallery */}
            <button
              onClick={() => handleNavClick('gallery')}
              className={`px-3 py-1.5 rounded-full transition-all ${
                currentPage === 'gallery'
                  ? 'bg-ministry-forest text-white font-semibold shadow-sm'
                  : 'hover:text-ministry-forest hover:bg-gray-50'
              }`}
            >
              Gallery
            </button>

            {/* Testimonies */}
            <button
              onClick={() => handleNavClick('testimonies')}
              className={`px-3 py-1.5 rounded-full transition-all ${
                currentPage === 'testimonies'
                  ? 'bg-ministry-forest text-white font-semibold shadow-sm'
                  : 'hover:text-ministry-forest hover:bg-gray-50'
              }`}
            >
              Testimonies
            </button>

            {/* Contact */}
            <button
              onClick={() => handleNavClick('contact')}
              className={`px-3 py-1.5 rounded-full transition-all ${
                currentPage === 'contact'
                  ? 'bg-ministry-forest text-white font-semibold shadow-sm'
                  : 'hover:text-ministry-forest hover:bg-gray-50'
              }`}
            >
              Contact
            </button>

            {/* Search Icon */}
            <button
              onClick={onOpenSearch}
              aria-label="Search site"
              className="p-2 text-gray-600 hover:text-ministry-forest hover:bg-gray-100 rounded-full transition-colors ml-1"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Plan Your Visit Gold Button */}
            <button
              onClick={() => handleNavClick('visit')}
              className="ml-2 bg-gradient-to-r from-ministry-gold to-ministry-warmGold text-ministry-dark font-semibold px-4 py-2 rounded-full text-xs shadow-sm hover:shadow-md hover:brightness-105 active:scale-95 transition-all flex items-center gap-1.5"
            >
              <span>Plan Your Visit</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </nav>

          {/* Mobile Right Controls: Search + Hamburger */}
          <div className="flex items-center gap-2 xl:hidden">
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

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-t border-gray-100 px-4 pt-3 pb-6 shadow-xl animate-fade-in">
          <div className="flex flex-col space-y-1.5">
            
            <button
              onClick={() => handleNavClick('home')}
              className={`text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                currentPage === 'home'
                  ? 'bg-ministry-forest text-white'
                  : 'text-gray-800 hover:bg-gray-50'
              }`}
            >
              Home
            </button>

            <button
              onClick={() => handleNavClick('about')}
              className={`text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                currentPage === 'about'
                  ? 'bg-ministry-forest text-white'
                  : 'text-gray-800 hover:bg-gray-50'
              }`}
            >
              About Us (Founder, Vision & Missions)
            </button>

            <button
              onClick={() => handleNavClick('programmes')}
              className={`text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                currentPage === 'programmes'
                  ? 'bg-ministry-forest text-white'
                  : 'text-gray-800 hover:bg-gray-50'
              }`}
            >
              Prayer & Retreats (Timetable & Vigils)
            </button>

            <button
              onClick={() => handleNavClick('events')}
              className={`text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                currentPage === 'events'
                  ? 'bg-ministry-forest text-white'
                  : 'text-gray-800 hover:bg-gray-50'
              }`}
            >
              Events & Special Programmes
            </button>

            <button
              onClick={() => handleNavClick('facilities')}
              className={`text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                currentPage === 'facilities'
                  ? 'bg-ministry-forest text-white'
                  : 'text-gray-800 hover:bg-gray-50'
              }`}
            >
              Facilities & Accommodation
            </button>

            <button
              onClick={() => handleNavClick('gallery')}
              className={`text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                currentPage === 'gallery'
                  ? 'bg-ministry-forest text-white'
                  : 'text-gray-800 hover:bg-gray-50'
              }`}
            >
              Photo Gallery
            </button>

            <button
              onClick={() => handleNavClick('testimonies')}
              className={`text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                currentPage === 'testimonies'
                  ? 'bg-ministry-forest text-white'
                  : 'text-gray-800 hover:bg-gray-50'
              }`}
            >
              Testimonies
            </button>

            <button
              onClick={() => handleNavClick('contact')}
              className={`text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                currentPage === 'contact'
                  ? 'bg-ministry-forest text-white'
                  : 'text-gray-800 hover:bg-gray-50'
              }`}
            >
              Contact Us
            </button>

            <div className="pt-3">
              <button
                onClick={() => handleNavClick('visit')}
                className="w-full bg-gradient-to-r from-ministry-gold to-ministry-warmGold text-ministry-dark font-bold py-3 rounded-xl shadow-md text-center flex items-center justify-center gap-2"
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

