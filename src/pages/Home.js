import React from 'react';
import AboutSection from '../components/AboutSection';
import GallerySection from '../components/GallerySection';
import ContactBanner from '../components/ContactBanner';
import HeroSection from '../components/HeroSection';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <GallerySection />
      <ContactBanner />
    </div>
  );
}
