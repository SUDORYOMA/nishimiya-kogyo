import Navbar from '@/components/feature/Navbar';
import HeroSection from './components/HeroSection';
import ServiceSection from './components/ServiceSection';
import WorksSection from './components/WorksSection';
import AboutSection from './components/AboutSection';
import RecruitSection from './components/RecruitSection';
import ContactSection from './components/ContactSection';

const HomePage = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <ServiceSection />
    <WorksSection />
    <AboutSection />
    <RecruitSection />
    <ContactSection />
  </div>
);

export default HomePage;
