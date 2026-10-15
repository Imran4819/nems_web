import { useState } from 'react';
import { useScrollSpy } from './hooks/useScrollSpy';
import { TopBar } from './components/layout/TopBar';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { PrincipalSection } from './components/sections/PrincipalSection';
import { AcademicsSection } from './components/sections/AcademicsSection';
import { FacilitiesSection } from './components/sections/FacilitiesSection';
import { StudentToppersSection } from './components/sections/StudentToppersSection';
import { FacultySection } from './components/sections/FacultySection';
import { AchievementsSection } from './components/sections/AchievementsSection';
import { GallerySection } from './components/sections/GallerySection';
import { TestimonialsSection } from './components/sections/TestimonialsSection';
import { AdmissionsBannerSection } from './components/sections/AdmissionsBannerSection';
import { ContactSection } from './components/sections/ContactSection';
import { AdmissionModal } from './components/common/AdmissionModal';

export function App() {
  const [isAdmissionModalOpen, setIsAdmissionModalOpen] = useState(false);

  const sectionIds = [
    'home',
    'about',
    'principal',
    'academics',
    'facilities',
    'toppers',
    'faculty',
    'achievements',
    'gallery',
    'admissions',
    'contact',
  ];

  const activeSection = useScrollSpy(sectionIds);

  const handleOpenAdmission = () => setIsAdmissionModalOpen(true);
  const handleCloseAdmission = () => setIsAdmissionModalOpen(false);

  return (
    <div className="app-root">
      {/* Top Announcement & Info Bar */}
      <TopBar onOpenAdmissionModal={handleOpenAdmission} />

      {/* Sticky Main Navigation */}
      <Navbar
        activeSection={activeSection}
        onOpenAdmissionModal={handleOpenAdmission}
      />

      {/* Main Content Sections */}
      <main>
        <HeroSection onOpenAdmissionModal={handleOpenAdmission} />
        <AboutSection />
        <PrincipalSection />
        <AcademicsSection onOpenAdmissionModal={handleOpenAdmission} />
        <FacilitiesSection />
        <StudentToppersSection />
        <FacultySection />
        <AchievementsSection />
        <GallerySection />
        <TestimonialsSection />
        <AdmissionsBannerSection onOpenAdmissionModal={handleOpenAdmission} />
        <ContactSection />
      </main>

      {/* Comprehensive Footer */}
      <Footer />

      {/* Interactive Admission Inquiry Modal */}
      <AdmissionModal
        isOpen={isAdmissionModalOpen}
        onClose={handleCloseAdmission}
      />
    </div>
  );
}

export default App;
