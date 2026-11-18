import React, { useState, useEffect } from 'react';
import { ContactBar } from './components/ContactBar';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { HighlightBar } from './components/HighlightBar';
import { ProgrammeSchedule } from './components/ProgrammeSchedule';
import { AboutSection } from './components/AboutSection';
import { GallerySection } from './components/GallerySection';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';

import { AboutPage } from './pages/AboutPage';
import { ProgrammesPage } from './pages/ProgrammesPage';
import { EventsPage } from './pages/EventsPage';
import { FacilitiesPage } from './pages/FacilitiesPage';
import { TestimoniesPage } from './pages/TestimoniesPage';
import { PlanYourVisitPage } from './pages/PlanYourVisitPage';
import { ContactPage } from './pages/ContactPage';

import { DonationModal } from './components/DonationModal';
import { SearchModal } from './components/SearchModal';
import { PrivacyTermsModal } from './components/PrivacyTermsModal';

export function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [isDonateOpen, setIsDonateOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [privacyTermsType, setPrivacyTermsType] = useState<'privacy' | 'terms' | null>(null);

  // Sync title dynamically
  useEffect(() => {
    const pageTitles: Record<string, string> = {
      home: 'Ori Oke Ase Oluwa (Ibudo Iyanu) | Official Ministry Website',
      about: 'About Us — Prophet Sunday Olawale & Vision | Ori Oke Ase Oluwa',
      programmes: 'Weekly & Monthly Programme Schedule | Ori Oke Ase Oluwa',
      events: 'Ministry Events & Special Vigils | Ori Oke Ase Oluwa',
      facilities: 'Facilities, Lodges & Prayer Grounds | Ori Oke Ase Oluwa',
      gallery: 'Photo Gallery | Ori Oke Ase Oluwa (Ibudo Iyanu)',
      testimonies: 'Testimonies & Divine Acts | Ori Oke Ase Oluwa',
      visit: 'Plan Your Mountain Visit & Retreat | Ori Oke Ase Oluwa',
      contact: 'Contact Us & Prayer Requests | Ori Oke Ase Oluwa',
    };
    document.title = pageTitles[currentPage] || pageTitles.home;
  }, [currentPage]);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-ministry-ivory text-ministry-dark">
      
      {/* 1. Top Green Contact Bar */}
      <ContactBar 
        onOpenDonate={() => setIsDonateOpen(true)}
        onNavigate={handleNavigate}
      />

      {/* 2. Main White Navigation */}
      <Navigation 
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* 3. Main Page Content */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <div className="space-y-6 sm:space-y-8 pb-12">
            {/* Hero Section */}
            <HeroSection onNavigate={handleNavigate} />

            {/* Quick 5-Highlight Bar */}
            <HighlightBar onNavigate={handleNavigate} />

            {/* 2-Column Schedule & About Section matching reference */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
                
                {/* Left 60% on desktop: Weekly & Monthly Schedule */}
                <div className="lg:col-span-7">
                  <ProgrammeSchedule onNavigate={handleNavigate} />
                </div>

                {/* Right 40% on desktop: About Our Mountain */}
                <div className="lg:col-span-5">
                  <AboutSection onNavigate={handleNavigate} />
                </div>

              </div>
            </section>

            {/* Gallery Section Preview (5 items) */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <GallerySection onNavigate={handleNavigate} showAll={false} />
            </section>

            {/* Pre-Footer Call-to-Action Banner */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <CtaBanner onNavigate={handleNavigate} />
            </section>
          </div>
        )}

        {currentPage === 'about' && (
          <AboutPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'programmes' && (
          <ProgrammesPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'events' && (
          <EventsPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'facilities' && (
          <FacilitiesPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'gallery' && (
          <div className="py-10 lg:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <GallerySection showAll={true} />
            </div>
          </div>
        )}

        {currentPage === 'testimonies' && (
          <TestimoniesPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'visit' && (
          <PlanYourVisitPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'contact' && (
          <ContactPage />
        )}
      </main>

      {/* 4. Deep Green Footer */}
      <Footer 
        onNavigate={handleNavigate}
        onOpenPrivacy={() => setPrivacyTermsType('privacy')}
        onOpenTerms={() => setPrivacyTermsType('terms')}
        onOpenDonate={() => setIsDonateOpen(true)}
      />

      {/* Modals */}
      <DonationModal 
        isOpen={isDonateOpen}
        onClose={() => setIsDonateOpen(false)}
      />

      <SearchModal 
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigate={handleNavigate}
      />

      <PrivacyTermsModal 
        type={privacyTermsType}
        onClose={() => setPrivacyTermsType(null)}
      />

    </div>
  );
}

export default App;

