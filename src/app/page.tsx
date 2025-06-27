import Navigation from '@/components/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import KNumberSection from '@/components/sections/KNumberSection';
import TestimoniesSection from '@/components/sections/TestimoniesSection';
import SystemSection from '@/components/sections/SystemSection';
import MemorySection from '@/components/sections/MemorySection';
import ActionSection from '@/components/sections/ActionSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <KNumberSection />
        <TestimoniesSection />
        <SystemSection />
        <MemorySection />
        <ActionSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
