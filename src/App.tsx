/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ScienceOfSight } from './components/ScienceOfSight';
import { ServiceExplorer } from './components/ServiceExplorer';
import { VisionJourney } from './components/VisionJourney';
import { SpecialistsSection } from './components/SpecialistsSection';
import { TechnologyShowcase } from './components/TechnologyShowcase';
import { TrustExperience } from './components/TrustExperience';
import { PatientStories } from './components/PatientStories';
import { VisionHealthTips } from './components/VisionHealthTips';
import { PatientGuideSection } from './components/PatientGuideSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { AppointmentModal } from './components/AppointmentModal';

// Dedicated Sub-Pages
import { AboutPage } from './components/pages/AboutPage';
import { ServicesPage } from './components/pages/ServicesPage';
import { ServiceDetailPage } from './components/pages/ServiceDetailPage';
import { SpecialistsPage } from './components/pages/SpecialistsPage';
import { TechnologyPage } from './components/pages/TechnologyPage';
import { FaqPage } from './components/pages/FaqPage';
import { LegalPage } from './components/pages/LegalPage';
import { ContactPage } from './components/pages/ContactPage';

import { SERVICES_DATA, ServiceItem } from './data/hospitalData';

export default function App() {
  const [activePage, setActivePage] = useState<string>('home');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);
  const [preselectedServiceId, setPreselectedServiceId] = useState<string | undefined>();
  const [preselectedSpecialistName, setPreselectedSpecialistName] = useState<string | undefined>();

  // Scroll to top whenever page navigation occurs
  const handleNavigate = (page: string) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenAppointmentModal = (serviceId?: string, specialistName?: string) => {
    setPreselectedServiceId(serviceId);
    setPreselectedSpecialistName(specialistName);
    setIsAppointmentModalOpen(true);
  };

  const handleSelectService = (service: ServiceItem) => {
    setSelectedService(service);
    setActivePage('service-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleExploreServices = () => {
    handleNavigate('services');
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0A192F] flex flex-col font-sans">
      {/* Top Navigation Bar complying with 3-zone contract */}
      <Navbar
        activePage={activePage}
        onNavigate={handleNavigate}
        onBookAppointment={() => handleOpenAppointmentModal()}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activePage === 'home' && (
          <>
            {/* Split-Layout Hero with Animated 3D Vision Sculpture */}
            <HeroSection
              onNavigate={handleNavigate}
              onBookAppointment={() => handleOpenAppointmentModal()}
              onExploreServices={handleExploreServices}
            />

            {/* Interactive Eye Science Model */}
            <ScienceOfSight
              onBookAppointment={(serviceId) => handleOpenAppointmentModal(serviceId)}
            />

            {/* Asymmetric Editorial Service Grid */}
            <ServiceExplorer
              onSelectService={handleSelectService}
              onBookAppointment={(serviceId) => handleOpenAppointmentModal(serviceId)}
            />

            {/* Signature Scrolling 4-Stage Connected Timeline */}
            <VisionJourney
              onBookAppointment={() => handleOpenAppointmentModal()}
            />

            {/* Meet Our Consultant Specialists */}
            <SpecialistsSection
              onBookAppointment={(serviceId, doctorName) =>
                handleOpenAppointmentModal(serviceId, doctorName)
              }
            />

            {/* Advanced Diagnostic & Surgical Technology */}
            <TechnologyShowcase />

            {/* Visual Trust & Patient Experience Principles */}
            <TrustExperience />

            {/* Patient Stories & Verified Testimonials Carousel */}
            <PatientStories />

            {/* Vision Health Tips & Articles */}
            <VisionHealthTips />

            {/* Patient Visit & Dilating Drops Guide */}
            <PatientGuideSection />

            {/* Flowing Sculptural Iris Final CTA */}
            <FinalCtaSection
              onBookAppointment={() => handleOpenAppointmentModal()}
            />
          </>
        )}

        {/* About the Hospital Page */}
        {activePage === 'about' && (
          <AboutPage
            onBookAppointment={() => handleOpenAppointmentModal()}
            onExploreServices={handleExploreServices}
          />
        )}

        {/* Eye Care Services Directory */}
        {activePage === 'services' && (
          <ServicesPage
            onSelectService={handleSelectService}
            onBookAppointment={(serviceId) => handleOpenAppointmentModal(serviceId)}
          />
        )}

        {/* Individual Service Detail Page */}
        {activePage === 'service-detail' && selectedService && (
          <ServiceDetailPage
            service={selectedService}
            onBack={() => handleNavigate('services')}
            onBookAppointment={(serviceId) => handleOpenAppointmentModal(serviceId)}
          />
        )}

        {/* Doctors and Specialists Directory */}
        {activePage === 'specialists' && (
          <SpecialistsPage
            onBookAppointment={(serviceId, doctorName) =>
              handleOpenAppointmentModal(serviceId, doctorName)
            }
          />
        )}

        {/* Technology and Facilities Showcase Page */}
        {activePage === 'technology' && <TechnologyPage />}

        {/* Science of Sight Dedicated Page */}
        {activePage === 'science-of-sight' && (
          <div className="pt-28 pb-16">
            <ScienceOfSight
              onBookAppointment={(serviceId) => handleOpenAppointmentModal(serviceId)}
            />
          </div>
        )}

        {/* Eye Health Articles / Tips Page */}
        {activePage === 'articles' && (
          <div className="pt-28 pb-16">
            <VisionHealthTips />
          </div>
        )}

        {/* Patient Guide Page */}
        {activePage === 'patient-guide' && (
          <div className="pt-28 pb-16">
            <PatientGuideSection />
          </div>
        )}

        {/* FAQs Page */}
        {activePage === 'faqs' && (
          <FaqPage onBookAppointment={() => handleOpenAppointmentModal()} />
        )}

        {/* Contact, Directions & Facilities Page */}
        {activePage === 'contact' && (
          <ContactPage onBookAppointment={() => handleOpenAppointmentModal()} />
        )}

        {/* Privacy Policy */}
        {activePage === 'privacy' && (
          <LegalPage type="privacy" onBack={() => handleNavigate('home')} />
        )}

        {/* Terms and Conditions */}
        {activePage === 'terms' && (
          <LegalPage type="terms" onBack={() => handleNavigate('home')} />
        )}
      </main>

      {/* Footer with Facility Info, Address, Hours, and Site Links */}
      <Footer
        onNavigate={handleNavigate}
        onBookAppointment={() => handleOpenAppointmentModal()}
      />

      {/* Universal Appointment Modal */}
      <AppointmentModal
        isOpen={isAppointmentModalOpen}
        onClose={() => setIsAppointmentModalOpen(false)}
        preselectedServiceId={preselectedServiceId}
        preselectedSpecialistName={preselectedSpecialistName}
      />
    </div>
  );
}
