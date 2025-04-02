
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import UseCases from '@/components/UseCases';
import Testimonial from '@/components/Testimonial';
import Footer from '@/components/Footer';
import { usePageTransition, useScrollReveal, useScrollToTop } from '@/utils/animations';

const Index = () => {
  const isPageLoaded = usePageTransition();
  
  // Call useScrollReveal inside the component
  useScrollReveal();
  
  // Scroll to top on page change
  useScrollToTop();
  
  return (
    <div className={`transition-opacity duration-500 ${isPageLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Navbar />
      <Hero />
      <Features />
      <UseCases />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Index;
