
import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HomeSection from '@/components/sections/HomeSection';
import AboutSection from '@/components/sections/AboutSection';
import SkillsSection from '@/components/sections/SkillsSection';
import WorkSection from '@/components/sections/WorkSection';
import GallerySection from '@/components/sections/GallerySection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import ContactSection from '@/components/sections/ContactSection';
import ScrollToTop from '@/components/ui/ScrollToTop';
import BackgroundTheme from '@/components/ui/BackgroundTheme';
import { GalleryProvider } from '@/contexts/GalleryContext';

const Index = () => {
  useEffect(() => {
    // Animation on scroll functionality
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      elements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight * 0.85) {
          element.classList.add('visible');
        }
      });
    };
    
    // Call once on initial load
    setTimeout(animateOnScroll, 100);
    
    // Add scroll event listener
    window.addEventListener('scroll', animateOnScroll);
    
    return () => {
      window.removeEventListener('scroll', animateOnScroll);
    };
  }, []);

  return (
    <GalleryProvider>
      <div className="flex flex-col min-h-screen relative overflow-hidden">
        <BackgroundTheme />
        
        <Navbar />
        
        <main className="flex-grow relative z-10">
          <HomeSection />
          <AboutSection />
          <SkillsSection />
          <WorkSection />
          <ExperienceSection />
          <GallerySection />
          <ContactSection />
        </main>
        
        <Footer />
        <ScrollToTop />
      </div>
    </GalleryProvider>
  );
};

export default Index;
